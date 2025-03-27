import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-all',
  templateUrl: './page-all.component.html',
  styleUrl: './page-all.component.css'
})
export class PageAllComponent implements OnInit {
    
      constructor(
      ) {}
    
      temperatura: number = 18;
      ritmo_cardiaco: number = 180;
      any: any;
      isCollapsed = false;
      token : string = '';
    
      ngOnInit(): void {
      }


    
}
