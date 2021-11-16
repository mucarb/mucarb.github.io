import { ReservaCancelComponent } from './views/components/reserva/reserva-cancel/reserva-cancel.component';
import { ReservaCreateComponent } from './views/components/reserva/reserva-create/reserva-create.component';
import { ReservaReadComponent } from './views/components/reserva/reserva-read/reserva-read.component';
import { VeiculoUpdateComponent } from './views/components/veiculo/veiculo-update/veiculo-update.component';
import { VeiculoReadComponent } from './views/components/veiculo/veiculo-read/veiculo-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { VeiculoCreateComponent } from './views/components/veiculo/veiculo-create/veiculo-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'veiculos',
    component: VeiculoReadComponent
  },
  {
    path: 'veiculos/create',
    component: VeiculoCreateComponent
  },
  {
    path: 'veiculos/update/:id',
    component: VeiculoUpdateComponent
  },
  {
    path: 'reservas',
    component: ReservaReadComponent
  },
  {
    path: 'reservas/create',
    component: ReservaCreateComponent
  },
  {
    path: 'reservas/cancel/:id',
    component: ReservaCancelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
