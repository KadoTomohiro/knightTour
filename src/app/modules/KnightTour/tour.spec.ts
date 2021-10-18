import { Tour } from './tour';
import {Board} from './board';

describe('Tour', () => {
  it('should create an instance', () => {
    const board = new Board(3, 4)
    expect(new Tour(board)).toBeTruthy();
  });

  it('探索に成功した場合、successを返すこと', () => {
    const board = new Board(3, 4)
    expect(new Tour(board).start({file: 0, rank: 0})).toEqual('success');
  });

  it('探索に失敗した場合、failedを返すこと', () => {
    const board = new Board(3, 3)
    expect(new Tour(board).start({file: 0, rank: 0})).toEqual('failed');
  });
});
