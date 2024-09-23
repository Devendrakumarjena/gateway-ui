import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() title: string = '';
  @Input() status: string | null = null; 
  @Input() data: any;
  objectKeys = Object.keys;

  // Helper method to check if a value is an object
  isObject(value: any): boolean {
    return typeof value === 'object' && !Array.isArray(value);
  }

  // Helper method to check if a value is an array
  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
