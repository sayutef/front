import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-page-t',
  templateUrl: './page-t.component.html',
  styleUrl: './page-t.component.css'
})
export class PageTComponent implements OnInit{
  temp: string = '';
  name: string = '';
  status: string = '';
  hora: string = '';

  constructor(private TemperatureService: TemperatureService) { }

  ngOnInit() {
    this.TemperatureService.getData().subscribe((data) => {
      this.temp = `${data.temp}°C`;
      this.name = data.name;
      this.status = `Temperatura: ${data.status}`;
    }, (error) => {
      console.error('Error al obtener los datos:', error);
    });

    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000 * 60);

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
