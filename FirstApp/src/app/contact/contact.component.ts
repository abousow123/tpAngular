import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/Services/about.service';
import { ContactServiceService } from 'src/Services/contact-service.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any ;
  motCle: string ;
  page:number = 0;
  size:number = 5;
  constructor(private aboutService:AboutService,private contactService:ContactServiceService) { 
    this.contact = this.aboutService.getInfo() ;
  }

  ngOnInit() {
    
  }

  doSearch(){
    this.contactService.getContatcts(this.motCle,this.page,this.size)
    .subscribe(data=>{
      console.log(data);
      
      this.contact = data ;
    },err=>{
      console.log(err);
      
    });
    
  }


  chercher(){
    this.doSearch();

  }

  


}
