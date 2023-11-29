import logo from './logo.svg';
import './App.css';
//import StatusBar from './OnlineStatusBar';
import { StatusBar2 } from './OnlineStatusBar';
//import SaveButton from './SaveButton';
import { SaveButton2 } from './SaveButton';
//import Form from './Form';
import { Form2 } from './Form';

//RLWCH: reusing logic with custom hooks
//https://react.dev/learn/reusing-logic-with-custom-hooks

//React apps are built from components, which are built from Hooks, whether built-in or custom.
function App() {
  return (
    <div className="App">
      <StatusBar2 />
      <SaveButton2 />
      <br>
      </br>
      <Form2 />
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
    </div>
  );
}

export default App;
