import React from 'react';

/////pasted from another solution//////////
const marked = require('marked');
marked.setOptions({
    breaks: true
  });
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};
////////////////////////////////////

export class Previewer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="previewer">
                <h1>Previewer</h1>
            <div id="preview"  dangerouslySetInnerHTML={{ __html: marked(this.props.textInEditor, { renderer: renderer }) }} />
            <br/>
            </div>
        );
    }
}

