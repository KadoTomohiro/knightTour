import {outSideBoard, OutSideBoard, Piece} from './piece';
import {Position} from "./types";

export class Marker implements Piece {
  private _position: Position | OutSideBoard = outSideBoard

  constructor(private count: number) {}
  destination(): Position[] {
    return [];
  }

  toString(): string {
    return this.count.toString()
  }

  get position() {
    return this._position
  }

  put(position: Position): void {
    this._position = position
  }

}
