import React, { useState, useEffect, useRef } from "react";
import styles from './message.module.css'
import styled from "@emotion/styled";
import { Input, InputAdornment, Button, TextField, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

/*
export function Message({ props1 }) {
    return (
        <div className={styles.wrapper}>
            <h1>
                {props1}
            </h1>
        </div>
    );
}*/
export function FolderList() {
let chats=[
    {name:"User 1", id:0},
    {name:"User 2", id:1},
    {name:"User 3", id:3},
]
        return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
           {chats.map((item)=>(
                       <ListItem>
                       <ListItemAvatar>
                         <Avatar>
                         </Avatar>
                       </ListItemAvatar>
                       <ListItemText sx={{color:"green"}} primary={item.name} secondary={item.id} />
                     </ListItem>
           ))}
      </List>
    );
  }
export const MessageList = () => {
    const [robot, setValue] = useState([]);
    const [currentauthor, setAuthor] = useState("");
    const [currenttext, setText] = useState("");
    const [messages, setMessages] = useState([]);

    const ref = useRef();
    useEffect(() => {
        ref.current?.focus();
      }, []);
    
    const  handleChange =() =>{
        let newMes={author:currentauthor, text:currenttext}
    //    messages.push(newMes)
        setMessages([...messages, newMes]);
      }
      useEffect(() => {
          let timerId=null;
        if (messages.length) {

            ref.current?.focus();
 setValue("Message sent")  

        }
    return()=>{

        timerId=setTimeout(()=>{
            setValue("")  
           },2500) 

    }
      }, [messages]);

    return (
        <div sx={{}}>
          <div className={styles.container} >
          {messages.map((item,index)=>(
            <div style={{margin:'20px'}} className={styles.message} key={index}>
              <Typography sx={{color:"green"}} className={styles.author}>Author: {item.author}</Typography>
              <Typography sx={{color:"gray"}} className={styles.text}> Message: {item.text}</Typography>
              </div>
          ))}
          </div>
          <div className={styles.area} style={{margin:'20px'}}>
                <TextField inputRef={ref} className={styles.input} placeholder="Author" type="text" value={currentauthor} onChange={(e) => setAuthor(e.target.value)} />
          <TextField className={styles.input}  placeholder="Message" type="text" value={currenttext} onChange={(e) => setText(e.target.value)}/>
        <Button  variant="outlined"  className={styles.button} onClick={handleChange}>
        Add
        </Button>
        <Typography sx={{color:"green"}} className={styles.robot}>{robot}</Typography>
     
        </div>
        </div>
        );

}
