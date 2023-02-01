function findMax(arr){
    //write your code here
    //don't forget to write return
    let largest=arr[0];
    for(let i=0;i<arr.length;i++){
        let value=arr[i];
        if(value>largest){
            largest=value;
        }
    }
    return largest;

    }
    var array=[35,65,21,98,122,76,47];
    var output=findMax(array);
    console.log(output);