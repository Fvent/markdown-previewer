import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer"

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            textInEditor: ''
        }
        this.editorCallback = this.editorCallback.bind(this);
    }

    editorCallback = (data) => {
        this.setState({textInEditor: data})
    }

    render(){
        return (<div id="app">
            <h1>Markdown Previewer</h1>
            <Editor parentCallback={this.editorCallback} />
            <Previewer textInEditor={this.state.textInEditor} />
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));