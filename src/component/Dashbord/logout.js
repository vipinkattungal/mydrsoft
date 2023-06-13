import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios"
import { useCookies } from 'react-cookie';

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  //const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogout = async()  => {
    // Perform logout logic here
    // ...
    try {
      // Make the API request using axios
      const response = await axios.post('https://clinic-cz9h.onrender.com/doctors/logout');
      console.log(response.data);
      removeCookie('jwt');
          window.location.href = '/';

        } catch (error) {
      console.log(error);
      // Handle the error as needed
    }
    // Redirect to the home page
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        endIcon={<AccountCircleIcon />}
      >
        Profile
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  {/* Add more menu items for profile options */}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default ProfileDropdown;
