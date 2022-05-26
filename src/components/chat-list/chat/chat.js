import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
//import styled from "@emotion/styled";
import styles from "./chat.module.css";


export function Chat({ title, selected }) {
  return (
    <ListItem className={styles.item} button={true} selected={selected}>
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        <ListItemText className={styles.text} primary="author: last message" />
      </div>
    </ListItem>
  );
}
