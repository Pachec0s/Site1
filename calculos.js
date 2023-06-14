function potenciaGeradaCalcPassadeira() {
    let showResult = true;

    const comp = document.querySelector('#comp').value;
    const vel = document.querySelector('#vel').value;
    const duration = document.querySelector('#duration').value;
    const diam = document.querySelector('#diam').value;

    if (!checkIfValueIsNumber(comp) || !checkIfValueIsNumber(vel) || !checkIfValueIsNumber(duration) || !checkIfValueIsNumber(diam)) {
        showResult = false;
    }

    const rph = ((vel * 1000) / (2 * comp));
    const rph_min = (rph / 60);
    const rpm = rph_min * duration;
    const n1 = (200 * comp) / (Math.PI * diam);
    const velGer = n1 * rpm;

    if (showResult) {
        $('#errorMessage').removeClass('display-block');
        $('#errorMessage').addClass('display-none');
        $('#showRes').removeClass('display-none');
        $('#showRes').addClass('display-block');
        document.getElementById("pot").innerText = velGer.toFixed(2);
    } else {
        $('#showRes').removeClass('display-block');
        $('#showRes').addClass('display-none');
        $('#errorMessage').removeClass('display-none');
        $('#errorMessage').addClass('display-block');
    }

    return velGer;
}

function potenciaGeradaCalcBackPuller() {
    let showResultBackPuller = true;
    const rpmTac = document.querySelector('#rpmTac').value;
    const diamPol = document.querySelector('#diamPol').value;
    const weight = document.querySelector('#weight').value;
    const diamGer = document.querySelector('#diamGer').value;
    const rendInv = document.querySelector('#rendInv').value;
    const rendGer = document.querySelector('#rendGer').value;

    if (!checkIfValueIsNumber(rpmTac) || !checkIfValueIsNumber(diamPol) || !checkIfValueIsNumber(weight) || !checkIfValueIsNumber(diamGer) || !checkIfValueIsNumber(rendInv) || !checkIfValueIsNumber(rendGer)) {
        showResultBackPuller = false;
    }

    const n3 = rpmTac / 5.279;
    console.log(n3);
    const w = (n3 * ((2*(Math.PI)) / 60));
    console.log(w);
    const v = (w * diamGer) / 2;
    console.log(v);
    const t = (weight * v) + (weight * 9.806);
    console.log(t);
    const mi = (t / (v + 9.806));
    console.log(mi);
    const m = (t * (diamPol/2));
    console.log(m);
    const pMec = m * w;
    console.log(pMec);
    const pElect = pMec / ((rendInv / 100) * (rendGer / 100));
    console.log(pElect);

    if (showResultBackPuller) {
        $('#errorMessagePuxadorPeito').removeClass('display-block');
        $('#errorMessagePuxadorPeito').addClass('display-none');
        $('#showResPuxadorPeito').removeClass('display-none');
        $('#showResPuxadorPeito').addClass('display-block');
        document.getElementById("potBackPuller").innerText = pElect.toFixed(2);
    } else {
        $('#showResPuxadorPeito').removeClass('display-block');
        $('#showResPuxadorPeito').addClass('display-none');
        $('#errorMessagePuxadorPeito').removeClass('display-none');
        $('#errorMessagePuxadorPeito').addClass('display-block');
    }
    return pElect;
}

function potenciaGeradaCalcBicicleta() {
    let showResult = true;

    const pesop = document.querySelector('#pesop').value;
    const dist = document.querySelector('#dist').value;
    const veloc = document.querySelector('#veloc').value;
    const efic = document.querySelector('#efic').value;
    const pesoa = document.querySelector('#pesoa').value;
    const ra = document.querySelector('#ra').value;
    const Pelec = document.querySelector('#Pelec').value;

    if (!checkIfValueIsNumber(pesop) || !checkIfValueIsNumber(dist) || !checkIfValueIsNumber(veloc) || !checkIfValueIsNumber(efic) || !checkIfValueIsNumber(pesoa)|| !checkIfValueIsNumber(ra)|| !checkIfValueIsNumber(Pelec)) {
        showResult = false;
    }

    const F= pesop * 9.8;
    console.log(F);
    const Pmec= F * 2* Math.PI * dist * (veloc/60);
    console.log(Pmec);
    const PaltMec = pesoa * 9.8 * (ra * Math.PI * ((veloc/60) * (50/15) * 11));
    const Pconst = Pmec - PaltMec;
    const Pleg = Pconst + (Pelec/(efic/100));

    if (showResult) {
        $('#errorMessageBicicleta').removeClass('display-block');
        $('#errorMessageBicicleta').addClass('display-none');
        $('#showResBicicleta').removeClass('display-none');
        $('#showResBicicleta').addClass('display-block');
        document.getElementById("potBike").innerText = Pleg.toFixed(2);
    } else {
        $('#showResBicicleta').removeClass('display-block');
        $('#showResBicicleta').addClass('display-none');
        $('#errorMessageBicicleta').removeClass('display-none');
        $('#errorMessageBicicleta').addClass('display-block');
    }

    return Pleg;
}


function checkIfValueIsNumber(valToCheck) {
    if (typeof valToCheck == "number" || typeof valToCheck === 'bigint') {
        return true;
    } else if (typeof valToCheck === 'string') {
        return !Number.isNaN(Number.parseFloat(valToCheck));
    } else if (typeof valToCheck === 'undefined' || typeof valToCheck === 'object') {
        return false;
    } else {
        return !Number.isNaN(valToCheck);
    }
}