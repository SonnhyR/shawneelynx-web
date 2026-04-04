
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer} from '../shared/footer/footer';

@Component({
  selector: 'app-sorteos',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer],
  templateUrl: './sorteos.html',
  styleUrls: ['./sorteos.css']
})
export class SorteosComponent {
  title: string = 'Sorteos';
}