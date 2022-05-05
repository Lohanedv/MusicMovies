package com.lohanedv.MusicMovie.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.lohanedv.MusicMovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
