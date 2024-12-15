import { v4 } from "uuid";
import { useContacts } from "../context/ContactsContext";
import { IoIosPersonAdd } from "react-icons/io";

import React from "react";
import * as Yup from "yup"; 

import inputs from "../Services/inputs";
import styles from "./AddContacts.module.css";

function AddContacts() {
  const { state, dispatch } = useContacts();
  const [alert, setAlert] = React.useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(7, "Please enter at least 7 characters.")
      .max(30, "You can enter a maximum of 30 characters.")
      .required("Please enter the contact name."),
    email: Yup.string()
      .email("Enter a valid email.")
      .required("Please enter the contact's email."),
    job: Yup.string()
      .max(30, "You can enter a maximum of 30 characters."),
    phone: Yup.string()
      .required("Please enter the contact's phone.")
      .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits."), 
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch({ type: 'SET_CONTACT', payload: { ...state.contact, [name]: value } });
  };

  const addHandler = async () => {
    const { name, email, job, phone } = state.contact;

    try {
      await validationSchema.validate({ name, email, job, phone }, { abortEarly: false }); 
      setAlert(""); 

      const newContact = { ...state.contact, id: v4() };
      dispatch({ type: 'ADD_CONTACT', payload: newContact }); 
      
      dispatch({ type: 'SET_CONTACT', payload: { name: "", email: "", job: "", phone: "" } });
      
      dispatch({ type: "TOGGLE_COMPONENT" });
    } catch (error) {
      const errors = error.errors.join(", "); 
      setAlert(errors); 
    }
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
        <IoIosPersonAdd fontSize="1.5rem" color="#0a0455" />
      </button>
      {alert &&(
        <div className={styles.alert}><p>{alert}</p> </div>
      )} 
    </div>
  );
}

export default AddContacts;
