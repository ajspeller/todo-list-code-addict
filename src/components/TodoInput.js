import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className='card card-body mt-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className='fas fa-book' />
              </div>
            </div>
            <input
              value={item}
              onChange={handleChange}
              type='text'
              className='form-control text-capitalize'
              placeholder='add a todo item'
            />
          </div>
          <button type='submit' className='btn btn-block btn-primary mt-3'>
            add item
          </button>
        </form>
      </div>
    );
  }
}
