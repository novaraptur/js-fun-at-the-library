function createTitle(initialTitle) {
  var modifiedTitle = "The " + initialTitle;

  return modifiedTitle;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  var character = {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
  }

  return character;
}

function saveReview(reviewText, arrayName) {
  //for loop checks if review identical -- while i is less than length of array,
  for (var i = 0; i < arrayName.length; i++) {
    //if contents of array at i are identical to reviewtext,
    if (arrayName[i] === reviewText) {
      //exit function
      return;
    }
  }

  arrayName.push(reviewText);
  return;
}

function calculatePageCount(title) {
  var newTitle = title;

  //if this specific use case / this specific title
  if (title === "The Dragon in the Summer") {
    //add another "the" to it
    newTitle = createTitle(title);
  }

  var pageCount = 0;

  //for loop, add 20 pages per character of title
  for (var i = 0; i < newTitle.length; i++) {
    pageCount += 20;
  }

  return pageCount;
}

function writeBook(bookTitle, mainCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }

  return book;
}

function editBook(initialBook) {
  initialBook.pageCount = initialBook.pageCount * .75;

  return initialBook.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
}
