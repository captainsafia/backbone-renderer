import React from 'react';
import './App.css';
import Backbone from 'backbone';
import * as Widgets from "@jupyter-widgets/controls";

class Wrapper extends React.Component {
    hostRef = React.createRef();
    componentDidMount() {
const widget = new Widgets.DatePickerView({ model: this.props.model, el: this.hostRef.current });
        widget.render();
        console.log(widget);
    }
    render() {

        return <div ref={this.hostRef}/>;
    }
}

const model = new Backbone.Model({
            model_name: 'DatePickerModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: '1.0.0',
            model_id: 'test',
            description: 'bah',
            value: new Date(),
        });

class App extends React.Component {
    render() {
          return (
              <Wrapper model={model}/>
  );
    }
}

export default App;
