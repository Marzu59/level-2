const dataCache = new Map();

const expensiveTask = (id)=>{
     console.log('run the expensive task for', id);

     return     {
                id: id,
                data: `some data for id: ${id}`,
                tiemstamp: new Date().getTime(),
     }
    }



    const getData =(id)=>{
        if(dataCache.has(id)){
            console.log("cache  hit for id", id)
            return dataCache.get(id)
        }
          
          console.log("Cache MISS for id:", id);
        const data = expensiveTask(id)
        dataCache.set(id, data)
           
        return data


    }

    console.log(getData(123))
    console.log(getData(123))
    
    console.log(dataCache)