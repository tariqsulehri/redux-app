import React, {Component} from 'react';
import {createStore, combineReducers } from 'redux'

const expenseReducerDefaultState = [];

const expenseReducer = ((state=expenseReducerDefaultState , action)=>{
     switch(action.type){

      default:
         return state; 
     }
});

const filterReducerDefaultState = {
      text :'',
      sortBy:'',
      startDate : undefined,
      endDate :  undefined
};

const filterReducer = ((state=filterReducerDefaultState , action)=>{
     switch(action.type){

      default:
         return state; 
     }
});



const store = createStore(
     combineReducers({
        expense : expenseReducer,
        filters : filterReducer
     })
);

const demoState ={
      expenses:[{
          id:  '122abc',
          description : 'January Rent',
          note :  'this is fincal payment of this address',
          amount :  54500,
          createdAt:0
      }],
      filters:{
          text :'rent',
          sortBy:'amount',
          startDate : undefined,
          endDate :  undefined
      }
}


console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
});




class App extends Component {
  render() { 

    return ( 
        <div>Sample React App</div>
     );
  }
}

export default App;  