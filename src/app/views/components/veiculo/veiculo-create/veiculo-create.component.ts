import { VeiculoService } from './../../../../services/veiculo.service';
import { FormControl, Validators } from '@angular/forms';
import { Veiculo } from './../../../../models/veiculo';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

  veiculo: Veiculo = {
    id: '',
    modelo: '',
    placa: '',
    ano: '',
    estado: 'DISPONIVEL'
  }

  modelo = new FormControl('', [Validators.minLength(3)]);
  placa = new FormControl('', [Validators.minLength(7), Validators.maxLength(7)]);
  ano = new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]);

  selected = 'DISPONIVEL';

  constructor(private router: Router,
    private service: VeiculoService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.veiculo).subscribe((resposta) => {
      this.router.navigate(['veiculos']);
      this.service.message('Veículo foi registrado!');
    });
  }

  cancel(): void {
    this.router.navigate(['veiculos']);
  }

  errorValidModelo() {
    if (this.modelo.invalid) {
      return 'O modelo deve ter 3 ou mais caracteres';
    } else {
      return false;
    }
  }

  errorValidPlaca() {
    if (this.modelo.invalid) {
      return 'A placa deve ter 7 caracteres';
    } else {
      return false;
    }
  }

  errorValidAno() {
    if (this.modelo.invalid) {
      return 'O ano deve ter 4 caracteres';
    } else {
      return false;
    }
  }

}
