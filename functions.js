//when I use show and cover many bugs appear, I will solve those later---

//V.V.V.V.IMP- HOW CAN I TAKE THE VALUE OF G FORM DOWN TO THE givingwinningpoints FUNCTION AND CHECK FOR THE NO OF ROUNDS WITHOUT CHECKING THE VALUE OF MY AND COM POINTS??
{
  {
    let a=document.getElementsByClassName('times')
    for(let i=0;i<5;i++)
    {
      
      a[i].addEventListener('click',(t)=>{
        const G=t.target.innerHTML
        console.log(G)
        {
          let memoryofg= document.createElement('p')
          memoryofg.classList.add('gvalue')
          document.getElementsByClassName('gvalue').style.display="none"
          memoryofg.innerText=G
          document.body.appendChild(memoryofg)
        }
        Array.from(document.getElementById('showncards').children).forEach((e)=>{e.remove()})

      })
    }
  
 
 }
//CONTINUE PLAYING THE GAME AND YOU WILL FIND MANY BUGS
{
  function nextroundstart(dass){
  
  let changem=document.querySelector('#mycards')
  let changec=document.querySelector("#comcards")
  
  changem.innerHTML=' <div class="my5cards"id="my1card" ><img src="citizen.jpg" width="52px" height="75px" alt="citizen"></div><div class="my5cards"id="my2card"><img src="slave.gif" width="52px" height="75px"></div><div class="my5cards"id="my3card" ><img src="citizen.jpg" width="52px" height="75px" alt="citizen" ></div><div class="my5cards"id="my4card">  <img src="citizen.jpg" width="52px" height="75px" alt="citizen"></div><div class="my5cards"id="my5card"> <img src="citizen.jpg" width="52px" height="75px" alt="citizen"></div><div class="my5cards"id="my1cardc"> <img src="done_all_FILL0_wght400_GRAD0_opsz48.png" class="tick"><img src="cover.jpg" width="52px" height="75px" alt="citizen"></div><div class="my5cards"id="my2cardc"> <img src="done_all_FILL0_wght400_GRAD0_opsz48.png" class="tick"><img src="cover.jpg" width="52px" height="75px" ></div><div class="my5cards"id="my3cardc"><img src="done_all_FILL0_wght400_GRAD0_opsz48.png" class="tick"><img src="cover.jpg" width="52px" height="75px" alt="citizen"></div><div class="my5cards"id="my4cardc" > <img src="done_all_FILL0_wght400_GRAD0_opsz48.png" class="tick"><img src="cover.jpg" width="52px" height="75px" alt="citizen"></div><div class="my5cards"id="my5cardc" ><img src="done_all_FILL0_wght400_GRAD0_opsz48.png" class="tick"><img src="cover.jpg" width="52px" height="75px" alt="citizen"></div>'
 
  changec.innerHTML=' <div class="com5cards"id="com1card" > <img src="citizen.jpg" width="52px" height="75px" alt="citizen"> </div> <div class="com5cards"id="com2card" > <img src="citizen.jpg" width="52px" height="75px" alt="citizen"> </div> <div class="com5cards"id="com3card"> <img src="citizen.jpg" width="52px" height="75px" alt="citizen"> </div> <div class="com5cards"id="com4card" > <img src="emperor.gif" width="52px" height="75px"> </div> <div class="com5cards"id="com5card" > <img src="citizen.jpg" width="52px" height="75px" alt="citizen"> </div> <div class="com5cards"id="com1cardc" > <img src="cover.jpg" width="52px" height="75px" alt="citizen"> </div> <div class="com5cards"id="com2cardc" > <img src="cover.jpg" width="52px" height="75px" alt="citizen"> </div> <div class="com5cards"id="com3cardc"> <img src="cover.jpg" width="52px" height="75px" alt="citizen"> </div> <div class="com5cards"id="com4cardc"> <img src="cover.jpg" width="52px" height="75px"> </div> <div class="com5cards"id="com5cardc" > <img src="cover.jpg" width="52px" height="75px" alt="citizen"> </div>'
   //V.V.V IMP= Why does putting the code below in open not work?? It should work according to all the logic I know the code runs on!!!!!
   if (dass==1){
   puttingcsandeclassooncards()
   
  {
    for(var i=0;i<11;i++){
         
      let x="my"+(i+1)+"card",y="my"+(i+1)+"cardc"
    //when I use VAR, there will be error- x will always be my5card and y will always be my5cardc but this will not be so when I use const and let? WHY???!!
    document.getElementsByClassName('tick')[i].addEventListener('click',(t)=>{
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
        imgpart.removeAttribute('id',x)
        
      }
      {
       
          setTimeout(positioningcomcardsafterclick(),1500)
      }
         })
    
      }
    
    } 
  }
  else if(dass==2)
   {
   
    setTimeout(()=>{
      if(confirm('`Wanna Continue Playing~ ?')==true){
        location.reload()
      }
      else if(confirm('`Wanna Continue Playing~ ?')==false)
      {
        alert('Go off thenn...')
        location.replace('https://www.youtube.com')
      }
      
      
    },2000)
   }
    
}
  function nextround(){

  try{
    
    document.querySelector('.gameovercom').remove()
   
    //console.error(1)//when there is error, it will console 1
  }catch(error){
    document.querySelector('.gameoverme').remove()
    
    
  }
  
  // let mycardinnerhtml=document.getElementById('mycards').innerHTML
  // let comcardinnerhtml=document.getElementById('comcards').innerHTML //they are read at the start so they give satisfactory value
  // console.log(mycardinnerhtml,comcardinnerhtml)
}

}
//here
{
function puttingcsandeclassooncards(){
  let cic= document.getElementById("comcards").children
  let mic= document.getElementById("mycards").children
 
    for(let i=0;i<5;i++)
    {
      if(i!==1){
        mic[i].classList.add('citizen')
      }
      else if(i==1){mic[i].classList.add('slave')}
      if(i!==3){
        cic[i].classList.add('citizen')
      }
      else if(i==3){cic[i].classList.add('emperor')}
    }
    
  }
 



function actualpositioningcomcardsafterclick(a){
  randomI=Math.floor(Math.random()*5)
  var randomcomcard=document.getElementById(a[randomI])
  if(randomcomcard==null)
  {  actualpositioningcomcardsafterclick(a)  }
  else{
      {
   let randomcomcardc=document.getElementById(a[randomI]+"c")
   randomcomcardc.classList.add('tothemiddlecom')
   randomcomcardc.classList.remove('com5cards')
   randomcomcardc.removeAttribute('id',a[randomI]+"c")
      }
      {
   randomcomcard.classList.add('tothemiddlecom')
   randomcomcard.classList.remove('com5cards')
   randomcomcard.removeAttribute('id',a[randomI])
      }
      /*
      var placedcardcom= document.getElementsByClassName('tothemiddlecom')
      return placedcard
      //for knowing what cards the com placed on the table
      //BUT HOW TO BRING THIS PLACEDCARDCOM OUTSIDE, I USED RETURN BUT IT DID NOT WORK!!
      */
  }
  }
function flashycardshowing(){
  var placedcardmy=document.getElementsByClassName('tothemiddlemy')
 var placedcardcom=document.getElementsByClassName('tothemiddlecom')
    for(let i=0;i<2;i++){
    placedcardcom[0].classList.add('flashytabletransitioncom')
   placedcardmy[0].classList.add('flashytabletransitionmy')
   placedcardcom[0].classList.remove('tothemiddlecom')
   placedcardmy[0].classList.remove('tothemiddlemy')
   //why all [0], cuz after i=0 loop, total placedcarcom elements that will remain is 1 so to addresss that we must also use [0]
    }
   }
function removingimgcards(){
  let cardsonthetablecomagain= document.getElementsByClassName('flashytabletransitioncom')
  let cardsonthetablemyagain= document.getElementsByClassName('flashytabletransitionmy')
  cardsonthetablecomagain[0].remove()
  cardsonthetablemyagain[0].remove()
   }
function givingwinningpoints(){
    {
    var comcardiefighting=document.querySelector(".flashytabletransitioncom")
   
      if(comcardiefighting==document.querySelector(".emperor"))
        {
           var C0="emperor"
        }
      else {
           var C0="citizen"
           
        } 
        
    }
    {
      var mycardiefighting=document.querySelector(".flashytabletransitionmy")
      
      if(mycardiefighting==document.querySelector(".slave"))
        {
           var C1="slave"
        }
      else
        {
           var C1="citizen"
        } 
        
    }
    {  
      if(C0===C1){var P0=1,P1=1,continuer="yes"}
      else if(C0==="emperor" && C1==="slave"){var P0=0,P1=1,continuer="no"}
      else if(C0==="emperor"&& C1==="citizen"){var P0=1,P1=0,continuer="no"}
      else if(C0==="citizen"&& C1==="slave"){var P0=1,P1=0,continuer="no"} 
    }
    
    {
      var comwinpoint=document.getElementById('compoint')
      var mywinpoint=document.getElementById('mypoint')

      if(continuer==="yes"){ //no refresh here. -&- IN THE NEXT ROUND HOW WILL THINGS CONTINUE AFTER THIS?
                           }
      else if(continuer==="no"){
          
          var roundoverdivinmiddle=document.createElement('div')
         document.getElementById('showncards').appendChild(roundoverdivinmiddle)
          if(P0===1 && P1===0){
            comwinpoint.innerText=parseInt(comwinpoint.innerText)+1
           let totalpoint=parseInt(comwinpoint.innerText)+parseInt(mywinpoint.innerText)
           let gduplicate=parseInt(document.querySelector('.gvalue').innerText)
           var das=1
           if (totalpoint<gduplicate){
            roundoverdivinmiddle.innerText="You Lost The ROUND!"
            roundoverdivinmiddle.classList.add('gameovercom')
            setTimeout(nextround,2000)
            setTimeout(nextroundstart(das),2200)           
           }
           else if(totalpoint==gduplicate){
            das=2
            if(parseInt(comwinpoint.innerText)<parseInt(mywinpoint.innerText))
            {
             roundoverdivinmiddle.innerText=" You Won The GAME!"
             roundoverdivinmiddle.classList.add('gameoverme')
             setTimeout(nextround,2000)
             setTimeout(nextroundstart(das),2200)
            }
            else if(parseInt(comwinpoint.innerText)>parseInt(mywinpoint.innerText))
            {
             roundoverdivinmiddle.innerText=" You lost The GAME!"
             roundoverdivinmiddle.classList.add('gameovercom')
             setTimeout(nextround,2000)
             setTimeout(nextroundstart(das),2200)
            }

           }
           
          

            
          }
          else if(P0===0 && P1===1){
            roundoverdivinmiddle.innerText="You Won The ROUND!"
            roundoverdivinmiddle.classList.add('gameoverme')
            
            // here make a uniqe program to do the below work without using parseInt()
            {
              mywinpoint.innerText=parseInt(mywinpoint.innerText)+1
              let totalpoint=parseInt(comwinpoint.innerText)+parseInt(mywinpoint.innerText)
              let gduplicate=parseInt(document.querySelector('.gvalue').innerText)
              var das=1
              if (totalpoint<gduplicate){
              roundoverdivinmiddle.innerText="You Won The ROUND!"
              roundoverdivinmiddle.classList.add('gameoverme')
              setTimeout(nextround,2000)
              setTimeout(nextroundstart(das),2200)
              }
              else if(totalpoint==gduplicate){
                 das=2
                 if(parseInt(comwinpoint.innerText)<parseInt(mywinpoint.innerText))
                 {
                  roundoverdivinmiddle.innerText=" You Won The GAME!"
                  roundoverdivinmiddle.classList.add('gameoverme')
                  setTimeout(nextround,2000)
                  setTimeout(nextroundstart(das),2200)
                 }
                 else if(parseInt(comwinpoint.innerText)>parseInt(mywinpoint.innerText))
                 {
                  roundoverdivinmiddle.innerText=" You lost The GAME!"
                  roundoverdivinmiddle.classList.add('gameovercom')
                  setTimeout(nextround,2000)
                  setTimeout(nextroundstart(das),2200)
                 }
              }
              
            }
         
          }
         
          //after this the entire page must be prefreshed but not the points
      }
    }
    
   }
function finallyshowingcards(){
     let cardsonthetablecom= document.getElementsByClassName('flashytabletransitioncom')
     let cardsonthetablemy= document.getElementsByClassName('flashytabletransitionmy')
     cardsonthetablecom[1].remove();
     cardsonthetablemy[1].remove();
    
   }
function showingcardsontable(){
  
 setTimeout(flashycardshowing, 1500);
 setTimeout(finallyshowingcards,3000);
 setTimeout(givingwinningpoints,4000);
 setTimeout(removingimgcards,4100);
 
}
}
function positioningcomcardsafterclick(){
  
    var a0=["com1card"];
    for (let i = 2; i < 6; i++) {
      
      
      a0.push("com"+i+"card")
      
    }   
    
    actualpositioningcomcardsafterclick(a0);
    showingcardsontable();
    /*
    function randomcomcard(comcardid, rcno){
        
    var randomcomcard=document.getElementById(comcardid[rcno])
    for (let i=0;i<4;i++){
    if(randomcomcard===a[i]){}
    else{
     randomcomcard.classList.remove('com5cards')
     randomcomcard.classList.add('tothemiddleyo')}
}

    let a=[];
    a.push(randomcomcard)
    //now we have the problem of positing the place where the card will be place in the table
    
    }
   randomI=Math.floor(Math.random()*5)
    randomcomcard(a, randomI)
    */
}
}
//when you click another [tick], while the previouse card is still preforming the above 
// -function, then you will incounter bug, so solve it, don't let user click the tick while the cards are 'running'.
