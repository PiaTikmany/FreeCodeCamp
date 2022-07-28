const currencyUnit = { //values to be divided by 100 when used. Easier to work with whole numbers.
    "PENNY": 1, 
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  function checkCashRegister(price, cash, cid) {
  
    let changeSum = cash * 100 - price * 100; //calculating change to be paid
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';
  
    let cidSum = 0; //sum of cash in drawer
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse(); //removing currency units that arent present (value given as 0) and reversing this array. 
  
    filteredCid.forEach(elem => { //each elem will give value of one currency denomination eg. elem[0] = ["PENNY", 1.01]
      let curr = elem[0]; // stores the 'penny'
      let currSum = elem[1] * 100; //stores its value
      cidSum += currSum; //adds all values to get sum
      let amount = 0;
      while (changeSum >= currencyUnit[curr] && currSum > 0) {// while the amount to be retruned is greater than the biggest currency unit present in drawer and that unit is more thamn 0. 
        amount += currencyUnit[curr]; //then add that unit
        changeSum -= currencyUnit[curr];
        currSum -= currencyUnit[curr];
        //tkae as many bills/coins from denomination as it can
      }
      if (amount !== 0) {
        change.push([curr, amount / 100]); //pushes that currency 
      }
    });
  
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS'; //cant return chnage
      change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED'; //exact change available 
      change = cid;
    } else { //chnage paid and money still left
      status = 'OPEN';
    }
    return { 'status': status, 'change': change }; //put into object and returned
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);