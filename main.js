const allBooks = [];
fetch('./books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            allBooks = data;
        });

console.log(allBooks[1]);
