import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile, updateProfile } from "../store/profile";
import { Checkbox, FormControlLabel, Typography} from "@mui/material";
import {Form, Profile} from "../components";

export const ProfilePage = () => {

  return (
    <div>
     <Profile/>
    </div>
  );
};
