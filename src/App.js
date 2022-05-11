import axios from 'axios';
import React from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';


function App() {
  const [word, setWord] = React.useState("");
  const [meanings, setMeanings] = React.useState([]);
  const [category, setCategory] = React.useState("en");

const dicAPI = async() => {
try {
  const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
  setMeanings(data.data)
  console.log(data);

} catch (error) {
  console.log(error, 'didnt work');
}
}

const handleClick = () => {
  dicAPI()
}

  return (
    <div className="App">
     <Header 
     setWord={setWord}
     category={category}
     setCategory={setCategory}
     word={word}
     setMeanings={setMeanings}
     handleClick={handleClick}
     />
     <Definitions setMeanings={setMeanings} meanings={meanings}/>
    </div>
  );
}

export default App;
