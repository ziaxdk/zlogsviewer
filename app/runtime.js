module.exports = function(args) {

  var check = [], argv = [];
  var digits = /^\d{1,5}$/

  args.forEach(v => {
    if (digits.test(v)) {
      check.push(parseInt(v));
    }
  });

  if (check.length === 0) check.push(8080);

  module.exports = {
    args: check,
    _v: '0.0.2'
  }
}