let appCal = 0;
let appP = 0;
let appC = 0;
let appF = 0;
/*-----------------*/
let entreeCal = 0;
let entreeP = 0;
let entreeC = 0;
let entreeF = 0;
/*-----------------*/
let dessertCal = 0;
let dessertP = 0;
let dessertC = 0;
let dessertF = 0;

function update(course,macro,subtract,increment) { //subtract true if using - button, false if using +
    if (course=="a") {
        if (macro=="p") {
            if (subtract && appP-increment > 0) {
                appP-=increment;
            } else if (!subtract) {
                appP+=increment;
            }
        }
        if (macro=="c") {
            if (subtract && appC-increment > 0) {
                appC-=increment;
            } else if (!subtract) {
                appC+=increment;
            }
        }
        if (macro=="f") {
            if (subtract && appF-increment > 0) {
                appF-=increment;
            } else if (!subtract) {
                appF+=increment;
            }
        }
    }
    else if (course=="e") {
        if (macro=="p") {
            if (subtract && entreeP-increment > 0) {
                entreeP-=increment;
            } else if (!subtract) {
                entreeP+=increment;
            }
        }
        if (macro=="c") {
            if (subtract && entreeC-increment > 0) {
                entreeC-=increment;
            } else if (!subtract) {
                entreeC+=increment;
            }
        }
        if (macro=="f") {
            if (subtract && entreeF-increment > 0) {
                entreeF-=increment;
            } else if (!subtract) {
                entreeF+=increment;
            }
        }
    }
    else if (course=="d") {
        if (macro=="p") {
            if (subtract && dessertP-increment > 0) {
                dessertP-=increment;
            } else if (!subtract) {
                dessertP+=increment;
            }
        }
        if (macro=="c") {
            if (subtract && dessertC-increment > 0) {
                dessertC-=increment;
            } else if (!subtract) {
                dessertC+=increment;
            }
        }
        if (macro=="f") {
            if (subtract && dessertF-increment > 0) {
                dessertF-=increment;
            } else if (!subtract) {
                dessertF+=increment;
            }
        }
    }
    display();
}


function display() {
    let appCalOutput = document.getElementById("app-cal");
    let appPOutput = document.getElementById("appP");
    let appCOutput = document.getElementById("appC");
    let appFOutput = document.getElementById("appF");
    /*----------------------------------------------------------*/
    let entreeCalOutput = document.getElementById("entree-cal");
    let entreePOutput = document.getElementById("entreeP");
    let entreeCOutput = document.getElementById("entreeC");
    let entreeFOutput = document.getElementById("entreeF");
    /*----------------------------------------------------------*/
    let dessertCalOutput = document.getElementById("dessert-cal");
    let dessertPOutput = document.getElementById("dessertP");
    let dessertCOutput = document.getElementById("dessertC");
    let dessertFOutput = document.getElementById("dessertF");
    /*----------------------------------------------------------*/
    appCalOutput.textContent = appF*9 + appC*4 + appP*4;
    appPOutput.textContent = appP;
    appCOutput.textContent = appC;
    appFOutput.textContent = appF;
    /*----------------------------------------------------------*/
    entreeCalOutput.textContent = entreeF*9 + entreeC*4 + entreeP*4;
    entreePOutput.textContent = entreeP;
    entreeCOutput.textContent = entreeC;
    entreeFOutput.textContent = entreeF;
    /*----------------------------------------------------------*/
    dessertCalOutput.textContent = dessertF*9 + dessertC*4 + dessertP*4;
    dessertPOutput.textContent = dessertP;
    dessertCOutput.textContent = dessertC;
    dessertFOutput.textContent = dessertF;
}
