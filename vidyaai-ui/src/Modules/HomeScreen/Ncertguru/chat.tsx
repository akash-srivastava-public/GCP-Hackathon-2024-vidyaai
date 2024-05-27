import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import axios from "axios";
import './BubbleLoading.css'
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import RobotIcon from '@mui/icons-material/SmartToy';

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleMessages=(message:any)=>{
    const tmp = messages;
    tmp.push(message);
    setMessages(tmp)
  }

  const handleSend = async () => {
    if (inputText.trim() === "") return;

    const userMessage: Message = {
      id: messages.length,
      text: inputText,
      sender: "user",
    };

    // setMessages([...messages, userMessage]);
    handleMessages(userMessage)
    setInputText("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${window.origin}/detect-intent`,
        { query: inputText },
        {
          headers: {
            "Content-Type": "application/json", // Assuming JSON payload
          },
        }
      );
      const botResponse: Message = {
        id: userMessage.id + 1, // Keeping the id sequential for conversation flow
        text: response.data,
        sender: "bot",
      };
      // setMessages([...messages, botResponse]);
      handleMessages(botResponse)
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleClearChats = () => {
    setMessages([]);
  };

  const handleDeleteChat = () => {
    // Implementation for deleting chats
  };

  const loadChatBubble =(messages: any[])=>{
    console.log(messages)
    const bubble = messages.map((message) => {
      return <> <Grid
      item
      key={message.id}
      sx={{
        alignSelf:
          message.sender === "user" ? "flex-end" : "flex-start",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          backgroundColor:
            message.sender === "user" ? "#FFBD00" : "#F2F2F2",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        {message.text}
      </Typography>
    </Grid></>
  })
  return bubble
  }

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#4C8CF5', marginTop: "3%" }}>
        <Toolbar>
          <IconButton onClick={handleClearChats} sx={{ ml: 1, flexGrow: 0, color: 'white' }}>
          <InfoIcon />
          </IconButton>
          <RobotIcon sx={{ flexGrow: 1 }} fontSize="small" />
          <IconButton onClick={handleClearChats} sx={{ ml: 1, flexGrow: 0, color: 'red' }}>
          <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container  sx={{ height: "80%", marginBottom: "5%", marginTop: "8%"}}>
        <Grid
          container
          direction="column"
          spacing={1}
          id="chat-container"
          sx={{ overflowY: "auto", padding: "16px" }}
        >
          {loadChatBubble(messages)}
          {loading && (
          <Box display="flex" justifyContent="flex-start" alignItems="center" mb={1}>
            <Box className="bubble-loader">
              <div></div>
              <div></div>
              <div></div>
            </Box>
          </Box>
        )}
        </Grid>
      </Container>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0, backgroundColor: '#F2F2F2' }}>
        <Toolbar>
          <TextField
            value={inputText}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
            autoFocus
          />
          <Button variant="contained" sx={{ ml: 1, backgroundColor: '#00AA4B', '&:hover': { backgroundColor: '#00873E' } }} onClick={handleSend}>
            Send
          </Button>
          {/* Mic button goes here */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Chatbot;
