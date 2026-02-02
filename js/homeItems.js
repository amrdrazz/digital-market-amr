fetch('products.json')
.then(response => response.json())
.then(data =>{
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let fivoriteItems = JSON.parse(localStorage.getItem('fivorite')) || [];
    let swiper_items_sale = document.getElementById('swiper_items_sale');
    let swiper_electronics = document.getElementById('swiper_electronics');
    let swiper_appliances = document.getElementById('swiper_appliances');
    let swiper_mobiles = document.getElementById('swiper_mobiles');



    data.forEach(product => {
        if(product.old_price){

            let isInCart = cartItems.some(cartItem => cartItem.id === product.id);
            let isInFivorite = fivoriteItems.some(fivoriteItem => fivoriteItem.id === product.id);


            let persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);

            swiper_items_sale.innerHTML += `
           
                <div class="swiper-slide product">
                    <span class="sale-persent">%${persent_disc}</span>
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="#">${product.name}</a>
                    </p>
                    <p class="price"><span>$${product.price}</span></p>
                    <p class="old-price">$${product.old_price}</p>
                    <div class="icons">
                        <span class="btn-add-cart ${isInCart?'active':''}" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i> add to cart
                        </span>
                        <span class="icon-product ${isInFivorite?'active':''}" data-id="${product.id}"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
           
           
           ` 
        }
    });


    data.forEach(product =>{
        if(product.catetory == 'electronics'){

            let isInCart = cartItems.some(cartItem => cartItem.id === product.id);
            let isInFivorite = fivoriteItems.some(fivoriteItem => fivoriteItem.id === product.id);


            let old_price_paragraph = product.old_price?`<p class="old-price">$${product.old_price}</p>`:"";
            let persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            let persent_disc_div = product.old_price?`<span class="sale-persent">%${persent_disc}</span>`:"";

            swiper_electronics.innerHTML += `
           
                <div class="swiper-slide product">
                    ${persent_disc_div}
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="#">${product.name}</a>
                    </p>
                    <p class="price"><span>$${product.price}</span></p>
                    ${old_price_paragraph}
                    <div class="icons">
                        <span class="btn-add-cart ${isInCart?'active':''}" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i> add to cart
                        </span>
                        <span class="icon-product ${isInFivorite?'active':''}" data-id="${product.id}"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
           
           
           ` 


        }
    });


    data.forEach(product =>{
        if(product.catetory == 'appliances'){

            let isInCart = cartItems.some(cartItem => cartItem.id === product.id);
            let isInFivorite = fivoriteItems.some(fivoriteItem => fivoriteItem.id === product.id);

            console.log(isInCart);
            console.log(isInFivorite);
            

            let old_price_paragraph = product.old_price?`<p class="old-price">$${product.old_price}</p>`:"";
            let persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            let persent_disc_div = product.old_price?`<span class="sale-persent">%${persent_disc}</span>`:"";

            swiper_appliances.innerHTML += `
           
                <div class="swiper-slide product">
                    ${persent_disc_div}
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="#">${product.name}</a>
                    </p>
                    <p class="price"><span>$${product.price}</span></p>
                    ${old_price_paragraph}
                    <div class="icons">
                        <span class="btn-add-cart ${isInCart?'active':''}" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i> add to cart
                        </span>
                        <span class="icon-product ${isInFivorite?'active':''}" data-id="${product.id}"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
           
           
           ` 


        }
    });


    data.forEach(product =>{
        if(product.catetory == 'mobiles'){

            let isInCart = cartItems.some(cartItem => cartItem.id === product.id);
            let isInFivorite = fivoriteItems.some(fivoriteItem => fivoriteItem.id === product.id);


            let old_price_paragraph = product.old_price?`<p class="old-price">$${product.old_price}</p>`:"";
            let persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            let persent_disc_div = product.old_price?`<span class="sale-persent">%${persent_disc}</span>`:"";

            swiper_mobiles.innerHTML += `
           
                <div class="swiper-slide product">
                    ${persent_disc_div}
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name-product">
                        <a href="#">${product.name}</a>
                    </p>
                    <p class="price"><span>$${product.price}</span></p>
                    ${old_price_paragraph}
                    <div class="icons">
                        <span class="btn-add-cart ${isInCart?'active':''}" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i> add to cart
                        </span>
                        <span class="icon-product ${isInFivorite?'active':''}" data-id="${product.id}"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
           
           
           ` 


        }
    });

    let activeBtns = document.querySelectorAll('.btn-add-cart.active');
    activeBtns.forEach(btn =>{
        btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> item in cart`
    })

})

