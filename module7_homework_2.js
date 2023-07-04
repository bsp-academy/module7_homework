const checkProperty = (propertyName, obj) => {
  return propertyName in obj;
};

// Пример использования
const person = {
  name: 'John',
  age: 25,
};

console.log(checkProperty('name', person));
console.log(checkProperty('email', person))