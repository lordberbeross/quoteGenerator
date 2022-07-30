const yarrak= [
{ quote:"The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
  author:"Oscar Wilde"
},
{ quote:"The White House was designed by Hoban, a noted Irish-American architect, and I have no doubt that he believed by incorporating several features of the Dublin style he would make it more homelike for any President of Irish descent. It was a long wait, but I appreciate his efforts.",
  author:"John F. Kennedy"
},
{ quote:"Noise proves nothing. Often a hen who has merely laid an egg cackles as if she had laid an asteroid.",
  author:"Mark Twain"
},
{ quote:"In architecture the pride of man, his triumph over gravitation, his will to power, assume a visible form. Architecture is a sort of oratory of power by means of forms.",
  author:"Friedrich Nietzsche"
},
{ quote:"Reading after a certain (time) diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
  author:"Albert Einstein"
}
]
const randomNumber=Math.floor(Math.random()*yarrak.length)
const person= document.querySelector(".person");
const quote= document.querySelector(".text-area");
const button= document.getElementById("new-quote");
button.addEventListener("click", sik);
function sik(){
let rand= Math.floor(Math.random()*yarrak.length)
person.textContent=yarrak[rand].author
    quote.textContent=yarrak[rand].quote

}
console.log(person);


person.textContent=yarrak[randomNumber].author
quote.textContent=yarrak[randomNumber].quote