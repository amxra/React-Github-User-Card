import React from 'react';
import './App.css';
import Person from "./components/person";
import User from "./components/user";
import axios from "axios";
import styled from "styled-components";

const MainStyle = styled.div `
  text-align: center;
  margin-top: 3rem;
  
  h1{
    color: red;
  }

`



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
      <MainStyle>
      <div>
        <h1>GitHub User Card</h1>
        <User setMainUser={this.setMainUser}
         user={this.state.mainUser}/>
         <Person setUsers={this.setUsers}
         addCard={this.addCard}
         users={this.state.users}/>
      </div>
      </MainStyle>
    )
  }
}

export default App;
