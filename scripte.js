let box =  document.querySelectorAll(".btn");
let rsbt = document.querySelector("#btnr");
let newbtn = document.querySelector("#btnn");
let msgcontainer = document.querySelector(".msg-container");
// let hide = document.querySelector(".hide");
let msg = document.querySelector("#msg");


let turn = true;
const disable = () =>{
     for(v of box){
                v.disabled= true;
                
            };
        }

const enable = () =>{
     for(v of box){
                v.disabled= false;
                v.innerText="";
                
            };
            msgcontainer.classList.add("msg-container")
        }
 
let winptn = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,8,4],
            [6,4,2],

];
const reset = ()=>{
    turn= true;
    enable();
    
    
}

box.forEach((val) =>{
            val.addEventListener("click",() => {
             if (turn === true){
                val.innerText="O";
                turn=false;

             }
             else{
                val.innerText="X";
                turn = true
             }

            val.disabled= true;

            checkwinner();
});
});

const showWinner =(winner)=>{
            msg.innerText=`CONGRATULATION WINNER IS ${winner}`;
            msgcontainer.classList.remove("msg-container");
}

const checkwinner = ()  =>{
for (let i  of winptn){
    
    let vlu0= box[i[0]].innerText;
    let vlu1=box[i[1]].innerText;
    let vlu2 = box[i[2]].innerText;
    if(vlu0!=""&&vlu1!=""&&vlu2!=""){
        if(vlu0===vlu1&&vlu1===vlu2){
          
            showWinner(vlu0);
                 disable();
        }
    }
}
};


btnr.addEventListener("click",reset);
btnn.addEventListener("click",reset);







      
      
      
//      















































