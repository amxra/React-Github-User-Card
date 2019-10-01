import React from 'react';
 import axios from 'axios';
 import UserCard from './userCard';


  class Person extends React.Component {

      componentDidMount() {
         axios.get(`https://api.github.com/users/amxra/followers`)
         .then(response => {
             let followers = response.data
             followers.forEach(follower => {
                 this.props.addCard(follower.login)
             })
         })
         .catch(err => {
             console.log(err.message)
         })
     }

      render() {
         const {person} = this.props;
         return(
             <div>
                 {person? person.map(user => (
                     <UserCard user={user}/>
                 )): null }
             </div>
         )
     }
 }

  export default Person; 