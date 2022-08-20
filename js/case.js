

document.getElementById('btn-case-plus').addEventListener('click', function(){
       const newCaseNumber = updatCaseNumber(true);
       updateCaseTotalPrice (newCaseNumber);
       culculateSubTotal();
  
});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber =  updatCaseNumber(false);
    updateCaseTotalPrice (newCaseNumber)
    culculateSubTotal();
});