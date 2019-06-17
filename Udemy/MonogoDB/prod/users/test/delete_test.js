const User = require('../src/user');
const assert = require('assert');

describe('Deleting user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });

    it('class method remove', (done) => {
        // remove un groupe duser suivant des criteres
        User.remove({ name: 'Joe'})
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            })

    });

    it('class method findAndRemove', (done) => {
        // remove la première instance correspondant au critere rentré dans mongodb
        User.findOneAndRemove({ name: 'Joe' })
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });

    it('class method findByIdAndRemove', (done) => {
        // remove la première instance correspondant a l'id rentré dans mongodb
        User.findByIdAndRemove(joe._id)
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });

});