// function findMax(arr){
//     //write your code here
//     //don't forget to write return
//     let largest=arr[0];
//     for(let i=0;i<arr.length;i++){
//         let value=arr[i];
//         if(value>largest){
//             largest=value;
//             largest=largest;
//         }
//     }
//     return largest;

//     }
//     var array=[35,65,21,98,122,76,47];
//     var output=findMax(array);
//     console.log(output);


function findMin(arr){
    //write your code here
    //don't forget to write return
    let lowest=arr[0];
    for(let i=0;i<arr.length;i++){
        let value=arr[i];
        if(value<lowest){
            lowest=value;
        }
    }
    return lowest;

    }
    var array=[35,65,21,98,122,76,47];
    var output=findMin(array);
    console.log(output);