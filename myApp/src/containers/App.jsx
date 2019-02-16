import React, { Component } from 'react';
import { Switch, Route }  from 'react-router';
import { connect } from 'react-redux';
import actions from 'actions';
import Nav from 'components/Nav';
import TodoList from './TodoList';

let routes = {
  todoList: '/',
}

class App extends Component {
  constructor(props) {
    super(props);

  }
  sendState() {
    var sendState = new XMLHttpRequest();
    sendState.open('POST', '/UPDATE_STORE', true);
    sendState.setRequestHeader('Content-type', 'application/json');
    sendState.send(JSON.stringify({REDUX_STATE: this.props.state}));
  }
  render() {
    return (
      <div>
        <button onClick={this.sendState.bind(this)}>Save state</button>
        <Nav routes={routes} />
        <Switch>
          <Route exact path='/' component={TodoList}/>
        </Switch>
      </div>
    );
  }
}




export default connect( state => {return {state: state}} )(App);
