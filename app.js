let addBtn=document.querySelector("#addTask")
let inp=document.querySelector("input")
let taskList=document.querySelector("ol")

addBtn.addEventListener("click",()=>{
    let task=inp.value;
    let newLi=document.createElement("li")
    newLi.textContent=task
    let deleteBtn=document.createElement("button")
    deleteBtn.textContent="rem"
    deleteBtn.addEventListener("click",(e)=>{
        e.target.parentElement.remove()
    })
    newLi.appendChild(deleteBtn)
    taskList.appendChild(newLi)
    inp.value=""
})

// taking value from inp 
// creae nerw li tag 
// value as textContent of li tag
// creating new btn tag and adding textcontent to it 
// add li as child of ol tag
//removing text from inp tag

//<li>task <button>Rem</button></li>