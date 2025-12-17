// console.log(binarySearch([5, 12, 18, 25, 33, 41, 49, 56, 63, 70] , 25)); // Output: 3



const binarySearch =(arr, target)=>{
let low = 0;
let high = arr.length -1;
// console.log(high)

while(low <= high){

    const mid = Math.floor((high + low ) / 2) 
    const guess = arr[mid]
    // console.log(guess)
    if( guess === target){
        return mid;
    }
    else if( guess > target){
         high = mid - 1;

    }
    else{
        low = mid + 1;
    }

    


}
return -1;

}


console.log(binarySearch([3, 5, 6, 7, 9, 11], 7))
// console.log(binarySearch([5, 12, 18, 25, 33, 41, 49, 56, 63, 70], 25))