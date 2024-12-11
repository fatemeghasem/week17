import { BsTrash } from "react-icons/bs";
import { IoIosPersonAdd } from "react-icons/io";
import { useContacts } from "../context/ContactsContext";

import AddContacts from "../components/AddContacts";
import ContactsList from "../components/ContacstList";
import Modal from "../components/Modal";

import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const { state, dispatch } = useContacts();
  const [isVisible,setIsVisible]=useState (false)

  const addContact = (newContact) => {
    dispatch({ type: "ADD_CONTACT", payload: newContact });
  };

  const searchHandler = (e) => {
    dispatch({
      type: "SET_SEARCH",
      payload: e.target.value.toLowerCase().trim(),
    });
  };

  const toggleContactSelection = (id) => {
    dispatch({ type: "TOGGLE_CONTACT_SELECTION", payload: id });
  };

  const deleteSelectedContacts = () => {
    dispatch({ type: "DELETE_SELECTED_CONTACTS" });
    setIsVisible(!isVisible)
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <p>Searching Contacts:</p>
          <input
            type="text"
            placeholder="search"
            onChange={searchHandler}
            value={state.search}
          />
          <div className={styles.addbtn}>
            <button className={styles.btn} onClick={deleteSelectedContacts}>
              <BsTrash fontSize="1.5rem" color="#6db7da" />
            </button>
            <button
              className={styles.btn}
              onClick={() => dispatch({ type: "TOGGLE_COMPONENT" })}
            >
              <IoIosPersonAdd fontSize="1.5rem" color="#6db7da" />
            </button>
          </div>
        </div>
      </div>
      {state.showComponent && (
        <AddContacts/>
      )}
      <ContactsList
        toggleContactSelection={toggleContactSelection}
        search={state.search}
        isVisible={isVisible}
      />
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: "SET_MODAL", payload: true })}
        style={{
          display:  isVisible  ? "block" : "none",
        }}
      >
        <BsTrash fontSize="1.5rem" color="#754608" />
      </button>
      {state.showModal && (
        <Modal
          setShowModal={(show) =>
            dispatch({ type: "SET_MODAL", payload: show })
          }
          setIsVisible={setIsVisible}
          deleteSelectedContacts={deleteSelectedContacts}
        />
      )}
    </>
  );
}

export default Header;
