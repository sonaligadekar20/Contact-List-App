import React from 'react'
import './ContactCard.css'

function ContactCard({name, mobile}) {
    return(
        <div className='contact-card'>
            <h2>{name}</h2>
            <span>{mobile}</span>
        </div>
    )
}

export default ContactCard