import {Component} from 'react';
import './App.css';

import {CardList} from './Components/card-lists/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  // own class methods
  hadleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  // life cycle methods
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => 
        this.setState({monsters: users})
      );
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1 className="title-heading">Monsters Rolodex</h1>
        <SearchBox 
          placeholder = "Search Monsters..."
          changeEventHandle = { this.hadleChange }
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
