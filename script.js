let leads = []
const inputhtml = document.getElementById("input")
const savebtn = document.getElementById("save")
const tabbtn = document.getElementById("tab")
const delbtn=document.getElementById("delete")
const ul = document.getElementById("data")


let storage= JSON.parse(localStorage.getItem('myLeads'))
console.log(storage)

if(storage==leads){
    render(leads)
}

function render(myleads) {
    let listitems = ""
    
    for (let i = 0; i < myleads.length; i++) {
        listitems += `
        <li> 
        <a href='${myleads[i]}' target='_blank'>
        ${myleads[i]}
        </a> 
        </li>
        `
    }
    ul.innerHTML = listitems
}


tabbtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true,}, function(tabs){
        leads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(leads))
        render(myLeads)
    })
    
})

delbtn.addEventListener("click", function() {
    localStorage.clear()
    leads=[]
    render(leads)
})

savebtn.addEventListener("click", function() {
    leads.push(inputhtml.value)
    inputhtml.value = ""
    localStorage.setItem('myLeads', JSON.stringify(leads))
    render(leads)
    console.log(localStorage.getItem('myLeads'))
})




// let cont=document.getElementById("container")
// cont.innerHTML+="<button onclick='thanks()'>Buy Now</button>"
// function thanks(){
//     cont.innerHTML+="<p>Thank you for buying</p>"
// }

