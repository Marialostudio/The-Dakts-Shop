import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from "../../services/shop.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toastrService = inject(ToastrService);
  shopService = inject(ShopService);

  products: any[] = [];

  ngOnInit(){
    this.shopService.getProducts().subscribe((res: any) => {
      if (res.result === 'Good!') {
        //console.log('Respuesta:', res);
        this.products = res.data;
        //console.log('Productos:', this.products)
      } else {
        this.toastrService.error('An error ocurred');
      }
    });
  }
}
