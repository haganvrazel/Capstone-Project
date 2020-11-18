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
    return this.http.post<any>("http://localhost:5000/electronic/storeElectronic", electronic, httpOptions);
  }

  updateElectronic(electronic: Electronic): Observable<any> {
    return this.http.put<Electronic>(`${"http://localhost:5000/electronic/updateElectronic"}`, electronic, httpOptions);
  }

  deleteElectronicById(_id: any): Observable<any> {
    return this.http.delete<Electronic>(`${"http://localhost:5000/electronic/deleteElectronic"}/${_id}`);
  }

}