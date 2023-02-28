import React from 'react'
import { services } from '../data'
import {Card } from "./Card"

export const Services = () => {
  return (
    <div id='services'>
        <div className='services'>
            <h2>UNSERE DIENSTE</h2>
            <div className='card--section'>
                {services.map((item, index) => {
                    return <Card title={item.title} image={item.image}/>
                })}
            </div>

        </div>
    </div>
  )
}
