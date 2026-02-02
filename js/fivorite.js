let fivorate = document.querySelector('.fivorite');

function openFivorite(){
    fivorate.classList.toggle('active');
};




fetch('products.json')
.then(response => response.json())
.then(data=>{
    let addToFivoriteBtns = document.querySelectorAll('.icon-product')

    addToFivoriteBtns.forEach(button =>{
        button.addEventListener('click',(event)=>{
            let productId = event.currentTarget.getAttribute('data-id');
            let selectedProduct = data.find(product => product.id == productId);

            addToFivorite(selectedProduct);     
            
            let clickedBtn = document.querySelector(`.icon-product[data-id="${productId}"`);
            clickedBtn.classList.add('active');
        });
    });
});


function addToFivorite(product){
    let fivoriteItems = JSON.parse(localStorage.getItem('fivorite')) || [];

    fivoriteItems.push({...product});
    localStorage.setItem('fivorite',JSON.stringify(fivoriteItems));

    updateFivorite()
};

function updateFivorite(){
    let fivoriteItems = JSON.parse(localStorage.getItem('fivorite')) || [];
    let fivoriteItemsContainer = document.getElementById('fivorite_items');
    
    let count_fivorite = document.querySelector('.count-fivorite');
    let count_item_fivorite = document.querySelector('.count_item_fivorite');

    count_fivorite.innerHTML = `${fivoriteItems.length}`;
    count_item_fivorite.innerHTML = `${fivoriteItems.length}`;

    

    fivoriteItemsContainer.innerHTML='';
    fivoriteItems.forEach((item,index) =>{
        fivoriteItemsContainer.innerHTML += `
        
            <div class="item_fivorite">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_fivorite">$${item.price}</p>
                </div>
                <button class="delete_item_f" data-index='${index}'><i class="fa-solid fa-trash-can"></i></button>
            </div>

        `;
    });



    let deleteBtns = document.querySelectorAll('.delete_item_f');
    deleteBtns.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            let index = e.target.closest('button').getAttribute('data-index');
            removeItem(index);
        });
    });
}


function removeItem(index){
    let fivoriteItems = JSON.parse(localStorage.getItem('fivorite'));
    fivoriteItems.splice(index,1)[0];
    localStorage.setItem('fivorite',JSON.stringify(fivoriteItems));
    updateFivorite()
}

updateFivorite()