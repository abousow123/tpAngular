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
 
  size:number = 5;
  currentPage: number = 0;

  pages:Array<number>=[];

  constructor(private aboutService:AboutService,private contactService:ContactServiceService) { 
    this.contact = this.aboutService.getInfo() ;
  }

  ngOnInit() {
    
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
  


}
