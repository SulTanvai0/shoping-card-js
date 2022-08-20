document.getElementById('btn-phone-plus').addEventListener('click',function(){
     const newPhoneNumber =  updatePhoneNumber(true);

     culculateSubTotal();

    const phoneTotalPrie =  newPhoneNumber * 1219 ; 
    const phoneTotalElement = document.getElementById('phone-total');
     phoneTotalElement.innerText = phoneTotalPrie ;
     
   

})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
   const newPhoneNumber =  updatePhoneNumber(false)

   culculateSubTotal();

    const phoneTotalPrie =  newPhoneNumber * 1219 ; 
    const phoneTotalElement = document.getElementById('phone-total');
     phoneTotalElement.innerText = phoneTotalPrie ;
})

