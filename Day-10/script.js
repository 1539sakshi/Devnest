let names=["Sakshi", "Vanshika", "Sandeep", "Prashant", "Himuu", "Batla", "Kavya", "Srishti"];

names=[...names, ...names];
let steps=30;
let right=0;
let xyz;

for(let i=1; i<=16; i++){
    let card=document.createElement("div");
    card.classList.add("flip-card");
    let inner=document.createElement("div");
    inner.classList.add("flip-inner");
    let front=document.createElement("div");
    front.classList.add("front");
    let back=document.createElement("div");

    let any=Math.floor(Math.random()*(16-i));

    back.innerHTML="<h2>"+names[any]+"</h2>";
    names.splice(any, 1);

    back.classList.add("back");
    
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
}

let clicked;
let cards=document.getElementsByClassName("flip-card");

for(let card of cards){
    card.addEventListener("click", (e)=>{
        steps--;
        if(steps == 0){
          alert('Game Over \n Your score is : ' + right );
          window.location.reload();
        }
        document.querySelector("span").innerHTML=steps;
        
        if(clicked){
            card.firstChild.classList.add("flipped");
            
            if(card == xyz){
              alert("you have clicked the same card twice");
            }
            else{
            setTimeout(() => {
                if(card.firstChild.lastChild.innerHTML !== clicked.firstChild.lastChild.innerHTML){
                    card.firstChild.classList.remove("flipped");
                    clicked.firstChild.classList.remove("flipped");
                }else{
                    right++;
                    if(right === 8){    
                      alert(" You won")
                      window.location.reload();
                   }
                    card.style.visibility="hidden";
                    clicked.style.visibility="hidden";
                }
                clicked=undefined;
            }, 500);
           }
           
        }else{
            clicked=card;
            xyz= card;
            card.firstChild.classList.add("flipped");
        }
       
        
    })
   
}
