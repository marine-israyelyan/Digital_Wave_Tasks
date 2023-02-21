let toDoInput = document.getElementById('to_do_input');
let listContainer = document.getElementById('list_container');
let resolvedListContainer = document.getElementById('resolved_list_container');
let id = 1;

let list = [];
let resolved = [];

function addNewItem(){
    let value = toDoInput.value

    if(!value)return;

    id++
    const item = {
        value: value,
        id: `${id}`
    }
    toDoInput.value = '';
    list.push(item);
    renderToDo()
}

function removeItem(event){
    list = list.filter(item => item.id !== event.target.parentNode.id)
    event.target.parentNode.remove();
}

function resolveToDo(event){
    list = list.filter((item) => {
        if(item.id === event.target.parentNode.id){
            resolved.push(item)
        }
        return item.id !== event.target.parentNode.id
    })
    event.target.parentNode.remove();
    renderResolve();
}

function renderResolve(){
    resolvedListContainer.innerHTML = '';
    resolved.forEach((item)=>{
        let itemContainer = document.createElement('div');
        let elem = document.createElement('p');

        itemContainer.id = item.id;
        elem.innerText = item.value;

        itemContainer.append(elem);

        resolvedListContainer.prepend(itemContainer);
    })
}

function renderToDo(){
    listContainer.innerHTML = '';
    list.forEach((item)=>{
        let itemContainer = document.createElement('div');
        let buttonDelete = document.createElement('button');
        let buttonDone = document.createElement('button');
        let elem = document.createElement('p');

        itemContainer.id = item.id;
        elem.innerText = item.value;
        buttonDelete.innerText = 'Ջնջել';
        buttonDone.innerText = 'Կատարված';

        buttonDelete.addEventListener('click', removeItem)
        buttonDone.addEventListener('click', resolveToDo)

        itemContainer.append(elem);
        itemContainer.append(buttonDelete);
        itemContainer.append(buttonDone);

        listContainer.prepend(itemContainer);
    })
}
