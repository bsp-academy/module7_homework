// Родительский класс "Электроприбор"
class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  // Методы "Включить" и "Выключить" прибор
  switchOn() {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(`${this.name} включен`);
    } else {
      console.log(`${this.name} уже включен`);
    }
  }

  switchOff() {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(`${this.name} выключен`);
    } else {
      console.log(`${this.name} уже выключен`);
    }
  }
}

// Класс настольной лампы
class DeskLamp extends ElectricalAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  // Метод управления яркостью настольной лампы
  adjustBrightness(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} яркость изменена: ${this.brightness}`);
  }
}

// Класс компьютера
class Computer extends ElectricalAppliance {
  constructor(name, power, operatingSystem) {
    super(name, power);
    this.operatingSystem = operatingSystem;
  }

  // Методы работы с компьютером
  start() {
    console.log(`Запуск компьютера с операционной системой ${this.operatingSystem}`);
  }

  shutdown() {
    console.log(`Выключение компьютера`);
  }
}

// Создание экземпляров приборов
const deskLamp = new DeskLamp("Настольная лампа", 60, 100);
const computer = new Computer("Компьютер", 500, "Windows 10");

// Включение и выключение приборов
deskLamp.switchOn(); // Настольная лампа включена
deskLamp.switchOff(); // Настольная лампа выключена

computer.switchOn(); // Компьютер включен
computer.switchOff(); // Компьютер выключен

// Расчет суммарной потребляемой мощности включенных приборов
function calculateTotalPower(...appliances) {
  let totalPower = 0;
  for (let i = 0; i < appliances.length; i++) {
    if (appliances[i].pluggedIn) {
      totalPower += appliances[i].power;
    }
  }
  return totalPower;
}

// Вычисление суммарной потребляемой мощности
console.log(`Суммарная потребляемая мощность: ${calculateTotalPower(deskLamp, computer)} Вт`);