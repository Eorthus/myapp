import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
//import styled from "@emotion/styled";
import styles from "./chat.module.css";
import { useSelector } from "react-redux";

export function Chat({ title, selected, deleteConversationByName }) {
  const message = useSelector((state) => {
    const messages = state.messages.messages[title] ?? [];
console.log(messages)
    return messages[messages.length-1];
  });

  return (
    <ListItem className={styles.item} button={true} selected={selected}>
      <ListItemIcon>
      <button className={styles.delbut} onClick={(e) => deleteConversationByName(title, e)}>X</button>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        {message && (
          <ListItemText
            className={styles.text}
            primary={`${message.author}: ${message.message}`}
          />
        )}
      </div>
    </ListItem>
  );
}
