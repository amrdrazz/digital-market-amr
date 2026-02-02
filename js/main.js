let categoryNavList = document.querySelector('.category-nav-list');
let categoryBtn = document.querySelector('.category-btn')

categoryBtn.addEventListener('click',()=>{
    categoryNavList.classList.toggle('active')
})

let cart = document.querySelector('.cart');

function openCart(){
    cart.classList.toggle('active')
}

let nav_links = document.querySelector('.nav-links')

function openMenu(){
    nav_links.classList.toggle('active')
}



fetch('products.json')
.then(response => response.json())
.then(data=>{
    let addToCartButtons = document.querySelectorAll('.btn-add-cart');

    addToCartButtons.forEach(button =>{
        button.addEventListener('click',(event)=>{
            let productId = event.currentTarget.getAttribute('data-id');
            let selectedProduct = data.find(product => product.id == productId);

            addToCart(selectedProduct)

            let clickedBtns = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);
            clickedBtns.forEach(btn =>{
                btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> item in cart';
                btn.classList.add('active');
            })

            
            
        })
    })
})


function addToCart(product){
    let cartItems = JSON.parse(localStorage.getItem('cart')) || []

    cartItems.push({... product , quantity:1})
    localStorage.setItem('cart',JSON.stringify(cartItems))

    updateCart()
}




function updateCart(){
    let cartItemsContainer = document.getElementById('cart_items');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let checkout_items = document.querySelector('#checkout_items');

    if(checkout_items){
        checkout_items.innerHTML=""
    }

    
    
    var total_price = 0;
    var total_count = 0;


    cartItemsContainer.innerHTML = ""
    cartItems.forEach((item , index)=> {

        let total_item_price = item.price * item.quantity;
        
        
        total_price += total_item_price;
        total_count += item.quantity;

        cartItemsContainer.innerHTML += `
        
            <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_item_price}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity" data-index='${index}'>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-index='${index}'>+</button>
                    </div>
                </div>
                <button class="delete_item" data-index='${index}'><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        if(checkout_items){
            checkout_items.innerHTML += `
            
                <div class="item_cart">
                    
                    <div class="img_name">
                        <img src="${item.img}" alt="">
            
                        <div class="content">
                            <h4>${item.name}</h4>
                            <p class="price_cart">$${total_item_price}</p>
            
                            <div class="quantity_control">
                                <button class="decrease_quantity" data-index='${index}'>-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="increase_quantity" data-index='${index}'>+</button>
                            </div>
                        </div>
                    </div>

                    <button class="delete_item" data-index='${index}'><i class="fa-solid fa-trash-can"></i></button>
                </div>
                `
        }
    });

    let price_cart_total = document.querySelector('.price_cart_total');
    let count_item_cart = document.querySelector('.count_item_cart');
    let count_item_header = document.querySelector('.count-item-header');


    price_cart_total.innerHTML = `$${total_price}`
    count_item_cart.innerHTML = total_count
    count_item_header.innerHTML = total_count

    if(checkout_items){
        let subtotal_checkout = document.querySelector('.subtotal_checkout');
        let total_checkout = document.querySelector('.total_checkout');

        subtotal_checkout.innerHTML = `$${total_price}`
        total_checkout.innerHTML = `$${total_price+20}`
    }


    let increase_quantity = document.querySelectorAll('.increase_quantity');
    let decrease_quantity = document.querySelectorAll('.decrease_quantity');

    increase_quantity.forEach(button =>{
        button.addEventListener('click',(event)=>{
            let itemIndex = event.target.getAttribute('data-index')
            increaseQuantity(itemIndex)

        })
    })
    decrease_quantity.forEach(button =>{
        button.addEventListener('click',(event)=>{
            let itemIndex = event.target.getAttribute('data-index')
            decreaseQuantity(itemIndex)

        })
    })

    function increaseQuantity(index){
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        ++cartItems[index].quantity
        localStorage.setItem('cart',JSON.stringify(cartItems))
        updateCart()
    }

    function decreaseQuantity(index){
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        if(cartItems[index].quantity > 1){
            --cartItems[index].quantity
        }
        localStorage.setItem('cart',JSON.stringify(cartItems))
        updateCart()
    }


    
    let deleteBtns = document.querySelectorAll('.delete_item');
    deleteBtns.forEach(button => {
        button.addEventListener('click', (event)=>{


            let itemIndex = event.target.closest('button').getAttribute('data-index')

            removeFromCart(itemIndex)

        })
    })

}

function removeFromCart(index){
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let removeProduct = cartItems.splice(index,1)[0];
    localStorage.setItem('cart',JSON.stringify(cartItems));
    updateCart();
    updateBtnsState(removeProduct.id);

}

function updateBtnsState(id){
    let removedItemsBtns = document.querySelectorAll(`.btn-add-cart[data-id='${id}'`)

    removedItemsBtns.forEach(item =>{
        item.classList.remove('active');
        item.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> add to cart'
    })
}

updateCart()