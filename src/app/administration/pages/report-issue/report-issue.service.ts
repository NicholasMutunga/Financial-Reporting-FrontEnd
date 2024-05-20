import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportIssueService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  private baseURL = `${environment.userAPI}/api/v1/subsidiary/`;

  create(data: any): Observable<any> {
    let API_URL = `${this.baseURL}add`;
    return this.http
      .post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          console.log("services", res)
          return res || {};
        }),
        catchError((error) => {
          console.log("error service", error)
          this.handleError(error);
          return throwError(error);
        })
      );
  }

  find(): Observable<any> {
    let API_URL = `${this.baseURL}all`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError((error) => {
          console.log(error)
          this.handleError(error);
          return throwError(error);
        })
      );
  }

  getCode(code: any) {
    let API_URL = `${this.baseURL}find/by/subsidiary/${code}`;
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
