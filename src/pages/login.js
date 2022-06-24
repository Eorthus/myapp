import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { TextField, Button} from "@mui/material";
import styles from "./pages.module.css";


const onSubmit = (form) => {
  return signInWithEmailAndPassword(auth, form.email, form.password);
};

export const LoginPage = () => {
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
      <h1 className={styles.title}>login</h1>
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
      <Button className={styles.button}  onClick={() => onSubmit(form)}>login</Button>
      </div>
    </div>
  );
};
