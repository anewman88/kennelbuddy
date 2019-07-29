import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedResult"

class SaveBook extends Component {
    state = {
        savedBooksList: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getSavedBooks()
            .then(res => this.setState({ savedBooksList: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron>
                    <h1 className="text-white">React Based Google Books Search</h1>
                    <h3 className="text-white">These are your favorite saved books!</h3>
                    <hr/>
                </Jumbotron>

                <Container>
                    <SavedResult savedBooksList={this.state.savedBooksList} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}

export default SaveBook 