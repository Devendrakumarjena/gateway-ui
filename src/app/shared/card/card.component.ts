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
  @Input()
  title!: string;
  @Input() data: any;

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'configured':
        return 'status-configured';
      case 'connected':
        return 'status-connected';
      case 'disconnected':
        return 'status-disconnected';
      default:
        return '';
    }
  }
}
