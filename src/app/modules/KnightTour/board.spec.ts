import { Board } from './board';

describe('Board', () => {
  it('should create an instance', () => {
    expect(new Board(8, 8)).toBeTruthy();
  });

  it('should throw RangeError if file size is negative number', () => {
    expect(()  => new Board(-8, 8)).toThrow(new RangeError('fileSize require nature number'));
  });

  it('should throw RangeError if file size is not integer', () => {
    expect(() => new Board(8.1, 8)).toThrow(new RangeError('fileSize require nature number'));
  });

  it('should throw RangeError if rank size is negative number', () => {
    expect(() => new Board(8, -8)).toThrow(new RangeError('rankSize require nature number'));
  });

  it('should throw RangeError if rank size is not integer', () => {
    expect(() => new Board(8, 8.1)).toThrow(new RangeError('rankSize require nature number'));
  });
});
