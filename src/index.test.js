describe('sample test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('calculateWinner', () => {
  it('should return "X" when X has a winning line', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('should return "O" when O has a winning line', () => {
    const squares = [null, null, null, 'O', 'O', 'O', null, null, null];
    expect(calculateWinner(squares)).toBe('O');
  });

  it('should return null when there is no winner', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', null, null, null];
    expect(calculateWinner(squares)).toBe(null);
  });

  it('should return null when there is a draw', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(calculateWinner(squares)).toBe(null);
  });
});
