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
  mode:number=1;

  constructor(private contactService:ContactServiceService) { }

  ngOnInit() {
  }

  saveEtudiant(){
   
    this.contactService.saveEtudiant(this.etudiant)
    .subscribe(data=>{
      this.etudiant = data;
      this.mode=2;
      
    },err=>{
      console.log(err);
      
    })
    
  }

}
