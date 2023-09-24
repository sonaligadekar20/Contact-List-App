import React, { useEffect, useState } from 'react'
import './App.css'
import { phonebook } from '../../data/phonebook'
import ContactCard from '../../components/ContactCard/ContactCard'

function App() {
  const [contacts, setcontacts] = React.useState(phonebook); 
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredContacts = phonebook.filter((contact) => {
      const name = contact.name.toLowerCase();
      const mobile = contact.mobile.toString();

      const query = searchTerm.toLocaleLowerCase();

      return (name.includes(query) || mobile.includes(query))
    })
    setcontacts(filteredContacts);
  }, [searchTerm])

  return (
    <>
      <h1 className='text-center'>CONTACT LIST ☎️ : {}</h1>
      <input type='text'
        placeholder='Search'
        className='search'
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
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