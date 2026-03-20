function inflationCalculator() {
    let stopaInflacije = document.getElementById('inflationRate');
    let money = document.querySelector('#money');

    stopaInflacije = parseFloat(stopaInflacije.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;
    years = parseFloat(years);

    let worth = money + (money * (stopaInflacije / 100));
    for (let i = 1; i < years; i++) { 
        worth += worth * (stopaInflacije / 100);
    }

    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina.`;
    document.querySelector('.container').appendChild(newElement);
}

document.getElementById('osvjezi').addEventListener('click',  ()  => {
    
    location.reload()
})