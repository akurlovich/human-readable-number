module.exports = function toReadable (number) {
    number = number.toString().replace(/[\, ]/g,'');
    let digits = ['zero','one','two','three','four', 'five','six','seven','eight','nine'],
        tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'],
        twents = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'],
        len = number.length,
        n = number.split(''),
        str = '',
        sk = 0;
    if (number === '0') return 'zero';
    for (let i = 0; i < len; i++) {
        if ((len - i) % 3 == 2) { 
            if (n[i] == '1') {
                str += tens[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += twents[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) {
            str += digits[n[i]] +' ';
            if ((len - i) % 3 == 0) str += 'hundred ';
            sk = 1;
        }
    }
    
    s = number;
    return str.replace(/\s+/g,' ').slice(0, -1)
}


// let th = ['','thousand','million', 'billion','trillion'];
//     let dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
//     let tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
//     let tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
//     number = number.toString();
//     number = number.replace(/[\, ]/g,'');
//     if (number === '0') return 'zero';
//     if (number != parseFloat(number)) return 'not a number';
//     let x = number.indexOf('.');
//     if (x == -1)
//         x = number.length;
//     if (x > 15)
//         return 'too big';
//     let n = number.split(''); 
//     let str = '';
//     let sk = 0;
//     for (let i=0;   i < x;  i++) {
//         if ((x-i)%3==2) { 
//             if (n[i] == '1') {
//                 str += tn[Number(n[i+1])] + ' ';
//                 i++;
//                 sk=1;
//             } else if (n[i]!=0) {
//                 str += tw[n[i]-2] + ' ';
//                 sk=1;
//             }
//         } else if (n[i]!=0) { // 0235
//             str += dg[n[i]] +' ';
//             if ((x-i)%3==0) str += 'hundred ';
//             sk=1;
//         }
//         if ((x-i)%3==1) {
//             if (sk)
//                 str += th[(x-i-1)/3] + ' ';
//             sk=0;
//         }
//     }

//     if (x != number.length) {
//         let y = number.length;
//         str += 'point ';
//         for (let i=x+1; i<y; i++)
//             str += dg[n[i]] +' ';
//     }
//     s = number;
//     return str.replace(/\s+/g,' ').slice(0, -1)
