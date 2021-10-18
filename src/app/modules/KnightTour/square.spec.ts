import {Square, Squares} from './square';
import {Piece} from './piece';

describe('Square', () => {
  it('should create an instance', () => {
    expect(new Square()).toBeTruthy();
  });

  it('駒を設置できること', () => {
    const square = new Square()
    const stubPiece: Piece = {
      destination: (_) => [],
      toString: () =>  ''
    }
    square.put(stubPiece)

    expect(square.piece).toEqual(stubPiece)
  });
  it('駒を設置した場合、emptyでないこと', () => {
    const square = new Square()
    const stubPiece: Piece = {
      destination: (_) => [],
      toString: () =>  ''
    }
    square.put(stubPiece)

    expect(square.empty).toEqual(false)
  });
  it('駒を設置していない場合、emptyであること', () => {
    const square = new Square()
    expect(square.empty).toEqual(true)
  });

  it('設置した駒を除去できること', () => {
    const square = new Square()
    const stubPiece: Piece = {
      destination: (_) => [],
      toString: () =>  ''
    }
    square.put(stubPiece)
    square.remove()

    expect(square.piece).toEqual(null)
  });

  it('設置した駒を除去した場合、emptyであること', () => {
    const square = new Square()
    const stubPiece: Piece = {
      destination: (_) => [],
      toString: () =>  ''
    }
    square.put(stubPiece)
    square.remove()

    expect(square.empty).toEqual(true)
  });
});

describe('Squares', () => {
  it('should create an instance', () => {
    expect(new Squares(8, 8)).toBeTruthy();
  });

  it('指定位置のマスの参照を得られること', () => {
    const squares =  new Squares(8, 8)
    expect(squares.get({file: 0, rank: 0})).toBeTruthy()
  });

  it('設置したコマ数を得られること', () => {
    const squares =  new Squares(8, 8)
    const stubPiece: Piece = {
      destination: (_) => [],
      toString: () =>  ''
    }
    squares.get({file: 0, rank: 0}).put(stubPiece)
    squares.get({file: 1, rank: 0}).put(stubPiece)
    squares.get({file: 0, rank: 1}).put(stubPiece)
    expect(squares.pieceCount()).toBeTruthy(3)
  });

})
