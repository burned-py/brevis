import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../assets/directions_1.png";
import logo2 from "../assets/directions_2.png";

export default function Header() {
    return (
        <>
            <AppBar position="static" sx={{backgroundColor: 'cadetblue', height: '15vh'}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <img src={logo2} alt="Brevis Logo" style={{height: 'auto', maxWidth: 100, paddingTop: '0.5rem'}}/>
                    <Typography variant="h1" component="div" sx=
                        {{
                            flexGrow: 1, ml: 2, color: 'aliceblue',
                            fontSize: '4rem', '@media (max-width: 600px)': {fontSize: '3rem'}, // set font size for screens up to 600px wide
                            '@media (max-width: 400px)': {fontSize: '2rem'}
                        }}>
                        Brevis
                    </Typography>
                    <Typography variant="h5" sx={{color: 'aliceblue', fontSize: '1rem'}}>
                        Show me the way!
                    </Typography>
                </Toolbar>
            </AppBar>

        </>

    );
}
