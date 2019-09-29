import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(public http:HttpClient) { }

  seriesPopulares(page,generos){
    if(generos.length>12){
      return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${page}${generos}
      `)
    }else{
      return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${page}
      `)
    }
  }
  buscarGenerosSeries(){
      return this.http.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US
      `)
  }
  buscarSerie(id){
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US
    `)
  }
  buscarOpiniones(id){
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=1
    `)
  }
  buscarMejorCalificadas(page,generos){
    if(generos.length>12){
      return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${page}${generos}
      `)
    }else{
      return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${page}
      `)
    }
  }
  seriePorQuery(query){
    return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&query=${query}&page=1
    `)
  }
  buscarVideo(id){
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US
    `)
  }
  buscarActores(id){
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US
    `)
  }
 
}
