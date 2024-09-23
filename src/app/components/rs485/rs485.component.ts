import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rs485',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rs485.component.html',
  styleUrl: './rs485.component.scss'
})
export class RS485Component implements OnInit {
  selectedProtocol = '';
  selectedBaudrate = '';
  selectedDataSize = '';
  selectedParity = '';

  protocolOptions = ['Modbus RTU', 'Modbus ASCII', 'Modbus TCP'];
  baudrateOptions = ['9600', '19200', '38400', '57600', '115200'];
  dataSizeOptions = ['8', '7'];
  parityOptions = ['None', 'Odd', 'Even'];

  // Example API endpoint returning default data
  apiEndpoint = 'https://api.example.com/data'; // Replace with actual API endpoint
  sampleData = [
    {
      "name": "Current",
      "expression": "fc=3;reg=1;cnt=2;df=fle;d=0"
    },
    {
      "name": "Voltage",
      "expression": "fc=3;reg=3;cnt=2;df=fle;d=0"
    },
    {
      "name": "Watt",
      "expression": "fc=3;reg=5;cnt=2;df=fle;d=0"
    }
  ]

  attributeArray = [{}];

  constructor() {

  }

  ngOnInit(): void {
    this.fetchData();
  }

  // Fetch the default data from the API
  async fetchData() {
    try {
      const response = await fetch(this.apiEndpoint);
      const data = await response.json();
      this.populateTable(data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
      this.populateTable(this.sampleData);
    }
  }

  // Function to populate the table with fetched data
  populateTable(data: any) {
    const table = document.getElementById('dynamicTable')!.getElementsByTagName('tbody')[0];

    data.forEach((item: any) => {
      this.addRow(item, true); // Pass true for non-editable API rows
    });
    this.addRow();
  }

  // Function to add a row to the table
  addRow(data: any = null, isFromAPI = false) {
    const table = document.getElementById('dynamicTable')!.getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cellWidth = '10%'; // Set the desired width for each cell
    const selectWidth = '100px'; // Set the desired width for select elements

    // Name column
    const nameCell = newRow.insertCell();
    nameCell.style.width = cellWidth;
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = data && 'name' in data ? data.name : '';
    // nameInput.readOnly = isFromAPI; // Make non-editable if from API
    nameCell.appendChild(nameInput);

    // FC (Dropdown) column
    const fcCell = newRow.insertCell();
    fcCell.style.width = cellWidth;
    const fcSelect = document.createElement('select');
    fcSelect.style.width = selectWidth;
    fcSelect.innerHTML = `
          <option value="1" ${data && data.expression.includes('fc=1') ? 'selected' : ''}>1</option>
          <option value="2" ${data && data.expression.includes('fc=2') ? 'selected' : ''}>2</option>
          <option value="3" ${data && data.expression.includes('fc=3') ? 'selected' : ''}>3</option>
          <option value="4" ${data && data.expression.includes('fc=4') ? 'selected' : ''}>4</option>`;
    // fcSelect.disabled = isFromAPI; // Make non-editable if from API
    fcCell.appendChild(fcSelect);

    // Reg column
    const regCell = newRow.insertCell();
    regCell.style.width = cellWidth;
    const regInput = document.createElement('input');
    regInput.type = 'text';
    regInput.value = data ? data.expression.match(/reg=(\d+)/)[1] : '';
    // regInput.readOnly = isFromAPI; // Make non-editable if from API
    regCell.appendChild(regInput);

    // Cnt column
    const cntCell = newRow.insertCell();
    cntCell.style.width = cellWidth;
    const cntInput = document.createElement('input');
    cntInput.type = 'text';
    cntInput.value = data ? data.expression.match(/cnt=(\d+)/)[1] : '';
    // cntInput.readOnly = isFromAPI; // Make non-editable if from API
    cntCell.appendChild(cntInput);

    // DF (Dropdown) column
    const dfCell = newRow.insertCell();
    dfCell.style.width = cellWidth;
    const dfSelect = document.createElement('select');
    dfSelect.style.width = selectWidth;
    const dfValue = data ? data.expression.match(/df=([^;]+)/)[1] : '';
    dfSelect.innerHTML = `
          <option value="s16" ${dfValue === 's16' ? 'selected' : ''}>s16</option>
          <option value="us16" ${dfValue === 'us16' ? 'selected' : ''}>us16</option>
          <option value="s32be" ${dfValue === 's32be' ? 'selected' : ''}>s32be</option>
          <option value="u32be" ${dfValue === 'u32be' ? 'selected' : ''}>u32be</option>
          <option value="s32le" ${dfValue === 's32le' ? 'selected' : ''}>s32le</option>
          <option value="su32le" ${dfValue === 'su32le' ? 'selected' : ''}>su32le</option>
          <option value="s64le" ${dfValue === 's64le' ? 'selected' : ''}>s64le</option>`;
    // dfSelect.disabled = isFromAPI; // Make non-editable if from API
    dfCell.appendChild(dfSelect);

    // D column
    const dCell = newRow.insertCell();
    dCell.style.width = cellWidth;
    const dInput = document.createElement('input');
    dInput.type = 'text';
    dInput.value = data ? data.expression.match(/d=(\d+)/)[1] : '';
    // dInput.readOnly = isFromAPI; // Make non-editable if from API
    dCell.appendChild(dInput);

    // Action column (Add/Remove Button)
    const actionCell = newRow.insertCell();
    actionCell.style.width = cellWidth;
    const actionButton = document.createElement('button');
    actionButton.textContent = isFromAPI ? 'Remove' : 'Add'; // "Remove" for API rows, "Add" for new rows
    actionButton.onclick = () => {
      if (actionButton.textContent === 'Add') {
        actionButton.textContent = 'Remove';
        this.addRow(); // Add new empty row with an "Add" button
      } else {
        table.deleteRow(newRow.rowIndex); // Remove the current row
        console.log(newRow);
        this.removeRowFromAttributeArray(0);
      }    
    };
    actionButton.addEventListener('click', function () {

    });
    actionCell.appendChild(actionButton);

    this.addRowToAttributeArray(newRow);
  }

  // Function to add row values to attributeArray
  addRowToAttributeArray(row: HTMLTableRowElement) {
    const name = (row.cells[0].firstChild as HTMLInputElement).value;
    const fc = (row.cells[1].firstChild as HTMLSelectElement).value;
    const reg = (row.cells[2].firstChild as HTMLInputElement).value;
    const cnt = (row.cells[3].firstChild as HTMLInputElement).value;
    const df = (row.cells[4].firstChild as HTMLSelectElement).value;
    const d = (row.cells[5].firstChild as HTMLInputElement).value;

    const expression = `fc=${fc};reg=${reg};cnt=${cnt};df=${df};d=${d}`;
    this.attributeArray.push({ "name": name, "expression": expression });
  }

  // Function to remove row values from attributeArray
  removeRowFromAttributeArray(rowIndex: number) {
    this.attributeArray.splice(rowIndex, 1);
  }

}
