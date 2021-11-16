import { Veiculo } from './../models/veiculo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  // recebendo URL base para comunicacao com base de dados  postgres no heroku
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient,
    private snack: MatSnackBar) { }

  findById(id: any): Observable<Veiculo> {
    const url = `${this.baseUrl}/veiculos/${id}`;
    return this.http.get<Veiculo>(url);
  }

  findAll(): Observable<Veiculo[]> {
    const url = this.baseUrl + "/veiculos";
    return this.http.get<Veiculo[]>(url);
  }

  findAllDisponivel(dataInicio: any, dataFim: any): Observable<Veiculo[]> {
    const url = `${this.baseUrl}/veiculos/fetch?datainicio=${dataInicio}&datafim=${dataInicio}`;
    return this.http.get<Veiculo[]>(url);
  }

  create(veiculo: Veiculo): Observable<Veiculo> {
    const url = this.baseUrl + "/veiculos";
    return this.http.post<Veiculo>(url, veiculo);
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.baseUrl}/veiculos/${veiculo.id}`;
    return this.http.put<Veiculo>(url, veiculo);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

}
