//Step1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('hi')
    //Step 02 get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // console.log(depositAmount);

    //step-03  get the current deposit total amonut
    // for non-input (element other than input, textarea) use inner text to ghet get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step4 add number to set the totla deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount ;

    depositTotalElement.innerText =currentDepositTotal;

    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step6  Calculate curremt 

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText =currentBalanceTotal;


    //Step7 clear the de posit field
    depositField.value ='';
})