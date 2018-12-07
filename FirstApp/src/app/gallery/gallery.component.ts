import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSeach(data){
    console.log(data);
    this.http.get("https://pixabay.com/api/?key=10926720-b4662aa3c9199e2c73d6ccfd6&q="+data.motCle+"&per_page=10&page=1")
    
  }

}
