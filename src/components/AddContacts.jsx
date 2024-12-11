import { v4 } from "uuid";
import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import inputs from "../Services/inputs";
import styles from "./AddContacts.module.css";
import { useContacts } from "../context/ContactsContext";

function AddContacts() {
  const { state, dispatch } = useContacts();
  const [alert, setAlert] = React.useState("");

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch({ type: 'SET_CONTACT', payload: { ...state.contact, [name]: value } });
  };

  const addHandler = () => {
    const { name, email, job, phone } = state.contact;

    if (!name || !email || !job || !phone) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...state.contact, id: v4() };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    
  
    dispatch({ type: 'SET_CONTACT', payload: { name: "", email: "", job: "", phone: "" } });
    
    dispatch({ type: "TOGGLE_COMPONENT" });
  };

  return (
    <div className={styles.container2}>
      <div>
        {inputs.map((input, index) => (
          <div key={index} className={index % 2 === 0 ? styles.even : styles.odd}>
            <label htmlFor={input.id}>{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={state.contact[input.name]}
              onChange={changeHandler}
            />
          </div>
        ))}
      </div>
      <button onClick={addHandler}>
        <IoIosPersonAdd fontSize="1.5rem" color="#754608" />
      </button>
      <div>{alert && <p>{alert}</p>}</div>
    </div>
  );
}

export default AddContacts;