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

export const MainScreen = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [page, setPage] = useState(<>Home</>);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[{ comp: <>Home</>, txt: "Home" },
          { comp: <>Account</>, txt: "Account" },].map((text, index) => (
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
          { comp: <Ncertguru />, txt: "NCERT GURU" },
          { comp: <>CodeMitra</>, txt: "CODE MITRA" },
          { comp: <>Vocab</>, txt: "VOCABUDDY" },
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
    </Box>
  );

  return (
    <>
      {" "}
      <div>
        <AppBar position="fixed" sx={{ backgroundColor: "white", maxHeight:"8%", marginTop:"-0.5%" }}>
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
              sx={{ ml: 1, color: "Black", flexGrow: 1}}
            >
              vidya.ai
            </IconButton>
            <IconButton
              onClick={() => {}}
              sx={{ ml: 1, color: "red", flexGrow: 0 }}
            >
              Logout
            </IconButton>
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
