package com.vti.service;

import com.vti.entity.User;

public interface IUserService {

	void createUser(User user);

	User findUserByEmail(String email);

	void activeUser(String token);

	void sendConfirmUserRegistrationViaEmail(String email);

	boolean existsUserByEmail(String email);

	boolean existsUserByUserName(String userName);

}
