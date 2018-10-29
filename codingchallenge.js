let johnTipAverage = 0;
let markTipAverage = 0;

function calculatorJohn(firstBills){
	let newBills = [];
	let tips = [];
	let tip = 0;
	for(let bill of firstBills){
		if(bill < 50){
			tip = bill * .2;
		} else if(bill >= 50 && bill <= 200) {
			tip = bill * .15;
		} else { //if bill is over $200
			tip = bill * .1;
		}
		
		tips.push(tip);
		bill += tip;
		newBills.push(bill);
	}
	
	
	for(let tip of tips){
		johnTipAverage += tip;
	}

	johnTipAverage/= tips.length;
	console.log(johnTipAverage);
}


function calculatorMark(firstBills){
	let newBills = [];
	let tips = [];
	let tip = 0;
	for(let bill of firstBills){
		if(bill > 300) {
			tip = bill * .25;
		} else if (bill < 300 && bill >= 100) {
			tip = bill * .1;
		} else { //bill is less than 100
			tip = bill * .2;
		}
		

		tips.push(tip);
		bill += tip;
		newBills.push(bill);
	}
	
	
	for(let tip of tips){
		markTipAverage += tip;
	}

	markTipAverage /= tips.length;
	console.log(markTipAverage);
}




function contest(){
	calculatorJohn([124, 48, 268, 180, 42]);
	calculatorMark([77, 375, 110, 45]);

	if (markTipAverage > johnTipAverage){
		console.log('mark paid more tips on average');
	}
	if(johnTipAverage > markTipAverage) {
		console.log('john paid more tips on average');
	}
}

contest();