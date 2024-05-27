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
import { AppBar, Toolbar } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const MainScreen = () => {
  const [open, setOpen] = useState(false);
  const [auth,SetAuth] = useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [page, setPage] = useState(<>Home</>);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { comp: <>Home</>, txt: "Home" }
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
      {auth?<List>
        {[
          {
            comp: <Ncertguru ncertkey={"chat"} />,
            txt: "VIDYA CHAT",
            id: "chat",
          },
          {
            comp: <Ncertguru ncertkey={"search"} />,
            txt: "VIDYA SEARCH",
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
      </List>:<></>}
      
    </Box>
  );

  return (
    <>
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
              variant="contained"
              color="primary"
              startIcon={auth?<LoginIcon />:<LogoutIcon />}
              sx={{ marginRight: 2 }}
            >
            </Button>
          </Toolbar>
        </AppBar>
        <div>{page}</div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};
