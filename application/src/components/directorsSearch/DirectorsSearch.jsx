import React, { Component } from 'react'
import styles from './DirectorSearch.module.css'

export default class DirectorsSearch extends Component {

    state = {
        text: ''
    }

    handleSubmit = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <form classname={styles.form} onSubmit={this.handleSubmit}>
                <input 
                    classname={styles.input} 
                    type="text" 
                    value={this.state.text} 
                    placeholder="Find..."
                    onChange={this.handleSubmit}></input>
            </form>
        )
    }
}