import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';

import { NavComponent } from './views/components/template/nav/nav.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { HomeComponent } from './views/components/home/home.component';
import { VeiculoReadComponent } from './views/components/veiculo/veiculo-read/veiculo-read.component';
import { VeiculoCreateComponent } from './views/components/veiculo/veiculo-create/veiculo-create.component';
import { VeiculoUpdateComponent } from './views/components/veiculo/veiculo-update/veiculo-update.component';
import { ReservaReadComponent } from './views/components/reserva/reserva-read/reserva-read.component';
import { ReservaCreateComponent } from './views/components/reserva/reserva-create/reserva-create.component';
import { ReservaCancelComponent } from './views/components/reserva/reserva-cancel/reserva-cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VeiculoReadComponent,
    VeiculoCreateComponent,
    VeiculoUpdateComponent,
    ReservaReadComponent,
    ReservaCreateComponent,
    ReservaCancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
