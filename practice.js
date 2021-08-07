//count max Sum in a given range in the array using Sliding window protocol
function FindingMax(arr,num)
{
    if(arr.length<num)
    {
        return;
    }
    var sum=0,max=0;
    for(var i=0;i<num;i++)
    { 
        sum+=arr[i];   
    }
    max=sum;
    for(var i=num;i<arr.length;i++)
    {
        sum=sum+arr[i]-arr[i-num];
        if(sum>max)
            max=sum;
    }
    return max;
}
console.log(FindingMax([1,2,5,2,8,1,5],4));