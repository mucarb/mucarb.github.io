import { Reserva } from './../models/reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  // recebendo URL base para comunicacao com base de dados  postgres no heroku
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<Reserva[]> {
    const url = this.baseUrl + "/reservas";
    return this.http.get<Reserva[]>(url);
  }

  create(reserva: Reserva): Observable<Reserva> {
    const url = this.baseUrl + "/reservas";
    return this.http.post<Reserva>(url, reserva);
  }

  cancel(reserva: Reserva): Observable<Reserva> {
    const url = `${this.baseUrl}/reservas/cancel/${reserva.id}`;
    return this.http.put<Reserva>(url, reserva);
  }

  findById(id: any): Observable<Reserva> {
    const url = `${this.baseUrl}/reservas/${id}`;
    return this.http.get<Reserva>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

}
