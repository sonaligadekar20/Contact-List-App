import React, { useEffect, useState } from 'react'
import './App.css'
import { phonebook } from '../../data/phonebook'
import ContactCard from '../../components/ContactCard/ContactCard'

function App() {
  const [contacts, setcontacts] = React.useState(phonebook); 
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <h1 className='text-center'>Contact List : {searchTerm}</h1>
      
      <div>
        {contacts.map((contact, index) => {
          const { name, mobile } = contact;

          return <ContactCard key={index} name={name} mobile={mobile} />

        })}
      </div>

    </>
  )
}

export default App