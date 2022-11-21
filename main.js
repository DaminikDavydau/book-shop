function version() {
            let version = new DocumentFragment();
            let tag = document.createElement("h1")
            tag.textContent = "v.1.5.4"
            version.append(tag);
            document.querySelector("body").append(version);
}

version()

function unibuild (where, what, attr, attrName, text) {
    let doc = new DocumentFragment();
    let tag = document.createElement(what);
    if (what == "img") {
        let data = text;
        console.log(what == "img")
        tag.setAttribute('scr', `https://daminikdavydau.github.io/book-shop/images/${attrName+1}.jpg`)
        tag.setAttribute('draggable', 'true')
        tag.setAttribute('ondragstart', "drag(event)")
        tag.setAttribute('draggabletext', `./images/${attrName}.jpg!!!!${data[attrName].author}!!!!${data[attrName].title}`)

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


        console.log(data[i]);
    }
    for (let i = 0; i<data.length; ++i) {
        console.log(data[i].author);
    }
}

unibuild("body", "div", "id", "row", "")
unibuild("div#row", "div", "id", "column-l", "")
unibuild("div#column-l", "h1", "", "", "")
unibuild("div#column-l h1", "a", "href", "./", "World of JavaScript")
unibuild("div#column-l", "div", "class", "confirmation", "")
unibuild("div.confirmation", "a", "href", "./confirm.html", "Confirm Order")
unibuild("div.confirmation", "p", "", "", "0$")
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
  ev.dataTransfer.setData("text", ev.target.fordrag);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


function dragfunc() {
    let imgs = document.getElementsByTagName("img");
    for (let i=0; i<imgs.length; ++i) {
        imgs[i].setAttribute('draggable', 'true')
        imgs[i].setAttribute('ondragstart', "drag(event)")
        imgs[i].setAttribute('draggabletext', "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    }
}
