const form=document.querySelector("form");
const myform=document.getElementById("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
   const height= parseInt(document.getElementById("height").value);
   const weight= parseInt(document.getElementById("weight").value);
   const bmi=(weight/height*height);
   const para=document.querySelector("#p")
   const info=document.querySelector("#info")
   
   

   if(height===0 ||height<0 ||height==""|| isNaN(height)){
    para.innerHTML='please give the valid number !!'

   }
   if (bmi<18.6){
    info.innerHTML=` your bmi weight is ${bmi},under weight`
   }
   if(bmi>18.6 && bmi<24.9)
   {
    info.innerHTML=` your bmi weight is ${bmi},normal weight`
   }
   if(bmi>24.9)
   {
    info.innerHTML=` your bmi weight is ${bmi},over weight`
   }
})

function myFunction(){
    form.reset();
    info.innerHTML=""
    
}
myform.addEventListener("click",()=>{
    para.style.display="none"
    para.innerHTML=""
})
