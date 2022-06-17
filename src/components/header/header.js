import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const menu = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

export function Header() {
  return (
    <div className={styles.header}>
      <Typography className={styles.h1}>Messages App</Typography>

      <ul style={{ display: "flex" }}>
        {menu.map((item) => (
          <li key={item.title} className={styles.link}>
            <NavLink to={item.to}  style={{color: 'white', textDecoration: 'none'}} activestyle={{color: 'red', textDecoration: 'none'}}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
