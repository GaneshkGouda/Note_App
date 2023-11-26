const create = document.querySelector(".button");
const notess = document.querySelector(".notes");
let note  = document.querySelectorAll(".input-box");
 const main = document.querySelector(".main")

 function show(){
notess.innerHTML = localStorage.getItem("notes");
 }
 show()
//  localStorage.clear()
 
function updateStroge() {
    localStorage.setItem("notes",notess.innerHTML)
    
}
 



create.addEventListener("click",()=>{
      let inpurBox = document.createElement("p")
      let img = document.createElement("img")
      inpurBox.className="input-box"
      inpurBox.setAttribute("contenteditable","true")
      img.src="checked.png"
      notess.appendChild(inpurBox).appendChild(img)   
})
 main.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStroge();
    }
     else if(e.target.tagName==="P"){
        notes =document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup =function(){
                updateStroge();
            }
            
        });

     }
 })
  