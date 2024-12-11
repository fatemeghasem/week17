import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdOutlineSaveAlt } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { TbUserCancel } from "react-icons/tb";
import styles from "./ContactList.module.css";
import inputs from "../Services/inputs";
import { useContacts } from "../context/ContactsContext";

function ContactsList({ toggleContactSelection, search, isVisible }) {
  const { state, dispatch } = useContacts();
  const [showM, setShowM] = useState(false);
  const [contactId, setContactId] = useState(null);

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    setShowM(false);
  };

  const editeHandler = (contact) => {
    dispatch({
      type: "SET_EDIT_CONTACT",
      payload: { id: contact.id, contact },
    });
  };

  const changeHandle = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_EDITED_CONTACT", payload: { [name]: value } });
  };

  const saveEdit = () => {
    dispatch({ type: "SAVE_EDIT" });
  };


  const filteredContacts = state.contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search) ||
      contact.email.toLowerCase().includes(search) ||
      contact.phone.toString().includes(search) ||
      contact.job.toString().includes(search)
  );

  return (
    <div className={styles.container}>
      {state.editContactId ? (
        <div className={styles.container3}>
          <h3>Edit Contact</h3>
          {inputs.map((input, index) => (
            <div
              key={input.id}
              className={index % 2 === 0 ? styles.even : styles.odd}
            >
              <label htmlFor={input.id}>{input.label}</label>
              <input
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={state.editedContact[input.name]}
                onChange={changeHandle}
              />
            </div>
          ))}
          <div className={styles.btn}>
            <button onClick={saveEdit}>
              <MdOutlineSaveAlt fontSize="1.5rem" color="#754608" />
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "SET_EDIT_CONTACT",
                  payload: { id: null, contact: {} },
                })
              }
            >
              <TbUserCancel fontSize="1.5rem" color="#754608" />
            </button>
          </div>
        </div>
      ) : (
        <>
          {filteredContacts.length ? (
            <ul>
              {filteredContacts.map((contact, index) => (
                <li
                  key={contact.id}
                  className={index % 2 === 0 ? styles.even : styles.odd}
                >
                  <input
                    type="checkbox"
                    style={{ display: isVisible ? "block" : "none" }}
                    onChange={() => toggleContactSelection(contact.id)}
                  />
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                  <p>{contact.job}</p>
                  <p>{contact.phone}</p>
                  <button
                    onClick={() => {
                      setShowM(true);
                      setContactId(contact.id);
                    }}
                  >
                    <BsTrash fontSize="1.5rem" color="#754608" />
                  </button>
                  <button onClick={() => editeHandler(contact)}>
                    <TbUserEdit fontSize="1.5rem" color="#754608" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.listp}>No Contact Yet!</p>
          )}
          {showM && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <h1>Are you sure ?</h1>
                <button onClick={() => setShowM(false)}>No</button>
                <button onClick={() => deleteContact(contactId)}>Yes</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ContactsList;
