import React from 'react';
import './App.css';
import Backbone from 'backbone';
import * as Widgets from "@jupyter-widgets/controls";

class Wrapper extends React.Component {
    render() {
        const widget = new Widgets.DatePickerView({ model: this.props.model });
        console.log(widget);
        return <div>{this.props.model.model_name}</div>;
    }
}

const model = new Backbone.Model({
            model_name: 'DatePickerModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: '1.0.0',
            model_id: 'test',
        });

class App extends React.Component {
    render() {
          return (
              <Wrapper model={model}/>
  );
    }
}

export default App;
