const surveyResponses = [
    "A", "C", "B", "A", "B", "B", "C", "A", 
    "B", "D", "A", "C", "B", "A"
];


const count = surveyResponses.reduce((table, response)=>{

    if(table[response]){
        table[response] = table[response] + 1;
    }
    else{
        table[response] = 1
    }

    return table
}, {})
console.log(count)





