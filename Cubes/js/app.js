const container = document.getElementById('container');
const itemCount = 20;
let selectedItems = [];

function renderContent(count){
    for(let i = 0; i < count; i++){
        let elem = document.createElement('div');
        elem.id = i;
        elem.className = 'item-style';
        elem.addEventListener('click', handleClick)
        container.append(elem);
    }
}

function handleClick(event){
    const id = +event.target.id;

    if(selectedItems.length < 2){
        selectedItems.push(id);
    }else {
        selectedItems = [id]
    }
    renderItems()
}

function renderItems(){
    let start = selectedItems[0] > selectedItems[1] ? selectedItems[1] : selectedItems[0];
    let end = selectedItems[0] < selectedItems[1] ? selectedItems[1] : selectedItems[0];
    for(let i = 0; i < container.children.length; i++){
        if(i >= start && i <= end){
            container.children[i].style.backgroundColor = 'red';
        }else {
            container.children[i].style.backgroundColor = 'green';
        }
    }
    if(selectedItems.length === 2){
        selectedItems = []
    }
}

renderContent(itemCount)
