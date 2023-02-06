const events = ['ArrowDown', 'ArrowRight', 'ArrowLeft', 'ArrowUp'];
const cube = document.getElementById('cube');
const arrows = document.getElementById('arrows');

document.body.addEventListener('keydown', handleKeyDown);
document.body.addEventListener('keyup', handleKeyUp);

let timer = null;
let moveArrows = [];

function handleKeyDown(event){
    if(events.includes(event.key) && !moveArrows.includes(event.key)){
        moveArrows.push(event.key);
        renderText();
        render();
    }
}

function handleKeyUp(event){
    if(moveArrows.includes(event.key)){
        moveArrows.splice(moveArrows.indexOf(event.key), 1);
        renderText();
    }
}

function renderText(){
    arrows.innerHTML = '';
    moveArrows.forEach( item => {
        let elem = document.createElement('p');
        elem.innerText = item.replace('Arrow', '');
        arrows.append(elem)
    })
}

function render(){
    clearInterval(timer);
    if(moveArrows.length){
        timer = setInterval(()=>{
            moveArrows.forEach(item=>{
                switch (item) {
                    case 'ArrowDown':
                        cube.style.top = `${cube.offsetTop + 3}px`;
                        break;
                    case 'ArrowUp':
                        cube.style.top = `${cube.offsetTop - 3}px`;
                        break;
                    case 'ArrowRight':
                        cube.style.left = `${cube.offsetLeft + 3}px`;
                        break;
                    case 'ArrowLeft':
                        cube.style.left = `${cube.offsetLeft - 3}px`;
                        break;
                }
            })
        },10)
    }
}
