import axios from "axios";

export default {
  // Get book list from Google Books Search
  getSearchGoogleBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },

  // Get all saved books from the database
  getSavedBooks: function () {
    return axios.get("/api/books");
  },

  // Get the book with the given id from the database
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
