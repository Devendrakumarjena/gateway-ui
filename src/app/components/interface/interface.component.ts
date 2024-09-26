import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-in-interface',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss',
})
export class InterfaceComponent implements OnInit {
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
  }
}
