import React from "react";
//import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooksList.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                    {props.savedBooksList.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    <Col size="10">
                                        <a className="bookInfo" href={savedbook.link} target="_blank" class="text-info">
                                            <div className="book-title white-text">
                                                <h2>{savedbook.title}</h2>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col size="2">
                                        <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                            Delete Book
                                        </button>
                                    </Col>
                                </Row>
                                <Row>
                                    <h5 className="bookAuthor">Author: {savedbook.author}</h5>
                                </Row>
                                <Row>
                                    {/* col-3 show image of the book */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="10">
                                        <p className="bookDescription">{savedbook.description}</p>
                                    </Col>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResult