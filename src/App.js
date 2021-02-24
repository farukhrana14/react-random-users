// import logo from './logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Users>    </Users>
      </header>














    </div>
  );
}


function Users() {
  const personStyle = {
    border: '5px solid white',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
    width: '550px',
    display: 'inline-grid',
  }
 
  const imgStyle = {
    borderRadius: '10px',
  }

  const divImgStyle = {
    textAlign: 'right',
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch('https://randomuser.me/api/?results=50')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  console.log(users);

  return (
    <div>
      <div><h3>Random Users: {users.length}</h3></div>
      <div>
        {users.map(user => <div style={personStyle}> <div style={{textAlign:'left'}} >Name: {user.name} <br/> Email: {user.email} <br/>Phone: {user.phone} <br/>Website: {user.website} <br/> Company: {user.company.name} <br/> City: {user.address.city} </div>  <div style={divImgStyle}> <img style={imgStyle} src={"https://via.placeholder.com/150"} /> </div>  </div>)}
      
        
      </div>


    </div>


  )

}



export default App;
