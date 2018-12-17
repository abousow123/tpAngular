import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Etudiant } from 'src/model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http:Http) { }

  getContatcts(motCle:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
    .pipe(map(rest=>rest.json()))
  }

  saveEtudiant(etudiant:Etudiant){
    return this.http.post("http://localhost:8080/contacts/",etudiant)
           .pipe(map(rest=>rest.json()))
  }
}
