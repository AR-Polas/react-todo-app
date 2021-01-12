import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './ToDoList/Todo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>,
  document.getElementById('root')
);

