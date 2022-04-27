package com.Lohanedv.MusicMovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Lohanedv.MusicMovie.dto.MovieDTO;
import com.Lohanedv.MusicMovie.entities.Movie;
import com.Lohanedv.MusicMovie.repositories.MovieRepository;

@Service
public class MovieServices {
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){	
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public Page<MovieDTO> findById(Long id){	
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return (Page<MovieDTO>) dto;
	}
	
}
