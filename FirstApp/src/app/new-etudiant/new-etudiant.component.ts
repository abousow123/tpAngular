import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../model/etudiant';
import { ContactServiceService } from '../../Services/contact-service.service';




@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {

  etudiant:Etudiant = new Etudiant();

  constructor(private contactService:ContactServiceService) { }

  ngOnInit() {
  }

  saveEtudiant(){
    console.log(this.etudiant);
    this.contactService.saveEtudiant(this.etudiant)
    .subscribe(data=>{
      console.log(data);
      
    },err=>{
      console.log(err);
      
    })
    
  }

}
