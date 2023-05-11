export type MissionModel = {
    id: string,
    lat: number,
    long: number,
    address: string
}

export type NewMissionModel = {
    lat: number,
    long: string
    address: string
}