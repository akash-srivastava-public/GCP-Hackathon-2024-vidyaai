import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Ncertguru } from "./HomeScreen/Ncertguru/index";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { AppBar, ListItemIcon, Toolbar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios'
import Home from "./HomeScreen/home";
import { styled } from '@mui/system';

const GradientBackground = styled('div')({
  background: 'linear-gradient(to bottom, #ffffff, #b3e5fc)',
  minHeight: '100vh', // Set the minimum height to fill the viewport
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MainScreen = ({handleAuth}:{handleAuth:any}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [page, setPage] = useState(<Home />);

  async function logoutHandle(){
    try {
      const response = await axios.get(`${window.origin}/auth/logout`);
      handleAuth(false)
    } catch (error) {
      console.error('Error fetching auth status:', error);
      handleAuth(false); // In case of error, consider the user not authenticated
    }

  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { comp: <Home />, txt: "Home" }
        ].map((text, index) => (
          <ListItem key={text.txt} disablePadding>
            <ListItemButton
              onClick={() => {
                setPage(text.comp);
              }}
            >
              <ListItemText primary={text.txt} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            comp: <Ncertguru ncertkey={"chat"} />,
            txt: "VIDYA AI CHAT",
            id: "chat",
          },
          {
            comp: <Ncertguru ncertkey={"search"} />,
            txt: "VIDYA AI SEARCH",
            id: "searchWidgetTrigger",
          },
        ].map((text, index) => (
          <ListItem key={text.txt} disablePadding>
            <ListItemButton
              id={text.id}
              onClick={() => {
                setPage(text.comp);
              }}
            >
              <ListItemText primary={text.txt} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <GradientBackground>
      {" "}
      <div>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "white", maxHeight: "8%", marginTop: "-0.5%" }}
        >
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              component="div"
              sx={{ flexGrow: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={() => {}}
              sx={{ ml: 1, color: "Black", flexGrow: 1 }}
            >
              VIDYA AI 🕮
            </IconButton>
            <Button
              onClick={logoutHandle}
              variant="contained"
              color="primary"
              startIcon={<LogoutIcon />}
              sx={{ marginRight: 2 }}
            >
            </Button>
          </Toolbar>
        </AppBar>
        <div>{page}</div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
          <Divider />
      <List sx={{ marginTop: 'auto' }}>
        <ListItem 
          button
          component="a"
          href="https://github.com/Innovation-Software-in-Sky/GCP-Hackathon-2024-vidyaai"
          target="_blank"
        >
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItem>
      </List>
    </Drawer>
      </div>
    </GradientBackground>
  );
};
