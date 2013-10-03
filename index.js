exports = module.exports = function (obj, notation) {
    function index(currObj, i) {
        var  key, prop, openBracket = i.indexOf('[');
        if(openBracket > -1) {
            var closeBracket = i.indexOf(']');
            prop = i.substr(openBracket +1,closeBracket  - (openBracket +1));
            key = i.substr(0,openBracket)
            return currObj[key][prop];
        } else {
            return currObj[i]
        }

    }

    return notation.split('.').reduce(index, obj)
};