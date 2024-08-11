import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';

interface Product {
  image: string;
}

@Component({
  selector: 'app-painel-with-ad',
  standalone: true,
  imports: [CarouselModule, ButtonModule, HammerModule, IgxCarouselModule],
  templateUrl: './painel-with-ad.component.html',
  styleUrl: './painel-with-ad.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PainelWithAdComponent implements OnInit {
  products: Product[] | any[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.products = [
      {
        image: 'painel1.jpg',
      },
      {
        image: 'painel2.jpg',
      },
      {
        image: 'painel3.jpg',
      },
    ];
  }
}
