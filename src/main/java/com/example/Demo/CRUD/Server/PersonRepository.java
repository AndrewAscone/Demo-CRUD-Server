package com.example.Demo.CRUD.Server;

import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Long, Person> {
}
