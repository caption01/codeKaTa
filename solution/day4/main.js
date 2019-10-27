export function main(arr) {
	
    let que = arr;
    let room = new Map([]);
    let index = 1;

    while(que.length !== 0){

        let request = que.shift()
        console.log(request)
        
        switch (true) {
            case room.size === 0:
            let array = [];
              array.push(request);
              room.set(index, array);
              index = index + 1 ;
            break;
            case room.size > 0:
                let pointer = checkAvailiable(request, room);
                createBookingRoom(request, room, pointer);
            break;
            default:
                console.log(error);
            break;
          }

    }

    return room.size
}

const createBookingRoom = (req, map, index) => {
    if(map.has(index)){
        let baseData = map.get(index);
        map.set(index, baseData.concat([req]))
    } else {
        map.set(index, [req]);
    }
    
};

const checkAvailiable = (req, map) => {
    let reqTimeStart = req[0];
    let reqTimeEnd = req[1];
    let roomIndex = [];

    map.forEach((value, key) => {

        let isAvailiableTrue = [];

        value.forEach(data => {
            let roomTimeStart = data[0];
            let roomTimeEnd = data[1];

            if  (roomTimeStart<reqTimeStart && reqTimeStart<roomTimeEnd  
                    ||  roomTimeStart<reqTimeEnd && reqTimeEnd<roomTimeEnd
                    ||  (reqTimeStart<roomTimeStart && reqTimeEnd>roomTimeEnd)
                ){
                isAvailiableTrue.push('false')
            } else {
                isAvailiableTrue.push('true')
            }
        })

        if(isAvailiableTrue.includes('false')){
            roomIndex.push('false')
        } else {
            roomIndex.push('true')
        }
        
    })

    if(roomIndex.indexOf('true') === -1){
        return map.size+1
    } else {
        return roomIndex.indexOf('true')+1
    }
}
