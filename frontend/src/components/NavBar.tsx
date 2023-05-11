import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from '@mui/icons-material/Map';
import BottomNavigation from '@mui/material/BottomNavigation';
import {BottomNavigationAction} from "@mui/material";

export default function NavBar() {
    return (
        <BottomNavigation sx={{width: '100vw', position: 'fixed', bottom: '0', backgroundColor: '#c0b4a9'}}>
            <BottomNavigationAction label="User" icon={<PersonIcon />} />
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Add" icon={<AddIcon />} />
            <BottomNavigationAction label="Map" icon={<MapIcon />} />
        </BottomNavigation>
    )
}
