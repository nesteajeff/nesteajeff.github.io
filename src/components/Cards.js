import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Check out these EPIC destinations!
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src =  'images/img-9.jpg'
                        text = "explore the hidden waterfall deep inside the Amazon jungle"
                        label = "adventure"
                        path="/aboutme"
                        />
                        <CardItem 
                        src =  'images/img-2.jpg'
                        text = "jj gaming:)"
                        label = "best youtuber!"
                        path="/aboutme"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src =  'images/img-3.jpg'
                        text = "hey john"
                        label = "CENA"
                        path="/aboutme"
                        />
                        <CardItem 
                        src =  'images/img-4.jpg'
                        text = "yurrrr"
                        label = ""
                        path="/aboutme"
                        />
                        <CardItem 
                        src =  'images/img-8.jpg'
                        text = ""
                        label = "poop!"
                        path="/aboutme"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
