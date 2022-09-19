import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";

  export const contactSlice = createSlice({
    name: 'contacts',

    initialState: {
      contacts: [],
    },

    reducers: {
      addContact(state, action) {
        // console.log(state);
        console.log(action);


        state.contacts.push({ 
            id: nanoid(),
            name: action.payload.name, 
            number: action.payload.number,
          })
      },
      removeContact(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);

      },
      filterContact(state, action) {

      },
      
      
    },
  });
  
  export const { addContact, removeContact, filterContact } = contactSlice.actions;
  
  export default contactSlice.reducer;