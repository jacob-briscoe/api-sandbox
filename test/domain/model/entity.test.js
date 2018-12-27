const Entity = require('../../../domain/shared/entity');

test('entity base sameIdentityAs', () =>{
    expect(new Entity().sameIdentityAs()).toBeFalsy();
    expect(new Entity().sameIdentityAs(new Entity())).toBeTruthy();
    expect(new Entity(1).sameIdentityAs(new Entity(2))).toBeFalsy();
    expect(new Entity(1).sameIdentityAs(new Entity(1))).toBeTruthy();
});
