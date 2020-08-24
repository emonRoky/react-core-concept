import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {
  const products = [
    {name:'photoshop',price:'$90'},
    {name:'pdf Reader',price:'$80'},
    {name:'illusteter',price:'$50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        
        <p>reatc basic</p>
        <Counter></Counter>
        <Person name="Roky"></Person>
        <Person></Person>
        <Users></Users>
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product> */}
        {
          products.map(pd =><Product product={pd}></Product>)

        }
       
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handelEventListner = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h2>count: {count}</h2>
      <button onClick = {()=> setCount(count-1)}>decrease</button>
      <button onClick = {handelEventListner}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dainamic data :{users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const ProductStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'blue',
    height:'300px',
    width:'300px'
  }
  const {name,price} = props.product
  return(
    <div style={ProductStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>buy now</button>
    </div>
  )
}
function Person(props){
  const PersonStyle ={
    border :'2px solid red',
    margin:'10px',

  }
  // we can also add css this way
  // style={{border :'2px solid red',margin:'10px'}}

  return (
    <div className="divClassName" style={PersonStyle}>
              <h2>Name : {props.name}</h2>
              <h4>This is H4</h4>
          </div>
  )
}

export default App;
