import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})
export class VeiculoUpdateComponent implements OnInit {

  id_veiculo = ''

  veiculo: Veiculo = {
    id: '',
    modelo: '',
    placa: '',
    ano: '',
    estado: ''
  }

  modelo = new FormControl('', [Validators.minLength(3)]);
  placa = new FormControl('', [Validators.minLength(7), Validators.maxLength(7)]);
  ano = new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]);

  selected: any;

  constructor(private router: Router,
    private service: VeiculoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_veiculo = this.route.snapshot.paramMap.get('id')!;
    this.findById();
    this.selected = this.veiculo.estado
  }

  findById(): void {
    this.service.findById(this.id_veiculo).subscribe(resposta => {
      this.veiculo = resposta;
    });
  }

  update(): void {
    this.service.update(this.veiculo).subscribe(resposta => {
      this.router.navigate(['veiculos']);
      this.service.message(`O registro do ${this.veiculo.modelo} foi atualizado!`);
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
