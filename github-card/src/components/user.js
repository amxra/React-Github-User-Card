import React from 'react';
 import axios from 'axios';
 import UserCard from './UserCard';

  class User extends React.Component {

      componentDidMount() {
         axios.get(`https://api.github.com/users/amxra`)
         .then(response => {
             this.props.setMainUser(response.data)
         })
         .catch(err => {
             console.log(err.message)
         })
     }

      render() {
         return (
             <UserCard user={this.props.user}/>
         )
     }
 }

  export default User; 