import { ReservaService } from './../../../../services/reserva.service';
import { Veiculo } from './../../../../models/veiculo';
import { VeiculoService } from './../../../../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css']
})
export class ReservaCreateComponent implements OnInit {

  reserva: Reserva = {
    veiculo: '',
    estadoReserva: '',
    inicioReserva: '',
    fimReserva: '',
    cancelamentoReserva: ''
  };

  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService,
    private router: Router,
    private service: ReservaService) { }

  ngOnInit(): void {
    this.listarVeiculos();
  }

  create(): void {
    this.service.create(this.reserva).subscribe(resposta => {
      this.service.message('Uma nova Reserva foi criada!');
      this.router.navigate(['reservas']);
    });
  }

  listarVeiculos(): void {
    this.veiculoService.findAll().subscribe(resposta => {
      this.veiculos = resposta;
    })
  }

  cancel(): void {
    this.router.navigate(['reservas']);
  }

}
