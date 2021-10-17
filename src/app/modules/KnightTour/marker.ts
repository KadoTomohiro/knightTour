import {Piece} from "./piece";
import {Position} from "./position";

export class Marker implements Piece {
  constructor(private count: number) {}
  destination(): Position[] {
    return [];
  }

  toString(): string {
    return this.count.toString()
  }

}
