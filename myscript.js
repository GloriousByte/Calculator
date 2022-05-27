window.onload=function(){

    let listOfClicked=[];
    let valString="";
    let operator ="";
    let sum=0;

    let container=document.getElementById("numbers")
    rowAndButs(1,3)
    rowAndButs(4,6)
    rowAndButs(7,9)


    let operators=document.getElementById("operators")
    makeeqButton("=");
    makeOpButton("+");
    makeOpButton("-");
    makeOpButton("/");
    makeOpButton("x");
    makeClrButton("clear")

    let screen= document.getElementById("screen");

    function makeClrButton(strng){
        const div=document.createElement("div");
        div.style.display="flex";
        div.style.backgroundColor="pink";
        div.style.flexBasis="0";
        div.style.flexGrow="1";
        div.style.flexShrink="1";
        div.textContent+=strng;
        div.style.border="2px solid";
        div.style.justifyContent="center";
        div.style.alignItems="center";
        div.style.borderColor="black";
        operators.appendChild(div);
        div.addEventListener("click",function(e){
            valString="";
            operator="";
            listOfClicked=[];
            screen.innerHTML="";
        })
    }
    

    function makeeqButton(strng){
        const div=document.createElement("div");
        div.style.display="flex";
        div.style.backgroundColor="pink";
        div.style.flexBasis="0";
        div.style.flexGrow="1";
        div.style.flexShrink="1";
        div.textContent+=strng;
        div.style.border="2px solid";
        div.style.justifyContent="center";
        div.style.alignItems="center";
        div.style.borderColor="black";
        operators.appendChild(div);
        div.addEventListener("click",function(e){
            console.log(`this is me without pushing valstring to array ${listOfClicked}`)
            listOfClicked.push(valString);
            console.log(`we are in the array ${listOfClicked}`)
            if(listOfClicked.length==3){
                
                //sum=Number(listOfClicked[0])+Number(listOfClicked[2]);
                if(listOfClicked[1]=="+"){sum=add(Number(listOfClicked[0]),Number(listOfClicked[2]))}
                else if(listOfClicked[1]=="-"){sum=subtract(Number(listOfClicked[0]),Number(listOfClicked[2]))}
                else if(listOfClicked[1]=="*"){sum=multiply(Number(listOfClicked[0]),Number(listOfClicked[2]))}
                else if(listOfClicked[1]=="/"){sum=divide(Number(listOfClicked[0]),Number(listOfClicked[2]))}
             }   
             screen.innerHTML="";
             screen.textContent+=sum;
    
         })
    }

    function makeOpButton(strng){
        const div=document.createElement("div");
        div.style.display="flex";
        div.style.backgroundColor="pink";
        div.style.flexBasis="0";
        div.style.flexGrow="1";
        div.style.flexShrink="1";
        div.textContent+=strng;
        div.style.border="2px solid";
        div.style.justifyContent="center";
        div.style.alignItems="center";
        div.style.borderColor="black";
        operators.appendChild(div);
        div.addEventListener("click", function(e){
        
           // lengthCheck(listOfClicked);
            console.log("hi. I anm an operator");
            //console.log(listOfClicked)
            
            console.log(e.target.innerHTML);
            listOfClicked.push(valString);
            valString="";
            operator="";
            let opClicked = e.target.innerHTML; 
            operator+=opClicked;
            listOfClicked.push(operator);
            console.log(`we are in the array ${listOfClicked}`)
            console.log(`HI am operator value ${operator}`)
         // let screen= document.getElementById("screen");
            screen.textContent+=opClicked+" ";
           if(listOfClicked.length==4){
                
                //sum=Number(listOfClicked[0])+Number(listOfClicked[2]);
                if(listOfClicked[1]=="+"){sum=add(Number(listOfClicked[0]),Number(listOfClicked[2]))}
                else if(listOfClicked[1]=="-"){sum=subtract(Number(listOfClicked[0]),Number(listOfClicked[2]))}
                else if(listOfClicked[1]=="x"){sum=multiply(Number(listOfClicked[0]),Number(listOfClicked[2]))}
                else if(listOfClicked[1]=="/"){sum=divide(Number(listOfClicked[0]),Number(listOfClicked[2]))}
                //console.log(`adding ${listOfClicked[0]} and ${listOfClicked[2]}`)
               // console.log(`value of sum before adding result is ${sum}`)
                console.log(`value of sum is${sum}`)
                screen.innerHTML="";
                screen.textContent+=sum+""+opClicked;
                listOfClicked=[];
                listOfClicked[0]=sum;
                listOfClicked[1]=operator;
                console.log(`we are in the array ${listOfClicked}`)
                console.log(`I am sum ${sum}`)
            }

        })
            
        
     

    }
    


    function rowAndButs(start,end){
        const firstDiv = document.createElement("div");
        firstDiv.style.display="flex";
        firstDiv.style.backgroundColor="pink";
        firstDiv.style.flexBasis="0";
        firstDiv.style.flexGrow="1";
        firstDiv.style.flexShrink="1";
        for(let i=start;i<=end;i++){
            const div = document.createElement("div");
            div.style.backgroundColor="orange";
            div.textContent+=i;
            div.style.border="2px solid";
            div.style.justifyContent="center";
            div.style.alignItems="center";
            div.style.borderColor="black";
            div.style.display="flex";
            div.style.flexBasis="0";
            div.style.flexGrow="1";
            div.classList.add("num");
            firstDiv.appendChild(div);
       
        }
        container.appendChild(firstDiv);
    }
    let num=document.getElementsByClassName("num");
    for(let i=0;i<num.length;i++){
        num[i].addEventListener("click", function(e){
            console.log("hi. I am a number");
            console.log(e.target.innerHTML);
            numClicked=e.target.innerHTML;
            numClickedB=numClicked.toString();
            valString+=numClickedB;
            console.log(`I am the valstring value ${valString}`)

            let screen= document.getElementById("screen");
            screen.textContent+=numClicked+" ";


        })

    }
    function add(a,b) {
        let result = a+b;
        return result;
    };
      
    function subtract(a,b) {
        let result= a-b;
        return result;
    };

    function multiply(a,b) {
        let result= a*b;
        return result;
    };

    function divide(a,b) {
        let result= a/b;
        return result;
    };

    function operate(operands,operator){
        if(operator=="+"){
          let result = sum(operands[0],operands[1]);
          return result;
        }
        else if(operator=="-"){
            let result = subtract(operands[0],operands[1]);
            return result;
        }
        else if(operator=="*"){
            let result = multiply(operands[0],operands[1]);
            return result;
        }

        else if(operator=="/"){
            let result = divide(operands[0],operands[1]);
            return result;
        }

    }
}

  



