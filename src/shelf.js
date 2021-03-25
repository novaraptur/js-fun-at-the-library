
function shelfBook(book, shelfArray) {
  //max of 3 elements per shelf
  if (shelfArray.length === 3) {
    return shelfArray;
  } else {
    //.unshift bookName to shelfArray -- hyperion is expected to be 2nd!
    shelfArray.unshift(book);
    return shelfArray;
  }
}

function unshelfBook(bookTitle, shelfArray) {
  for (var i = 0; i < shelfArray.length; i++) {
    //if title value of book at i is equal to submitted title
    if (shelfArray[i].title === bookTitle) {
      //console.log(shelfArray[i]);
      shelfArray.splice(i, 1);
      return shelfArray;
    }
  }

  // shelfArray.splice(1, 1);
  // console.log(shelfArray);
  return shelfArray;
}

function listTitles(shelfName) {
  var titleList;

  for (var i = 0; i < shelfName.length; i++) {
    if (titleList === undefined) {
      //first in list shows up as undefined, so have to change that
      titleList = shelfName[i].title;
    } else {
      //after first, just concatenate to end
      titleList += ", " + shelfName[i].title;
    }
  }

  return titleList;
}

function searchShelf(shelfName, bookTitle) {
  var hasBook = false;

  for (var i = 0; i < shelfName.length; i++) {
    //if title of shelfName[i] is booktitle, shelf has book
    if (shelfName[i].title === bookTitle) {
      //change hasBook to true
      hasBook = true;
    }
  }

  return hasBook;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
