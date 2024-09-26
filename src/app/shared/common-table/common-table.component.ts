import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-table',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.scss',
})
export class CommonTableComponent {
  @Input() tableData: any[] = [];
  @Input() columnsConfig: any[] = [];

  @Output() rowAdded: EventEmitter<any> = new EventEmitter();
  @Output() rowRemoved: EventEmitter<number> = new EventEmitter<number>();

  addRow() {
    const newRow = this.columnsConfig.reduce((acc, col) => {
      acc[col.key] = col.default || '';
      return acc;
    }, {});
    this.tableData.push(newRow);
    this.rowAdded.emit(newRow);
  }

  removeRow(index: number) {
    if (this.tableData.length > 0) {
      this.tableData.splice(index, 1);
      this.rowRemoved.emit(index);
    }
  }
}
