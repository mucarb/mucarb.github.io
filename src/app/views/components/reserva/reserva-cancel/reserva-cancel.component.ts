import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { Veiculo } from 'src/app/models/veiculo';
import { ReservaService } from 'src/app/services/reserva.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-reserva-cancel',
  templateUrl: './reserva-cancel.component.html',
  styleUrls: ['./reserva-cancel.component.css']
})
export class ReservaCancelComponent implements OnInit {

  id_reserva = '';

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
    private route: ActivatedRoute,
    private service: ReservaService) { }

  ngOnInit(): void {
    this.reserva.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.reserva.id).subscribe(resposta => {
      this.reserva = resposta;
    });
  }

  cancelarReserva(): void {
    this.service.cancel(this.reserva).subscribe(resposta => {
      this.service.message('A reserva foi cancelada!');
      this.router.navigate(['reservas']);
    }, err => {
      if (err.error.error.match('Essa Reserva já está cancelada!')) {
        this.service.message(err.error.error);
        this.router.navigate(['reservas']);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['reservas']);
  }

}