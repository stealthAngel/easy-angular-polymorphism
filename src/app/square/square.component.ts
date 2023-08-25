import { Component, Input, OnInit } from '@angular/core';
import { Shape, Square } from '../models/interfaces';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input()
  public shape: Shape | undefined;

  protected get square(): Square {
    return this.shape as Square;
  }

  constructor() {}

  ngOnInit(): void {}
}
