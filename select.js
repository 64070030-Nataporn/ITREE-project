let requestURL = 'all.json';
let request = new XMLHttpRequest();
let basket = JSON.parse(localStorage.getItem("datashopcart")) || [];

request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

const inside = localStorage.getItem('objectnumber');
const outside = localStorage.getItem('outsidenumber');
const boxid = localStorage.getItem('bnumber');
const soilid = localStorage.getItem('snumber');
const otherid = localStorage.getItem('onumber');


function ExtractData(data) {
    let shop = document.getElementById('shopproduct');
    if (inside !== null) {
        for (let item of data.insidetree) {
            if (inside == item.Id) {
                let search = basket.find((x) => x.Name === item.Name) || [];

                shop.innerHTML = `
                            <div class="product">
                                <img src = ${item.Pic1} class="imgproduct m-4" id = "imageitem">
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${item.Name}</h2>
                                        <h2 id="priceitem">฿ ${item.Price}</h2>
                                        <h5 id="detail">รายละเอียดต้นไม้</h5>
                                        <h6>${item.Water}</h6>
                                        <h6>${item.Sun}</h6>
                                        <div class="count">
                                            <h5>จำนวน</h5>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${item.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id="${item.Name}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
                                                <i onclick="increment('${item.Name}', 'insidetree', ${item.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <button onclick="calculation()" class="btn btn-primary" type="submit">ใส่ตะกร้า</button>
                                    </div>
                            </div > `;
            }
        }
        localStorage.removeItem('objectnumber');
    }

    else if (outside !== null) {
        for (let itemout of data.outsidetree) {
            if (outside == itemout.Id) {
                let search = basket.find((x) => x.Name === itemout.Name) || [];

                shop.innerHTML = `
                            <div class="product">
                                <img src = ${itemout.Pic1} class="imgproduct m-4" id = "imageitem" >
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${itemout.Name}</h2>
                                        <h2 id="priceitem">฿ ${itemout.Price}</h2>
                                        <h2 id="detail">รายละเอียดต้นไม้</h2>
                                        <h6>${itemout.Water}</h6>
                                        <h6>${itemout.Sun}</h6>
                                        <div class="count">
                                            <h5>จำนวน</h5>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${itemout.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id="${itemout.Name}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
                                                <i onclick="increment('${itemout.Name}', 'outsidetree', ${itemout.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <button onclick="calculation()" class="btn btn-primary" type="submit">ใส่ตะกร้า</button>
                                    </div>
                            </div > `;
            }
        }
        localStorage.removeItem('outsidenumber');
    }

    else if (boxid !== null) {
        for (let boxs of data.box) {
            if (boxid == boxs.Id) {
                let search = basket.find((x) => x.Name === boxs.Name) || [];

                shop.innerHTML = `
                            <div class="product">
                                <img src = ${boxs.Pic} class="imgproduct m-4" id = "imageitem">
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${boxs.Name}</h2>
                                        <h2 id="priceitem">฿ ${boxs.Price}</h2>
                                        <div class="count">
                                            <h5>จำนวน</h5>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${boxs.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id="${boxs.Name}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
                                                <i onclick="increment('${boxs.Name}', 'box', ${boxs.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <button onclick="calculation()" class="btn btn-primary" type="submit">ใส่ตะกร้า</button>
                                    </div>
                            </div > `;
            }
        }
        localStorage.removeItem('bnumber');
    }

    else if (soilid !== null) {
        for (let soils of data.soil) {
            if (soilid == soils.Id) {
                let search = basket.find((x) => x.Name === soils.Name) || [];

                shop.innerHTML = `
                            <div class="product">
                                <img src = ${soils.Pic} class="imgproduct m-4" id = "imageitem">
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${soils.Name}</h2>
                                        <h2 id="priceitem">฿ ${soils.Price}</h2>                
                                        <div class="count">
                                            <h5>จำนวน</h5>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${soils.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id="${soils.Name}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
                                                <i onclick="increment('${soils.Name}', 'soil', ${soils.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <button onclick="calculation()" class="btn btn-primary" type="submit">ใส่ตะกร้า</button>
                                    </div>
                            </div > `;
            }
        }
        localStorage.removeItem('snumber');
    }

    else if (otherid !== null) {
        for (let others of data.other) {
            if (otherid == others.Id) {
                let search = basket.find((x) => x.Name === others.Name) || [];

                shop.innerHTML = `
                            <div class="product">
                                <img src = ${others.Pic} class="imgproduct m-4" id ="imageitem">
                                    <div class="m-4 alldetail">
                                        <h2 id="nameitem">${others.Name}</h2>
                                        <h2 id="priceitem">฿ ${others.Price}</h2>
                                        <div class="count">
                                            <h5>จำนวน</h5>
                                            <div class="buttons-quantity">
                                                <i onclick="decrement('${others.Name}')" class="bi bi-dash-square" style="font-size:25px;"></i>
                                                <div id="${others.Name}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
                                                <i onclick="increment('${others.Name}', 'other', ${others.Price})" class="bi bi-plus-square" style="font-size:25px;"></i>
                                            </div>
                                        </div>
                                        <button onclick="calculation()" class="btn btn-primary" type="submit">ใส่ตะกร้า</button>
                                    </div>
                            </div > `;
            }
        }
        localStorage.removeItem('onumber');
    }

}


let increment = (name, type, eachprice) => {
    let search = basket.find((x) => x.Name === name)

    if (search == undefined) {
        basket.push({ Name: name, item: 1, Type: type, Prices: eachprice });
    }
    else {
        search.item += 1;
    }

    update(name);

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

    localStorage.setItem("datashopcart", JSON.stringify(basket));

};
let update = (name) => {
    let search = basket.find((x) => x.Name === name);
    if (search.item < 0) {
        document.getElementById(search.Name).innerHTML = 0;
        search.item = 0;
    }
    else {
        document.getElementById(search.Name).innerHTML = search.item;
    }
};

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