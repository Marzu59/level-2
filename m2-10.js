// Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

// Input
const events = [
    { timestamp: "2025-10-22T10:01:00Z", type: "click" },
    { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
    { timestamp: "2025-10-22T10:14:00Z", type: "click" },
    { timestamp: "2025-10-22T10:31:00Z", type: "click" },
    { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
    { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const interval = 30 * 60 * 1000;

const  getBinningTimeStamp = (timestamp)=>{
         const data = new Date(timestamp);
         const floordate = Math.floor(data.getTime()/ interval )* interval;
        //  console.log(floordate)
        const newData= new Date(floordate).toISOString()
        // console.log(newData)
        return  newData
       
}


const binnedData = events.reduce((acc, event)=>{
    const binn = getBinningTimeStamp(event.timestamp)
    if(!acc[binn]){
        acc[binn] = {
            total: 0
        };

    }
    acc[binn].total = acc[binn].total + 1;
   return acc


}, {})

console.log(binnedData)