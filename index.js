
var recipes = { foo: 'bar' };

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj, { [key]: value });
  return newObj;
  return obj;
}