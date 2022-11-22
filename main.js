function version() {
            let version = new DocumentFragment();
            let tag = document.createElement("h1")
            tag.textContent = "v.1.6.7"
            version.append(tag);
            document.querySelector("body").append(version);
}

version()

function unibuild (where, what, attr, attrName, text) {
    let doc = new DocumentFragment();
    let tag = document.createElement(what);
    if (what == "img") {
        console.log(what == "img")
        let link = `https://daminikdavydau.github.io/book-shop/${+(attrName)+1}.jpg`
        console.log(link)
        tag.setAttribute('src', link)
        if (text.length > 0) {
            let data = text;
            tag.setAttribute('draggable', 'true')
            tag.setAttribute('ondragstart', "drag(event)")
            tag.setAttribute('draggabletext', `${attrName}!!!!${data[attrName].author}!!!!${data[attrName].title}!!!!${data[attrName].price}`)
        }
    }
    else{
        if (attr!="") {
            tag.setAttribute(attr, attrName);
        }
        tag.innerHTML = text
    };
    doc.append(tag);
    document.querySelector(where).append(doc);
}

function printout(data) {
    let bag;
    for (let i = 0; i<data.length; ++i) {
        unibuild("main#column-r div", "div", "class", "card", "")
        unibuild(`main#column-r div div.card:nth-of-type(${i+1})`, "div", "class", "img", "")
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.img`, "img", "", i, data)
        unibuild(`main#column-r div div.card:nth-of-type(${i+1})`, "div", "class", "info", "")
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info`, "h4", "", "", data[i].author)
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info`, "h3", "", "", data[i].title)
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info`, "div", "", "", data[i].description)
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info`, "div", "class", "popup", "");
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info div.popup`, "button", "onclick", `popup(${i})`, "Show more")
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info div.popup`, "span", "class", "pop_up", data[i].description)

        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info`, "div", "class", "to_bag", "")
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info div.to_bag`, "p", "", "", `Price: <span>${data[i].price}</span>$`)
        unibuild(`main#column-r div div.card:nth-of-type(${i+1}) div.info div.to_bag`, "button", "class", "add_to_bag", "Add to bag")

        bag = document.getElementsByClassName("add_to_bag")[i];
        bag.setAttribute('draggabletext', `${i}!!!!${data[i].author}!!!!${data[i].title}!!!!${data[i].price}`)
        bag.setAttribute('id', i)
        bag.setAttribute('onclick', `onclick_to_bag(${i})`)

        console.log(data[i]);
    }
}

unibuild("body", "div", "id", "row", "")
unibuild("div#row", "div", "id", "column-l", "")
unibuild("div#column-l", "h1", "", "", "")
unibuild("div#column-l h1", "a", "href", "./", "World of JavaScript")
unibuild("div#column-l", "div", "class", "confirmation", "")
unibuild("div.confirmation", "a", "href", "./confirm.html", "Confirm Order")
unibuild("div.confirmation", "p", "id", "tprice", "0$")
unibuild("div#column-l", "div", "id", "bag", "")

unibuild("div#row", "main", "id", "column-r", "")
unibuild("main#column-r", "h2", "", "", "Welcome to the World of JavaScript")
unibuild("main#column-r", "div", "", "", "")



fetch('./books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            printout(data)
        });


let bag = document.getElementById("bag");
bag.setAttribute('ondrop', "drop(event)")
bag.setAttribute('ondragover', "allowDrop(event)")


function popup(i) {
let button = document.querySelectorAll("main#column-r div.card div.info div.popup button")[i];
if (button.innerHTML == "Show more") {
button.innerHTML = "Close";
}
else {
button.innerHTML = "Show more";
};
let popup = document.getElementsByClassName("pop_up")[i];
console.log(popup);
popup.classList.toggle("show");
}



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var card_id = ev.dataTransfer.getData("text");
    console.log(card_id)
    unibuild('div#column-l div#bag', 'div', 'class', 'card', '')
    let elem = document.getElementById(card_id);
    text = elem.getAttribute('draggabletext');
    text = text.split('!!!!')
    unibuild('div#column-l div#bag div.card', 'img', '', text[0], '')
    unibuild('div#column-l div#bag div.card', 'h4', '', '', text[1])
    unibuild('div#column-l div#bag div.card', 'h4', '', '', text[2])
    let tprice = document.getElementById('tprice');
    console.log(tprice.innerHTML)
    let price = parseInt(tprice.innerHTML) + parseInt(text[3]);
    tprice.innerHTML = `${price}$`
}


function onclick_to_bag(card_id) {
    unibuild('div#column-l div#bag', 'div', 'class', 'card', '')
    let elem = document.getElementById(card_id);
    text = elem.getAttribute('draggabletext');
    text = text.split('!!!!')
    unibuild('div#column-l div#bag div.card', 'img', '', text[0], '')
    unibuild('div#column-l div#bag div.card', 'h4', '', '', text[1])
    unibuild('div#column-l div#bag div.card', 'h4', '', '', text[2])
    let tprice = document.getElementById('tprice');
    console.log(tprice.innerHTML)
    let price = parseInt(tprice.innerHTML) + parseInt(text[3]);
    tprice.innerHTML = `${price}$`
}
