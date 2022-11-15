function version() {
            let version = document.createDocumentFragment();
            version.appendChild(document.createElement("h1").appendChild(document.createTextNode("v.1.2")));
            document.getElementsByTagName("body")[0].appendChild(version);
        }

version()


let allBooks = fetch('../books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });

console.log(allBooks[0]);

