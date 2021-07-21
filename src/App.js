
import './App.css';
import { useState, useEffect } from 'react';

const products = [{name:"photoshop",price:'$40'},
{name:'Figma', price:"$20"},
{name:'illustrator',price:'$30'},
{name:'adobe premiere pr0',price:"$20"}];



function Paragraph(props){
  const producStyle = {
    border:'1px solid red',
    backgroundColor:'lightsalmon',
    width:400,
    height:300,
    float: 'left',
    margin:'2px',
    padding:'5px'


  }
  const[count,setCount] = useState(0);
  
let countValue = () =>{
  let value = count+1 ;
  setCount(value);
}
  return(
  
   <div style={producStyle}>
     
     <h1>{props.product.name}</h1>
    <h3>{props.product.email}</h3>
  <h6>{props.product.phone}</h6>
  <h4>{count}</h4>
    <button onClick={()=>{countValue()}}>Buy now</button>
   </div>
  )
};
function Users (){
  const [users ,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
  },[])
  return(
    <div>
     {
       users.map(user=> <Paragraph product={user}></Paragraph>)
     }
    </div>
  )
}


function App(data) {

  return (
    <div>
      <Users></Users>
      {
       products.map(product =><Paragraph product={product}></Paragraph>)
      }
      
       
      
    </div>
  );
}

export default App;
