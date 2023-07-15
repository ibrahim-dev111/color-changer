const buttons=document.querySelectorAll("button")
const body=document.querySelector("body")
const para=document.getElementById("h2")
buttons.forEach(function(button){
    button.addEventListener("click",function (e){
        if(e.target.id==="pink"){
            body.style.transition="0.5s ease-in"
            body.style.backgroundColor=e.target.id;
            para.innerHTML=`your color is now ${e.target.id}😍<br>
            choose other color to change the theme`
            
        }
        if(e.target.id==="green"){
            body.style.backgroundColor=e.target.id;
            para.innerHTML=`your color is now ${e.target.id}😍<br>
            choose other color to change the theme`
        }
        if(e.target.id==="grey"){
            body.style.backgroundColor=e.target.id;
            para.innerHTML=`your color is now ${e.target.id}😍<br>
            choose other color to change the theme`
        }
        if(e.target.id==="orange"){
            body.style.backgroundColor=e.target.id;
            para.innerHTML=`your color is now ${e.target.id}😍<br>
            choose other color to change the theme`
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id;
            para.innerHTML=`your color is now ${e.target.id}😍<br>
            choose other color to change the theme`
        }
    })
})
console.log("hello world");