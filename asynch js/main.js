let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["cone", "stick", "cup"],
    toppings: ["chocolate", "peanuts"]
  };
  
  let order = (Fruit_name, call_production) => {
    setTimeout(() => {
      console.log(`${stocks.fruits[Fruit_name]} was selected`);
      call_production();
    }, 2000);
  };
  
  let production = () => {
    setTimeout(() => {
      console.log("Production has started");
      setTimeout(() => {
        console.log("The fruit has been chopped");
        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
          setTimeout(() => {
            console.log("the machine was started");
          }, 1000);
  
          setTimeout(() => {
            console.log(` ice cream was placed on the ${stocks.holder[0]}`);
          }, 1000);
          setTimeout(() => {
            console.log(`${stocks.toppings[0]} was added as toppings`);
          }, 1000);
  
          setTimeout(() => {
            console.log("Production completed");
            setTimeout(() => {
              console.log("serve the ice cream and take money");
            }, 2000);
          }, 2000);
        }, 1000);
      }, 2000);
    }, 0);
  };
  
  order(2, production);
  