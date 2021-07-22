import React from 'react'

export default function UserCard(props) {
    console.log(props.myUser);
    return (
        <div>
            
            <img src={props.myUser[0].avatar} alt={props.myUser[0].name}/>
            <h1>{props.myUser[0].name}</h1>
            <p><strong>Location:</strong> {props.myUser[0].location}</p>
            <p><strong>FoodType:</strong> {props.myUser[0].foodType}</p>
            <p><strong>Age:</strong> {props.myUser[0].age}</p>
            <p><strong>Likes:</strong> {props.myUser[0].likes}</p>
            <p><strong>Twitter:</strong> <a href={`https://twitter.com/@${props.myUser[0].twitterUsername}`}>@{props.myUser[0].twitterUsername}</a></p>


            <img src={props.myUser[1].avatar} alt={props.myUser[1].name}/>
            <h1>{props.myUser[1].name}</h1>
            <p><strong>Location:</strong> {props.myUser[1].location}</p>
            <p><strong>FoodType:</strong> {props.myUser[1].foodType}</p>
            <p><strong>Age:</strong> {props.myUser[1].age}</p>
            <p><strong>Likes:</strong> {props.myUser[1].likes}</p>
            <p><strong>Twitter:</strong> <a href={`https://twitter.com/@${props.myUser[1].twitterUsername}`}>@{props.myUser[1].twitterUsername}</a></p>
            
            
            
        </div>
    )
}
