import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                        {/* col-3 show image of the book */}
                                        <Col size="2" className="bookImage">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="bookInfo">
                                            <Row>
                                                <Col size="10">
                                                    <a className="book" href={book.link} target="_blank" class="text-info">
                                                        <div className="book-title white-text">
                                                                <h3>{book.title}</h3>
                                                            </div>
                                                    </a>
                                                </Col>
                                                <Col size="2">
                                                    <button className="saveBook btn btn-info" id={book.id} onClick={(event) => props.handleSaveButton(event)}>
                                                        Save Book
                                                    </button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="4">
                                                    <h5 className="bookAuthor">Author: {book.author}</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription">{book.description}</p>
                                            </Row>
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
export default SearchResult
