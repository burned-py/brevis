import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../assets/directions_1.png";
import logo2 from "../assets/directions_2.png";

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'cadetblue' }}>
            <Toolbar>
                <img src={logo2} alt="Brevis Logo" style={{ height: 'auto', width: '10%', maxWidth: 100 }} />
                <Typography variant="h1" component="div" sx={{ flexGrow: 1, ml: 2, color: 'aliceblue' }}>
                    Brevis
                </Typography>
                <Typography variant="h3" sx={{ color: 'aliceblue', textAlign: 'left'}}>
                    Show me the way!
                </Typography>
            </Toolbar>

        </AppBar>

    );
}

// const StyledHeader = styled.div`
// color: aliceblue;
// background-color: cadetblue;
// text-align: center;
// font-family: "Academy Engraved LET";
// font-size: 40px;
// padding: 1rem;
// margin-bottom: 0.5rem;
// `