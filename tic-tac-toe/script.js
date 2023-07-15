const X_class='x';
const circle_class='circle'
const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
    [2,4,6]
        
    ]
    const button=document.getElementById("button")
const winner=document.getElementById("winningmessage")
const winningmessagetextelement=document.querySelector('[data-winning-text]')
const cellElements = document.querySelectorAll('[data-cell]');
const board=document.getElementById("board")
let circleturn

startgame()

button.addEventListener('click',startgame)


function startgame(){
    circleturn=false
    cellElements.forEach(cell => {
        cell.classList.remove(X_class)
        cell.classList.remove(circle_class)
        cell.removeEventListener('click',handleclick)
        cell.addEventListener('click', handleclick, { once: true })
    }
    )
    showmarks()
        winner.classList.remove('show')

}

function handleclick(e){
    const cell=e.target
    const currentClass= circleturn ? circle_class : X_class;
   placemark(cell,currentClass)
 
   if (checkwin(currentClass )){
   endgame(false)
   }
   else if(isDraw()){
    endgame(true)
   }
   else{
    swap()
    showmarks()
   }
    

   }




 

   //place marks
   //kon jeeta wo check karna
   //draw
   //switch turns

function endgame(draw){
    if (draw){
        winningmessagetextelement.innerText="Draw"
    }
    else{
        winningmessagetextelement.innerText=`${circleturn ? "O's":"X's"} wins!`
    }
winner.classList.add('show')
}


function isDraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(X_class)||
    cell.classList.contains(circle_class)
})
}


function placemark(cell,currentClass){
   cell.classList.add(currentClass)
}
function swap(){
    circleturn=!circleturn
}
function showmarks(){
    board.classList.remove(X_class)
    board.classList.remove(circle_class)
    if(circleturn){
        board.classList.add(circle_class)
    }
        else{
            board.classList.add(X_class)
        }
    }
  function checkwin(currentClass){
          return  winning.some(combination=>{
            return combination.every(index=>{
                return cellElements[index].classList.contains(currentClass)
            })
          })
  }



 