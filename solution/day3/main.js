export function main(str) {

	let passInput = str;
    let arrPassInput = passInput.split('', passInput.length);
    let result = '';
    let numCheck = 1;

    arrPassInput.forEach((data, index) => {

        if(data === arrPassInput[index+1]){
            numCheck ++;
        } else {
            result = result.concat(numCheck+data);
            numCheck = 1; 
        }
    })

    return result;

}
