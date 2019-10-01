import React from 'react';
import './App.css';
import Person from "./components/person";
import User from "./components/user";
import axios from "axios"



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mainUser: {},
      person: []
    }
  }

   setUsers = (dbUsers) => {
    this.setState({
      person: dbUsers
    })
  }

   setMainUser = (user) => {
    this.setState({
      mainUser: user
    })
  }

   addCard = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
        this.setState(currentState => ({
          person: [...currentState.person, response.data]
        }))
      })
      .catch(err => {
        return err
      })
  }





  render(){
    return (
      <div className = "app">
        <h2>GitHub Card</h2>
        <User setMainUser={this.setMainUser}
         user={this.state.mainUser}/>
         <Person setUsers={this.setUsers}
         addCard={this.addCard}
         users={this.state.users}/>

      </div>
    )
  }
}

export default App;
