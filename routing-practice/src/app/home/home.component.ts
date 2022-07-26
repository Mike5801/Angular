import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) { }
  admin: boolean = false;
  ngOnInit(): void {
  }

  onLoginAdmin() {
    this.authService.loginAsAddmin();
    this.admin = this.authService.admin;
  }
}
