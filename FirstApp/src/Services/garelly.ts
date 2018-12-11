import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()

export class GalleryService{

    

    currentPage: number = 1;
    size: number = 5;
   

    constructor(private http:Http){}

    onSeach(dataForm){
    
        return this.http.get("https://pixabay.com/api/?key=10926720-b4662aa3c9199e2c73d6ccfd6&q="
        +dataForm.motCle+"&per_page="+this.size+"&page="+this.currentPage)
        .pipe(map(resp=>resp.json()))
        
    }

    
}