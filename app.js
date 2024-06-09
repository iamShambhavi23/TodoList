let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let item=document.createElement("li");

    //get current date and time 
    let now=new Date();
    let dateTime=now.toLocaleDateString();
    
    item.innerHTML=`${inp.value}: &emsp; ${dateTime}`;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("del");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    // console.log(event.target);
    // console.dir(event.target);
    // console.log(event.target.nodeName);
    // console.log("Button is deleted");
    
    if(event.target.nodeName=="BUTTON"){
        let item=event.target.parentElement;
        item.remove();
        console.log("delete");
    }
    else{
        console.log("not delete");
    }
});

// let delBtns=document.querySelectorAll(".del");
// for(it of delBtns){
//     it.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }
