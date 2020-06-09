let plates = document.querySelector('#plates');
let add = document.querySelector('.add-items');
let orders = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done:false
    };
    orders.push(item);
    populateItem(orders,plates);
    this.reset();
    localStorage.setItem('items',JSON.stringify(orders));
}
function populateItem(plates=[],list){
    list.innerHTML = plates.map((plate,i )=> {
        return `
        <li>
        <input type="checkbox" data-index=${i}  id="item${i}" ${plate.done ? 'checked' : ""}/>
        <label for="item${i}">${plate.text}</label>
        </li>
        `;
        
    }).join('');
}

function Done(e){
    if(!e.target.matches('input'))return ;
      const el = e.target;
      const index = el.dataset.index;
      orders[index].done = !orders[index].done;
      localStorage.setItem('items',JSON.stringify(orders));
      populateItem(items,plates);
}

add.addEventListener('submit',addItem);
plates.addEventListener('click',Done);

populateItem(orders,plates);

