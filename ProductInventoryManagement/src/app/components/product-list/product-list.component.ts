import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productItemsLists!: any;
  constructor(private productService: ProductService) {}

ngOnInit(): void {
  this.productService.getData().subscribe(
    (response) => {
      this.productItemsLists = response;
    },
    (error) => {
      console.log(error);
    }
  );
}

productToBeDeleted!: any; 
handleDelete(deleteMessage: any){
  this.productToBeDeleted = deleteMessage;
  alert(`${this.productToBeDeleted.name} has been deleted.`)
}

productToBeEdited!: any; 
handleEdit(EditMessage: any){
  this.productToBeEdited = EditMessage;
  alert(`${this.productToBeEdited.name} has been edited.`)
}


}

