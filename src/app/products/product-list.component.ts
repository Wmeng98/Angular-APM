import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50; 
    imageMargin: number = 2;
    showImage: boolean = false;

    errorMessage: string;


    _listFilter: string; // changed listFilter property into a getter and setter
    // when data binding needs value, getter, when value modified by user, setter called modifying the value
    get listFilter(): string {
        return this._listFilter;
    }   
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products; // smarter
    }


    filteredProducts: IProduct[];
    products: IProduct[] = []; // anytime we don't know or care hat the specfic data type is

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void { // gets called after the constructor runs
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
        
    }

    constructor(private productService : ProductService) {
        this.listFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase(); // want case insensitive comparison
        return this.products.filter((product : IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}