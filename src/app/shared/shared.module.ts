import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [NavbarComponent],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    AuthModule
  ],
  exports: [
  NavbarComponent
  ]
})
export class SharedModule { }
