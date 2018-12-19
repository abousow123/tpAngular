import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/Services/about.service';
import { ContactServiceService } from 'src/Services/contact-service.service';
import { Router } from '@angular/router';
import { Etudiant } from '../../model/etudiant';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any ;
  motCle: string="" ;

 
  size:number = 5;
  currentPage: number = 0;

  pages:Array<number>;

  constructor(private aboutService:AboutService,private contactService:ContactServiceService,
    private router:Router) { 
    this.contact = this.aboutService.getInfo() ;
  }

  ngOnInit() {
   this.doSeach();
  }

  doSeach(){
    console.log(this.motCle);
    
    this.contactService.getContatcts(this.motCle,this.currentPage,this.size)
    .subscribe(data=>{
     // console.log(data);
      
      this.contact = data ;
      this.pages = new Array(data.totalPages)
      //console.log(this.pages);
      
    },err=>{
      console.log(err);
      
    });
    
  }


  chercher(){
    this.doSeach();

  }

  goToPage(i){
    this.currentPage=i ;
    this.doSeach();
  }
  
  onEditEtudiant(id:number){
     this.router.navigate(['editEtudiant',id]) ;
     console.log(id);
  }

  deleteEtudiant(e:Etudiant){
    this.contactService.deleteEtudiant(e.id)
    .subscribe(data=>{
      this.contact.content.splice(
        this.contact.content.indexOf(e),1
      );
    },err=>{
      console.log(err);
      
    })

  }


}
