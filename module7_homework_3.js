const createEmptyObject = () => {
  return Object.create(null);
};

// Пример использования
const emptyObject = createEmptyObject();
console.log(emptyObject); // {}
console.log(emptyObject.toString); // undefined