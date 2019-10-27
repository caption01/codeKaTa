const solutionDay3 = () => {

    let passInput = 'ABCAA';
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

    console.log(result) ;

}

solutionDay3();