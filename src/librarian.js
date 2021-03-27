class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name) {
    if (name === "Amy") {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook(bookTitle) {
    //refactoring idea-- more efficient way of finding genre?
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (this.library.shelves.fantasy[i].title === bookTitle) {
        this.library.shelves.fantasy.splice(i, 1);
        return `Yes, we have ${bookTitle}`;
      }
    }

    for (var i = 0; i < this.library.shelves.fiction.length; i++) {
      if (this.library.shelves.fiction[i].title === bookTitle) {
        this.library.shelves.fiction.splice(i, 1);
        return `Yes, we have ${bookTitle}`;
      }
    }

    for (var i = 0; i < this.library.shelves.nonFiction.length; i++) {
      if (this.library.shelves.nonFiction[i].title === bookTitle) {
        this.library.shelves.nonFiction.splice(i, 1);
        return `Yes, we have ${bookTitle}`;
      }
    }

    return `Sorry, we do not have ${bookTitle}`;
  }

  calculateLateFee(daysLate) {
    var lateFee = Math.ceil(0.25 * daysLate);

    return lateFee;
  }

}

module.exports = Librarian;
