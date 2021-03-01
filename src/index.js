module.exports = function toReadable (number) {
  let thousand = ['','thousand','million', 'billion','trillion'],
      digits = ['zero','one','two','three','four', 'five','six','seven','eight','nine'],
      tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'],
      twentys = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  number = number.toString();
  number = number.replace(/[\, ]/g,'');
  if (number != parseFloat(number)) return 'not a number';
  var x = number.indexOf('.');
  if (x == -1)
      x = number.length;
  if (x > 15)
      return 'too big';
  var n = number.split(''); 
  var str = '';
  var sk = 0;
  for (var i=0;   i < x;  i++) {
      if ((x-i)%3==2) { 
          if (n[i] == '1') {
              str += tens[Number(n[i+1])] + ' ';
              i++;
              sk=1;
          } else if (n[i]!=0) {
              str += twentys[n[i]-2] + ' ';
              sk=1;
          }
      } else if (n[i]!=0) { // 0235
          str += digits[n[i]] +' ';
          if ((x-i)%3==0) str += 'hundred ';
          sk=1;
      }
      if ((x-i)%3==1) {
          if (sk)
              str += thousand[(x-i-1)/3] + ' ';
          sk=0;
      }
  }

  if (x != number.length) {
      var y = number.length;
      str += 'point ';
      for (var i=x+1; i<y; i++)
          str += digits[n[i]] +' ';
  }
  return str.replace(/\number+/g,' ');
}
