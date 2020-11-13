import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
    border: 1px black solid;
    border-radius: 5px;
    box-shadow: 2px 3px 3px gray;
    margin: 2%;
    padding: 2%;
    background-color: #404040;
    color: white;
    width: 40%;
    height: fit-content;
`

const User = ({details}) => {

    if (!details) {
        return <h3>Loading new user information...</h3>
    }
    return (
        <UserCard>
            <div className= 'userContainer'>
                <div className="userInfo">
                    <h2>{details.name}</h2>
                    <p>Email: {details.email}</p>
                    <p>Status: {details.status}</p>
                    <p>Role: {details.role}</p>
                </div>
            </div>
        </UserCard>
    )
}

export default User
