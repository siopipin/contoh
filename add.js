function add(a, b, ...rest) {
  console.log(rest);
  let ttl = 0;
  for (let index = 0; index < rest.length; index++) {
    ttl += rest[index];
  }

  return a + b + ttl;
}

function divider() {
  let data = [
    {
      id: 1,
      name: "banana",
      price: 3000,
    },
    {
      id: 2,
      name: "apel",
      price: 5000,
    },
    {
      id: 3,
      name: "apel lama",
      price: 3400,
    },
  ];

  let ttlharga = data.reduce((ttl, currentVal) => (ttl += currentVal.price), 0);
  console.log(ttlharga);
}

function login(a, b) {
  console.log(a + b);
  console.log(a + b);

  //B1
  //b10
}

module.exports = { add, divider };
