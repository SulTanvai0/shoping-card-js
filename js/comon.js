//phone -- section 
function updatePhoneNumber(isInCrease){
    const phoneNumberFiled =document.getElementById('phone-number-filed');
    const phoneNumberString = phoneNumberFiled.value ;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let  newPhoneNumber ;

    if(isInCrease){
         newPhoneNumber = previousPhoneNumber + 1 ;
    }

    else{
         newPhoneNumber = previousPhoneNumber - 1 ;
    }

    phoneNumberFiled.value = newPhoneNumber ;
    return newPhoneNumber;
}

//case--section 
function updatCaseNumber(isInCrease){
    const caseNumberFiled = document.getElementById('case-number-filed');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber =parseInt(caseNumberString);

    let newCaseNumber;
    if (isInCrease === true){
        newCaseNumber = previousCaseNumber + 1 ;
    }
   else{
    newCaseNumber = previousCaseNumber - 1 ;
   }
   caseNumberFiled.value = newCaseNumber;
   return newCaseNumber;
};

function updateCaseTotalPrice (newCaseNumber){

    const caseTotalPrice = newCaseNumber * 59 ;
    const caseTotalElement = document.getElementById('case-total')
    caseTotalElement.innerText = caseTotalPrice ;
};

function getElementByValueById (elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText ;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal ;
};

function setElmentValueById(elementId, value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value ;
}

function culculateSubTotal(){
    //calculate subTotal 
    const currentPhoneTotal = getElementByValueById('phone-total');
    const curentcaseTotal = getElementByValueById ('case-total');

    const curentSubTotal = currentPhoneTotal + curentcaseTotal ;
    setElmentValueById('sub-total', curentSubTotal) ;

    // culcute tax
    const taxamountString = (curentSubTotal * 0.1).toFixed(2) ;
    const taxamount = parseFloat(taxamountString);
    setElmentValueById ('tax-total', taxamount);

    // fainal amount 
    const fainalamount = curentSubTotal + taxamount;
    setElmentValueById ('fainal-total',fainalamount );
};
