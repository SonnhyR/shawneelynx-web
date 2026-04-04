import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}