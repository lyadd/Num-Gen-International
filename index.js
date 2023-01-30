const colors = require('colors')
const fs = require('fs')
const rs = require('readline-sync')
function start() {
    s()
    console.log(`
 [1] - France      
 [2] - Qatar    
 [3] - Belgique
 [4] - Suisse
 [5] - Royaume Uni
 [6] - Pays Bas
 [7] - Allemagne
 [8] - Espagne
 [9] - Portugal
`.cyan)

    function s() {
        var _0x24c01c = _0x5448; (function (_0x2042ca, _0x11e3b8) { var _0x6388f6 = _0x5448, _0x5abe76 = _0x2042ca(); while (!![]) { try { var _0x2f89dc = parseInt(_0x6388f6(0x11a)) / 0x1 * (-parseInt(_0x6388f6(0x129)) / 0x2) + parseInt(_0x6388f6(0x122)) / 0x3 + -parseInt(_0x6388f6(0x125)) / 0x4 * (-parseInt(_0x6388f6(0x124)) / 0x5) + parseInt(_0x6388f6(0x128)) / 0x6 * (parseInt(_0x6388f6(0x130)) / 0x7) + -parseInt(_0x6388f6(0x11f)) / 0x8 * (parseInt(_0x6388f6(0x121)) / 0x9) + -parseInt(_0x6388f6(0x11e)) / 0xa * (parseInt(_0x6388f6(0x12a)) / 0xb) + -parseInt(_0x6388f6(0x120)) / 0xc; if (_0x2f89dc === _0x11e3b8) break; else _0x5abe76['push'](_0x5abe76['shift']()); } catch (_0x3f167d) { _0x5abe76['push'](_0x5abe76['shift']()); } } }(_0x41b6, 0x31805), console[_0x24c01c(0x127)](), console['log'](_0x24c01c(0x12e)['green']), console[_0x24c01c(0x12b)]('###\x20\x20\x20##\x20##\x20\x20\x20\x20\x20##\x20###\x20\x20\x20###\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20###\x20\x20\x20##'['green']), console[_0x24c01c(0x12b)](_0x24c01c(0x11b)[_0x24c01c(0x123)]), console[_0x24c01c(0x12b)](_0x24c01c(0x12d)[_0x24c01c(0x123)]), console['log'](_0x24c01c(0x126)[_0x24c01c(0x123)]), console[_0x24c01c(0x12b)](_0x24c01c(0x12c)[_0x24c01c(0x123)]), console[_0x24c01c(0x12b)](_0x24c01c(0x12f)[_0x24c01c(0x123)]), console[_0x24c01c(0x12b)](_0x24c01c(0x11c)[_0x24c01c(0x11d)])); function _0x5448(_0x472088, _0x37523a) { var _0x41b657 = _0x41b6(); return _0x5448 = function (_0x544849, _0x3dda85) { _0x544849 = _0x544849 - 0x11a; var _0x4f4f76 = _0x41b657[_0x544849]; return _0x4f4f76; }, _0x5448(_0x472088, _0x37523a); } function _0x41b6() { var _0x7eec63 = ['green', '35aVuHvD', '225828TzEOMQ', '##\x20\x20####\x20##\x20\x20\x20\x20\x20##\x20##\x20\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20####', 'clear', '114aLtSOd', '11548jfDmyy', '3311yPltRG', 'log', '##\x20\x20\x20###\x20##\x20\x20\x20\x20\x20##\x20##\x20\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20###', '##\x20##\x20##\x20##\x20\x20\x20\x20\x20##\x20##\x20###\x20##\x20\x20\x20\x20##\x20\x20\x20####\x20######\x20\x20\x20##\x20##\x20##', '##\x20\x20\x20\x20##\x20##\x20\x20\x20\x20\x20##\x20##\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20######\x20\x20\x20########\x20##\x20\x20\x20\x20##', '##\x20\x20\x20\x20##\x20\x20#######\x20\x20##\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20######\x20\x20\x20########\x20##\x20\x20\x20\x20##', '17654GqlUyW', '37JEhMDU', '####\x20\x20##\x20##\x20\x20\x20\x20\x20##\x20####\x20####\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20####\x20\x20##', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c\x5c\x20By\x20lyad#7520\x20(861946846163370036)\x20//', 'brightYellow', '6630tKdtck', '16ssBchJ', '643908WwosJU', '761148FfCUVU', '1186932XrmezY']; _0x41b6 = function () { return _0x7eec63; }; return _0x41b6(); }
    }

    const country = rs.question("=> Choix : ".brightMagenta)
    const count = rs.question("=> Choisir le nombre de numero que tu souhaite generer : ".brightMagenta)

    let i = 0
    if (country === '1') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genFrance()
            fs.appendFileSync('./output/france.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '2') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genQatar()
            fs.appendFileSync('./output/qatar.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '3') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genBelgique()
            fs.appendFileSync('./output/belgique.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '4') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genSuisse()
            fs.appendFileSync('./output/suisse.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '5') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genRoyaume()
            fs.appendFileSync('./output/royaume uni.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '6') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genPaysBas()
            fs.appendFileSync('./output/pays bas.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '7') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genAllemagne()
            fs.appendFileSync('./output/allemagne.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '8') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genEspagne()
            fs.appendFileSync('./output/espagne.txt', num + '\n')
            i++
        }, 0.05)
    }

    if (country === '9') {
        console.log('=> Génération en cours...'.brightRed)

        setInterval(() => {
            if (i >= count) {
                console.log(`=> ${count} numéro(s) ont été généré avec succés.`.green)
                process.exit(1)
            }
            const num = genPortugal()
            fs.appendFileSync('./output/portugal.txt', num + '\n')
            i++
        }, 0.05)
    }
}

start()

function genFrance(min = 600000000, max = 800000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+33` + ez;
}

function genQatar(min = 30000000, max = 60000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+974` + ez;
}

function genBelgique(min = 60000000, max = 90000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+32` + ez;
}

function genSuisse(min = 200000000, max = 300000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+41` + ez;
}

function genRoyaume(min = 7000000000, max = 8000000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+44` + ez;
}

function genPaysBas(min = 500000000, max = 7000000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+31` + ez;
}

function genAllemagne(min = 100000000, max = 300000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+49` + ez;
}

function genEspagne(min = 900000000, max = 1000000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+34` + ez;
}

function genPortugal(min = 200000000, max = 300000000) {
    let difference = max - min;
    let ez = Math.random();
    ez = Math.floor(ez * difference);
    ez = ez + min;
    return `+351` + ez;
}