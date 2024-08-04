import Sequences from '../../app/_lib/sequences.js';

describe('Sequences Class', () => {
  let sequences;

  beforeEach(() => {
    sequences = new Sequences('Test', 'Type', 2, 3, 4, 100, 3);
  });

  describe('getSequence', () => {
    test('generates sequences with padding', () => {
      const data = [[[1, 3]], [[10, 12]]];
      const expected = [[['001', '002', '003']], [['010', '011', '012']]];
      const result = sequences.getSequence(data);
      expect(result).toEqual(expected);
    });

    test('generates sequences without padding', () => {
      sequences.paddNum = 0;
      const data = [[[1, 3]], [[10, 12]]];
      const expected = [[['1', '2', '3']], [['10', '11', '12']]];
      const result = sequences.getSequence(data);
      expect(result).toEqual(expected);
    });
  });

  describe('getrowsValue', () => {
    test('generates correct 2D array when fileCount is 1', () => {
      sequences = new Sequences('Test', 'Type', 1, 3, 4, 100, 3);
      const expected = [
        [
          [100, 103],
          [104, 107],
          [108, 111],
        ],
      ];
      const result = sequences.getrowsValue();
      expect(result).toEqual(expected);
    });

    test('generates correct 3D array when fileCount is greater than 1', () => {
      const expected = [
        [
          [100, 103],
          [104, 107],
          [108, 111],
        ],
        [
          [112, 115],
          [116, 119],
          [120, 123],
        ],
      ];
      const result = sequences.getrowsValue();
      expect(result).toEqual(expected);
    });
  });
});
