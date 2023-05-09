import MissionCard from "./MissionCard"
import {MissionModel} from "../models/MissionModel";
import "../App.css";

type GalleryProps = {
    missions: MissionModel[];
}
export default function Gallery(props: GalleryProps) {
    return (
        <div className='Gallery'>
            <h1>All missions</h1>

            <ul className="card-container">
                {props.missions.map((mission) => {
                    return (
                        <MissionCard key={mission.id} mission={mission}/>)
                })}
            </ul>
        </div>
        /*        <div className='Card'>
                    <h2>ID: xyz</h2>
                    <ul>latitude: 1234.56</ul>
                    <ul>longitude: 4567.8</ul>
                    <ul></ul>
                </div>*/
    )
}

