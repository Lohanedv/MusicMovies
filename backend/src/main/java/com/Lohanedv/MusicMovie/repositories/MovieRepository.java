package com.Lohanedv.MusicMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Lohanedv.MusicMovie.entities.Movie;

	public interface MovieRepository extends JpaRepository<Movie, Long>{
		
	}
