import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile, profileSelector} from "../../store/profile";
import { Checkbox, FormControlLabel, Typography} from "@mui/material";
import {Form} from "./form";
import styles from "./porfile.module.css";
import {  useMemo } from "react";

export const Profile = () => {
  //const profile = useSelector((state) => state.profile);
  const selector = useMemo(() => profileSelector(), []);
  
  const profile = useSelector(selector);

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper} >
     <Typography className={styles.title} style={{margin:'20px'}}>Profile Page</Typography>  
     <div className={styles.info} style={{margin:'20px'}}>    
     <Typography className={styles.name}>Name: {profile.firstName}</Typography> 
     <Typography className={styles.surname}>Surname: {profile.lastName}</Typography> 
  
           <FormControlLabel control={<Checkbox
  onChange={() => dispatch(toggleVisibleProfile())}
 
/>} label="Change Name" />
</div>
{profile.isVisibleProfile && (
        <div className={styles.form}>
           <Form/>
        </div>
      )}
    </div>
  );
};
