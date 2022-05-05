package com.lohanedv.MusicMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lohanedv.MusicMovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

}
