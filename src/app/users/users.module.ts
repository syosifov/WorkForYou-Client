import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './shared/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UserProfileComponent, UserProfileEditComponent],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    AuthModule,
    SharedModule
  ]
})
export class UsersModule { }
