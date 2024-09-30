// page.js
"use client";

export default function Home({children}: any) {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               {children}                
            </div>
        </>
    );
}
