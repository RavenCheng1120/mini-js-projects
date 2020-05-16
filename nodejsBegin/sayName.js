const sayName = () => {
  console.log("Hello there, David.");
};

const sayAddress = () => {
  console.log("North park Street");
};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
