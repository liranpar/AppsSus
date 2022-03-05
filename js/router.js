import appHome from "./pages/app-home.cmp.js";
import appAbout from "./pages/app-about.cmp.js";
import mailIndex from "./apps/mail/pages/mail-index.cmp.js";
import noteIndex from "./apps/keep/pages/note-index.cmp.js";
import mailDetails from "./apps/mail/pages/mail-details.cmp.js";
import booksApp from "./apps/books/pages/books-app.cmp.js";
import bookDetails from "./apps/books/pages/book-details.cmp.js";
import newBook from "./apps/books/pages/new-book.cmp.js";

const routes = [
  {
    path: "/",
    component: appHome,
  },
  {
    path: "/book",
    component: booksApp,
  },
  {
    path: "/book/:bookId",
    component: bookDetails,
  },
  {
    path: "/book/new",
    component: newBook,
  },
  {
    path: "/about",
    component: appAbout,
  },
  {
    path: "/mail",
    component: mailIndex,
  },
  {
    path: "/mail/:mailId",
    component: mailDetails,
  },
  {
    path: "/keep",
    component: noteIndex,
  },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
