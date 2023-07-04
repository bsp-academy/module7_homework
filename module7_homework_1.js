const printOwnProperties = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ':', obj[key]);
    }
  }
};

// Пример использования
const person = {
  name: 'John',
  age: 25,
};

printOwnProperties(person);