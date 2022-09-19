import { useState } from "react";
import { nanoid } from "nanoid";

export function App() {
  const [todos, setTodos] = useState([]);
  const[text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          text,
        }
      ])
    }
    setText('');
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

    return (
        <div>
         <label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={addTodo}> Add todo</button>
         </label>

         <ul>
          {todos.map(todo => <li key={todo.id}>
            <span>{todo.text}</span>
            <button type='button' onClick={() => removeTodo(todo.id)}>delete</button>
          </li>)}
         </ul>
        </div>
    );
};


// import React, {useState, useEffect} from "react";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { nanoid } from "nanoid";
// import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";


// export function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const constant = localStorage.getItem('contacts');
//     const parsedConstant = JSON.parse(constant);

//     if(parsedConstant) {
//       setContacts(parsedConstant);
//     }
//   }, []);

//   useEffect(() => {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const formSubmit  = ({name, number}) => {
//     const findName = contacts.find(contact => 
//       contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (findName) {
//       return alert(`${name} is already in contacts.`);
//     };

//     const findNumber = contacts.find(contact => 
//       contact.number === number
//     );
//     if (findNumber) {
//       return alert(`This phone number is already in use.`);
//     };

//     setContacts(contacts => [...contacts, { id: nanoid(), name, number }]);
//   }

//   const deleteContact = contactId => {
//     setContacts(contacts => 
//       contacts.filter(contact => contact.id !== contactId));
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const filterContacts = () => {
//     return contacts.filter(constant =>
//       constant.name.toLowerCase().includes(filter.toLowerCase()));
//   };

//     return (
//         <div>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={formSubmit}/>
          
//           <h2>Contacts</h2>

//           <Filter 
//              filter={filter}
//              onChange={changeFilter}
//           />

//           <ContactList 
//              contacts={filterContacts()}
//              onClick={deleteContact}
//           />
           
//         </div>
//     );
// };







