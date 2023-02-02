function wordReverse(string){
    var temp=string.split(" ");
    const reverseBox=[];
    for(let i=temp.length-1;i>=0;i--){
        let value=temp[i];
       reverseBox.push(value);   
    }
     return reverseBox.join(" ");
}
let str="My name is Shovan Banik";
let reverse=wordReverse(str);
console.log(reverse);