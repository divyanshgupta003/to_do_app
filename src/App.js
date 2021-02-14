import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import List from './List/List';
import {connect} from 'react-redux';

class App extends Component {

  // state for our app
  state = {
    currentItem : {
      text : '',
      key : 0
    }
  }

  onChange = (event)=>{
    // console.log(event.target.value);
    let currItem = {...this.state.currentItem};
    currItem.text = event.target.value;
    currItem.key = Date.now();
    this.setState({currentItem : currItem});
  }
  addItem = async (event)=>{
    event.preventDefault();
    if(this.state.currentItem.text.trim() !== ''){
      let currItem = {...this.state.currentItem};
      this.props.onAddItem(currItem);
    
    }
    this.setState({currentItem : {
      text : '',
      key : 0 
    }})
    // console.log(this.state.items);
  }
  onDelete = (key)=>{
    this.props.onDeleteItem(key);
  }
  render(){
    return(
      <div className="App">
        <h1>To Do App</h1>
        <form onSubmit={this.addItem}>
          <input type="text" onChange={this.onChange} value={this.state.currentItem.text} placeholder="What's your To Do" />
          <button type="submit">Submit</button>
        </form>
        <List onDelete={this.onDelete} items = {this.state.items}></List>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    items : state.items
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onAddItem : (currItem)=> dispatch({type : 'ADD_ITEM', currentItem : currItem}),
    onDeleteItem : (key)=>dispatch({type : 'DELETE_ITEM', key : key})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
