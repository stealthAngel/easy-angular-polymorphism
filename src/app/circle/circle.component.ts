import { Component, Input, OnInit } from '@angular/core';
import { Circle, Shape } from '../models/interfaces';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent implements OnInit {
  @Input()
  public shape: Shape | undefined;

  protected get circle(): Circle {
    return this.shape as Circle;
  }

  constructor() {}

  ngOnInit(): void {}
}
