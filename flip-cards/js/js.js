let cardCountElement = document.getElementById('card_number');
let cardContainer = document.getElementById('cards_container');
let cardArr = [];
let currentOpenedCards = [];
let successOpenedCards = [];

let startGame = function (){
    reset();
    let count = Number(cardCountElement.value)*2;
    if(count <= 1){
        return alert('Pleas enter number greater than 1');
    }
    cardArr = Array(count).fill(null);
    cardArr = generateNumbers(cardArr);
    renderCards(cardArr);
}

let reset = function (){
    cardArr = [];
    currentOpenedCards = [];
    successOpenedCards = [];
    cardContainer.innerHTML = '';
}

let generateNumbers = function (arr){
    for (let i = 1; i <= arr.length/2; i++){
        for(let j = 0; j < 2; j++){
            let randomIndex;
            do {
                randomIndex = Math.round(Math.random()*(arr.length - 1))
            }while (arr[randomIndex] !== null)
            arr[randomIndex] = i;
        }
    }
    return arr;
}

let renderCards = function (arr){
    arr.forEach((item,index)=>{
        let elem = document.createElement('div');
        elem.id = `${index}`;
        elem.classList.add("card-style");
        elem.innerHTML = `<p class="text-style">${item}</p>`;
        elem.addEventListener('click',handleClickCard)
        cardContainer.append(elem);
    })
}

let handleClickCard = function (event){
    if(successOpenedCards.includes(event.target.id) || currentOpenedCards.includes(event.target.id)){
        return
    }
    if(currentOpenedCards.length < 2){
        currentOpenedCards.push(`${event.target.id}`);
        openCard(event.target);
        if(currentOpenedCards.length === 2){
            checkCards();
        }
    }
}

let openCard = function (elem){
    elem.style.transform = 'rotateY(180deg)';
    elem.children[0].style.transform = 'rotateY(180deg)';
    elem.style.transition = '0.5s';
    elem.children[0].style.transition = '0.5s';
    setTimeout(()=>{
        elem.children[0].style.display = 'block';
    }, 100)
}

let closeCard = function (elem){
    elem.style.transform = 'rotateY(0deg)';
    elem.children[0].style.display = 'none';
}

let checkCards = function (){
    let elem1  = document.getElementById(currentOpenedCards[0]);
    let elem2  = document.getElementById(currentOpenedCards[1]);
    if(elem1.children[0].innerHTML === elem2.children[0].innerHTML){
        successOpenedCards = [...successOpenedCards, ...currentOpenedCards];
        setTimeout(()=>{
            if(successOpenedCards.length === cardArr.length){
                alert('You win')
            }
        }, 500)
    }else {
        setTimeout(()=>{
            closeCard(elem1);
            closeCard(elem2);
        }, 500)
    }
    currentOpenedCards = [];
}
