import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useCookies } from 'react-cookie'
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: theme.spacing(1, 2),
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '50ch',
      '&:focus': {
        width: '80ch',
      },
    },
  },
}));

function GlobalSearchBar() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [cookie] = useCookies(['jwt']);
  const [cookies] = useCookies(['userPaylod']);
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
    const fetchData = async () => {
      //console.log(cookies.userPayload);
      try {
        const headers = {
          Authorization: `${cookie.jwt}`,
          userPayload: `${cookies.userPaylod}`,
          'Content-Type': 'application/json',
          // Add other headers as needed
        };
  
        const response = await axios.get(`https://clinic-cz9h.onrender.com/patients/456324568`, { headers });
        console.log(response.data.patient); // Process the response data
        localStorage.setItem("res",JSON.stringify(response.data.patient));
      } catch (error) {
        console.log(error); // Handle the error
      }

    };
  
    fetchData();
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit">
          <SearchIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default GlobalSearchBar;
