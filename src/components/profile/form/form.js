import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile, updateProfile } from "../../../store/profile";
import styles from "./form.module.css";
import { TextField, Button} from "@mui/material";
import React, { useState, useEffect, useRef, useCallback  } from "react";

export const Form = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleChange = useCallback(
    ()=>{
      
     let newMes={name:name, surname:surname}
     dispatch(updateProfile(newMes))
    },
  );

  return (
    <div className={styles.wrapper}>
        <div className={styles.footer}>
      <div className={styles.area} style={{margin:'20px'}}>
      <TextField className={styles.input} placeholder="Author" type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      <TextField className={styles.input}  placeholder="Message" type="text" value={surname}  onChange={(e) => setSurname(e.target.value)} />
      </div>
    <Button  variant="outlined"  className={styles.button} onClick={handleChange} >
    Add
    </Button>
    </div>
    </div>
    );
}

