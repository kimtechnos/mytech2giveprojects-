//promise chaining:
let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["cone", "stick", "cup"],
    toppings: ["chocolate", "peanuts"]
  };
  
  let is_shop_open = true;
  
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject(console.log("Our shop is closed"));
      }
    });
  };
  
  order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
    .then(() => {
      return order(0, () => console.log("Production has started"));
    })
    .then(() => {
      return order(2000, () => console.log("The fruit was chopped"));
    })
    .then(() => {
      return order(1000, () => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`);
      });
    })
    .then(() => {
      return order(1000, () => console.log("start the machine"));
    })
    .then(() => {
      return order(2000, () => {
        console.log(`ice cream placed on ${stocks.holder[0]}`);
      });
    })
    .then(() => {
      return order(3000, () => {
        console.log(`${stocks.toppings[0]} was selected`);
      });
    })
    .then(() => {
      return order(1000, () => console.log("ice cream was selected"));
    })
    .then(() => {
      return order(1000, () => console.log("ice cream was served"));
    })
    .catch(() => {
      console.log("Customer left");
    })
    .finally(() => {
      console.log("day ended, our shop is closed");
    });
  
  
  
  
  
  
  
  