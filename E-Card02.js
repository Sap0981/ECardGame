//console.log(1 == true) //true-ans

{
{
  /*
  var childsofcomcards=document.getElementById('comcards').children;
  var childsofmycards=doucment.getElementById('mycards').children
  console.log(childsofcomcards,childsofmycards)
  function nextround(){
    roundoverdivinmiddle.reomve();
    document.getElementById('comcards').children.remove()
    document.getElementById('mycards').children.remove()
    document.getElementById('comcards').appendChild(childsofcomcards)
    document.getElementById('mycards').appendChild(childsofmycards)
  }
  */
  }
//Changing the bg of all the elements inside nop-class:
/*
var b=Array.from(document.getElementsByClassName("nop"))
b.forEach( ()=>{
    b.children.style.backgroundColor= "#333"
} )
*/
}
{
/*
{
    var b=document.getElementsByClassName('howmany'),c=document.getElementsByClassName('nop')
let a=document.getElementById('o')
a.addEventListener ("click", yo)
function yo() {
  
   console.log('yo')
}
} //wtfffff, only works for the entire document CUZ a IS AN ARRAY AND EVENTLISTENER DOES NOT WORK WORK AN ARRAY!!
*/
}
{
  /*
  for(let i=0; i<5; i++)
  {
    var a;
    switch(i){
    case 0:
      a="one"
      break;
      case 1:
      a="t"
      break;
      case 2:
      a="f"
      break;
      case 3:
      a="s"
      break;
      case 4:
      a="n"
      break;
    }
    var b= document.getElementById(a)
    
    b.addEventListener('click',(t)=>{
      var g = t.target.innerHTML
      console.log(g) //same proble as above!!!-NOW WORKS
    })
  }
  */
  

/*
NOW I WILL DO THE LONG METHOD FOR NOW IN HERE BUT FOR THIS WE CAN USE J-QUERY AND DO EASILY,
 LIKE:
   $('.TIMES').CLICK( (E)=>{
    var a= e.target.innerHTML
    //then use remove()
   } )
   */
}



//Actual Start:

