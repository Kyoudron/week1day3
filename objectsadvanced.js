var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10,
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function sumSales(company) {
  var total = 0
  company.sales.forEach(function(sale) {
    total += sale;
 })
   return total;
}


function calcTax(company) {
  return salesTaxRates[company.province] * sumSales(company);
}

var results = {
    Telus: {
      totalSales: sumSales(companySalesData[2]) + sumSales(companySalesData[0]),
      totalTaxes: calcTax(companySalesData[2]) + calcTax(companySalesData[0]),
    },

    Bombardier: {
      totalSales: sumSales(companySalesData[1]),
      totalTaxes: calcTax(companySalesData[1]),
    }
};



console.log(results)




/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/