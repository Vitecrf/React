import React, {useEffect} from 'react';
import {RouteType} from "../../models/RouteType";
import {
    ListItem,
    Drawer,
    Box,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
    Button,
    Typography,
    IconButton,
    Toolbar, CssBaseline
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles'
import {Link as RouterLink} from "react-router-dom";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Courses from "../pages/Courses";
import {Course} from "../../models/Course";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/stor";


const drawerWidth = 240;

const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState({
        path: '',
        label: '',
        element: {},
    });
    // const [date, setDate] = React.useState(new Date());

    // useEffect(()=> {
    //     const idInterval = setInterval(() => setDate(new Date()), 1000);
    //     console.log('tik')
    //     return () => {
    //         clearInterval(idInterval);
    //     }
    // }, [date])

    useEffect(()=>{
        if(content){
            const element = content.element;
        }

    })

    function getLabel(obj:any):void{
        setContent(obj);
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    // console.log(content.hasOwnProperty("label"))
    // console.log(label)
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {content.label}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {items.map((items, index) => (
                        <ListItem button key={items.path} component={RouterLink} to={items.path} onClick={() => getLabel(items)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={items.label} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>

                    {/*<ul>*/}
                    {/*    {courses.map(i => <li key={i.id}>{JSON.stringify(i)}</li>)}*/}
                    {/*</ul>*/}
                </Typography>
            </Main>
        </Box>
    )
}

export default NavigatorMobile;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

// function getLabel(label:any[]):string[]{
//     return label.map(i => i.label);
// }
