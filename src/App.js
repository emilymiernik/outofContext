import './App.css';
import axios from 'axios';
import {useEffect} from 'react'

//Make two API calls  
//Make HTML foundation 
//Make Search Bar Component 
//Make a Footer Component 
//Make a Bottom Nav 
//Router/Routes/Route 
//set up Use State, Use Effect 
//Incorporate Firebase 

function App() {
    useEffect(() => {
      const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
      axios({
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          api_key: apiKeyMov, 
          query: `Toy Story 2`, 
        }
      }).then((response) => {
        console.log(response.data.results)
      })
    }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
