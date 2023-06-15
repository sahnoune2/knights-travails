function node(pos, path) {
  if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
    return null;
  }
  return { pos, path };
}
function knight([x, y], [a, b]) {
  let q = [node([x, y], [[x, y]])];
  let current = q.shift();

  while (current.pos[0] !== a || current.pos[1] !== b) {
    let moves = [
      [current.pos[0] + 2, current.pos[1] - 1],
      [current.pos[0] + 2, current.pos[1] + 1],
      [current.pos[0] - 2, current.pos[1] - 1],
      [current.pos[0] - 2, current.pos[1] + 1],
      [current.pos[0] + 1, current.pos[1] - 2],
      [current.pos[0] + 1, current.pos[1] + 2],
      [current.pos[0] - 1, current.pos[1] - 2],
      [current.pos[0] - 1, current.pos[1] + 2],
    ];

    moves.forEach((move) => {
      let Node = node(move, current.path.concat([move]));

      if (Node) {
        q.push(Node);
      }
    });
    current = q.shift();
  }

  console.log(`you did the path in ${current.path.length - 1}`);
  current.path.forEach((p) => {
    console.log(p);
  });
}
knight([3, 3], [4, 3]);
