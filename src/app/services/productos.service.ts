import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { timeout } from 'rxjs';
import { ProductoDescripcion } from '../interfaces/producto-description.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos() {

    return new Promise(  ( resolve, reject) => {
      this.http.get<Producto[]>('https://angular-html-f6c55-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;

      });

    } );


  }

  getProducto( id: string ) {
    return this.http.get<ProductoDescripcion>(`https://angular-html-f6c55-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {
    if (this.productos.length === 0 ) {
       // carga productos
       this.cargarProductos().then( ()=> {
        //ejecutar despues de tener los productos
        //aplicar filtros
        this.filtrarProductos( termino );
       });
    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }
    /*this.productoFiltrado = this.productos.filter( producto => {
      return true;
    });
    console.log( this.productoFiltrado );*/
  }
  private filtrarProductos ( termino: string) {
    //console.log(this.productos);
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ){
        this.productoFiltrado.push( prod );
      }
    });
  }

}


