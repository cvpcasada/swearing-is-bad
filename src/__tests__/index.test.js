import clean from '../index';

describe(`test database`, () => {  
  it(`test filter function`, () => {
    expect(clean(`hello fucking world`)).toEqual(`hello @#$%ing world`);
  });
});