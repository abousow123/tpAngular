import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { GalleryService } from 'src/Services/garelly';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  pagePhotos: any;

  currentPage: number = 1;
  size: number = 5;
  totalPages: number;
  motCle: string = "";
  pages:Array<number>=[];


  constructor(private gallerySerives:GalleryService) { }

  ngOnInit() {
  }

  
  onSeach(data){
    this.gallerySerives.onSeach(data)
    .subscribe(data=>{
      console.log(data);
      
    this.pagePhotos = data;
    this.totalPages = data.totalHits/this.size ;
    if(data.totalHits % this.size !=0)  ++this.totalPages;
    this.pages = new Array(this.totalPages);
  })

  }

  goToPage(i){
    this.currentPage=i+1 ;
    this.onSeach({motCle:this.motCle});
  }

    
  

  

}
