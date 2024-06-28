import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from "../../services/shop.service";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
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
