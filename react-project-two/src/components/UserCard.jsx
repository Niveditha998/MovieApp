import React from 'react'
import cmich from '../assets/cmich.svg'
import "./UserCard.css"


const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src ={props.image} alt={props.name}></img>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
