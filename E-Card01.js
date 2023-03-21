

function covermy(){
   var mcard=document.getElementById('mycards').children
   var mcardlength=mcard.length
   var mcardlengthby2=mcardlength/2
   for (var i=0;i<mcardlengthby2;i++)
   {
     
     mcard[i].classList.remove('bordersetcover')
     mcard[i+mcardlengthby2].style.display='block'
   }
}
function showmy(){
   var mcard=document.getElementById('mycards').children
   console.log(mcard)
   var mcardlength=mcard.length
   var mcardlengthby2=mcardlength/2
   for (var i=0;i<mcardlengthby2;i++)
   {
     mcard[i].style.display='block'
     mcard[i].classList.add('bordersetcover')
     mcard[i+mcardlengthby2].style.display='none'
   }
}
//program for adding -making a=block if all b are block- in normal show function, basically combination of both show and cover.

  


function showcom(){
   var ccard=document.getElementById('comcards').children
   var ccardlength=ccard.length
   var ccardlengthby2=ccardlength/2
   for (var i=0;i<ccardlengthby2;i++)
   {
     ccard[i].style.display='block'
     ccard[i].classList.add('bordersetcover')
     ccard[i+ccardlengthby2].style.display='none'
   }
}
function covercom(){
   var ccard=document.getElementById('comcards').children
   var ccardlength=ccard.length
   var ccardlengthby2=ccardlength/2
   for (var i=0;i<ccardlengthby2;i++)
   {
     
     ccard[i].classList.remove('bordersetcover')
     ccard[i+ccardlengthby2].style.display='block'
   }

}









  

// now dragging and droping a block: https://www.w3schools.com/html/html5_draganddrop.asp