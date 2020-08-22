import React, {useState} from "react";
import "./App.css";
import Age from "./components/Age";
import Name from "./components/Name";
import Table from './components/Table';

function App() {
  const [sortBy, setsortBy] = useState('');



  const onAgehandle = () => {
    console.log("Age clicked");
    setsortBy('age');
  };

  const onNamehandle = () => {
    console.log("Name clicked");
    setsortBy('name');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee List Table</h1>
        <div className="text-center buttons">
          <Age clicked={onAgehandle}></Age>
          <Name clicked={onNamehandle}></Name>
          <Table sortBy={sortBy}></Table>
        </div>
      </header>
    </div>
  );
}

export default App;
