import { ReservaCancelComponent } from './../reserva-cancel/reserva-cancel.component';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Router } from '@angular/router';
import { ReservaService } from './../../../../services/reserva.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from './../../../../models/reserva';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-read',
  templateUrl: './reserva-read.component.html',
  styleUrls: ['./reserva-read.component.css']
})
export class ReservaReadComponent implements AfterViewInit {

  reservas: Reserva[] = [];

  displayedColumns: string[] = ['veiculo', 'inicioReserva', 'fimReserva', 'cancelamentoReserva', 'estadoReserva', 'acao'];
  dataSource = new MatTableDataSource<Reserva>(this.reservas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ReservaService,
    private router: Router,
    private veiculoService: VeiculoService,
    public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.reservas = resposta;
      this.listarVeiculo();
      this.dataSource = new MatTableDataSource<Reserva>(this.reservas);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['reservas/create']);
  }

  listarVeiculo(): void{
    this.reservas.forEach(x => {
      this.veiculoService.findById(x.veiculo).subscribe(resposta => {
        x.veiculo = resposta.modelo;        
      })
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReservaCancelComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}