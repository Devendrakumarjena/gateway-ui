import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wireless',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './wireless.component.html',
  styleUrl: './wireless.component.scss'
})
export class WIRELESSComponent implements OnInit {
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
  }
}
