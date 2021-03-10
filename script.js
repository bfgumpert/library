/* let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readString = read ? "already read" : "not read yet";
        return title + " by " + author + ", " + pages + " pages, " + readString;
    }
}

function addBookToLibrary(title, author, pages, read) {
    title = new Book(title, author, pages, read);
    myLibrary.push(title);
}

function displayLibrary() {

}
*/

const container = document.querySelector('#container');

function htmlManipulation() {
    for(let i = 0; i < 21; i++) {
        let elementName = "";
        if (i == 0) {
            elementName = 'contents';
        }
        else {
            elementName = 'line' + i;
        }

        const tableEntry = document.createElement('div');
        tableEntry.id = elementName;
        tableEntry.classList = "tableRow";
        container.appendChild(tableEntry);

        for (let j = 0; j < 7; j++) {
            let data = "";
            if (j < 5) {
                data = document.createElement('p');
                data.id = 'text' + j;
                //if (j == 0 && i != 0) {data.textContent = i}
            }
            else {
                data = document.createElement('button');
                data.id = 'button' + j;
                data.style.display = "none";
            }
            tableEntry.appendChild(data);
        }
    }
}

/*
addBookToLibrary('Catch 22', 'Joseph Heller', 453, true);
addBookToLibrary('Catch 23', 'Joseph Heller', 453, true);
addBookToLibrary('Catch 24', 'Joseph Heller', 453, true);
addBookToLibrary('Catch 25', 'Joseph Heller', 453, true);
*/

htmlManipulation();