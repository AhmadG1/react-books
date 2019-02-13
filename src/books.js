import React, { Component } from 'react';

class Books extends Component {
    state = {
        hide: 'hidden'
    }
    hideBook = () => {
        if (this.state.hide === 'false') {
            this.setState({ hide: 'hidden' })
        } else {
            this.setState({ hide: 'false' })
        }
    }
    render() {
        return (
            <div>
                <h1 onClick={this.hideBook}>{this.props.book.title}</h1>
                <h2 className={this.state.hide}>{this.props.book.subtitle}</h2>
                <h3 className={this.state.hide}>Author: {this.props.book.author}</h3>
                <h4 className={this.state.hide}>Published: {this.props.book.published}</h4>
                <h4 className={this.state.hide}>Publisher: {this.props.book.publisher}</h4>
                <h5 className={this.state.hide}>Pages: {this.props.book.pages}</h5>
                <p className={this.state.hide}>{this.props.book.description}</p>
                <a className={this.state.hide} href={this.props.book.website} >Website</a>
            </div>
        )
    }
}

export default Books;