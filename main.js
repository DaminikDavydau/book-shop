const allBooks = [];
fetch('./books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            allBooks = data;
        });

console.log(allBooks[1]);

function version() {
            var version = document.createDocumentFragment();
            version.appendChild(document.createElement("h1").appendChild(document.createTextNode("v.1.0")));
            document.getElementsByTagName("body")[0].appendChild(version);
        }

version()
