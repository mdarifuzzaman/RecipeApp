import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { headers } from "next/headers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComponentFactory from "./ComponentFactory";
import { Configs } from "./Config"
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A recipe app",
  description: "Recipe app",
};

const fetchData = async () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const url = Configs.BaseCMSUrl + "/layoutservice/" + Configs.WebsiteId + "/page/en-US/?apiKey=" + Configs.ApiKey;
  const response =  await fetch(url + "&route=" + (pathname === "/" ? "/home": pathname), { headers: {"content-type": "application/json"}, next: { revalidate: 100 }});  
  const json = await response.json();  
  return json;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  

  const response = await fetchData();
  console.log("response", response);
  let sharedComponents: any;
  let components: any;
  let blocks: Array<any> = new Array<any>();
  let error = "";

  if(response){
    sharedComponents = response?.sharedPage?.components;
    components = response?.page?.components;
    if(response?.error){
      error = response.error;
    }

    if(components){
      for (const [key, value] of Object.entries<any>(components)) {
        const componentName = key;
        const name = value?.name;
        const isPublished = value?.isPublished;
        blocks.push({component: componentName, name, value, isPublished});
      }
    }
  }

  return (
    <html lang="en">
      <body className="h-screen">          
        <Navbar components={sharedComponents?.Navbar}></Navbar>   
        
        {
          blocks && blocks.map((block: any) => ComponentFactory(block))
        }

        {error !== null || error !== undefined ? error: null}
        {children }        
        <div className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-4">
                <p className="text-left">Powered by <a href="https://cmslight.cloud">CMSLight</a></p>
              </div>
      </body>
    </html>
  );
}