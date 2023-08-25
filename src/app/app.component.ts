import { Component } from '@angular/core';
import { jsonTestData } from './models/json-test-data';
import { Circle, Shape } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shapes: Shape[] = JSON.parse(jsonTestData);
}
