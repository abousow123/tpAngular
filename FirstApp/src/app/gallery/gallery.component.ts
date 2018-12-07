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

  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSeach(dataForm){
    console.log(dataForm);
    this.http.get("https://pixabay.com/api/?key=10926720-b4662aa3c9199e2c73d6ccfd6&q="
    +dataForm.motCle+"&per_page=10&page=1")
    .pipe(map(resp=>resp.json()))
    .subscribe(data=>{
      console.log(data);
      this.pagePhotos = data;
    })
    
  }

}
