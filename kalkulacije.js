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
    newElement.innerText = ` Uloženih ${money} za period od  ${years} narasti je na ${worth}`;
    document.querySelector('.container').appendChild(newElement);
}

document.getElementById('osvjezi').addEventListener('click', () => {
    // 1. Čistimo tvoja polja koristeći TAČNE ID-ove sa slike
    document.getElementById('inflationRate').value = '';
    document.getElementById('money').value = '';
    document.getElementById('years').value = '';
    
    const stariRezultati = document.querySelectorAll('.new-value');
    stariRezultati.forEach(element => element.remove());

    console.log("Sada radi! Očišćeno lokalno bez reload-a.");
});
