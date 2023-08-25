export type ShapeType = 'circle' | 'square' | 'rectangle';

export interface Shape {
  type: ShapeType;
}

export interface Circle extends Shape {
  diameter: number;
}

export interface Square extends Shape {
  sideLength: number;
}

export interface Rectangle extends Shape {
  width: number;
  height: number;
}
