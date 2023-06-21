function armstrongFunction()
{
    let num = Number(document.getElementById("input").value);
    let a = num.toString();
    let b = a.length;
    let sum = 0;
    for(let i = 0; i < b; i++)
    {
       sum = sum + Math.pow(Number(a[i]),b);
    }
    if(sum == num)
    {
      document.getElementById("output").innerHTML = num + " is a Armstrong Number";
    }
    else
    {
      document.getElementById("output").innerHTML = num + " is not a Armstrong Number";
    }   
}