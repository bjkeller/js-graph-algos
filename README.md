#JS Graph Algorithms

This is partial code for learning about graph traversals.
The file search.js is setup to use the sample data in slugraph.js, which is based
on the adjacency list defined in graph.js.

Run

    npm install

to make sure you have a local copy of the NPM Collections package for use in
the queue in your Breadth-First Search solution.

For reference, traversal algorithms are given below.
To turn these into valid JS, you'll need to add declarations and decide what
it means to be `visited` or `unvisited`.
Depending on your choices, you may not need to do the initializations at the
beginning of the algorithm.
The only catch is that the vertices in slugraph.js are numbered starting at 1,
rather than 0.

For the purposes of playing around you can defined the functions `process` and
`processEdge` to simply log out a message about visiting a vertex or edge.

For breadth-first search, there is a queue constructor in queue.js.

    BFS(G, s) {
      for each vertex v in G {
        state[v] = unvisited;
        parent[v] = null;
      };

      state[s] = visited;
      queue.enqueue(s);

      while (queue not empty) {
        u = queue.dequeue();
        process(u);
        for each vertex v in neighbor(u) {
          processEdge(u,v);
          if (state[v] == unvisited) {
            state[v] == visited;
            parent[v] = u;
            queue.enqueue(v);
          }
        }
      }
    }

For depth-first search, you can either replace the queue with a stack (changing
`enqueue` to `push`, and `dequeue` to `pop`), or you can use the following
recursive form:

    DFS(G,u) {
      state[u] = visited;
      process(u);
      for each v in neighbors(u) {
        processEdge(u,v);
        if (state[v] == unvisited) {
          parent[v] = u;
          DFS(G,v);
        }
      }
    }
