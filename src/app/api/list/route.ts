"use server"

export async function GET(req: Request) {
    var list = req.headers.get("list");
    var url = process.env.CMSLishtHost + "/layoutservice/ListQueryPreview/" + list + "/1/100"; 
    
    console.log("Request url", url);    
    return fetch(url, {
        next: {revalidate: 100},
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': process.env.ApiKey + "",
            'SiteId': process.env.WebsiteId + "",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    }).then(res => res.json()).then(data => {
        return Response.json({ data })
    }).catch((error:any) => {
        throw error;
    })
    
    
}