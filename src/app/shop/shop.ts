import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer} from '../shared/footer/footer';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer],
  templateUrl: './shop.html',
  styleUrls: ['./shop.css']
})
export class ShoppingComponent {
  title: string = 'Tienda';
}