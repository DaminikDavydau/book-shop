let allBooks = fetch('../books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });

console.log(allBooks[0]);

function version() {
            var version = document.createDocumentFragment();
            version.appendChild(document.createElement("h1").appendChild(document.createTextNode("v.1.1")));
            document.getElementsByTagName("body")[0].appendChild(version);
        }

version()
