const str = "(){[}]";

const symbol = {
    ')': '(',
    '}': '{',
    ']': '['
}

const arrayOpen = [];

const array = str.split("", str.lenght);

array.map( (value) => {

    if (value === "(" || value === '{' || value === '[') {
        arrayOpen.push(value);
    } else {
        let last = arrayOpen.pop();
        if (symbol[value] !== last) {
            arrayOpen.push(last);
        }
    }
    
})

if (arrayOpen.length === 0 ){
    return true;
} else {
    return false;
}

/*====================================================*/

const balance = {
    type1: 0,
    type2: 0,
    type3: 0
};

const array = str.split("", str.lenght);

array.map( (value) => {

    if (value === "(") {
        return  balance.type1 ++;
    } else if (value === ")") {
        return balance.type1 --;
    } else if (value === "{") {
        return balance.type2 ++;
    }  else if (value === "}") {
        return balance.type2 --;
    }  else if (value === "[") {
        return balance.type3 ++;
    }  else if (value === "]") {
        return balance.type3 --;
    }  
})

if(balance.type1 === 0 && balance.type2 === 0 && balance.type3 === 0) {
    return true;
} else {
    return false;
}






