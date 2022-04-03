let clickUpgrades = {
    cheeseKnife: {
        price: 5,
        quantity: 0,
        multiplier: 3
    },
    cheeseStorage: {
        price: 20,
        quantity: 0,
        multiplier: 6
    }
};

let automaticUpgrades = {
    spaceCow: {
        price: 25,
        quantity: 0,
        multiplier: 4
    },
    lunarDairyRefinery: {
        price: 100,
        quantity: 0,
        multiplier: 15
    }
}


let cheese = 0
let autoCheese = 0
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
//         for (const key in automaticUpgrades) { 
//              const autoUpgrade = automaticUpgrades[key];
//              if (autoUpgrade.quantity > 0) {
//                  autoCheese = autoUpgrade.quantity * autoUpgrade.multiplier
//                  autoCheese.reduce
//                 console.log(autoCheese)
//             }
//     } 
// }


function update(){
    let statsTemplate = ''
    let inventoryTemplate = ''
    let cheeseKnifeTemplate = ''
    let cheeseStorageTemplate = ''
    let spaceCowTemplate = ''
    let lunarDairyRefineryTemplate = ''

    statsTemplate += /*html*/
    `
    <h3>Bonus Per Click: ${totalCheeseMultiplier}</h3>
    <h3>Cheese/second: ${autoCheese}
    `
    document.getElementById('stats-container').innerHTML = statsTemplate
    
    inventoryTemplate+=/*html*/ `
    <div class="card p-2 text-dark">
    <h3>Miner's Inventory</h3>
    <span class="fs-1 mdi mdi-cheese bg-warning" id="cheese">Cheese <b>${cheese}</b></span>
    <span class="fs-5 mdi mdi-knife">Cheese Knives ${clickUpgrades.cheeseKnife.quantity} (+${clickUpgrades.cheeseKnife.multiplier * clickUpgrades.cheeseKnife.quantity} /click)</span>
    <span class="fs-5 mdi mdi-cart">Cheese Storages ${clickUpgrades.cheeseStorage.quantity} (+ ${clickUpgrades.cheeseStorage.multiplier * clickUpgrades.cheeseStorage.quantity} /click)</span>
    <span class="fs-5 mdi mdi-cow">Space Cows ${automaticUpgrades.spaceCow.quantity} (+${automaticUpgrades.spaceCow.multiplier * automaticUpgrades.spaceCow.quantity} /second)</span>
    <span class="fs-5 mdi mdi-warehouse">Lunar Dairy Refineries ${automaticUpgrades.lunarDairyRefinery.quantity} (+${automaticUpgrades.lunarDairyRefinery.multiplier * automaticUpgrades.lunarDairyRefinery.quantity} /second)</span>
    </div>
    `
    document.getElementById('inventory-container').innerHTML = inventoryTemplate
    
    cheeseKnifeTemplate +=`
    Cheese Knife ($${clickUpgrades.cheeseKnife.price})
    `
    document.getElementById('cheeseKnife-container').innerHTML = cheeseKnifeTemplate

    cheeseStorageTemplate += `
    Cheese Storage ($${clickUpgrades.cheeseStorage.price})
    `
    document.getElementById('cheeseStorage-container').innerHTML = cheeseStorageTemplate

    spaceCowTemplate += `
                Space Cow ($${automaticUpgrades.spaceCow.price})
                `
    document.getElementById('spaceCow-container').innerHTML = spaceCowTemplate

    lunarDairyRefineryTemplate += `
                Lunar Dairy Refinery ($${automaticUpgrades.lunarDairyRefinery.price})
                `
    document.getElementById('dairyRefinery-container').innerHTML = lunarDairyRefineryTemplate 
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
                        let timerInterval
                        Swal.fire({
                            title: 'You cannot afford this!',
                            html: 'I will close in <b></b> milliseconds.',
                            timer: 1500,
                            timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                    }
                    })
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
                        let timerInterval
                    Swal.fire({
                    title: 'You cannot afford this!',
                    html: 'I will close in <b></b> milliseconds.',
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                    })
                    }
                }

                function buySpaceCow() {
                    if (cheese >= automaticUpgrades.spaceCow.price) {
                        cheese -= automaticUpgrades.spaceCow.price 
                        automaticUpgrades.spaceCow.quantity += 1
                        automaticUpgrades.spaceCow.price *= 2
                        autoCheese += automaticUpgrades.spaceCow.multiplier
                        update()
                        // calculateAutoCheese()
                    }else{
                        let timerInterval
                    Swal.fire({
                    title: 'You cannot afford this!',
                    html: 'I will close in <b></b> milliseconds.',
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                    })
                    }
                }

                function buyDairyRefinery() {
                    if (cheese >= automaticUpgrades.lunarDairyRefinery.price) {
                        cheese -= automaticUpgrades.lunarDairyRefinery.price
                        automaticUpgrades.lunarDairyRefinery.quantity += 1
                        automaticUpgrades.lunarDairyRefinery.price *= 2
                        autoCheese += automaticUpgrades.lunarDairyRefinery.multiplier
                        update()
                        // calculateAutoCheese()
                     }else
                     {
                        let timerInterval
                        Swal.fire({
                          title: 'You cannot afford this!',
                          html: 'I will close in <b></b> milliseconds.',
                          timer: 1500,
                          timerProgressBar: true,
                          didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                              b.textContent = Swal.getTimerLeft()
                            }, 100)
                          },
                          willClose: () => {
                            clearInterval(timerInterval)
                          }
                        }).then((result) => {
                          /* Read more about handling dismissals below */
                          if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                          }
                        })
    }
}
//#endregion


// must call update() to render page
update();
setInterval(collectAutoUpgrades, 1000)