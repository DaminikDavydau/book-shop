function version() {
            let version = new DocumentFragment();
            let tag = document.createElement("h1")
            tag.textContent = "v.1.5.1"
            version.append(tag);
            document.querySelector("body").append(version);
}

version()

function unibuild (where, what, attr, attrName, text) {
    let doc = new DocumentFragment();
    let tag = document.createElement(what);
    if (attr!="") {
        tag.setAttribute(attr, attrName);
    }
    tag.innerHTML = text
    doc.append(tag);
    document.querySelector(where).append(doc);
}

function printout(data) {
    for (let i = 0; i<data.length; ++i) {
        unibuild("div#column-r div", "div", "class", "card", "")
        unibuild(`div#column-r div div.card:nth-of-type(${i+1})`, "div", "class", "img", "")
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.img`, "img", "scr", `./images/${i+1}.jpg`, "")
        unibuild(`div#column-r div div.card:nth-of-type(${i+1})`, "div", "class", "info", "")
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info`, "h4", "", "", data[i].author)
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info`, "h3", "", "", data[i].title)
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info`, "div", "", "", data[i].description)
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info`, "div", "class", "popup", "");
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info div.popup`, "button", "onclick", `popup(${i})`, "Show more")
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info div.popup`, "span", "class", "pop_up", data[i].description)

        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info`, "div", "class", "to_bag", "")
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info div.to_bag`, "p", "", "", `Price: <span>${data[i].price}</span>$`)
        unibuild(`div#column-r div div.card:nth-of-type(${i+1}) div.info div.to_bag`, "button", "class", "add_to_bag", "Add to bag")


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
unibuild("div#column-r", "h2", "", "", "Welcome to the World of JavaScript")
unibuild("div#column-r", "div", "", "", "")



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
