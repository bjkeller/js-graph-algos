var List = require('collections/list');

var Queue = function() {
  var list = new List();

  var Constructor = function() {};

  Constructor.prototype.enqueue = function(elem) {
    list.push(elem);
  };

  Constructor.prototype.dequeue = function() {
    return list.shift();
  };

  Constructor.prototype.size = function() {
    return list.length;
  };

  return new Constructor();
};

module.exports.Queue = Queue;
