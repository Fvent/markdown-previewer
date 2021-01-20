import React from 'react';

export class Editor extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.parentCallback(event.target.value);
    }

    render(){
        return (
        <div id="editor">
            <h3 id="editor-label">Editor</h3>
            <textarea name="editor-textarea" id="editor-textarea" cols="100" rows="10" onChange={this.handleChange}></textarea>
        </div>);
    }
}