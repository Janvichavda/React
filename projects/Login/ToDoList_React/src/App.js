import logo from './logo.svg';
import './App.css';
import './index.css';
import { MDBSelect } from 'mdb-react-ui-kit';
import Logout from './To-do'
import New from './Todoapp'
import Letsdoit from './NEWTODO'
import React from 'react';
// import Todoapp from './Todoapp'


const App = () => {
  return (
    <>
      {/* <Todoapp /> */}
      {/* <New /> */}
      <Letsdoit />

      {/* <Logout /> */}
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>

  );
}

export default App;
