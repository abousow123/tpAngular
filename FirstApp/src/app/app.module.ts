import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutService } from '../Services/about.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from 'src/Services/garelly';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { NouveauEtudiantComponent } from './nouveau-etudiant/nouveau-etudiant.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'newetudiant', component: NouveauEtudiantComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    NewEtudiantComponent,
    NouveauEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(routes),HttpModule
  ],
  providers: [AboutService,GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
