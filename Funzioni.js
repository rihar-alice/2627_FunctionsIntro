// Es 1

function saluta () {
    return ("Benvenuti a bordo")
}


const s1 = saluta; 
const s2 = saluta(); 

console.log(typeof s1) 
console.log(typeof s2) 
console.log(s1()) 

// Es 2

function raddoppia (n) {
    return (n*2)
}

function incrementa (n) {
    return (n+1)
}

function applica (f, x) {
    return (f(x))
}

console.log(applica(raddoppia, 21)) 
console.log(applica(incrementa, 41)) 
console.log(applica(raddoppia, applica(incrementa, 4))) 

// Es 3

function applicaDueVolte(f, x) {
    return applica(f, applica(f, x))
}

console.log(applicaDueVolte(raddoppia, 5)) 
console.log(applicaDueVolte(incrementa, 5)) 
console.log(applicaDueVolte(raddoppia, "3")) 

// Es 4

function applicaNVolte(f, n, x) {
    if (n == 0) {
        return x
    } else {
        for (let z=0; z < n; z++){
            x = f(x)
        }
        return x
    }
}

console.log(applicaNVolte(raddoppia, 10, 1))
console.log(applicaNVolte(incrementa, 3, 7)) 
console.log(applicaNVolte(incrementa, 0, 7)) 

// Es 5


function isNumeroValido(x) {
    return typeof x === "number" && !Number.isNaN(x)
}

function isStringaNonVuota(x) {
    return typeof x === "string" && x.length > 0 
}

function isFunzione(x) {
    return typeof x === "function" 
}

function raddoppia(n) {
    return n * 2;
}

console.log(isNumeroValido(3));
console.log(isNumeroValido("3")); 
console.log(isNumeroValido(NaN)); 
console.log(isStringaNonVuota("Orione")); 
console.log(isStringaNonVuota("")); 
console.log(isStringaNonVuota(5)); 
console.log(isFunzione(raddoppia)); 
console.log(isFunzione(raddoppia(2))); 

// Es 6

function applicaSicuro(f, x) {
    if (isFunzione(f) == false) {
        return "ERRORE: f non è una funzione"
    } else if (isNumeroValido(x) == false) {
        return "ERRORE: x non è un numero"
    } else {
        return f(x)
    }
}

console.log(applicaSicuro(raddoppia, 4)) 
console.log(applicaSicuro(raddoppia(4), 4)) 
console.log(applicaSicuro(raddoppia, "4")) 
console.log(applicaSicuro(incrementa, NaN)) 