// import bookDetails from "./views/book-details.cmp.js";
// import booksApp from "./views/books-app.cmp.js";
// import newBook from "./views/new-book.cmp.js";
import appHome from "./pages/app-home.cmp.js";
import appAbout from "./pages/app-about.cmp.js";

const routes = [
  {
    path: "/",
    component: appHome,
  },
  {
    path: "/about",
    component: appAbout,
  },
  // {
  //   path: "/book",
  //   component: booksApp,
  // },
  // {
  //   path: "/book/:bookId",
  //   component: bookDetails,
  // },
  // {
  //   path: "/book/new",
  //   component: newBook,
  // },
  // {
  //   path: "/",
  //   component: homePage,
  // },
  // {
  //   path: "/about",
  //   component: aboutPage,
  // },
  // {
  //   path: "/book",
  //   component: booksApp,
  // },
  // {
  //   path: "/book/:bookId",
  //   component: bookDetails,
  // },
  // {
  //   path: "/book/new",
  //   component: newBook,
  // },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
