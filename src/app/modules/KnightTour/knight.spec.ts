import { Knight } from './knight';

describe('Knight', () => {
  it('should create an instance', () => {
    expect(new Knight()).toBeTruthy();
  });

  it('指定位置からナイトの次の移動位置候補を取得できること', () => {
    const knight = new Knight()

    expect(knight.destination({file: 4, rank: 4})).toEqual([
      {file: 3, rank: 2},
      {file: 5, rank: 2},
      {file: 2, rank: 3},
      {file: 6, rank: 3},
      {file: 2, rank: 5},
      {file: 6, rank: 5},
      {file: 3, rank: 6},
      {file: 5, rank: 6},
    ])
  });

  it('ナイトの表記Nを取得できること', () => {
  const knight = new Knight()

  expect(knight.toString()).toEqual('N')
  });
});
