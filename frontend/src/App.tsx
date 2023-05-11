import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Gallery from "./components/Gallery";
import {MissionModel} from "./models/MissionModel";
import {Container} from "@mui/material";


function App() {
    const defaultMissions: MissionModel[] = [
        {
            id: '1',
            lat: 37.7749,
            long: -122.4194,
            address:"1580 Market Street, San Francisco, CA 94102\n" +
                "Mission San Francisco California United States"
        },
        {
            id: '2',
            lat: 40.7128,
            long: -74.0060,
            address: "1 Broadway, New York, NY 10007\n" +
                "Manhattan New York New York United States"
        },
        {
            id: '3',
            lat: 51.5074,
            long: -0.1278,
            address: "1 Charing Cross, Strand, London, SW1A 2DR\n" +
                "Strand London England United Kingdom"
        },
    ];
        const [missions, setMissions] = useState<MissionModel[]>((defaultMissions))
// #f590e6 rose
    return (
        <div className="test-div">

            <Header/>

            <Container maxWidth="lg" className='Card'>
                    <Gallery missions={missions}/>
            </Container>

            <NavBar/>

        </div>
    )
        ;
}

export default App;
