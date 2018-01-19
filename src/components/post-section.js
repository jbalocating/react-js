import React, {Component} from 'react';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleClear() {
        this.refs.post.value = '';
    }

    handlePost() {
        this.props.submit(this.refs.post.value);
    }

    handleAdd() {
        this.props.list(this.refs.post.value);
    }

    render(){
        return(
            <div>
                <input placeholder="insert text here" ref="post"/>
                <button onClick={this.handlePost}>Post</button>
                <button onClick={this.handleClear}>Clear</button>
                <button onClick={this.handleAdd}>Add to List</button>
            </div>
        )
    }
}