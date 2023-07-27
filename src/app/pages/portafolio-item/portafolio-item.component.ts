import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-description.interface';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.scss']
})
export class PortafolioItemComponent implements OnInit {

producto!: ProductoDescripcion;
id!: string;


  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      //console.log(parametros['id']);
      this.productosService.getProducto(parametros['id'])
          .subscribe(( producto: ProductoDescripcion ) => {
          this.id = parametros['id'];
          this.producto = producto;
            //console.log(producto);

      });
    });
  }

}
