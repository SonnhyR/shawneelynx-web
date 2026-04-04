import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proximamente',
  standalone: true,
  imports: [],
  templateUrl: './proximamente.html',
  styleUrl: './proximamente.css'
})
export class ProximamenteComponent implements OnInit {
  title: string = 'Próximamente';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (data && data['title']) {
        this.title = data['title'];
      }
    });
  }
}
