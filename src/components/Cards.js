import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out this...!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='../images/img-9.jpg'
                        text='Study everything you want to learn'
                        label='Knowledge'
                        path='/services'
                        />
                        <CardItem
                        src='../images/img-2.jpg'
                        text='Write some little programs.'
                        label='Practical'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                        src='../images/img-9.jpg'
                        text='Study everything you want to learn'
                        label='Knowledge'
                        path='/services'
                        />
                        <CardItem
                        src='../images/img-2.jpg'
                        text='Write some little programs.'
                        label='Practical'
                        path='/services'
                        />
                        <CardItem
                        src='../images/img-2.jpg'
                        text='Write some little programs.'
                        label='Practical'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