{

  //how many games the user wants to play, -const- G -
{ /*
  var a=Array.from(document.getElementsByClassName('times'))
  for (let i=0; i<5 ; i++){
  
    var b= a[i]
     b.addEventListener('click', () =>{
      console.log(b.innerHTML)
        //just prints 9 all the time, my intiuation may be at fault here.
       })
          }
           */

   
  

      
  
          
          // -G- IS THE NO OF GAMES THE USER WANTS TO PAY

               //a.addEventListener is not a function- is shown cuz a is an array, that's why loop is used
               
}
 
  //adding class-distribution and removing all other classes
{ 
 //find a way to execute the code below when (a)/the 1,3,5,7,9 is clicked, used clicked fucntion 
   function carddistribution(){

  
    {
      var bd=document.getElementById('mycards').children
      for(let i=0;i<10;i++)
      {
        bd[i].classList.add('distribution')
        bd[i].classList.remove('my5cards')
       
        
      }
      
    
      for(let i=0;i<5;i++)
        {
          let j= "my"+(i+1)+"card"
          let k= "my"+(i+1)+"cardc"
          bd[i].removeAttribute("id",j)
          bd[i+5].removeAttribute("id",k)
          
        }
       
    }
    {
      
        var db=document.getElementById('comcards').children
        for(let i=0;i<10;i++)
        {
          db[i].classList.add('distributionO')
          db[i].classList.remove('com5cards')
         
          
        }
        
      
        for(let i=0;i<5;i++)
          {
            let j= "com"+(i+1)+"card"
            let k= "com"+(i+1)+"cardc"
            db[i].removeAttribute("id",j)
            db[i+5].removeAttribute("id",k)
           
          }
      
    }
    {
      document.querySelector('.blur').remove()
     let z=document.querySelector('#showncards')
      z.style.zIndex= "auto"
    }
   
    setTimeout(
      ()=>
      {
        {
        var bda=document.getElementsByClassName('distribution')
        for(let i=0;i<10;i++)
        {
          bda[i].classList.add('my5cards') 
        }
        
      
        for(let i=0;i<5;i++)
          {
            let j= "my"+(i+1)+"card"
            let k= "my"+(i+1)+"cardc"
            bda[i].setAttribute("id",j)
            bda[i+5].setAttribute("id",k)
            
          }
         
         
      }
      {
        
        var dba=document.getElementsByClassName('distributionO')
        for(let i=0;i<10;i++)
        {
          dba[i].classList.add('com5cards') 
        }
        
      
        for(let i=0;i<5;i++)
          {
            let j= "com"+(i+1)+"card"
            let k= "com"+(i+1)+"cardc"
            dba[i].setAttribute("id",j)
            dba[i+5].setAttribute("id",k)
            
          } 
          /*
          NOTE I CAN'T DO THIS NOW:
           for(let i=0;i<10;i++)
          {
            bda[i].classList.remove('distributionO') 
          }
          CUZ' IF AT I=0, BDA[0]WILL BE REMOVED THEN,NOW BAD WILL TOTAL HAVE 0-8, SO NEXT BDA[1] WILL REMOVE BDA[2] INSTEAD OF BDA[1] THAT WE THINK OF]
           */
         
        
      }
      {
      
      
  
      var removedisbut=document.getElementsByClassName('my5cards')
      var removedisbuto=document.getElementsByClassName('com5cards')
      for(let i=0;i<10;i++){
        removedisbut[i].classList.remove('distribution')
        removedisbuto[i].classList.remove('distributionO')
      }
    }
  }, 500 )
  
  
                }
}
 //choosing my card and random card for the computer
 
{ 
  /*
  var dioh=document.querySelectorAll('.tick')
  var doho= document.querySelector('.tickp')//for a class with single used, use query selector instead of ClassName
  
  for(var i=0;i<10;i++)
   {   
    dioh[i].outerHTML= doho.outerHTML //PROBREM HERE, dioh[i].outerHTML DOES NOT CHANGE ITSELF AS IT SHOULD!!
  
   }  
  */ //-- IT'S NOT WORKING!! TRYING TO ADD DIV BEFROE ALL TICK ELEMENTS BUT ! 

 /* document.querySelectorAll('.tick').addEventListener('click', ()=>{console.log(1)})  */
  //if the above code was= document.getElementsByClassName('.tickp').addEventListener('click', ()=>{console.log(1)}), it won't work cuz, gebcn only seems to work for a class with many use, in an array form so we must use queryselector
// and its not working for -  document.querySelectorAll('.tick').addEventListener('click', ()=>{console.log(1)}), this as well CUZ' EVENT LISTENER DOES NOT WORK FOR ARRAYS!!!!
// So what we do is:
//THE CORRECT WAY TO ADD EVENT LISTENER IN AN CLASS USED BY MANY ELEMENTS
puttingcsandeclassooncards();

{
for(var i=6;i<11;i++){
     
  let x="my"+(i-5)+"card",y="my"+i+"cardc" 
//when I use VAR, there will be error- x will always be my5card and y will always be my5cardc but this will not be so when I use const and let? WHY???!!
document.getElementsByClassName('tick')[i-6].addEventListener('click',(t)=>{
  {
    var eventtarget=t.target
  eventtarget.parentElement.classList.remove('my5cards')
  eventtarget.parentElement.removeAttribute('id',y)
  eventtarget.parentElement.classList.add('tothemiddlemy')
  }
  {
    let imgpart= document.getElementById(x)
    imgpart.classList.remove('my5cards')
    imgpart.classList.add('tothemiddlemy')
    imgpart.classList.remove('bordersetcover')
    imgpart.removeAttribute('id',x)
    
  }
  {
 
      setTimeout(positioningcomcardsafterclick(),2000)
  }
     })

  }

}  

}}



    
  



