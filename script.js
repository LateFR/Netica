let url_server="http://127.0.0.1:440/"
const url=new URL(window.location.href)


function setHTML(data){
    const div=document.querySelector("#main")
    div.innerHTML=data
}
async function change_html() {
    let param=url.searchParams.get("q")

    if (param==null || param==""){
        param=""
        fetch(url_server,{
            method:"POST"
        })
        .then(response=>{
            return response.text()
        })
        .then(data=>{
            setHTML(data)
        })
    }else{
        fetch(url_server,{
            method:"POST",
            headers:{"q":param}
        })
        .then(response=>{
            return response.text()
        })
        .then(data=>{
            setHTML(data)
        })
    
    

    }
}

change_html()

document.querySelector("#search_button").addEventListener("click",async (event)=>{
    event.preventDefault()
    param=document.querySelector("#search").value
    if (param==""){
        alert("Search content is null")
        return
    }
    url_server=url_server+"/?q="+param
    history.pushState(null,"","http://127.0.0.1:5500/index.html?q="+param)
    let response=await fetch(url_server,{
        method:"POST",
        headers:{"q":param}
    })
    response=await response.text()
    setHTML(response)
})
