<<<<<<< HEAD
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
||||||| merged common ancestors
=======
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single-item array', function(){
    expect( bubbleSort([1])).toEqual( [1] );
  });
  it('handles a single-item array', function(){
    expect( bubbleSort( [5,4,3,2,1] )).toEqual( [1,2,3,4,5] );
  });
});

>>>>>>> abf3221794cbdfccd00dc96a61fcf952a84b95b7
