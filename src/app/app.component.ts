import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Holder } from './model/holder';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'AngularHttpRequest';

  holders: Holder[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  
    this.http.get<Holder[]>("https://jsonplaceholder.typicode.com/posts").subscribe(dados => this.holders = dados);
  
  }


  onProductCreate(products: {pName: string, desc: string, price: string}) {
    console.log(products);
    this.http.post("https://jsonplaceholder.typicode.com/posts", products)
      .subscribe((res) => {
        console.log(res);
      });
  }

}





