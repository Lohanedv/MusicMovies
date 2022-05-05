package com.lohanedv.MusicMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lohanedv.MusicMovie.entities.Score;
import com.lohanedv.MusicMovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
