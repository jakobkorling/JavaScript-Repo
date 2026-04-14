let library = [];
let running = true;

function addBook() {
    const title = prompt("Book title:");
    const author = prompt("Name of author");
    const isRead = prompt("Have you read this book? (Yes/No)");
    const book = {
        title: title,
        author: author,
        isRead: isRead.toLowerCase() === "yes"
    };

    library.push(book);
    alert(`"${title}" was added to library.`)
}

function listBooks() {
    if (library.length === 0) {
        alert("There are no books in the library.");
        return;
    }

    library.forEach(function(book, index) {
     
    console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}, Have I read the book?: ${book.isRead ? "Yes" : "No"}`);
    })
}

function markAsRead(title) {
    const book = library.find(function(book) {
        return book.title.toLowerCase() === title.toLowerCase();
    });

    if (book) {
        book.isRead = true;
        alert(`"${book.title}" has been marked as read.`);
    }
    else {
        alert("The book is not in the library.")
    }
}

function removeBook(title) {
    const bookRemove = library.find(function(book) {
        return book.title.toLowerCase() === title.toLowerCase();
    });

    if (!bookRemove) {
        alert("Book not found.");
        return;
    }

    library = library.filter(function(book) {
        return book.title.toLowerCase() !== title.toLowerCase();
    });

    alert(`"${title}" has been removed from the library.`);
}

while (running) {
    const choice = prompt(`
        Book Tracker
        1. Add Book
        2. List Books
        3. Mark Book as Read
        4. Remove Book from library
        5. Exit
        Enter your choice:`);

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            listBooks();
            break;
        case "3":
            const haveRead = prompt("Enter a book title to mark it as read.")
            markAsRead(haveRead);
            break;
        case "4":
            const removeTitle = prompt("Enter a book title to remove it from the library.");
            removeBook(removeTitle);
            break;
        case "5":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
    }
}