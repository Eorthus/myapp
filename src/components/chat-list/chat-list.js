import { List } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const [chats] = useState(["First", "Second", "Third"]);

  const { roomId } = useParams();

  return (
    <List component="nav" >
      {chats.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={roomId === chat} />
        </Link>
      ))}
    </List>
  );
};
