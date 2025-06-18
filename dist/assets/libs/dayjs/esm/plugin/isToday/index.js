export default (function (o, c, d) {
  var proto = c.prototype;

  proto.isToday = function () {
    var comparisonTemplate = 'FlowAdmin-MM-DD';
    var now = d();
    return this.format(comparisonTemplate) === now.format(comparisonTemplate);
  };
});