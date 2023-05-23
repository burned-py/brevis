package de.rdpsh.backend.controllers;

import de.rdpsh.backend.services.MissionService;
import de.rdpsh.backend.models.Mission;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/missions")
@RequiredArgsConstructor
public class MissionController {
    private final MissionService missionService;

    @GetMapping
    public List<Mission> getMissions() { return missionService.getMissions();}

    @GetMapping("/{id}")
    public Mission getMissionById(@PathVariable String id) { return missionService.getMissionById(id);}

    @PostMapping
    public  Mission addMission(@RequestBody Mission mission) {return missionService.addMission(mission);}
}


