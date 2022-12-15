function add(a, b, ...rest) {
  let ttl = 2;
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
      name: "apel baru",
      price: 3400,
    },
  ];

  let ttlharga = data.reduce((ttl, currentVal) => (ttl += currentVal.price), 0);
  console.log(ttlharga);
}

module.exports = { add, divider };
