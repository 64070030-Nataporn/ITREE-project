let basket = JSON.parse(localStorage.getItem("datashopcart")) || [];
let label = document.getElementById('labelprice');
let calprice = document.getElementById('totalprice');
let shopcart = document.getElementById('shopping-cart');
let resultpro = document.getElementById('resultproduct');
const logincustomer = localStorage.getItem('alreadylogin');

let calculation = () => {
    let carticon = document.getElementById('numcart');
    let calc = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    if (calc <= 0) {
        carticon.innerText = 0;
    }
    else if (calc > 0) {
        carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    }
}

calculation();



let generateCartItems = () => {

    if (basket.length !== 0) {
        return (shopcart.innerHTML = basket.map((x) => {
            console.log(x);
            let { Name, item, Type } = x;
            console.log(Type);

            //to json
            let requestURL = 'all.json';
            let request = new XMLHttpRequest();

            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    ExtractData(JSON.parse(request.responseText));
                }
            };
            request.open("GET", requestURL, true);
            request.send();


            function ExtractData(data) {
                if (Type === "insidetree") {
                    for (let items of data.insidetree) {
                        if (Name === items.Name) {

                            return shopcart.innerHTML += `
                            <div class="product">
                                <img src = ${items.Pic1} class="imgproduct m-4" id = "imageitem" >
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${items.Name}</h2>
                                        <h2 id="priceitem">฿ ${items.Price}</h2>
                                        <div class="count">
                                            <label>จำนวน</label>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${items.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id='${items.Name}' class="quantity">${item}</div>
                                                <i onclick="increment('${items.Name}', 'insidetree', ${items.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <div class="count">
                                            <label>ทั้งหมด</label>
                                            <h5>${item * items.Price} บาท</h5>
                                        </div>
                                        
                            </div > `;
                        }
                    }
                }

                else if (Type === "outsidetree") {
                    for (let itemout of data.outsidetree) {
                        if (Name === itemout.Name) {
                            return shopcart.innerHTML += `
                            <div class="product">
                                <img src = ${itemout.Pic1} class="imgproduct m-4" id = "imageitem" >
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${itemout.Name}</h2>
                                        <h2 id="priceitem">฿ ${itemout.Price}</h2>
                                        <div class="count">
                                            <label>จำนวน</label>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${itemout.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id='${itemout.Name}' class="quantity">${item}</div>
                                                <i onclick="increment('${itemout.Name}', 'outsidetree', ${itemout.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <div class="count">
                                            <label>ทั้งหมด</label>
                                            <h5>${item * itemout.Price} บาท</h5>
                                        </div>
                                        
                            </div > `;
                        }
                    }
                }

                else if (Type === "box") {
                    for (let boxs of data.box) {
                        if (Name === boxs.Name) {
                            return shopcart.innerHTML += `
                            <div class="product">
                                <img src = ${boxs.Pic} class="imgproduct m-4" id = "imageitem" >
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${boxs.Name}</h2>
                                        <h2 id="priceitem">฿ ${boxs.Price}</h2>
                                        <div class="count">
                                            <label>จำนวน</label>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${boxs.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id='${boxs.Name}' class="quantity">${item}</div>
                                                <i onclick="increment('${boxs.Name}', 'box', ${boxs.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <div class="count">
                                            <label>ทั้งหมด</label>
                                            <h5>${item * boxs.Price} บาท</h5>
                                        </div>
                                        
                            </div > `;
                        }
                    }
                }

                else if (Type === "soil") {
                    for (let soils of data.soil) {
                        if (Name === soils.Name) {
                            return shopcart.innerHTML += `
                            <div class="product">
                                <img src = ${soils.Pic} class="imgproduct m-4" id = "imageitem" >
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${soils.Name}</h2>
                                        <h2 id="priceitem">฿ ${soils.Price}</h2>
                                        <div class="count">
                                            <label>จำนวน</label>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${soils.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id='${soils.Name}' class="quantity">${item}</div>
                                                <i onclick="increment('${soils.Name}', 'soil', ${soils.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <div class="count">
                                            <label>ทั้งหมด</label>
                                            <h5>${item * soils.Price} บาท</h5>
                                        </div>
                                        
                            </div > `;
                        }
                    }
                }

                else if (Type === "other") {
                    for (let others of data.other) {
                        if (Name == others.Name) {
                            return shopcart.innerHTML += `
                            <div class="product">
                                <img src = ${others.Pic} class="imgproduct m-4" id = "imageitem" >
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${others.Name}</h2>
                                        <h2 id="priceitem">฿ ${others.Price}</h2>
                                        <div class="count">
                                            <label>จำนวน</label>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${others.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id='${others.Name}' class="quantity">${item}</div>
                                                <i onclick="increment('${others.Name}', 'other', ${others.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <div class="count">
                                            <label>ทั้งหมด</label>
                                            <h5>${item * others.Price} บาท</h5>
                                        </div>
                                        
                            </div > `;
                        }
                    }
                }

            }


            /*return `
            
            `;*/
        }).join(""));


    }
    else {
        shopcart.innerHTML = ''
        resultpro.classList.add("text-center");
        resultpro.innerHTML = `
        <div>
        <img src="https://cdn.discordapp.com/attachments/1021309167371300899/1042373379526766602/icons8-shopping-basket.gif" />
        <h3>Cart is empty</h3>
        <a class="text-white navbar-brand" href="index.html" style="font-size:15px;">
            <button class="btn btn-sm btn-block">Back To Homepage</button>
        </a>
        </div>
        `;
    }
}

