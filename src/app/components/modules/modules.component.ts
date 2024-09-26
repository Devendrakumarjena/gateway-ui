import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { CommonTableComponent } from '../../shared/common-table/common-table.component';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [HeaderComponent, CommonTableComponent],
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {
  title: string = '';
  tableData = [
    {
      attribute: 'Temperature',
      dataType: 'INT',
      default: '0',
      request: '',
      expression: 'te[a-z]+',
      data: '23',
    },
    {
      attribute: 'Humidity',
      dataType: 'Float',
      default: '0.0',
      request: '',
      expression: 'te[a-z]+',
      data: '122.65',
    },
  ];

  columnsConfig = [
    { header: 'Attribute', key: 'attribute', type: 'text' },
    {
      header: 'Data Type',
      key: 'dataType',
      type: 'select',
      options: ['INT', 'Float', 'Double', 'String'],
    },
    { header: 'Default', key: 'default', type: 'text' },
    { header: 'Request', key: 'request', type: 'text' },
    { header: 'Expression', key: 'expression', type: 'text' },
    { header: 'Data', key: 'data', type: 'text' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
  }

  onRowAdded(newRow: any) {}

  onRowRemoved(index: number) {}
}
