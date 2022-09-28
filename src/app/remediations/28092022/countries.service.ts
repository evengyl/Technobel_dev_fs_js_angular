import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  urlBaseForAllCountries : string = "https://restcountries.com/v3.1/all?fields=name,flag,ccn3"
  urlBaseForDetailsByCcn3 : string = "https://restcountries.com/v3.1/alpha?codes="
  
  //url de base pour accéder en JSON à tous les nom des pays

  //injection par contructeur du module injectable HttpClient -> permattant de faire des requète http
  constructor(private httpC : HttpClient) 
  { }

  getAllNameCountries() : Observable<any>
  {
    //return un observable basé sur le get -> get va récup les datas ! 
    return this.httpC.get<any>(this.urlBaseForAllCountries)
  }


  getDetailsByCcn3(ccn3 : string) : Observable<any>{
    return this.httpC.get<any>(this.urlBaseForDetailsByCcn3 + ccn3)
  }
}
