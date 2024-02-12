import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // vzdy musis naimportovat HttpClient do toho componentu, ktory ma robit nejaky http request (ci uz backend api alebo nieco ine)

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  constructor(private http: HttpClient) {}

@Input() totoposlatdochildu!: number; // toto je objekt do ktoreho sa ulozi spravaprechild ci ako to volas ked to parent posle. 

@Output() outputzchildu = new EventEmitter<string>()

zistiBarcode(barcode: number): void { //Vytvoris si funkciu, ktora bude mat jeden parameter - barcode. Ked tu funkciu zavolas, tak namiesto toho parametra das ten objekt z childu
  const apiUrl = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`; // toto je to URL kde budes robit http request. Je to URL tej databazy, ktora potrebuje na mieste ${barcode} ten barcode a vrati ti json s udajmi o tom produkte
  this.http.get(apiUrl).subscribe(
    (response: any) => {
      const productName = response.product.product_name;
      this.outputzchildu.emit(productName);
    },
    (error) => {
      console.log(error)
    }
  )
}

// v tom json si skopirujes path, aby si si to nemusela pamatat alebo rucne hladat


// Tak teraz za tu const napis funkciu aby ju ten httpClient zavolal. Je to GET request

//Sekunda. Beriem spat, je to za funkciou. ALe aj tak . Ty chces v ramci tej funkcie zistiBarcode zavolat httpClient metodou GET a ako parameter mu dat to apiUrl. Dnu v tej zistiBarcode funkcii

}
