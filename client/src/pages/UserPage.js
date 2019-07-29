import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import UserInfo from "../components/UserInfo";
import AddDevice from "../components/AddDevice";
import DisplayDevice from "../components/DisplayDevice";

const DebugOn = true;

class UserPage extends Component {
  //create state
  state = {
      UserID: "",
      DeviceID: "",
      DeviceActive: false,
      CurTemp: 0,
      Temps: []
  };

  //function to take value of what enter in the search bar
  handleInputChange = event => {
      this.setState({ search: event.target.value })
  }

  //function to control the submit button of the search form 
  handleFormSubmit = event => {
      event.preventDefault();
      if (DebugOn) console.log ("Searching for " + this.state.search);

      // once it clicks it connects to the google book api with the search value
      API.getSearchGoogleBooks(this.state.search)
          .then(res => {
              if (res.data.items === "error") {
                  throw new Error(res.data.items);
              }
              else {
                  // store response in a array
                  let results = res.data.items
                  //map through the array 
                  results = results.map(result => {
                      //store each book information in a new object 
                      result = {
                          key: result.id,
                          id: result.id,
                          title: result.volumeInfo.title,
                          author: result.volumeInfo.authors,
                          description: result.volumeInfo.description,
                          image: result.volumeInfo.imageLinks.thumbnail,
                          link: result.volumeInfo.infoLink
                      }
                      return result;
                  })
                  // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                  this.setState({ books: results, error: "" })
              }
          })
          .catch(err => this.setState({ error: err.items }));
  }

  handleSaveButton = event => {
      // console.log(event)
      event.preventDefault();
      let savedBooks = this.state.books.filter(book => book.id === event.target.id)
      savedBooks = savedBooks[0]; // remove it from the "array"
      console.log("In save book - savedBooks[0]", savedBooks);

      API.saveBook(savedBooks)
          .then(this.setState({ message: alert("Your book is saved") }))
          .catch(err => console.log(err))
  }
  render() {
      return (
          <Container fluid>
              <Jumbotron>
                <h1 className="text-white">React Based Google Books Search</h1>
                <h3 className="text-white">Search for books and save your favorites!</h3>
              </Jumbotron>
              <Container>
                  <Row>
                      <Col size="12">
                          <SearchForm
                              handleFormSubmit={this.handleFormSubmit}
                              handleInputChange={this.handleInputChange}
                          />
                      </Col>
                  </Row>
              </Container>
              <br></br>
              <Container>
                  <SearchResult books={this.state.books} handleSaveButton={this.handleSaveButton} />
              </Container>
          </Container>
      )
  }
}

export default UserPage
