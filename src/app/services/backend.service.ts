import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { Observable, of , from, throwError} from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { sortBy as _sortBy } from 'lodash';





import { Category, ProductsByCategory } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  dataResults = [];

  constructor(private httpClient: HttpClient) { 
    this.dataResults = [
      {
        category: { id: 1, label: 'Europe'},
        products: [
          { id: 11, label: 'Water'}
        ]
      },
      {
        category: { id: 2, label: 'Asia'},
        products: [
          { id: 21, label: 'Dairy' }
        ]
      }
    ];
    
    
    
    this.getDataServices().subscribe((data:any[]) => {
      console.log(data);
      this.dataResults[0].products = data
      //this.countries = data;
    });

    this.getDataServices2().subscribe((data:any[]) => {
      console.log(data);
      this.dataResults[1].products = data
      //this.countries = data;
    });
     

  }


  getDataServices(): Observable<any[]> {
    let headers: HttpHeaders = new HttpHeaders();
    
    return this.httpClient.get(
      `https://restcountries.eu/rest/v2/region/europe`, 
       {headers: headers}
      ).pipe(
           map((data: any[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Capital not found!' );
           })
        )
    }

    getDataServices2(): Observable<any[]> {
      let headers: HttpHeaders = new HttpHeaders();
      
      return this.httpClient.get(
        `https://restcountries.eu/rest/v2/region/asia`, 
         {headers: headers}
        ).pipe(
             map((data: any[]) => {
               return data;
             }), catchError( error => {
               return throwError( 'Capital not found!' );
             })
          )
      }
  

  getCategories$ = (): Observable<Category[]> => {
    return of(this.dataResults.map(v => v.category))
  }

  getProducts$ = (category: Category): Observable<ProductsByCategory> => {
    return of(this.dataResults.find(v => v.category.id === category.id).products).pipe(
      map(data => {
        return {
          category,
          products: this.dataResults.find(v => v.category.id === category.id).products
        };
      }),
      (delay(500))
    );
  }
}



