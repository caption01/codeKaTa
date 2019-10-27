export function main(str, str2) {

	let string1 = str;
    let string2 = str2;

    let arrstring1 = string1.split('', string1.length)
    let arrstring2 = string2.split('', string1.length)

    let result = 0;

    while(arrstring1.length !== 0 ){

        let dataValue1 = arrstring1.shift();
        let dataValue2 = arrstring2.shift();

        if(dataValue1 !== dataValue2){
            result ++;
        }

    }

	return result;
	
}