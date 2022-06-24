import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { Button} from "@mui/material";
import styles from "./pages.module.css";

const onSubmit = (form) => {
  return createUserWithEmailAndPassword(auth, form.email, form.password);
};

export const SignUpPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    if (!!field) {
      setForm({
        ...form,
        [field]: e.target.value,
      });
    }
  };

  return (
    <div className={styles.wrapper}>
    <h1 className={styles.title}>sign up</h1>
<div className={styles.form}>
<input className={styles.input} 
        placeholder="email"
        value={form.email}
        data-name="email"
        onChange={handleChangeForm}
      />
     <input className={styles.input} 
        placeholder="password"
        value={form.password}
        data-name="password"
        onChange={handleChangeForm}
      />
      <Button className={styles.button} onClick={() => onSubmit(form)}>sign up</Button>
      </div>
    </div>
  );
};
