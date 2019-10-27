export function main(str) {
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

}
