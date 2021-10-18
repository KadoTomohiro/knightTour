import { Board } from './board';

describe('Board', () => {
  it('should create an instance', () => {
    expect(new Board(8, 8)).toBeTruthy();
  });

  describe('invalid initial paramater', () =>  {
    it('should throw RangeError if file size is 0', () => {
      expect(()  => new Board(0, 8)).toThrow(new RangeError('fileSize require nature number'));
    });

    it('should throw RangeError if file size is negative number', () => {
      expect(()  => new Board(-8, 8)).toThrow(new RangeError('fileSize require nature number'));
    });

    it('should throw RangeError if file size is not integer', () => {
      expect(() => new Board(8.1, 8)).toThrow(new RangeError('fileSize require nature number'));
    });

    it('should throw RangeError if rank size is 0', () => {
      expect(()  => new Board(8, 0)).toThrow(new RangeError('rankSize require nature number'));
    });

    it('should throw RangeError if rank size is negative number', () => {
      expect(() => new Board(8, -8)).toThrow(new RangeError('rankSize require nature number'));
    });

    it('should throw RangeError if rank size is not integer', () => {
      expect(() => new Board(8, 8.1)).toThrow(new RangeError('rankSize require nature number'));
    });
  })

  it('sizeがfile x rankのボードサイズを返すこと', () => {
    const board = new Board(8, 8)
    expect(board.size).toEqual(64);
  });

  it('マスがピースで埋まった場合、filledSquaresがtrueを返すこと', () => {
    const board = new Board(8, 8)
    spyOn(board, 'pieceCount').and.callFake(()  => 64)
    expect(board.filledSquares).toEqual(true);
  });


  it('マスがピースで埋まっていない場合、filledSquaresがfalseを返すこと', () => {
    const board = new Board(8, 8)
    spyOn(board, 'pieceCount').and.callFake(()  => 60)
    expect(board.filledSquares).toEqual(false);
  });

  it('動かした手数に応じて駒数が増えること', () => {
    const board = new Board(8, 8)
    board.move({file:0, rank:0})
    expect(board.pieceCount()).toEqual(1)
    board.move({file:1, rank:1})
    expect(board.pieceCount()).toEqual(2)
  });

  it('戻した手数に応じて駒数が減ること', () => {
    const board = new Board(8, 8)
    board.move({file:0, rank:0})
    board.move({file:1, rank:1})
    board.back()
    expect(board.pieceCount()).toEqual(1)
  });

  it('現在位置からナイトの次の移動位置候補を取得できること', () => {
    const board = new Board(8, 8)
    board.move({file: 4, rank: 4})
    expect(board.nextPosition()).toEqual([
      {file: 3, rank: 2},
      {file: 5, rank: 2},
      {file: 2, rank: 3},
      {file: 6, rank: 3},
      {file: 2, rank: 5},
      {file: 6, rank: 5},
      {file: 3, rank: 6},
      {file: 5, rank: 6},
    ])

    board.move({file: 5, rank: 6})
    expect(board.nextPosition()).toEqual([
      {file: 6, rank: 4},
      {file: 3, rank: 5},
      {file: 7, rank: 5},
      {file: 3, rank: 7},
      {file: 7, rank: 7},
    ])
  });

  it('指定位置からナイトの次の移動位置候補を取得できること', () => {
    const board = new Board(8, 8)
    board.move({file: 4, rank: 4})
    expect(board.nextPosition({file: 4, rank: 4})).toEqual([
      {file: 3, rank: 2},
      {file: 5, rank: 2},
      {file: 2, rank: 3},
      {file: 6, rank: 3},
      {file: 2, rank: 5},
      {file: 6, rank: 5},
      {file: 3, rank: 6},
      {file: 5, rank: 6},
    ])
    expect(board.nextPosition({file: 5, rank: 6})).toEqual([
      {file: 6, rank: 4},
      {file: 3, rank: 5},
      {file: 7, rank: 5},
      {file: 3, rank: 7},
      {file: 7, rank: 7},
    ])
  });

  it('指定された位置がボードの範囲内の場合、insideBoardがtrueを返す', () => {
    const board = new Board(8, 8)
    expect(board.insideBoard({file: 0, rank: 0})).toEqual(true)
    expect(board.insideBoard({file: 5, rank: 4})).toEqual(true)
    expect(board.insideBoard({file: 7, rank: 7})).toEqual(true)
  });
  it('指定された位置がボードの範囲外の場合、insideBoardがtrueを返す', () => {
    const board = new Board(8, 8)
    expect(board.insideBoard({file: -1, rank: -1})).toEqual(false)
    expect(board.insideBoard({file: 5, rank: 9})).toEqual(false)
    expect(board.insideBoard({file: 10, rank: 4})).toEqual(false)
    expect(board.insideBoard({file: 8, rank: 8})).toEqual(false)
  });
});
