describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single item array', function() {
    expect(bubbleSort([3])).toEqual([3]);
  });
  it('handles multiple items array', function() {
    expect(bubbleSort([3, 4, 2, 9, 5])).toEqual([2, 3, 4, 5, 9]);
  });
});
