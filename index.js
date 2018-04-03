
var recipes = { foo: 'bar' };

function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, { [key] : value });
}