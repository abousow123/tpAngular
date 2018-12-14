package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.sid.dao.ContactRepository;
import org.sid.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private ContactRepository contactRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		contactRepository.save(new Contact("SOW", "Hamidou", df.parse("31/12/1992"), "mido@gmail.com", 0123456, ""));
		contactRepository.save(new Contact("Diallo", "Basse", df.parse("05/10/1990"), "souki@gmail.com", 0123456, ""));
		contactRepository.save(new Contact("Kinde", "Momo", df.parse("05/08/1993"), "kende@gmail.com", 0123456, ""));
		
		contactRepository.findAll().forEach(c->{
			System.out.println(c.getPrenom());
		});
		
		/*Contact c = contactRepository.f ;
		System.out.println(c.getNom());*/

	}

}
