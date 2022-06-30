// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import UserCard from './components/UserCard';
import users from './users';

function App() {

  return (

    <div className="container">
      <h1>Users at elm street </h1>
      <div className="user">
        {users.map(user => < UserCard user={user} />)}
      </div>

    </div>



  );
}

export default App;
