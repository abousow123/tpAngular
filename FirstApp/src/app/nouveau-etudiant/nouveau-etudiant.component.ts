import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-etudiant',
  templateUrl: './nouveau-etudiant.component.html',
  styleUrls: ['./nouveau-etudiant.component.css']
})
export class NouveauEtudiantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveEtudiant(dataForm){
    console.log(dataForm);
    

  }

}
