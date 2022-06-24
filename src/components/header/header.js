import { Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useContext } from "react";
import { Link } from "react-router-dom";


const menuWithSession = [
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

const menuWithoutSession = [
  { title: "SignUp", to: "/sign-up" },
  { title: "Login", to: "/login" },
  { title: "Home", to: "/" },
];

export function Header({ session }) {
  return (
    <div className={styles.header}>
      <div className={styles.right}>
      <Typography className={styles.h1}>Messages App</Typography>

      {!!session && (
          <Button style={{color:"white"}}
            onClick={() => signOut(auth)}
           
          >
            out
          </Button>
        )}
</div>
      <ul style={{ display: "flex" }}>
       
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {!!session &&
              menuWithSession.map(({ to, title }) => (
                <Button
                  key={title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={to}>
                    {title}
                  </Link>
                </Button>
              ))}

            {!session &&
              menuWithoutSession.map(({ to, title }) => (
                <Button
                  key={title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={to}>
                    {title}
                  </Link>
                </Button>
              ))}
          </Box>
      </ul>
    </div>
  );
}
