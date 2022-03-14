import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Apprenant} from "../models/apprenant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApprenantsService {
  api=environment.Api+"apprenants";
  constructor(private http:HttpClient) { }
  // get all apprenant
  getall():Observable<Apprenant[]>{
   return this.http.get<Apprenant[]>(this.api)
  }
  //ajouter apprenants
  addApp(app:Apprenant){
   return  this.http.post(this.api,app)

  }

  getById( id : string):Observable<Apprenant>{
    return this.http.get<Apprenant>(`${this.api}/${id}`);
  }
}
