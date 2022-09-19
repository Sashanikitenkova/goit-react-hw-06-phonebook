import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";

  export const contactSlice = createSlice({
    name: 'contacts',

    initialState: {
      contacts: {
        items: [],
        filter: ''
      }
    },

    reducers: {
      addContact(state, action) {
        console.log(state);
        console.log(action);


        state.contacts.items.push({ 
          id: nanoid(), 
          name: action.payload.name, 
          number: action.payload.number,
        })
      },
      removeContact(state, action) {

      },
      filterContact(state, action) {

      },
      
      
    },
  });
  
  export const { addContact, removeContact, filterContact } = contactSlice.actions;
  
  export default contactSlice.reducer;