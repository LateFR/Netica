let url_server="http://127.0.0.1:440/"
const url=new URL(window.location.href)
let param=url.searchParams.get("q")
if (param!=null){
    url_server=url_server+param
    document.querySelector("body").innerHTML=fetch(url_server)
}

document.querySelector("#search_button").addEventListener("click",()=>{
    param=document.querySelector("#search")
    url_server=url_server+param
    document.querySelector("body").innerHTML=fetch(url_server)
})
