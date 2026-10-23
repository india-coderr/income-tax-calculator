const form = document.querySelector('form');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const income = document.querySelector('#income');
    //input  me hamesha string aati h .//
    const amount = parseInt(income.value);

    const result = document.querySelector('#result');
    let tax = 0;

    if(amount <= 100000){
        tax = 0;
    }
    else if(amount <= 1200000){
        tax = (amount - 100000) * 0.1;
    }
    else if(amount <= 2000000){
        tax = (100000 * 0.1) + ((amount - 1200000) * 0.2);
    }
    else{
        tax = (100000 * 0.1) + (800000 * 0.2) + ((amount - 2000000) * 0.3);
    }

    result.textContent = `Your tax is: ${tax}`;


    form.reset();
})



const div = document.querySelector('#right-container h2');
// let time = new Date();
// div.textContent = `Current Time: ${time.toLocaleTimeString()}`;

setInterval(() => {
    let time = new Date();
    div.textContent = `${time.toLocaleTimeString()}`;
}, 1000);


