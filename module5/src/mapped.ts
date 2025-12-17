
const arryOfNum: number[] = [1, 4, 6];

const arryofStringUsingMap: string[]=  arryOfNum.map((num)=> num.toString() );
console.log(arryofStringUsingMap)


type AreaOFNum = { 
    width: number;
    height: number;

}

type height = AreaOFNum['height']







// type areaOfstring =  {
//     [key in "height" | "width"]: string;
// }
type areaOfstring =  {
  [key in keyof AreaOFNum]: boolean;
}


// mapped in type  with dynamicaclly type set


  type Area <T> = {
        [key in  keyof T]: T[key];
  }



const area1: Area<{width: string; height: number;}> = {
    width: '50',
    height: 40,
     
    
}