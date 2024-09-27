import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [HeaderComponent,FormsModule,NgFor,ReactiveFormsModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent implements OnInit{

  title: string = '';
  logSettingsForm!: FormGroup;

  logEnabled: boolean = true;
  logMaxSize: number = 2;
  
  logFiles = [
    { fileName: 'servicelog-2022-12-11 16:45:32.log' },
    { fileName: 'servicelog-2022-12-12 16:45:32.log' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
    this.logFiles;
  }

  downloadLog(log: any) {
    console.log('Downloading log: ', log.fileName);
  }

  deleteLog(log: any) {
    console.log('Deleting log: ', log.fileName);
    this.logFiles = this.logFiles.filter(l => l !== log);
  }

  saveSettings() {
    console.log('Settings saved');
  
  }
  cancelSettings() {
    console.log('Settings canceled');
  
  }

}
