const chalk = require('chalk')
const fs = require('fs')
const rs = require('readline-sync')
const request = require('request')

function start() {
    console.clear()
    function _0x2257(_0x3be9c8, _0x38516a) { var _0x1618a1 = _0x49d6(); return _0x2257 = function (_0x4df008, _0x417664) { _0x4df008 = _0x4df008 - (-0x11 * -0xcb + 0x872 + -0x1 * 0x1495); var _0x523f99 = _0x1618a1[_0x4df008]; return _0x523f99; }, _0x2257(_0x3be9c8, _0x38516a); } var _0x262204 = _0x2257; (function (_0x29a688, _0x3b433d) { var _0x35a735 = _0x2257, _0x1a6607 = _0x29a688(); while (!![]) { try { var _0x158a98 = parseInt(_0x35a735(0x16b)) / (-0x1171 + 0x1cf1 + -0xb7f) + -parseInt(_0x35a735(0x187)) / (0x13c1 + -0x2239 + -0x73d * -0x2) * (-parseInt(_0x35a735(0x163)) / (0x1c9 * -0xb + -0x1b80 + -0x47 * -0xaa)) + -parseInt(_0x35a735(0x193)) / (-0x2ee + -0x1 * -0x158f + -0x129d) * (parseInt(_0x35a735(0x198)) / (-0x505 + -0x1 * 0x18b2 + 0x1dbc)) + -parseInt(_0x35a735(0x172)) / (-0x49 + 0x9ca + -0x97b) * (-parseInt(_0x35a735(0x197)) / (0xc66 * -0x2 + -0x1453 + 0x2d26 * 0x1)) + -parseInt(_0x35a735(0x177)) / (0x178e + -0x1c7c + 0x4f6) * (-parseInt(_0x35a735(0x184)) / (0x70b + 0x1 * -0xbf1 + 0x4ef)) + parseInt(_0x35a735(0x161)) / (0x2004 + -0x48d * 0x3 + -0x1 * 0x1253) + -parseInt(_0x35a735(0x180)) / (-0x150d + 0x2623 + -0x110b); if (_0x158a98 === _0x3b433d) break; else _0x1a6607['push'](_0x1a6607['shift']()); } catch (_0x2edcab) { _0x1a6607['push'](_0x1a6607['shift']()); } } }(_0x49d6, 0x2058d + 0x3178c + -0x2e33d), console[_0x262204(0x196)]('\x0a' + chalk[_0x262204(0x16d)][_0x262204(0x17f)](_0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x182) + _0x262204(0x185) + _0x262204(0x178) + _0x262204(0x159) + _0x262204(0x17c) + _0x262204(0x17b) + _0x262204(0x18c)) + '\x0a' + chalk[_0x262204(0x16d)][_0x262204(0x17f)](_0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x15c) + _0x262204(0x160) + _0x262204(0x170) + _0x262204(0x192) + _0x262204(0x158) + _0x262204(0x183) + _0x262204(0x18b)) + '\x0a' + chalk[_0x262204(0x16d)][_0x262204(0x17f)](_0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x179) + _0x262204(0x15e) + _0x262204(0x194) + _0x262204(0x169) + _0x262204(0x191) + _0x262204(0x173) + _0x262204(0x181)) + '\x0a' + chalk[_0x262204(0x16d)][_0x262204(0x189)](_0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x175) + _0x262204(0x171) + _0x262204(0x17d) + _0x262204(0x17e) + _0x262204(0x16c) + _0x262204(0x16a) + _0x262204(0x17a)) + '\x0a' + chalk[_0x262204(0x16d)][_0x262204(0x189)](_0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x168) + _0x262204(0x15f) + _0x262204(0x15b) + _0x262204(0x15d) + _0x262204(0x186) + _0x262204(0x199) + _0x262204(0x18f)) + '\x0a' + chalk[_0x262204(0x16d)][_0x262204(0x189)](_0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x164) + _0x262204(0x18e) + _0x262204(0x174) + _0x262204(0x162) + _0x262204(0x176) + _0x262204(0x16e) + _0x262204(0x18d)) + (_0x262204(0x165) + _0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x18a)) + chalk[_0x262204(0x16d)][_0x262204(0x188)](_0x262204(0x167) + _0x262204(0x166) + _0x262204(0x16f) + _0x262204(0x190)) + (_0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x15a) + _0x262204(0x195)))); function _0x49d6() { var _0x30acde = ['███╔╝██║\x20╚', '\x20\x20\x20\x20\x20\x20████', '═╝\x20██║\x20\x20\x20\x20', '█╗\x20██║██║\x20', '╚████║╚███', '╗\x20\x20██║██║\x20', '1495840ZEEaVp', '\x20\x20\x20╚═╝\x20\x20\x20\x20', '18kvDkow', '\x20\x20\x20\x20\x20\x20╚═╝\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'd#7520\x20(86', 'Dev\x20by\x20lya', '\x20\x20\x20\x20\x20\x20██║\x20', '██╔██║\x20\x20\x20\x20', '█╔══╝\x20\x20██║', '108767PBdlaZ', '██║\x20\x20\x20██║█', 'bold', '══════╝╚═╝', '1946846163', '\x20\x20██║████╗', '██╗██║██║\x20', '4614ThtFpA', '████╗\x20\x20██╔', '═══╝\x20╚═╝\x20\x20', '\x20\x20\x20\x20\x20\x20██║╚', '\x20╚═════╝\x20╚', '1536uSvYnQ', '\x20\x20██╗███╗\x20', '\x20\x20\x20\x20\x20\x20██╔█', '╚██╗██║', '██████╗███', '\x20██████╗\x20█', '\x20\x20██║██║╚█', '█╔╝██║\x20\x20\x20\x20', 'green', '3222571jRaiea', '██╗\x20██║', '\x20\x20\x20\x20\x20\x20███╗', '█╔════╝███', '468OwWsaA', '\x20\x20\x20██╗██╗\x20', '╚██████╔╝█', '70496hNZviV', 'yellow', 'white', '\x20\x20\x20\x20\x20\x20\x20\x20\x20', '█╗\x20\x20██║', '╗\x20\x20\x20██╗', '\x20\x20╚═══╝', '\x20╚═══╝\x20╚══', '\x20╚████║', '370036)', '██║\x20\x20███╗█', '\x20████║\x20\x20\x20\x20', '4oFgFrX', '\x20\x20██║██╔██', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a', 'log', '637zpPVhH', '554785XQNRJS', '██████╗██║', '██╔════╝\x20█', '\x20\x20███╗\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20']; _0x49d6 = function () { return _0x30acde; }; return _0x49d6(); }

    console.log(`
    [${chalk.bold.yellow('1')}] - ${chalk.bold.cyan('France')}      
    [${chalk.bold.yellow('2')}] - ${chalk.bold.cyan('Qatar')}      
    `)

    const country = rs.question(`[${chalk.bold.magenta('?')}] - Choix du pays : `)
    const count = rs.question(`[${chalk.bold.magenta('?')}] - Nombre de numero : `)

    if (country === '1') {
        France(count)

    } else if (country === '2') {
        Qatar(count)
    }
}

start()

function France(count) {
    let i = 0
    setInterval(() => {
        if (i >= count) {
            console.log(`[${chalk.bold.green('+')}] - ${count} numéro(s) ont été généré avec succés.`)
            process.exit(1)
        }
        const num = genFrance()
        const num2 = genFrance().replace('+33', '')
        request.get(`https://messente.com/messente-api/number-lookup/?phone_number=%2B33${num2}`, { json: true }, (err, res, body) => {
            if (body.countryName === 'France') {
                if (body.originalCarrierName === '') {
                    console.log(`[${chalk.bold.red('-')}] - 0${num2}`)
                    fs.appendFileSync('./output/France_Invalide.txt', '0' + num2 + '\n')
                } else {
                    console.log(`[${chalk.bold.green('+')}] - 0${num2}`)
                    fs.appendFileSync('./output/France_Valide.txt', '0' + num2 + '\n')
                }
            } else {
                console.log(`[${chalk.bold.red('-')}] - 0${num2}`)
                fs.appendFileSync('./output/France_Invalide.txt', '0' + num2 + '\n')
            }
        })
        i++
    }, 150)
}

function Qatar(count) {
    let i = 0
    setInterval(() => {
        if (i >= count) {
            console.log(`[${chalk.bold.green('+')}] - ${count} numéro(s) ont été généré avec succés.`)
            process.exit(1)
        }
        const num = genQatar()
        const num2 = genQatar().replace('+974', '')
        request.get(`https://messente.com/messente-api/number-lookup/?phone_number=%2B974${num2}`, { json: true }, (err, res, body) => {
            if (body.countryName === 'Qatar') {
                if (body.originalCarrierName === '') {
                    console.log(`[${chalk.bold.red('-')}] - ${num}`)
                    fs.appendFileSync('./output/Qatar_Invalide.txt', num + '\n')
                } else {
                    console.log(`[${chalk.bold.green('+')}] - ${num}`)
                    fs.appendFileSync('./output/Qatar_Valide.txt', num + '\n')
                }

            } else {
                console.log(`[${chalk.bold.red('-')}] - ${num}`)
                fs.appendFileSync('./output/Qatar_Invalide.txt', num + '\n')
            }
        })
        i++
    }, 150)
}

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
