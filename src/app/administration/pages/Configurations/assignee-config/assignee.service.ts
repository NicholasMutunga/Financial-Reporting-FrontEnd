import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssigneeService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.userAPI}/system/ticketing/`;

  constructor(private http: HttpClient) { }

  // add priority
  create(data: any): Observable<any> {
    let API_URL = `${this.baseURL}ticketAssignee/add`;
    return this.http.post(API_URL, data).pipe(catchError((error) => {
      this.handleError(error);
      return throwError(error);
    }));
  }

  // Get priority code
  getCode(code: any) {
    let API_URL = `${this.baseURL}ticketAssignee/find/${code}`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(
      map((res: any) => {
        console.log(res)
        return res || {};
      }),
      catchError((error) => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  find() {
    let API_URL = `${this.baseURL}ticketAssignee/all`;
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
    let API_URL = `${this.baseURL}ticketAssignee/verify/${id}`;
    return this.http.put(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      )
  }
  modify(data: any): Observable<any> {
    let API_URL = `${this.baseURL}ticketAssignee/modify/`;
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
    var API_URL = `${this.baseURL}ticketAssignee/delete/${id}`;
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