generateCartItems();

let increment = (name, type, eachprice) => {
    let search = basket.find((x) => x.Name === name)

    if (search == undefined) {
        basket.push({ Name: name, item: 1, Type: type, Prices: eachprice });
    }
    else {
        search.item += 1;
    }

    update(name);
    generateCartItems();
    calculation();

    localStorage.setItem("datashopcart", JSON.stringify(basket));
};

let decrement = (name) => {
    let search = basket.find((x) => x.Name === name)

    if (search == undefined) {
        return;
    }
    else if (search.item == 0) {
        return;
    }
    else {
        search.item -= 1;
    }

    update(name);
    basket = basket.filter((x) => x.item !== 0);
    calculation();
    generateCartItems();
    localStorage.setItem("datashopcart", JSON.stringify(basket));

};

let update = (name) => {
    let search = basket.find((x) => x.Name === name);
    if (search.item < 0) {
        document.getElementsById(search.Name).innerHTML = 0;
        search.item = 0;
    }
    else {
        document.getElementById(search.Name).innerHTML = search.item;
    }
    TotalAmount();
};

let TotalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { Name, item, Type, Prices } = x;

            return item * Prices;

        }).reduce((x, y) => x + y, 0);
        console.log(amount);
        calprice.innerHTML = `
        <div class="count">
        <label>ยอดรวมสุทธิ</label>
        <h5>${amount}</h5>
        </div>
        <hr>
        <button onclick="delivery()" class="btn btn-primary" type="submit">ยืนยันการสั่งซื้อ</button>
        `;
    }
    else {
        return;
    }
}

TotalAmount();

function delivery() {
    if (logincustomer == 1) {
        let carticon = document.getElementById('numcart');
        carticon.innerText = 0;
        resultpro.classList.add("text-center");
        resultpro.innerHTML = `
        <div>
            <img src="https://cdn.discordapp.com/attachments/1021309167371300899/1041363083630739467/icons8-in-transit.gif" />
            <h2>Your order is complete.</h2>
            <a class="text-white navbar-brand" href="index.html" style="font-size:15px;">
                <button class="btn btn-sm btn-block">Back To Homepage</button>
            </a>
        <div>
        `;
        localStorage.clear();

    }
    else if (logincustomer != 1) {
        resultpro.classList.add("text-center");
        resultpro.innerHTML = `
        <div>
        <img src="https://cdn.discordapp.com/attachments/1021309167371300899/1042375231110664192/icons8-walking.gif" />
        <h3>กรุณาลงทะเบียนเข้าใช้งานก่อน</h3>
        <a class="text-white navbar-brand" href="login.php" style="font-size:15px;">
            <button class="btn btn-sm btn-block">Go To Login</button>
        </a>
        </div>
        `;
    }
}