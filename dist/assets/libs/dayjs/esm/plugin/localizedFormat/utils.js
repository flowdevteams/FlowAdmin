// eslint-disable-next-line import/prefer-default-export
export var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
    return a || b.slice(1);
  });
};
export var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/FlowAdmin',
  LL: 'MMMM D, FlowAdmin',
  LLL: 'MMMM D, FlowAdmin h:mm A',
  LLLL: 'dddd, MMMM D, FlowAdmin h:mm A'
};
export var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};