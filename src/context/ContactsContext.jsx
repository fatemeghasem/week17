import  { createContext, useReducer, useContext } from 'react';


const ACTIONS = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_SELECTED_CONTACTS: 'DELETE_SELECTED_CONTACTS',
  TOGGLE_CONTACT_SELECTION: 'TOGGLE_CONTACT_SELECTION',
  SET_SEARCH: 'SET_SEARCH',
  TOGGLE_COMPONENT: 'TOGGLE_COMPONENT',
  SET_MODAL: 'SET_MODAL',
  SET_CONTACT: 'SET_CONTACT',
};


const initialState = {
  editContactId:null,
  editedContact:{
    name:"",
    email: "",
    job: "",
    phone: "",
  },
  search: '',
  showComponent: false,
  contacts: [],
  selectedContacts: [],
  showModal: false,
  contact: {
    name: "",
    email: "",
    job: "",
    phone: "",
    id: "",
  },
};


const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case ACTIONS.DELETE_SELECTED_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(contact => !state.selectedContacts.includes(contact.id)),
        selectedContacts: [],
      };
    case ACTIONS.TOGGLE_CONTACT_SELECTION:
      return {
        ...state,
        selectedContacts: state.selectedContacts.includes(action.payload)
          ? state.selectedContacts.filter(id => id !== action.payload)
          : [...state.selectedContacts, action.payload],
      };
    case ACTIONS.SET_SEARCH:
      return { ...state, search: action.payload };
    case ACTIONS.TOGGLE_COMPONENT:
      return { ...state, showComponent: !state.showComponent };
    case ACTIONS.SET_MODAL:
      return { ...state, showModal: action.payload };
    case ACTIONS.SET_CONTACT:
      return { ...state, contact: action.payload };
      case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'DELETE_CONTACT':
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
    case 'SET_EDIT_CONTACT':
      return { ...state, editContactId: action.payload.id, editedContact: action.payload.contact };
    case 'SAVE_EDIT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === state.editContactId ? state.editedContact : contact
        ),
        editContactId: null,
        editedContact: initialState.editedContact,
      };
    case 'CHANGE_EDITED_CONTACT':
      return { ...state, editedContact: { ...state.editedContact, ...action.payload } };
    default:
      return state;
  }
};


const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  return useContext(ContactsContext);
};