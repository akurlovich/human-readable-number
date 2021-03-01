module.exports = function toReadable (number) {
  let thousand = ['','thousand','million', 'billion','trillion'],
      digits = ['zero','one','two','three','four', 'five','six','seven','eight','nine'],
      tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'],
      twentys = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'],
      number = number.toString().replace(/[\, ]/g,'').split(''),
      str = '',
      some = 0;
  for (let i = 0;   i < x;  i++) {
      if ((x - i) % 3 == 2) { 
          if (n[i] == '1') {
              str += tens[Number(n[i + 1])] + ' ';
              i++;
              some = 1;
          } else if (n[i] != 0) {
              str += twentys[n[i] - 2] + ' ';
              some = 1;
          }
      } else if (n[i] != 0) {
          str += digits[n[i]] +' ';
          if ((x - i) % 3 == 0) str += 'hundred ';
          some=1;
      }
      if ((x - i) % 3 == 1) {
          if (some)
              str += thousand[(x - i - 1) / 3] + ' ';
          some = 0;
      }
  }

  return str.replace(/\number+/g,' ');
}
