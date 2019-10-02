import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div `
border: 1px solid red;
width: 80%;
margin: 15% auto;
padding: 3rem;
border-radius: 5%;

.card{
    display: flex;
    justify-content: space-around;
    align-items: center;
    

    .profile-image{
        width: 40%;
        height: 80%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .profile-info{
        width: 55%;
        padding-left: 10rem;
    }
}



`

  class UserCard extends React.Component {
     render(){
         const {user} = this.props
         return (
             <StyledDiv>
             <div className='card'>  
                <div className = "profile-image"> 
                 <img src={user.avatar_url} alt={'user'}/>
                 </div>
                 <div className='profile-info'>
                     <h3 className='name'>{user.name}</h3>
                     <p className='username'>{user.login}</p>
                     <p>{'Location: ' + user.location}</p>
                     <p>{'Followers: ' + user.followers}</p>
                     <p>{'Following: ' + user.following}</p>
                     <p>{'Bio: ' + user.bio}</p>
                     <p>{'Profile: '}<a href={user.html_url}>{user.html_url}</a></p>
                 </div>    
             </div>
             </StyledDiv>
         )
     }
 }

  export default UserCard; 