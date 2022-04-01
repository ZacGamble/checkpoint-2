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
    for (const key in clickUpgrades) {
        const upgrade = clickUpgrades[key]
        if (upgrade.quantity > 0) {
            cheese += upgrade.quantity * upgrade.multiplier
        }
    }
    console.log(automaticUpgrades.lunarDairyRefinery.quantity);
    
    update()
}

function collectAutoUpgrades() {
    for (const key in automaticUpgrades) {
        if (Object.hasOwnProperty.call(automaticUpgrades, key)) {
            const upgrade = automaticUpgrades[key];
            if(upgrade.quantity > 0){
            }
        }
    } 
}

setInterval(upgrade.multiplier += cheese, 3000)

function update(){
    let template = ''
    template += /*html*/
    `
    <div class="row">
        <div class="col-md-4 border">
            <div class="card">
                <h3>Stats</h3>
                <span class="border">Cheese per second: ${cheese}</span>
                <span class="border">TCM (Total Cheese Multiplier): ${totalCheeseMultiplier} </span>
            </div>
        </div>
        <!-- Moon object clickable -->
        <div class="col-md-4 border">
            <img onclick="mineClick()" class="img-fluid pointer" src="assets/mike-petrucci-uIf6H1or1nE-unsplash.jpg" alt="">
        </div>
        <!-- Player's owned upgrades -->
        <div class="col-md-4 border">
            <div class="card bg-light">
                <h3>Miner's Inventory</h3>
                <span class="fs-1 mdi mdi-cheese" id="cheese">Cheese ${cheese}</span>
                <span class="fs-5 mdi mdi-knife">Cheese Knives ${clickUpgrades.cheeseKnife.quantity}</span>
                <span class="fs-5 mdi mdi-cart">Cheese Storages ${clickUpgrades.cheeseStorage.quantity}</span>
                <span class="fs-5 mdi mdi-cow">Space Cows ${automaticUpgrades.spaceCow.quantity}</span>
                <span class="fs-5 mdi mdi-warehouse">Lunar Dairy Refineries ${automaticUpgrades.lunarDairyRefinery.quantity}</span>
            </div>
        </div>
    </div>
    <!-- Store container here somewhere -->
    <div class="row">
        <div class="col-md-6 bg-light p-3 text-center">
            <h3 class="">Purchase On-click Upgrades Below</h3>
                <div class="d-flex justify-content-evenly">
                    <div onclick="buyCheeseKnife('cheeseKnife')" class="flex-column d-flex border pointer">
                        Cheese Knife ($5)
                        <img class="upgradePics" src="/assets/nathalia-rosa-BtD81mBbD0E-unsplash.jpg" alt="">
                    </div>
                    <div onclick="buyCheeseStorage()" class="d-flex flex-column border pointer">
                        Cheese Storage ($30)
                        <img class="upgradePics" src="/assets/katrin-leinfellner-v9deD75EaRw-unsplash.jpg" alt="">
                    </div>
                </div>
        </div>
        <div class="col-md-6 bg-light p-3 text-center">
            <h3>Purchase Automated Upgrades Below</h3>
            <div class="d-flex justify-content-evenly">
                <div onclick="buySpaceCow()" class="d-flex flex-column pointer border">
                    Space Cow ($20)
                    <img class="upgradePics" src="/assets/spaceCow.jpg" alt="">
                </div>
                <div onclick="buyDairyRefinery()" class="d-flex flex-column pointer border">
                    Lunar Dairy Refinery ($100)
                    <img class="upgradePics" src="/assets/tasos-mansour-NRfNe4ys_bM-unsplash.jpg" alt="">
                </div>
            </div>
        </div>
    </div> 
  
    `
    document.getElementById('total').innerHTML = template
}
//#region Click Functions
function buyCheeseKnife() {
    if (cheese >= clickUpgrades.cheeseKnife.price) {
        cheese -= clickUpgrades.cheeseKnife.price 
        clickUpgrades.cheeseKnife.quantity +=1
        totalCheeseMultiplier += clickUpgrades.cheeseKnife.multiplier
        update()
    }else{
        alert('you broke')
    }
}
function buyCheeseStorage() {
    if (cheese >= clickUpgrades.cheeseStorage.price) {
        cheese -= clickUpgrades.cheeseStorage.price 
        clickUpgrades.cheeseStorage.quantity += 1
        totalCheeseMultiplier += clickUpgrades.cheeseStorage.multiplier
        update()
    }else{
        alert('you are broke')
    }
}
function buySpaceCow() {
    if (cheese >= automaticUpgrades.spaceCow.price) {
        cheese -= automaticUpgrades.spaceCow.price 
        automaticUpgrades.spaceCow.quantity += 1
        update()
    }else{
        alert('you are broke')
    }
}
function buyDairyRefinery() {
    if (cheese >= automaticUpgrades.lunarDairyRefinery.price) {
        
        cheese -= automaticUpgrades.lunarDairyRefinery.price
        automaticUpgrades.lunarDairyRefinery.quantity += 1
        update()
    }else{
        alert('you are broke')
    }
}
//#endregion

// must call update() to render page
update();