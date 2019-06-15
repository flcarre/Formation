const User = require('../src/user');
const assert = require('assert');

describe('Deleting user', () => {
    let joe;

    beforeEach((done), () => {
        joe = new User({ name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
    });

    it('class method remove', () => {

    });

    it('class method findAndRemove', () => {

    });

    it('class method findByIdAndRemove', () => {

    });

});