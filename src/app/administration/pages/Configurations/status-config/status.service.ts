import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.userAPI}/system/ticketing/status/`;

  constructor(private http: HttpClient) { }

  // add status
  create(data: any): Observable<any> {
    let API_URL = `${this.baseURL}add`;
    return this.http.post(API_URL, data).pipe(catchError((error) => {
      this.handleError(error);
      return throwError(error);
    }));
  }

  // Get status code
  getCode(code: any) {
    let API_URL = `${this.baseURL}find/by/status/${code}`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError((error) => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  find() {
    let API_URL = `${this.baseURL}all`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError((error) => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  verify(id: any): Observable<any> {
    let API_URL = `${this.baseURL}verify/${id}`;
    return this.http.put(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      )
  }
  modify(data: any): Observable<any> {
    let API_URL = `${this.baseURL}modify/`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
    catchError((error) => {
      this.handleError(error);
      return throwError(error);
    })
    )
  }
  delete(id: any): Observable<any> {
    var API_URL = `${this.baseURL}delete/${id}`;
    return this.http.delete(API_URL, {headers: this.headers, withCredentials: false })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      )
  }

   // Error Handler
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
      console.log(error)
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      errorMessage;
    });
  }
}
