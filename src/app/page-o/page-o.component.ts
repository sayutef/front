import { Component, OnInit } from '@angular/core';
import { OxigenacionService } from '../services/oxigenacion.service';

@Component({
  selector: 'app-page-o',
  templateUrl: './page-o.component.html',
  styleUrl: './page-o.component.css'
})
export class PageOComponent implements OnInit{
  nombre: string = '';
  Oxigenacion: number = 0;
  status: number = 0;
  hora: string = '';

  constructor(private OxigenacionService: OxigenacionService) {}

  ngOnInit(): void {
    this.OxigenacionService.getDatos().subscribe(
      (data) => {
        this.nombre = data.nombre;
        this.Oxigenacion = data.Oxigenacion;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );

    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000 * 60);  // Actualiza cada minuto
  }

  actualizarHora(): void {
    const now = new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();

    // Agrega ceros a la izquierda si es menor a 10
    const horasStr = horas < 10 ? `0${horas}` : `${horas}`;
    const minutosStr = minutos < 10 ? `0${minutos}` : `${minutos}`;

    this.hora = `${horasStr}:${minutosStr}`;
  }
}
