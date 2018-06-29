import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Register, Login, App, Home, Wall } from 'containers'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const title = 'Memo_App!';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/wall/:username" component={Wall}/>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

module.hot.accept();
