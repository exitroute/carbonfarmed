const str =
  "ipsum dolor sit amet consectetur adipisicing elit. Error quae nulla voluptatibus ut neque atque expedita cumque illo consequatur aliquid quis porro omnis beatae, culpa aspernatur sequi? Adipisci, quia obcaecati vitae laborum deserunt Mary totam corporis modi nostrum explicabo numquam. Dolor harum suscipit deleniti soluta sint rem quae, at a amet. Explicabo ducimus fugit illo aut praesentium aliquid, ea odit John est quisquam officiis repudiandae consequatur inventore modi eos. Ratione quaerat laudantium tempora accusantium facere necessitatibus, similique velit eius unde beatae ipsam, repellat molestiae, explicabo asperiores sapiente corporis? Architecto, quos quia. Sit eos quia modi harum aut minus architecto illo";

const strFalse =
  "John dolor sit amet consectetur adipisicing elit. Error quae nulla voluptatibus ut neque atque expedita cumque illo consequatur aliquid quis porro omnis beatae, culpa aspernatur sequi? Adipisci, quia obcaecati vitae laborum deserunt Mary totam corporis modi nostrum explicabo numquam. Dolor harum suscipit deleniti soluta sint rem quae, at a amet. Explicabo ducimus fugit illo aut praesentium aliquid, ea odit John est quisquam officiis repudiandae consequatur inventore modi eos. Ratione quaerat laudantium tempora accusantium facere necessitatibus, similique velit eius unde beatae ipsam, repellat molestiae, explicabo asperiores sapiente corporis? Architecto, quos quia. Sit eos quia modi harum aut minus architecto illo";

function johnMary(str) {
  const re = /(John|Mary)/;
  console.log(str.match(re));
}

console.log(johnMary("John&Mary"));
