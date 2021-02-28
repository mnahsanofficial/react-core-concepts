import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[{name:'Photoshop',price:'$99.99'},
  {name:'Illustrator',price:'$69.99'},{name:'Photoshop3',price:'$199.99'}
  ,{name:'PDF',price:'$299.99'},{name:'PDF5',price:'$299.99'}
]
// const productName=products.map(product=>product)
// console.log(productName)

  return (
    <div className="App">
      <header className="App-header">
         
        <p>
          I am a react person
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
          products.map(product=><li>{product.name}</li>)
        }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)

        }

        
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product product={products[0]}></Product> */}
        {/* <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[3].name} price={products[3].price}></Product> */}


       {/* <Person name="Munna" job="football"></Person>
       <Person name="Masum" job="Supporter"></Person>
       <Person name="Ahsan" job="student"></Person> */}
         
          
      </header>
    </div>
  );
}
function Users() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}: {user.phone}</li>)
        }
      </ul>
    </div>
  )
  
}




function Counter() {
  const[count,setCount ]=useState(0);
  const handleIncrease=()=>{
    const newCount=count+1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
  
}
function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left'
  }
  const {name,price}=props.product;
  

  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>

    </div>
  )
  
}



function Person(props) {
  return(
    <div style={{border:'2px solid gold',width:'400px'}}>
      <h3>My Name:{props.name}</h3>
      <p>My profession:{props.job}</p>
    </div>
  )
  
}

export default App;
