import React, { useState, useEffect, useRef, useCallback, useMemo  } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from './message.module.css'
import styled from "@emotion/styled";
import classNames from "classnames";
import { sendMessage, messagesSelector } from "../../store/messages";
import { Input, InputAdornment, Button, TextField, Typography } from "@mui/material";
/*
  const getBotMessage = () => ({
    currentauthor: "Bot",
    currenttext: "Hello from bot",
    date: new Date(),
  });

  const getBotAnswer = (message) => {
    const answers = {
      "Hello": "Hello",
      "Hi": "Hi",
    };
    return answers[message] || "not found answer";
  };*/
export const MessageList = () => {
    const { roomId } = useParams();
    const [currentauthor, setAuthor] = useState("");
    const [currenttext, setText] = useState("");
    const dispatch = useDispatch();

    const selector = useMemo(() => messagesSelector(roomId), [roomId]);
  
    const messages = useSelector(selector);

    const ref = useRef();
      useEffect(() => {
        if (ref.current) {
          ref.current.scrollTo(0, ref.current.scrollHeight);
        }
      }, [messages]);

      
    const handleChange = useCallback(
      (currentauthor, currenttext)=>{
        if (currenttext) {
          dispatch(sendMessage(roomId, {message:currenttext, author:currentauthor }));
          setAuthor("");
          setText("");
        }

      },
      [dispatch, roomId]
    );
/*
    useEffect(() => {
      const messages = messageList[roomId] ?? [];
      const lastMessage = messages[messages.length - 1];
      let timerId = null;
  
      if (messages.length && lastMessage?.currentauthor !== "Bot") {
        timerId = setTimeout(() => {
          handleChange("Bot", getBotAnswer(lastMessage.currenttext));
        }, 500);
      }
  
      return () => {
        clearInterval(timerId);
      };
    }, [handleChange, messageList, roomId]);
*/
    const handlePressInput = ({ code }) => {
      if (code === "Enter") {
        handleChange(currentauthor, currenttext);
      }
    };
 //   const messages = messageList[roomId] ?? [];
    return (
        <div ref={ref} className={styles.wrapper}>
          <div className={styles.container} >
          {messages.map((item,index)=>(
            <div style={{margin:'20px'}}  
            className={classNames(styles.message, {
              [styles.currentMessage]: item.currentauthor !== "Bot",
            })}
             key={index}>
              <Typography  className={styles.author}>Author: {item.author}</Typography>
              <Typography  className={styles.text}> Message: {item.message}</Typography>
              </div>
          ))}
          </div>
          <div className={styles.footer}>
          <div className={styles.area} style={{margin:'20px'}}>
                <TextField className={styles.input} placeholder="Author" type="text" value={currentauthor} onChange={(e) => setAuthor(e.target.value)} />
          <TextField className={styles.input}  placeholder="Message" type="text" value={currenttext} onChange={(e) => setText(e.target.value)} onKeyDown={handlePressInput}/>
          </div>
        <Button  variant="outlined"  className={styles.button} onClick={() => handleChange(currentauthor, currenttext)} >
        Add
        </Button>
    
        </div>
        </div>
        );

}
