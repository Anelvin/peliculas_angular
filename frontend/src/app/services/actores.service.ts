import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(public http:HttpClient) { }

  buscarActor(id){
    return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US
    `)
  }
  personasPopulares(page){
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${page}
    `)
  }
  suspeliculas(id){
    return this.http.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US
    `)
  }
}
