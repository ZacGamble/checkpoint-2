let clickUpgrades = {
    cheeseKnife: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    cheeseStorage: {
        price: 30,
        quantity: 0,
        multiplier: 4
    }
};

let automaticUpgrades = {
    spaceCow: {
        price: 20,
        quantity: 0,
        multiplier: 3
    },
    lunarDairyRefinery: {
        price: 100,
        quantity: 0,
        multiplier: 10
    }
}

let cheese = 0
let cheesePerSecond = 0
let totalCheeseMultiplier = 0

function mineClick(params) {
    cheese++
    document.getElementById('cheese').innerText = 'Cheese ' + cheese;
}

function update(){
    let template = ''
    template += `
  
    `
    document.getElementById('total').innerHTML = template
}

function buyCheeseKnife() {
    if(cheese >= clickUpgrades.cheeseKnife.price)
    clickUpgrades.cheeseKnife.quantity++
}

// must call update() to render page
// update();