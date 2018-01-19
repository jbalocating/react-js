import React, {Component} from 'react';
import PostField from './post-section.js';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddList = this.handleAddList.bind(this);
        this.showList = this.showList.bind(this);
        this.state = {
            post: "My initial state",
            list: []
        }
    }

    handleSubmit(e) {
        this.setState({
           post: e
        });

    }

    handleAddList(e) {
        this.state.list.push(e);
        this.setState({
            list: this.state.list
        });
    }

    showList() {
        return
            this.state.list.map(function(list, index) {
                return <li key={index}> {list} </li>
            });


    }

    render(){
        return(
            <div>
                <PostField
                    submit={this.handleSubmit}
                    list={this.handleAddList}
                />
                <p>Output here : {this.state.post}</p>
                <p>{this.showList()}</p>
            </div>
        )
    }
}