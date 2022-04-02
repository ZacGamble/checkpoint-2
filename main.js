let clickUpgrades = {
    cheeseKnife: {
        price: 5,
        quantity: 0,
        multiplier: 3
    },
    cheeseStorage: {
        price: 30,
        quantity: 0,
        multiplier: 6
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
    update()
}

function collectAutoUpgrades() {
    for (const key in automaticUpgrades) {
        const autoUpgrade = automaticUpgrades[key];
        if (autoUpgrade.quantity > 0) {
            cheese += autoUpgrade.multiplier * autoUpgrade.quantity;   
        }
    } 
     update()
}
// function calculateAutoCheese(){
    //     for (const key in automaticUpgrades) {
        //         if (Object.hasOwnProperty.call(automaticUpgrades, key)) {
            //             const autoUpgrade = automaticUpgrades[key];
//             autoCheese = autoUpgrade.quantity * autoUpgrade.multiplier
//             // autoCheese += autoUpgrade.quantity * autoUpgrade.multiplier
//         }
//     }
// }



function update(){
    let template = ''
    template += /*html*/
    `
    <div class="row">
    <div class="col-md-4 d-flex flex-column justify-content-center">
    <div class="text-light">
    <h3>Bonus Per Click: ${totalCheeseMultiplier}</h3>
    <h3>SpaceCow cheese per second: ${automaticUpgrades.spaceCow.multiplier * automaticUpgrades.spaceCow.quantity}</h3>
    <h3>Refinery cheese per second: ${automaticUpgrades.lunarDairyRefinery.multiplier * automaticUpgrades.lunarDairyRefinery.quantity}
    </div>
    </div>
    <!-- Moon object clickable -->
    <div class="col-md-4 border">
    <img onclick="mineClick()" oncontextmenu="return false;" class="img-fluid pointer" src="assets/mike-petrucci-uIf6H1or1nE-unsplash.jpg" alt="">
    </div>
        <!-- Player's owned upgrades -->
        <div class="col-md-4">
        <div class="card p-2 text-dark">
                <h3>Miner's Inventory</h3>
                <span class="fs-1 mdi mdi-cheese" id="cheese">Cheese ${cheese}</span>
                <span class="fs-5 mdi mdi-knife">Cheese Knives ${clickUpgrades.cheeseKnife.quantity} (+${clickUpgrades.cheeseKnife.multiplier} per click)</span>
                <span class="fs-5 mdi mdi-cart">Cheese Storages ${clickUpgrades.cheeseStorage.quantity} (+ ${clickUpgrades.cheeseStorage.multiplier} per click)</span>
                <span class="fs-5 mdi mdi-cow">Space Cows ${automaticUpgrades.spaceCow.quantity} (+${automaticUpgrades.spaceCow.multiplier} per second)</span>
                <span class="fs-5 mdi mdi-warehouse">Lunar Dairy Refineries ${automaticUpgrades.lunarDairyRefinery.quantity} (+${automaticUpgrades.lunarDairyRefinery.multiplier} per second)</span>
                </div>
                </div>
                </div>
                <!-- Store container here somewhere -->
                <div class="row d-flex">
                <div class="col-md-6 p-3 text-center">
                <h3 class="">Purchase On-click Upgrades Below</h3>
                <div class="d-flex justify-content-evenly">
                <div onclick="buyCheeseKnife('cheeseKnife')" class="flex-column d-flex border pointer">
                Cheese Knife ($${clickUpgrades.cheeseKnife.price})
                <img class="upgradePics" src="/assets/nathalia-rosa-BtD81mBbD0E-unsplash.jpg" alt="">
                </div>
                <div onclick="buyCheeseStorage()" class="d-flex flex-column border pointer">
                Cheese Storage ($${clickUpgrades.cheeseStorage.price})
                <img class="upgradePics" src="/assets/katrin-leinfellner-v9deD75EaRw-unsplash.jpg" alt="">
                    </div>
                    </div>
                    </div>
                    <div class="col-md-6 p-3 text-center">
                    <h3>Purchase Automated Upgrades Below</h3>
                    <div class="d-flex justify-content-evenly">
                    <div onclick="buySpaceCow()" class="d-flex flex-column pointer border">
                    Space Cow ($${automaticUpgrades.spaceCow.price})
                    <img class="upgradePics" src="/assets/spaceCow.jpg" alt="">
                    </div>
                    <div onclick="buyDairyRefinery()" class="d-flex flex-column pointer border">
                    Lunar Dairy Refinery ($${automaticUpgrades.lunarDairyRefinery.price})
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
                        clickUpgrades.cheeseKnife.price *= 2
                        totalCheeseMultiplier += clickUpgrades.cheeseKnife.multiplier
                        update()
                    }else{
                        alert('Not enough cheese!')
                    }
                }
                function buyCheeseStorage() {
                    if (cheese >= clickUpgrades.cheeseStorage.price) {
                        cheese -= clickUpgrades.cheeseStorage.price 
                        clickUpgrades.cheeseStorage.quantity += 1
                        clickUpgrades.cheeseStorage.price *= 2
                        totalCheeseMultiplier += clickUpgrades.cheeseStorage.multiplier
                        update()
                    }else{
                        alert('Not enough cheese!')
                    }
                }
                function buySpaceCow() {
                    if (cheese >= automaticUpgrades.spaceCow.price) {
                        cheese -= automaticUpgrades.spaceCow.price 
                        automaticUpgrades.spaceCow.quantity += 1
                        automaticUpgrades.spaceCow.price *= 2
                        update()
                        // calculateAutoCheese()
                    }else{
                        alert('Not enough cheese!')
                    }
                }
                function buyDairyRefinery() {
                    if (cheese >= automaticUpgrades.lunarDairyRefinery.price) {
                        cheese -= automaticUpgrades.lunarDairyRefinery.price
                        automaticUpgrades.lunarDairyRefinery.quantity += 1
                        automaticUpgrades.lunarDairyRefinery.price *= 2
                        update()
                        // calculateAutoCheese()
                     }else
                     {
                        alert('Not enough cheese!')
    }
}
//#endregion


// must call update() to render page
update();
setInterval(collectAutoUpgrades, 1000)