import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactMeService {
  private apiUrl = 'https://formspree.io/f/manygdqz';

  constructor(private http: HttpClient) {}

  // Method to send a POST request
  private postData(message: string, email: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Customize headers as needed

    // Send POST request with JSON body
    return this.http.post<any>(this.apiUrl, message);
  }
}
