import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className='list-group mt-5'>
        <h3 className='text-capitalize text-center'>todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
              key={item.id}
              title={item.title}
            />
          );
        })}

        <button
          onClick={clearList}
          className='btn btn-danger btn-block text-capitalize mt-5'
        >
          clear list
        </button>
      </ul>
    );
  }
}
