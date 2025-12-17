


interface Developer<T , X=null> {
    name:string;
    salery: number;
    device: {
        brand: string;
        model: string;

    }
    smartWatch: T;
    bike?: X ;
}

interface Brandchara    {
     heartRate: string;
        stopWatch: boolean;
}


const goribSDev: Developer<Brandchara, {brand: 'yaamha',    opcity: '200cc'   }> = {
    name: 'Yaragi',
    salery: 2000,
    device: {
        brand: 'lenevo',
        model: "V1"
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,
    }

}
const tekaWalaDev: Developer<{
     heartRate: string;
        
        callSupport: boolean;
        calculator: boolean;
}> = {
    name: 'yyy',
    salery: 2000000,
    device: {
        brand: 'BalerPhone',
        model: "6CameraWala"
    },
    smartWatch: {
        heartRate: '200',
        callSupport: false,
        calculator: true,
    },

}


// Improved version of this code

// interface Developer<T, X = null> {
//     name: string;
//     salary: number;
//     device: {
//         brand: string;
//         model: string;
//     };
//     smartWatch: T;
//     bike?: X;
// }

// interface SmartWatchFeatures {
//     heartRate: string;
//     stopWatch: boolean;
// }

// interface AdvancedSmartWatch extends SmartWatchFeatures {
//     callSupport: boolean;
//     calculator: boolean;
// }

// interface Bike {
//     brand: string;
//     capacity: string;
// }

// // Usage
// const goribSDev: Developer<SmartWatchFeatures, Bike> = {
//     name: 'Yaragi',
//     salary: 2000,
//     device: {
//         brand: 'lenevo',
//         model: "V1"
//     },
//     smartWatch: {
//         heartRate: '200',
//         stopWatch: true,
//     },
//     bike: {
//         brand: 'yaamha',
//         capacity: '200cc'
//     }
// }

// const tekaWalaDev: Developer<AdvancedSmartWatch> = {
//     name: 'yyy',
//     salary: 2000000,
//     device: {
//         brand: 'BalerPhone',
//         model: "6CameraWala"
//     },
//     smartWatch: {
//         heartRate: '200',
//         stopWatch: false, // Added missing property
//         callSupport: false,
//         calculator: true,
//     }
// }