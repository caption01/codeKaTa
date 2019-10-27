const solutionDay4 = () => {

    let que = [[10, 30], [50, 70], [20, 40],[10, 100]];
    let room = new Map([]);
    let index = 1;

    while(que.length !== 0){

        let request = que.shift()
        console.log(request)
        
        switch (true) {
            case room.size === 0:
            let array = [];
              console.log('start new room');
              console.log('before code');
              console.log(room);
              array.push(request);
              room.set(index, array);
              index = index + 1 ;
              console.log('after code');
              console.log(room);
              console.log('==========End Round=============')
            break;
            case room.size > 0:
                console.log('check Aviliable');
                console.log('before code')
                console.log(room)
                let pointer = checkAvailiable(request, room);
                console.log('pointer is')
                console.log(pointer)
                createBookingRoom(request, room, pointer);
                console.log('after code')
                console.log(room)
                console.log('==========End Round=============')
            break;
            default:
                console.log('error')
            break;
          }

    }

    console.log("final room is")
    console.log(room)

    console.log('result is')
    console.log(room.size)
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
        console.log(`this is value in room`)
        console.log(value)

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

    console.log(`this is a map size`)
    console.log(map.size)
    console.log('this is set of roomIndex')
    console.log(roomIndex)
    console.log('this is roomindex index')
    console.log(roomIndex.indexOf('true'))

    if(roomIndex.indexOf('true') === -1){
        return map.size+1
    } else {
        return roomIndex.indexOf('true')+1
    }
}

solutionDay4();

// test checkroom function

// let testReq = [0, 40]
// let testMap = new Map([
//     [1, [[10, 30]]],
// ])

// checkAvailiable(testReq, testMap)


// test create room function

// let testReq = [0, 40]
// let testMap = new Map([
//     [1, [[10, 50], [100, 120]]],
//     [2, [[30, 70], [80, 90]]]
// ])

// createBookingRoom(testReq, testMap, 3)
