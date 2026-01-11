import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  name: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      name: 'Bridal Blouse Stitching',

      image: 'assets/images/bb.png' // New Image
    },
    {
      name: 'Designer Blouse Stitching',

      image: 'assets/images/pp.png' // Reusing Red Bridal (Contrast)
    },

    {
      name: 'Lehenga Stitching',

      image: 'assets/images/service-lehenga.png' // Existing pastel-ish lehenga
    },

    {
      name: 'Salwar Suit Stitching',

      image: 'assets/images/ss.png' // Existing Modern Salwar
    },


    {
      name: 'Gown Stitching',

      image: 'assets/images/bigp.png' // Existing Gown
    },
    {
      name: 'Girls Dress Stitching',

      image: 'assets/images/small.png'
    },

  ];
}
