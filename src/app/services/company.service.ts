import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public http:HttpClient) { }

  buscarCompany(id){
    return this.http.get(`https://api.themoviedb.org/3/company/${id}?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921
    `)
  }
}
