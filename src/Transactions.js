import React from 'react';
import { connect } from 'react-redux';

const Transactions = (props) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('button clicked');
    props.addXaction(event.target.item.value)
  }

  const spendList = () => {
    return props.list.map((item) => {
      return (
        <li>{item}</li>
      )
    })
  }


  return (
    <>
    <h1>Spending Tracker</h1>
    <form id='spending-form' onSubmit={handleFormSubmit}>
    <label for='item'>Add an expense item: </label>
    <input type='number' name='item' id='item' />
    <input type='submit' value='Save Item' />
    </form>
    <ul id='spending-list'>{spendList()}</ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addXaction: (evt) => {
      dispatch({ type: 'ADD_XACTION', newItem: evt })
    },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
