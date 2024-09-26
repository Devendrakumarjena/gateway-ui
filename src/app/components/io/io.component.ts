import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-io',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './io.component.html',
  styleUrl: './io.component.scss',
})
export class IOComponent implements OnInit {
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
  }
}
