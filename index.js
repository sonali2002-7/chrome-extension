myLeads=[]
const inputEl= document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads") )
const tabBtn=document.getElementById("tab-btn")
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}
//const tabs=[
   //{url: "https://www.instagram.com/glistensonali/"}
//]
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow:true},function(tabs){
    //let activeTab=tabs[0]
    //let activeTabId=activeTab.id
    //})
    myLeads.push(tabs[0].url)
    //console.log(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    })
})
deleteBtn.addEventListener("dblclick",function(){
    console.log("double clicked")
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})
function render(leads){
let listItems=""
for(let i=0;i < myLeads.length;i++) {
    //listItems +=  "<li><a target='_blank' href='#'>"+ myLeads[i] + "</a> </li>"
    //instead of this ugly text we can replace it with template variables and sinplify it 
    listItems +=`
    <li>
        <a target='_blank' href='${myLeads[i]}'>
           ${myLeads[i]}
        </a>
    </li>
    `
} 
ulEl.innerHTML=listItems
}
