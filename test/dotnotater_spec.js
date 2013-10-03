var dotnotation = require('../index.js')
    , mocha = require('mocha')
    , expect = require('chai').expect;

describe('node-dotnotation', function(){
    it('should exist return a function', function() {
       expect(dotnotation).to.be.a('function');
    });

    it('should resolve a value', function() {
        var obj = {'a': 1};
        expect(dotnotation(obj,'a')).to.equal(1);
    });

    it('should resolve an object', function() {
        var obj = {'a': {'hello' : 'world'}};
        expect(dotnotation(obj,'a')).to.deep.equal({'hello' : 'world'});
    });

    it('should resolve an array', function() {
        var obj = {'a': [1,2,3,4,5]};
        expect(dotnotation(obj,'a')).to.have.length(5);
    });

    it('should resolve a deeply nested value', function() {
        var obj = {'a': {'b': {'c' : 3 }}};
        expect(dotnotation(obj,'a.b.c')).to.equal(3);
    });

    it('should resolve array values by index', function() {
        var obj = {'a': {'b': {'c' : [1,2,3,4,5] }}};
        expect(dotnotation(obj,'a.b.c[0]')).to.equal(1);
    });


    it('should resolve array values within index referenced arrays', function() {
        var obj = {'a': {'b': {'c' : [{ 1 :'a'},{2:'b'}] }}};
        expect(dotnotation(obj,'a.b.c[0].1')).to.equal('a');
    });
});