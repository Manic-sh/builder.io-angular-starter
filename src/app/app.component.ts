import { BuilderBlock } from '@builder.io/angular';
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import './with-children';

@Component({
  selector: 'custom-thing',
  template: 'Hello: {{name}}',
})
export class CustomThing {
  @Input()
  name = '';
}

BuilderBlock({
  tag: 'custom-thing',
  name: 'Custom thing',
  inputs: [
    {
      name: 'name',
      type: 'string',
    },
  ],
})(CustomThing);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {} // Inject HttpClient service

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>('https://randomuser.me/api?results=2').subscribe(
      (response) => {
        this.data = response; // Assign fetched data to 'data' variable
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  title = 'app';
  
  options: any = {
    cacheSeconds: 1,
    data: {
      locale: 'en-US',
    },
  };

  data = {
    property: 'hello',
    fn: (text: string) => alert(text),
  };
  context= {
    myFunction: (text: string) => alert(text),
  };

  load(event: any) {
    console.log('load', event);
  }

  error(event: any) {
    console.log('error', event);
  }
}
