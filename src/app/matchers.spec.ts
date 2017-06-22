describe('The toBe matcher compares with ===', () => {
  it('and has a positive case', () => expect(true).toBe(true));
  it('and can have a negative case', ()  => expect(false).not.toBe(true));
});

// https://jasmine.github.io/edge/introduction.html#section-Expectations
