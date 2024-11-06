const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages, year) {
  // do stuff here
    let book = {
        title: title,
        author: author,
        pages: pages,
        year: year
    };
    return myLibrary.push(book);
}

addBookToLibrary('Alma', 'Jorge', 234, 1996);
addBookToLibrary('cien anos de soledad', 'GABO', 345, 1982);
addBookToLibrary('The Hobbit', 'Tolkien', 365, 1894);
addBookToLibrary('The bible', 'GOD', 2400, null);

console.log(myLibrary);


const cardContainer = document.getElementById('main-content');


const bookCards = document.getElementsByClassName('card');

// bookCards[0].innerHTML = 'Book 1';

for (let i = 0; i< myLibrary.length; i++){

    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = myLibrary[i].title;
    cardContainer.appendChild(newCard);
    //bookCards[i].innerHTML = myLibrary[i].title;

}