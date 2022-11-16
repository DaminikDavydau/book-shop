function version() {
            let version = document.createDocumentFragment();
            version.appendChild(document.createElement("h1").appendChild(document.createTextNode("v.1.3")));
            document.getElementsByTagName("body")[0].appendChild(version);
        }

version()

function printout(data) {
    for (let i = 0; i<data.length; ++i) {
        console.log(data[i]);
    }
    for (let i = 0; i<data.length; ++i) {
        console.log(data[i].author);
    }
}


fetch('./books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            printout(data)
        });
