//for ODD numbers and also prime between 1 to 10 million

//first directly call the function 
OddAndPrime()

//now implement step by step

//first write function function for odd number checking

/**this function to check the difference between numbers is one or not
 * if consective numbers have difference one then odd or not
 * @param {number} number 
 * @param {boolean} return true if it is or false if not
 */
function ODDnum(number){
    const numi = String(number);
    //first single digits and zero cant be ODD numbers
    if(number <10 || number==0){
        return false
    }

    for(let i=1;i<numi.length;i++){
     if(Math.abs(numi[i]-numi[i-1]) !=1){
        return false; //return false if difference not equals to 1
     }
    }
    
    //if odd number it returns true
    return true
}

//now code for prime number

/** prime number checking function
 * @param {number} Number the input number given
 * @returns {boolean} true if prime else false
 */
function prime(Number){
    if(Number<2){
       return false
    }

    for( let i=2;i <=(Number/2);i++){
        if(Number % i==0){
            return false
        }
    }

    return true
}

//now combined function

/**
 *the combined function which checks the prime number and odd number properties
 */
function OddAndPrime(){
    let OAPnumber=0

    for(let i=0;i<=10000000;i++){
        if(ODDnum(i) && prime(i)){
            OAPnumber+=1            
        }
    }
    console.log("no of odd and prime numbers between 1 to 10 million are="+OAPnumber)
}


