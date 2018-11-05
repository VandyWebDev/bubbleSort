describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single-item array', function(){
    expect( bubbleSort([1])).toEqual( [3] );
  });
  it('handles a single-item array', function(){
    expect( bubbleSort( [5,3,2,4,1] )).toEqual( [1,2,3,4,5] );
  });
});

