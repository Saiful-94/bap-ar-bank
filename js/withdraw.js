document.getElementById('btn-withdraw').addEventListener('click', function(){
 
    const withdrawlField = document.getElementById('withdrawl-field');
    const newWithdrawlAmountString = withdrawlField.value;
    const newWithdrawlAmount = parseFloat(newWithdrawlAmountString);
    withdrawlField.value ='';
    if (isNaN(newWithdrawlAmount)){
        alert('Please provide a valid number');
        return;
    }
    
     const withdrawtotalElement = document.getElementById('withdaw-total');
     const previousWithdrawTotalString = withdrawtotalElement.innerText;
     const previousWithdrawTotal =parseFloat(previousWithdrawTotalString);
    //  console.log(previousWithdrawTotal);

    
     

     const balanceTotalElement = document.getElementById('total-balance');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  
     if(newWithdrawlAmount> previousBalanceTotal){
        alert('Your balance is not sufficient');
        return;
     }
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawlAmount;
     withdrawtotalElement.innerText = currentWithdrawTotal;

     const newbalanceTotal= previousBalanceTotal -newWithdrawlAmount;
     balanceTotalElement.innerText = newbalanceTotal


    

})