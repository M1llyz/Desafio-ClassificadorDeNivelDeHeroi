// Desafio: Classificador de nível de herói

let nicknames = ["BesouroDourado", "FlechaFlamejante", "TrovãoNegro", "MestreFenix", "LordeDasTrevas", "CaveiraVermelha", "DamaDeFerro", "SenhorDaLuxúria", "CavaleiroDoApocalipse"] 
let xpHeros = [565, 1534, 3456, 6853, 7564, 8364, 9284, 11000, -2]

let levelHeros = ["FERRO", "BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTE", "IMORTAL", "RADIANTE"]

for (let i = 0; i < 9; i++) {
    if (xpHeros[i] > 0 && xpHeros[i] <= 1000) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[0])
    } else if (xpHeros[i] >= 1001 && xpHeros[i] <= 2000) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[1])
    } else if (xpHeros[i] >= 2001 && xpHeros[i] <= 5000) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[2])
    } else if (xpHeros[i] >= 5001 && xpHeros[i] <= 7000) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[3])
    } else if (xpHeros[i] >= 7001 && xpHeros[i] <= 8000) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[4])
    } else if (xpHeros[i] >= 8001 && xpHeros[i] <= 9000) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[5])
    } else if (xpHeros[i] >= 9001 && xpHeros[i] <= 10000) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[6]) 
    } else if (xpHeros[i] >= 10001) {
        console.log("O Herói de nome " + nicknames[i] + " está no nível de " + levelHeros[7])
    } else {
        console.log("XP do Herói " + nicknames[i] + " é inválido. Valores negativos não são validados")
    }
}
