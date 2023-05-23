package de.rdpsh.backend.models;

public record Mission(
        String id,
        String lat,
        String lon,
        String address


) {

    public Mission missionWithId(String id) {
        return new Mission(id, lat, lon, address);
    }
}
