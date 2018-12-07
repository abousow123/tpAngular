import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/Services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contact: {name:string,email:string,tel:number} ;
  comments=[] ;
  commentaire = {date:null,message:""} ;

  constructor(private aboutService:AboutService) {
    this.contact = this.aboutService.getInfo() ;
    this.comments = this.aboutService.getAllComments() ;
   }

  ngOnInit() {
  }

  onAddCommentaire(c){
    this.aboutService.addComment(c) ;
    this.commentaire.message = "" ;
    this.comments = this.aboutService.getAllComments() ;
    
  }

}
