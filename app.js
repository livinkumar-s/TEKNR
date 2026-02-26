// let h1=document.getElementById("head")
// let p=document.getElementsByClassName("para")
// let paras=document.getElementsByTagName("p")
// console.log(paras);

// let p1=document.querySelector(".para")
// let p1=document.querySelectorAll(".para")
// console.log(p1);

// let h1=document.querySelector("#head")
// h1.innerText="Hello world"
// console.log(h1.textContent);
// h1.textContent="Hi guys....!"


// let box=document.querySelector(".box")

// console.log(box.textContent);
// console.log(box.innerHTML);
// box.innerHTML="HI <h2>Dummy text</h2>"

// let h1=document.getElementById("head")
// console.log(h1.getAttribute("id"));
// h1.setAttribute("id","head2")
// h1.removeAttribute("id")

// let p = document.querySelector(".para");
// p.style.color = "red";
// p.style.fontSize="50px";

// let paras=document.querySelectorAll(".para")
// console.log(paras);
// paras[1].classList.add("styledPara")
// paras[1].classList.remove("styledPara")
// paras[1].classList.toggle("styledPara")
// console.log(paras[1].classList.contains("styledPara"));


// Creating Elements 

// let newElement= document.createElement("div")
// newElement.textContent="New Element"
// newElement.classList.add("new")
// console.log(newElement);

// let body=document.querySelector("body")
// body.appendChild(newElement)

// let box=document.querySelector(".box")
// let para=document.querySelector(".box>p")
// box.remove()
// box.removeChild(para)

// DOM Traversal 

// let ul=document.querySelector(".itemlist")
// console.log(ul.parentElement);
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// let para=document.querySelector(".para")
// console.log(para.previousElementSibling);
// console.log(para.nextElementSibling);


// console.log(document.querySelector("body").lastElementChild.previousElementSibling.lastElementChild.previousElementSibling);


// function printHello(e){
//     e.target.textContent="Dont Click me again...!"
// }

// let btn=document.querySelector("button")

// btn.addEventListener("click",(e)=>{
//     e.target.textContent="Dont Click me......!"
// })

// let form=document.querySelector("form")
// form.addEventListener("submit",(e)=>{
    //     e.preventDefault()
// })

// document.querySelector("#head").addEventListener("mouseover",()=>{
    //     console.log("Hello");
    // })
    
    // document.querySelector("#head").addEventListener("mouseleave",()=>{
//     console.log("Hello");
// })
// let form=document.querySelector("form")

// form.firstElementChild.addEventListener("input",(e)=>{
//     console.log(e.target.value);
    
// })