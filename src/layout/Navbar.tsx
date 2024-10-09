import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useAuth } from "../hooks/useAuth";
import { adminTabs } from "../router/admin-tabs";
import { userTabs } from "../router/user-tabs";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { MenuIcon } from "../icons/MenuIcon";
import { LogoutIcon } from "../icons/LogoutIcon";
//import { Avatar } from "../icons/Avatar";

export default function Navbar() {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false); 

  const toggleDrawer = () => {
    setCollapsed((prev) => !prev);
  };

  const customNavigate = (path: string) => {
    if(path) {
      navigate(path);
    }
  }

  const drawerWidth = collapsed ? 60 : 250; 

  const tabs = authState.role === "admin" ? adminTabs : userTabs;

  const DrawerList = (
    <Box
      sx={{ width: drawerWidth }}
      role="presentation"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
        }}
      >
        {!collapsed && <p>{authState.username}</p>} 
      </Box>
      <List>
        {tabs.map(({ path, name, Icon }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              onClick={() => {customNavigate(path)}}
              sx={{
                justifyContent: collapsed ? "center" : "flex-start",
                padding: collapsed ? "10px" : "10px 20px",
              }}
            >
              <Icon fontSize="x-large" />
              {!collapsed && <ListItemText primary={name} sx={{ marginLeft: 2 }} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
        }}
      >
        {
          !collapsed ? (
            <Button sx={{backgroundColor:'#ababab'}} variant="outlined" onClick={logout}>Log out</Button>
          ) : (
            <IconButton onClick={logout}>
              <LogoutIcon />
            </IconButton>
          )
        }
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
          '&:hover': {
            backgroundColor: 'inherit',
          },
        }}
        variant="permanent"
        open
      >
        <IconButton onClick={toggleDrawer} 
              sx={{ 
                margin: 1, 
                '&:hover': {
                  backgroundColor: 'inherit', 
                },
              }}
        >
          <MenuIcon />
        </IconButton>
        {DrawerList}
      </Drawer>

      
      <Box
        component="main"
        sx={{
          flexGrow: 1, 
          width: `calc(100% - ${drawerWidth}px)`, 
          transition: 'width 0.3s', 
          padding: 3, 
        }}
      >
        <Outlet /> 
      </Box>
    </Box>
  );
}
