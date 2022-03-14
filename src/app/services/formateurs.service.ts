import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Apprenant} from "../models/apprenant";
import {Formateur} from "../models/formateur";

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  api=environment.Api+"formateurs";
  constructor(private http:HttpClient) { }
  getall():Observable<Formateur[]>{
    return this.http.get<Formateur[]>(this.api);}

  addF(nFormateur: Formateur) {
    return this.http.post<Formateur>(this.api,nFormateur);

  }


  getById( id : string):Observable<Apprenant>{
    return this.http.get<Apprenant>(`${this.api}/${id}`);
  }
}
