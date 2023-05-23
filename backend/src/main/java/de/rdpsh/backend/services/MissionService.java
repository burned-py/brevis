package de.rdpsh.backend.services;

import de.rdpsh.backend.models.Mission;
import de.rdpsh.backend.repos.MissionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class MissionService {
    private final MissionRepo missionRepo;

    private final IdService idService;

    public List<Mission> getMissions() {
        return missionRepo.findAll();
    }

    public Mission addMission(Mission mission) {
        String id = idService.createRandomId();
        Mission missionToAdd = mission.missionWithId(id);
        return missionRepo.save(missionToAdd);
    }
    public Mission getMissionById(String id) {
        String errorMessage = "No Mission with ID '" + id + "' found!";
        return missionRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException(errorMessage));
        }
    }
