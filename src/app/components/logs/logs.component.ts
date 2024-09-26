import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent implements OnInit{
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
  }
}
