function add(a, b) {
  return a + b;
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
