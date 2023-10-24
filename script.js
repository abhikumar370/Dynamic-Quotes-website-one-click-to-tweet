const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const newQ=document.getElementById("newQ");
const tweetMe=document.getElementById("tweetMe");

let realData="";
let quotesData="";

const tweetNow=()=>{
   
    let tweetPost= `https://twitter.com/intent/tweet?text= ${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
};

const getNewQuotes=()=>{
let rnum=Math.floor(Math.random()* 20);
quotesData=realData[rnum];
// console.log(realData[rnum].author);

quotes.innerText=`${quotesData.text}`;

quotesData.author==null ? author(author.innerHTML= "Unknown")
:(author.innerHTML=`${quotesData.author}`);
author.innerText=`${quotesData.author}`;
}
const getQuotes=async()=>{
    const api="https://type.fit/api/quotes";
    try{
let data=await fetch(api);
realData=await data.json();

getNewQuotes();

// console.log(realData[5],text);
// console.log(realData[5],author);
      }  catch(error){}
};
newQ.addEventListener('click',getNewQuotes);
tweetMe.addEventListener('click',tweetNow());





getQuotes();