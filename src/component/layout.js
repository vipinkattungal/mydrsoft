import  React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MdNotificationsNone, MdInfoOutline } from 'react-icons/md';

import {
	Avatar,
	Button,
	Flex,
	Icon,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Addpt from './addPatient';
import EnhancedTable from './viewPatient'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation} from 'react-router-dom';

import Form from './patientDetailsForm'
import VerticalTimeline from './TimeLine'
import logo from'../image/logo1.png'
import Chart from './dashbord';
// import DashboardCard from '../component/dsbrd'
import AddPatientForm from './addPtnew'
import Dashboard from './Dashbord/index'
import PatientDashboard from './Dashbord/patientDashbord'
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const history = [
  {
    id: 1,
    title: 'Diagnosis',
    date: 'March 1, 2022',
    description: 'Patient diagnosed with Type 2 Diabetes',
  },
  {
    id: 2,
    title: 'Prescription',
    date: 'March 2, 2022',
    description: 'Patient prescribed Metformin',
  },
];
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {

  let menuBg = useColorModeValue('white', 'navy.800');
const textColor = useColorModeValue('secondaryGray.900', 'white');
const textColorBrand = useColorModeValue('brand.700', 'brand.400');
const ethColor = useColorModeValue('gray.700', 'white');
const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
const ethBg = useColorModeValue('secondaryGray.300', 'navy.900');
const ethBox = useColorModeValue('white', 'navy.800');
const shadow = useColorModeValue(
  '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
  '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
);

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [activeComponent, setActiveComponent] = useState('home');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (componentName) => {
  // const navigate = useNavigate();

if(componentName === 'Dashbord'){
  
  //navigate('/Dashbord');

}
    console.log(componentName);
    setActiveComponent(componentName);
    setOpen(false);
  };


  const array=['Dashbord','Addpt','viewpt','patientdetails','patientDashbord'];

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:'#2c387e', }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
      <Box  ml="90%">
      <Menu >
				<MenuButton p="0px" >
					<Icon  mt="6px" as={MdNotificationsNone} color="#2c387e" w="18px" h="18px" me="10px" />
				</MenuButton>
				<MenuList
					boxShadow={shadow}
					p="20px"
					borderRadius="20px"
					bg={menuBg}
					border="none"
					mt="22px"
					me={{ base: '30px', md: 'unset' }}
					minW={{ base: 'unset', md: '400px', xl: '450px' }}
					maxW={{ base: '360px', md: 'unset' }}>
					<Flex jusitfy="space-between" w="100%" mb="20px">
						<Text fontSize="md" fontWeight="600" color={textColor}>
							Notifications
						</Text>
						<Text fontSize="sm" fontWeight="500" color={textColorBrand} ms="auto" cursor="pointer">
							Mark all read
						</Text>
					</Flex>
					<Flex flexDirection="column">
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px="0" borderRadius="8px" mb="10px">
							{/* <ItemContent info="Horizon UI Dashboard PRO" aName="Alicia" />
						</MenuItem>
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px="0" borderRadius="8px" mb="10px">
							<ItemContent info="Horizon Design System Free" aName="Josh Henry" /> */}
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>
      </Box>
        </Toolbar>
   
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {['Dashbord','Add Patient', 'View Patient', 'PatientDetils', 'Patient Dashbord'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => handleItemClick(array[index])}              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Appointment', 'Patient Vitals', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <DrawerHeader />
        <Router>
        <Routes>
             <Route path="/viewpt" element={< EnhancedTable/>}/>
          <Route path="/Addpt" element={<AddPatientForm />} />
          <Route path="/PatientDetails" element={<Form />} />
          <Route path="/Timeline" element={<VerticalTimeline />} />
          <Route path="/Dashbord" element={<Dashboard />} />
          <Route path="/patientDashbord" element={<PatientDashboard />} />

          </Routes>
            </Router>
      </Box>
    </Box>
  );
}