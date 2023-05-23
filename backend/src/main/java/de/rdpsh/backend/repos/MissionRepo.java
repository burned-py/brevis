package de.rdpsh.backend.repos;
import de.rdpsh.backend.models.Mission;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MissionRepo extends MongoRepository<Mission, String> {
}
