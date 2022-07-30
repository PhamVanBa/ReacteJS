package com.vti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vti.dto.GroupFormForCreating;
import com.vti.dto.filter.GroupFilter;
import com.vti.entity.Group;
import com.vti.service.IGroupService;

@RestController
@RequestMapping(value = "api/v1/groups")
public class GroupController {

	@Autowired
	private IGroupService service;

	@GetMapping()
	public ResponseEntity<?> getAllGroups(
			Pageable pageable, 
			GroupFilter filter,
			@RequestParam(required = false) String search) {
		Page<Group> entities = service.getAllGroups(pageable, filter, search);
		return new ResponseEntity<>(entities, HttpStatus.OK);
	}
	
	@GetMapping(value = "/name/{name}")
	public ResponseEntity<?> existsGroupByName(@PathVariable(name = "name") String name) {
		return new ResponseEntity<>(service.isGroupExistsByName(name), HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<?> createGroup(@RequestBody GroupFormForCreating form) {
		service.createGroup(form);
		return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
	}
}
