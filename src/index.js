module.exports = function toReadable(number) {
    let res = "";
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenths = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let rank = ['', 'thousand', 'million', 'billion', 'trillion'];

    function numberToString(a) {
        let t = a.toString();
        let len = t.length;
        if (len === 1) {
            res = numbers[t.charAt(0)];
            return res;
        }
        if (len === 2 && t.charAt(0) === '1') {
            res = teens[t.charAt(1)];
            return res;
        }
        if (len === 2 && t.charAt(1) !== '0') {
            res = tenths[t.charAt(0) - 1] + " " + numbers[t.charAt(1)];
            return res;
        }
        if (len === 2 && t.charAt(1) === '0') {
            res = tenths[t.charAt(0) - 1];
        }
        if (len === 3 && t.charAt(1) === '1') {
            res = numbers[t.charAt(0)] + " " + 'hundred' + " " + teens[t.charAt(2)];
            return res;
        }
        if (len === 3 && t.charAt(1) !== '0' && t.charAt(1) !== '1') {
            res = numbers[t.charAt(0)] + " " + 'hundred' + " " + tenths[t.charAt(1) - 1] + " " + numbers[t.charAt(2)];
        }
        if (len === 3 && t.charAt(1) === '0') {
            res = numbers[t.charAt(0)] + " " + 'hundred' + " " + numbers[t.charAt(2)];
        }
        if (len === 3 && t.charAt(2) === '0') {
            res = numbers[t.charAt(0)] + " " + 'hundred' + " " + tenths[t.charAt(1)-1];
        }
        if (len === 3 && t.charAt(1) === '0' && t.charAt(2) === '0') {
            res = numbers[t.charAt(0)] + " " + 'hundred';
        }
        return res;
    }

    let i = 0;
    let a;
    let result = "";
    if (number === 0) {
        return 'zero';
    }
    while (number) {
        a = (number % 1000);
        number = Math.floor(number / 1000);
        if (number < 1000) {
            result = numberToString(a);
        } else {
            result = numberToString(a) + ' ' + rank[i] + ' ' + result;
        }
        i++;
    }
    return result;
}

