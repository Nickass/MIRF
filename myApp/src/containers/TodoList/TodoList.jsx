import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todo } from 'actions';
import store from 'store';


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { showInput: false };
    this.addTaskHandler = this.addTaskHandler.bind(this);
  }

  addTaskHandler() {
    if(this.state.showInput) {
      this.props.add(this.textInput.value);
      this.setState({showInput: false})
    } else {
      this.setState({showInput: true})
    }

  }

  render() {
    let { del, tasks } = this.props;

    return (
      <div className="Todo">
        <h3 className ="Todo__title">Hi, I am TodoList!</h3>
        <ul className="Todo__list">
          {this.props.tasks.map((task, id) => (
            <li className="Todo__item" key={id}>
              <span className="Todo__name">{task}</span>
              <button 
              className="Todo__del"
              onClick={del.bind(null, task)}></button>
            </li>
          ))}
        </ul>
        <div className="Todo__addPanel">
          {this.state.showInput ? <input className="Todo__inp" type="text" ref={(input) => { this.textInput = input; }}/> : ''}
          <button className="Todo__add" onClick={this.addTaskHandler}>Добавить задачу</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    ...state.todo,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    ...bindActionCreators(todo, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);