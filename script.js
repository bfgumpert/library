let myLibrary = [];

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
    let bookTitle = new Book(title, author, pages, read);
    myLibrary.push(bookTitle);
}

function displayLibrary() {
    myLibrary.forEach(function(e) {
        let rowNumber = myLibrary.indexOf(e) + 1;
        let bookInfoArray = [e.title, e.author, e.pages, e.read];
        for (let i = 1; i < 5; i++) {
            let cellIdName = "row" + rowNumber + "text" + i;
            let cell = document.getElementById(cellIdName);
            cell.textContent = bookInfoArray[i - 1];
        }
        let editButtonId = document.getElementById("row" + rowNumber + "button5");
        let removeButtonId = document.getElementById("row" + rowNumber + "button6");
        editButtonId.style.display = "block";
        removeButtonId.style.display = "block";
    })
}


const container = document.querySelector('#container');

function htmlManipulation() {
    for(let i = 0; i < 21; i++) {
        let elementId = "";
        if (i == 0) {
            elementId = 'contents';
        }
        else {
            elementId = 'line' + i;
        }

        const tableEntry = document.createElement('div');
        tableEntry.id = elementId;
        tableEntry.classList = "tableRow";
        container.appendChild(tableEntry);

        for (let j = 0; j < 7; j++) {
            let data = "";
            if (j < 5) {
                data = document.createElement('p');
                data.id = 'row' + i + 'text' + j;
                data.classList = "tableText";
                if (j == 0 && i != 0) {data.textContent = i}
            }
            else {
                data = document.createElement('button');
                data.id = 'row' + i + 'button' + j;
                data.classList = "tableButton";
                data.style.display = "none";
                if (j == 5) {data.textContent = "Edit"}
                if (j == 6) {data.textContent = "Remove"}
            }
            tableEntry.appendChild(data);
        }

        row0text1.textContent = "Title";
        row0text2.textContent = "Author";
        row0text3.textContent = "Pages";
        row0text4.textContent = "Read Status";
    }
}

addBookButton.onclick = function(){
    
    let lightbox = document.getElementById("bookForm"),
        dimmer = document.createElement("div");
    
    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';
    
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }
        
    document.body.appendChild(dimmer);
    
    lightbox.style.visibility = 'visible';
    lightbox.style.top = window.innerHeight/2 - 50 + 'px';
    lightbox.style.left = window.innerWidth/2 - 100 + 'px';
    return false;
}

formConfirmBtn.onclick = function() {
    let userTitle = document.getElementById("formTitle").value;
    let userAuthor = document.getElementById("formTitle").value;
    let userPages = document.getElementById("formTitle").value;
    let userRead = document.getElementById("formTitle").value;
    addBookToLibrary(userTitle, userAuthor, userPages, userRead);
    displayLibrary();
}

htmlManipulation();
displayLibrary();