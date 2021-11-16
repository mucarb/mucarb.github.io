import { VeiculoService } from './../../../../services/veiculo.service';
import { Veiculo } from './../../../../models/veiculo';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements AfterViewInit {

  veiculos: Veiculo[] = [];

  displayedColumns: string[] = ['id', 'modelo', 'placa', 'ano', 'estado', 'acao'];
  dataSource = new MatTableDataSource<Veiculo>(this.veiculos);

  start = '';
  end = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: VeiculoService,
    private router: Router) { }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.veiculos = resposta;
      this.dataSource = new MatTableDataSource<Veiculo>(this.veiculos);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateTolistDisponiveis(): void {
    this.service.findAllDisponivel(this.start, this.end).subscribe(resposta => {
      this.veiculos = resposta;
      this.dataSource = new MatTableDataSource<Veiculo>(this.veiculos);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['veiculos/create']);
  }

}