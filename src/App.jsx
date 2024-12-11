import React from 'react';
import { ContactsProvider } from './context/ContactsContext';
import Header from "./Templates/Header"

function App() {
  return (
    <ContactsProvider>
      <Header />
    </ContactsProvider>
  );
}

export default App;
