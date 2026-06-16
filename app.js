let gameseq =[];
let userseq =[];

let btns =["red","green","yellow","blue"];

let started = false;
let level = 0;

let h2 =document.querySelector("h2");
let on=document.querySelector(".op");
on.addEventListener("click",function(){
  if(started==false){
    console.log("game started");
    started=true;
    levelup();
  }
  
});
function levelup(){
  userseq=[];
  level++;
  h2.innerText=`Level ${level}`;
  let randIdx = Math.floor(Math.random()*4);
  let randc = btns[randIdx];
  let randBtn = document.querySelector(`.${randc}`);
  gameseq.push(randc)
  gameFlash(randBtn);
};
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
};
function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
};
function checkAns(){
  let idx = userseq.length-1;
  if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
      setTimeout(levelup, 1000);
    }
  }else{
    h2.innerHTML=`Game over<br> your score was<b> ${level-1}</b> `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
  }
}
function buttonPress(){
  let btn = this;
  userFlash(btn);
  let usercolour =btn.getAttribute("id");
  userseq.push(usercolour);
  checkAns()
}
let allBtn =document.querySelectorAll(".btn");
for(btn of allBtn){
  btn.addEventListener("click",buttonPress);
};
function reset(){
  started = false;
  level = 0;
  gameseq = [];
  userseq = [];
}
