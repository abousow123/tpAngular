import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/Services/about.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any ;

  constructor(private aboutService:AboutService) { 
    this.contact = this.aboutService.getInfo() ;
  }

  ngOnInit() {
  }

  


}
