const teststrTrue =
  "ipsum dolor sit amet consectetur adipisicing elit. Error quae nulla voluptatibus ut neque atque expedita cumque illo consequatur aliquid quis porro omnis beatae, culpa aspernatur sequi? Adipisci, quia obcaecati vitae laborum deserunt Mary totam corporis modi nostrum explicabo numquam. Dolor harum suscipit deleniti soluta sint rem quae, at a amet. Explicabo ducimus fugit illo aut praesentium aliquid, ea odit John est quisquam officiis repudiandae consequatur inventore modi eos. Ratione quaerat laudantium tempora accusantium facere necessitatibus, similique velit eius unde beatae ipsam, repellat molestiae, explicabo asperiores sapiente corporis? Architecto, quos quia. Sit eos quia modi harum aut minus architecto illo";

const teststrFalse =
  "John dolor sit amet consectetur adipisicing elit. Error quae nulla voluptatibus ut neque atque expedita cumque illo consequatur aliquid quis porro omnis beatae, culpa aspernatur sequi? Adipisci, quia obcaecati vitae laborum deserunt Mary totam corporis modi nostrum explicabo numquam. Dolor harum suscipit deleniti soluta sint rem quae, at a amet. Explicabo ducimus fugit illo aut praesentium aliquid, ea odit John est quisquam officiis repudiandae consequatur inventore modi eos. Ratione quaerat laudantium tempora accusantium facere necessitatibus, similique velit eius unde beatae ipsam, repellat molestiae, explicabo asperiores sapiente corporis? Architecto, quos quia. Sit eos quia modi harum aut minus architecto illo";

const noWhiteSpace = "Mary&John";

// function johnMary(str) {
//   const re = /(John|Mary)/g;
//   const matches = str.match(re);
//   const johns = matches.filter((el) => el === "John").length;
//   const marys = matches.filter((el) => el === "Mary").length;
//   let result;
//   johns === marys ? (result = true) : (result = false);
//   return result;
// }

function johnMary(str, re) {
  const re = /(John|Mary)/g;
  const matches = str.match(re);
  const countedMatches = matches.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});
  console.log(countedMatches);
  const result = Object.values(countedMatches).every(
    (el, i, arr) => el === arr[0]
  );
  return result;
}

console.log(johnMary(noWhiteSpace));
console.log(johnMary(teststrTrue));
console.log(johnMary(teststrFalse));
