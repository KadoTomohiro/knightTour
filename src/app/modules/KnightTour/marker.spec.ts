import { Marker } from './marker';

describe('Marker', () => {
  it('should create an instance', () => {
    expect(new Marker(1)).toBeTruthy();
  });

  it('移動先の候補位置を持たないこと', () => {
    expect(new Marker(1).destination()).toEqual([]);
  });

  it('保持するカウントをラベルとして出力すること', () => {
    expect(new Marker(1).toString()).toEqual('1');
    expect(new Marker(2).toString()).toEqual('2');
    expect(new Marker(3).toString()).toEqual('3');
  });
});
