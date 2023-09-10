package com.example.Demo.CRUD.Server;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class PersonConfig {
    @Autowired
    private PersonRepository repository;

    @PostConstruct
    public void setup(){
        Person person1 = new Person();
        person1.setFirstName("Andrew");
        person1.setLastName("Ascone");

        Person person2 = new Person();
        person2.setFirstName("Jarek");
        person2.setLastName("Lugo");

        repository.saveAll(Arrays.asList(person1, person2));
    }
}
