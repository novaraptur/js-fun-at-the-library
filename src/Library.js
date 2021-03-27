
function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }

  return library;
}

function addBook(library, book) {
  //find genre of book
  var bookGenre = book.genre;

  //put book into corresponding shelf of library
  if (bookGenre === "fantasy") {
    library.shelves.fantasy[0] = book;
  } else if (bookGenre === "fiction") {
    library.shelves.fiction[0] = book;
  } else {
    library.shelves.nonFiction[0] = book;
  }

  //note to self! If this was fully functional, would want nested if/else above to .push books past the first index, rather than writing over it
  return library;
}

function checkoutBook(library, bookTitle, bookGenre) {

  if (bookGenre === "fantasy") {
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (library.shelves.fantasy[i].title === bookTitle) {
        library.shelves.fantasy.splice(i, 1);

        return `You have now checked out ${bookTitle} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  } else if (bookGenre === "fiction") {
    for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === bookTitle) {
        library.shelves.fiction.splice(i, 1);

        return `You have now checked out ${bookTitle} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  } else {
    for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      if (library.shelves.nonFiction[i].title === bookTitle) {
        library.shelves.nonFiction.splice(i, 1);

        return `You have now checked out ${bookTitle} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
