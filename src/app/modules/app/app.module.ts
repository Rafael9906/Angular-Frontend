import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from '../../modules/app/app-routing.module';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { RegisterComponent } from './register/register.component';

import {AuthenticationService} from '../../services/authentication.service';
import {AuthGuardService} from '../../services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'profile',component: ProfileComponent, canActivate: [AuthGuardService]},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
