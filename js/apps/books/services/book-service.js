import { utilService } from "./util-service.js";
import { storageService } from "../../../services/async-storage-sevice.js";

const KEY = "books";
_createBooks();

export const bookService = {
  query,
  remove,
  get,
  updateReviews,
  addGoogleBook,
};

function addGoogleBook(googleBook) {
  var newBook = {
    title: googleBook.volumeInfo.title,
    subtitle: googleBook.volumeInfo.title,
    authors: googleBook.volumeInfo.authors,
    publishedDate: googleBook.volumeInfo.publishedDate,
    description: "Book description.",
    pageCount: 100,
    categories: googleBook.volumeInfo.categories,
    thumbnail: googleBook.volumeInfo.imageLinks.thumbnail,
    language: "he",
    reviews: [],
    listPrice: {
      amount: 19,
      currencyCode: "ILS",
      isOnSale: false,
      isSelected: false,
    },
  };
  storageService.post(KEY, newBook).then((res) => {
    console.log(res);
    return res;
  });
}

function updateReviews(book) {
  return storageService.put(KEY, book);
}

function remove(bookid) {
  return storageService.remove(KEY, bookid);
}

function get(bookId) {
  return storageService.get(KEY, bookId).then((book) => _setNextPrevBook(book));
}

function query() {
  return storageService.query(KEY);
}

function _setNextPrevBook(book) {
  return storageService.query(KEY).then((books) => {
    const bookIdx = books.findIndex((currBook) => currBook.id === book.id);
    book.nextBookId = books[bookIdx + 1] ? books[bookIdx + 1].id : books[0].id;
    book.prevBookId = books[bookIdx - 1]
      ? books[bookIdx - 1].id
      : books[books.length - 1].id;
    return book;
  });
}

function _createBooks() {
  let books = utilService.loadFromStorage(KEY);
  if (!books || !books.length) {
    books = [
      {
        id: "GXj93KOkqZoC",
        title: "Hacking",
        subtitle: "Digital Media and Technological Determinism",
        authors: ["Tim Jordan", "Puki Ben David"],
        publishedDate: 2022,
        description:
          "Hacking provides an introduction to the community of hackers and an analysis of the meaning of hacking in twenty-first century societies.",
        pageCount: 160,
        categories: ["Computers", "Hack"],
        thumbnail: "http://coding-academy.org/books-photos/1.jpg",
        language: "en",
        reviews: [
          {
            readerName: "Liran",
            rate: 2,
            readDate: "27.2.2022",
            content: "Hacking is a shitty book!",
          },
        ],
        listPrice: {
          amount: 19,
          currencyCode: "ILS",
          isOnSale: true,
          isSelected: false,
        },
      },
      {
        id: "GXj65KOkqZoC",
        title: "Stay Close",
        subtitle: "Thriller in the vein of his beloved breakout novels ",
        authors: ["Harlen Coben"],
        publishedDate: 2012,
        description:
          "When the past refuses to stay buried, three people will discover that the American dream can be a nightmare.",
        pageCount: 370,
        categories: ["Thriller", "Mystery"],
        thumbnail:
          "https://m.media-amazon.com/images/P/0525952276.01._SCLZZZZZZZ_SX500_.jpg",
        language: "en",
        reviews: [
          {
            readerName: "Liran",
            rate: 5,
            readDate: "20.2.2021",
            content: "Amazing book!!!",
          },
        ],
        listPrice: {
          amount: 180,
          currencyCode: "ILS",
          isOnSale: false,
          isSelected: false,
        },
      },
      {
        id: "QAj65KOkqHjC",
        title: "Moomin",
        subtitle: "The Complete Tove Jansson Comic Strip",
        authors: ["Tove Jansson"],
        publishedDate: 1977,
        description:
          "Tove Jansson is revered around the world as one of the foremost children's authors of the twentieth century for her illustrated chapter books regarding the magical worlds of her creation, the Moomins.",
        pageCount: 520,
        categories: ["Comedy", "Children"],
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1312061277i/79548.jpg",
        language: "en",
        reviews: [
          {
            readerName: "Liran",
            rate: 4,
            readDate: "20.7.2013",
            content: "Very nice, my child loves it!",
          },
        ],
        listPrice: {
          amount: 44,
          currencyCode: "USD",
          isOnSale: true,
          isSelected: false,
        },
      },
      {
        id: "BGj89KOkqHjC",
        title: "The Hobbit",
        subtitle:
          "A great modern classic and the prelude to The Lord of the Rings",
        authors: ["J. R. R. Tolkien"],
        publishedDate: 1937,
        description:
          "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. ",
        pageCount: 570,
        categories: ["Fantasy", "Adventure"],
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/413V3sIKSJL._SX331_BO1,204,203,200_.jpg",
        language: "en",
        reviews: [
          {
            readerName: "Liran",
            rate: 3,
            readDate: "12.6.2002",
            content: "Very good but too long",
          },
          {
            readerName: "Popo",
            rate: 5,
            readDate: "12.6.2002",
            content: "Wowwwwww!!",
          },
          {
            readerName: "Putin",
            rate: 1,
            readDate: "17.3.2012",
            content: "Blatttttttttttttt",
          },
        ],
        listPrice: {
          amount: 59,
          currencyCode: "USD",
          isOnSale: true,
          isSelected: false,
        },
      },
    ];
  }
  utilService.saveToStorage(KEY, books);
  console.log(books);
  return books;
}
