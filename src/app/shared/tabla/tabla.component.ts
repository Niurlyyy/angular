import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  datos = [
    { nombre: 'Niurly', correo: 'niurly@gmail.com', telefono: '124329' },
    { nombre: 'Dylan', correo: 'dylan@gmail.com', telefono: '242341' },
    { nombre: 'Yull', correo: 'yull@gmail.com', telefono: '4523123' }
  ];
}
