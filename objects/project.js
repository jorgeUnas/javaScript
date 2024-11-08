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

// Adding some books 
addBookToLibrary('Alma', 'Jorge', 234, 1996);
addBookToLibrary('cien anos de soledad', 'GABO', 345, 1982);
addBookToLibrary('The Hobbit', 'Tolkien', 365, 1894);
addBookToLibrary('The bible', 'GOD', 2400, null);

console.log(myLibrary);



const cardContainer = document.getElementById('main-content');


//Display the books in the array 

function displayBooks() {

        for (let i = 0; i< myLibrary.length; i++){

            const newCard = document.createElement('div');
            newCard.setAttribute('class', 'card');
            const bookTitle = document.createElement('h2');
            const bookAuthor = document.createElement('h3')
            const bookPages = document.createElement('p');
            const bookYear = document.createElement('p');
            const removeButton = document.createElement('button');

    
            bookTitle.innerHTML = myLibrary[i].title;
            bookAuthor.innerHTML = myLibrary[i].author;
            bookPages.innerHTML = myLibrary[i].pages;
            bookYear.innerHTML = myLibrary[i].year;
            removeButton.innerHTML = 'Remove Book';
    
            cardContainer.appendChild(newCard);
            newCard.appendChild(bookTitle);
            newCard.appendChild(bookAuthor);
            newCard.appendChild(bookPages);
            newCard.appendChild(bookYear);
            newCard.appendChild(removeButton);

            removeButton.addEventListener('click', () => {
                newCard.remove();
             });  

        }


 
};


displayBooks();


// Extended solution

/*
const form = document.getElementById('fields');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPages = document.getElementById('pages').value;
    const newYear = document.getElementById('year').value;

    const newCard = document.createElement('div');
    newCard.className = 'card';
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3')
    const bookPages = document.createElement('p');
    const bookYear = document.createElement('p');

    bookTitle.innerHTML = newTitle;
    bookAuthor.innerHTML = newAuthor;
    bookPages.innerHTML = newPages;
    bookYear.innerHTML = newYear;

    cardContainer.appendChild(newCard);
    newCard.appendChild(bookTitle);
    newCard.appendChild(bookAuthor);
    newCard.appendChild(bookPages);
    newCard.appendChild(bookYear);

});

function resetCards (){
    cardContainer.innerHTML = '';
}

*/

// Add a book
const form = document.getElementById('fields');

form.addEventListener('submit', function(event){
    
    //Retrieve the info from the form
    event.preventDefault();

    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPages = document.getElementById('pages').value;
    const newYear = document.getElementById('year').value;

    const cardAdded = {
        title: newTitle,
        author: newAuthor,
        pages: newPages,
        year: newYear
    }

    myLibrary.push(cardAdded);
 

    // Display the new card
    const newCard = document.createElement('div');
    newCard.setAttribute('class', 'card');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3')
    const bookPages = document.createElement('p');
    const bookYear = document.createElement('p');
    const removeButton = document.createElement('button');

    const lastBook = myLibrary[myLibrary.length-1];
            bookTitle.innerHTML = lastBook.title;
            bookAuthor.innerHTML = lastBook.author;
            bookPages.innerHTML = lastBook.pages;
            bookYear.innerHTML = lastBook.year;
            removeButton.innerHTML = 'Remove Book';
    
            cardContainer.appendChild(newCard);
            newCard.appendChild(bookTitle);
            newCard.appendChild(bookAuthor);
            newCard.appendChild(bookPages);
            newCard.appendChild(bookYear);
            newCard.appendChild(removeButton);

            //Remove card
            removeButton.addEventListener('click', () => {
                newCard.remove();
             });  

    //clean the form
document.getElementById('title').value = '';
document.getElementById('author').value = '';
document.getElementById('pages').value = '';
 document.getElementById('year').value = '';



});




