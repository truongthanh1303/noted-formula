const UNIT_VALUES = {
  "PENNY": 1, // 0.01 * 100 use integer instead of float number
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000,
}

function checkCashRegister(price, cash, cid) {
  let remainToGive = (cash - price) * 100;
  const totalCid = cid.reduce((sum, curr) => {
    return sum + curr[1] * 100
  }, 0);

  if (remainToGive > totalCid) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }

  if (remainToGive === totalCid) {
    return {
      status: 'CLOSED',
      change: cid
    }
  }

  const _cid = cid.reverse().map(item => {
    return [item[0], item[1] * 100]
  });
  const changeArr = [];

  for (let item of _cid) {
    let temp = [item[0], 0];
    while(remainToGive >= UNIT_VALUES[item[0]] && item[1]) {
      temp[1] += UNIT_VALUES[item[0]];
      item[1] -= UNIT_VALUES[item[0]];
      remainToGive -= UNIT_VALUES[item[0]];
    }

    if (temp[1] > 0) {
      changeArr.push([temp[0], temp[1] / 100]);
    }
  }

  if (remainToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }  return { status: "OPEN", change: changeArr};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
