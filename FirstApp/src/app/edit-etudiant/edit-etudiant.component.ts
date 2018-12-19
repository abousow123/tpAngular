import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../model/etudiant';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactServiceService } from '../../Services/contact-service.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {

  mode:number = 1;
  id:number ;
  etudiant:Etudiant = new Etudiant();
  constructor(private activeRoute:ActivatedRoute,private contactService:ContactServiceService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'] ;
    this.contactService.getContatct(this.id)
    .subscribe(data=>{
      this.etudiant = data ;
    },err=>{
      console.log(err);
      
    })
  }

  updateEtudiant(){
      this.contactService.updateEtudiant(this.etudiant)
      .subscribe(data=>{
        alert('Mise à jour effectuer avec succés!!!');
        this.router.navigate(['contact']) ;
      },err=>{
        alert('Error') ;
      })
  }

}
