import { Component, Input, OnInit } from '@angular/core';
import { Rectangle, Shape } from '../models/interfaces';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent implements OnInit {
  @Input()
  public shape!: Shape;

  protected get rectangle(): Rectangle {
    return this.shape as Rectangle;
  }
  constructor() {}

  ngOnInit(): void {}
}
