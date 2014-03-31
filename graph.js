//adjacency list

var AdjList = function(numVerts) {
  var table = [];

  var Constructor = function() {};

  Constructor.prototype.init = function() {
    for (var i = 0; i <= numVerts; i++) { //not using index 0
      table.push([]);
    }
  };

  Constructor.prototype.addEdge = function(v1,v2) {
    if (!table[v1]) {
      table[v1] = [];
    }
    table[v1].push(v2);

    if (!table[v2]) {
      table[v2] = [];
    }
    table[v2].push(v1);
  };

  Constructor.prototype.getNeighbors = function(v) {
    return table[v];
  };

  Constructor.prototype.numVertices = function() {
    return numVerts;
  };

  return new Constructor();
}

module.exports.AdjList = AdjList;
