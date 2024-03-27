const starsE1 = document.querySelectorAll(".fa-star");
const emojisE1 = document.querySelectorAll(".fa-regular");
const colorsArray= ["red","yellow","pink","lightgreen","green"];

starsE1.forEach((starE1,index) => {
    starE1.addEventListener("click",() => {update(index);  })});

function update(index) {
    starsE1.forEach((starE1,idx) => {
        if(index >= idx) {
            starE1.classList.add("active"); } 
        else {
            starE1.classList.remove("active");}
    emojisE1.forEach((emojiE1) => {
        emojiE1.style.transform = `translateX(-${index * 50}px)`;
        emojiE1.style.color = colorsArray[index];
        });   
        } )};
        





