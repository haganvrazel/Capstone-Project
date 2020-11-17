import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Electronic } from "../models/electronic";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  // URL to web api
  private electronicUrl = 'http://localhost:5000/electronic/electronics';
  constructor(private http: HttpClient) { }

  getElectronics(): Observable<Electronic[]> {
    return this.http.get<Electronic[]>(this.electronicUrl);
  }

  getElectronicById(_id: any): Observable<Electronic> {
    return this.http.get<Electronic>(`${this.electronicUrl}/${_id}`);
  }

  addElectronic(electronic: Electronic): Observable<any> {
    return this.http.post<any>(this.electronicUrl, electronic, httpOptions);
  }

  updateElectronicById(electronic: Electronic, _id: any): Observable<Electronic> {
    return this.http.put<Electronic>(`${this.electronicUrl}/${_id}`, electronic, httpOptions);
  }

  deleteElectronicById(_id: any): Observable<Electronic> {
    return this.http.delete<Electronic>(`${this.electronicUrl}/${_id}`);
  }

}