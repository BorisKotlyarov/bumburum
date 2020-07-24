const assert = require("assert");
const colors = require("../");

function r(color, text) {
    return color.replace(`%s`, text)
}

const _colors = {
    font: {
        Black: '\x1b[30m%s\x1b[0m',
        Red: '\x1b[31m%s\x1b[0m',
        Green: '\x1b[32m%s\x1b[0m',
        Yellow: '\x1b[33m%s\x1b[0m',
        Blue: '\x1b[34m%s\x1b[0m',
        Magenta: '\x1b[35m%s\x1b[0m',
        Cyan: '\x1b[36m%s\x1b[0m',
        White: '\x1b[37m%s\x1b[0m',
    },

    background: {
        Black: '\x1b[40m%s\x1b[0m',
        Red: '\x1b[41m%s\x1b[0m',
        Green: '\x1b[42m%s\x1b[0m',
        Yellow: '\x1b[43m%s\x1b[0m',
        Blue: '\x1b[44m%s\x1b[0m',
        Magenta: '\x1b[45m%s\x1b[0m',
        Cyan: '\x1b[46m%s\x1b[0m',
        White: '\x1b[47m%s\x1b[0m',
    },
};
const fontColorsNames = Object.keys(colors.font);
const backgroundColorsNames = Object.keys(colors.background);

describe("Test of font colors ", function () {

    fontColorsNames.forEach((colorName)=>{
        it(`test ${colorName} color`, function () {
            assert.equal(r(colors.font[colorName], 'test'), r(_colors.font[colorName], 'test'));
        });
    })

});

describe("Test of background colors", function () {

    backgroundColorsNames.forEach((colorName)=>{
        it(`test ${colorName} color`, function () {
            assert.equal(r(colors.background[colorName], 'test'), r(_colors.background[colorName], 'test'));
        });
    })

});
