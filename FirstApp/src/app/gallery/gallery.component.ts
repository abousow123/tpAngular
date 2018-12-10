import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";


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

  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSeach(dataForm){
    
    this.http.get("https://pixabay.com/api/?key=10926720-b4662aa3c9199e2c73d6ccfd6&q="
    +dataForm.motCle+"&per_page="+this.size+"&page="+this.currentPage)
    .pipe(map(resp=>resp.json()))
    .subscribe(data=>{
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
