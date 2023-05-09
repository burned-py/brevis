import React from "react";
import './MissionCard.css'
import {Button, Card} from "@mui/material";
import {MissionModel} from "../models/MissionModel";
import map_dummy from "../assets/map_placeholder.jpg"
import {CardMedia} from "@mui/material";

type CardProps = {
    mission: MissionModel;
}

export default function DeliveryCard(props: CardProps) {
    return (
        <Card variant="outlined" className="version1-card">

            <div className="version1-card-content">
                <p> ID: {props.mission.id}</p>
                <small> Lat: {props.mission.lat}</small>
                <small> Long: {props.mission.long}</small>
            </div>

            <div className="version1-card-media">
            <CardMedia
                component="img"
                image={map_dummy}
                alt="Map Dummy Image"
                style={{
                    width: '75%',
                    height: 'auto',
                    padding: '2vw',
                }}
            />
            </div>
            <div className="version1-card-button">
            <Button className="details-button" variant="contained" sx={{backgroundColor:"#56c5bc", fontWeight:"bold" }}>Details</Button>
            {/*onClick={() => navigate(`/details/${props.mission.id}`)}>Details</Button>*/}
            </div>
        </Card>
    )
}