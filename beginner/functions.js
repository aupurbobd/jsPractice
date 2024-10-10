document.write("<h2> Prime Number Calculation</h2>");

function IsprimeNumber(x)
{
    var pflag=true;
    if(x== 1 || x==2||x==3)
    {
        plfag=true;
    }
    else{
    for(let i=2;i<=x/2;i++)
    {
        if(x%i==0)
        {
            pflag=false;
            break;
        }
    }
   
  }
  /*
  if(pflag==true)
  {
    document.write(x," is a prime number<br>");
    
  }
  else{
    document.write(x," is not a prime number<br>");
  }
*/
return pflag;
}


function primeNumbers(n)
{
    document.write("The prime numbers up to ",n,": ");
    var count=0;
    if(n<=3)
    {
        for(let i=1; i<=n;i++)
        {
            document.write(i," ");
            count++;
        }
             
    }
    else
    {
        for(let i=1; i<=3;i++)
        {
        document.write(i," ");
        count++;
        }
        
        for(let j=5; j<=n; j=j+2)
         {
            var pflag=true;

            for(let i=3;i<=j/2;i=i+2)
            {
                //if(IsprimeNumber(i))
                //{
                if(j%i==0)
                {
                   pflag=false;
                   break; 
                }
            //}
            }
            if(pflag==true)
            {
                document.write(j," ");
                count++;
            }
        }
       
    }
    document.write("<br> Total Number of primes: ",count);

}


function primeNumbersCalc(n)
{
    document.write("The prime numbers up to ",n,": ");
    var count=0;
    const primeNums = new Array;
    if(n>1 && n<=3)
    {
        for(let i=2; i<=n;i++)
        {
            document.write(i," ");
            primeNums[count]=i;
            count++;
        }
             
    }
    else
    {
        for(let i=2; i<=3;i++)
        {
        document.write(i," ");
        primeNums[count]=i;
        count++;
        }
        
        for(let j=5; j<=n; j=j+2)
         {
            var pflag=true;

            for(let i=0;i<=j/2;i=i+2)
            {
                //if(IsprimeNumber(i))
                //{
                if(j%i==0)
                {
                   pflag=false;
                   break; 
                }
            //}
            }
            if(pflag==true)
            {
                document.write(j," ");
                count++;
            }
        }
       
    }
    document.write("<br> Total Number of primes: ",count);

}

//IsprimeNumber(16);

//primeNumbers(100000);


 primeNumbersCalc(5);