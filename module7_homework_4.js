// Родительская функция-конструктор "Электроприбор"
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

// Методы "Включить" и "Выключить" прибор
ElectricalAppliance.prototype.switchOn = function() {
  if (!this.pluggedIn) {
    this.pluggedIn = true;
    console.log(this.name + " включен");
  } else {
    console.log(this.name + " уже включен");
  }
};

ElectricalAppliance.prototype.switchOff = function() {
  if (this.pluggedIn) {
    this.pluggedIn = false;
    console.log(this.name + " выключен");
  } else {
    console.log(this.name + " уже выключен");
  }
};

// Конкретный прибор - настольная лампа
function DeskLamp(name, power, brightness) {
  ElectricalAppliance.call(this, name, power);
  this.brightness = brightness;
}

// Наследование прототипа от родительской функции-конструктора
DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Методы управления яркостью настольной лампы
DeskLamp.prototype.adjustBrightness = function(newBrightness) {
  this.brightness = newBrightness;
  console.log(this.name + " яркость изменена: " + this.brightness);
};

// Конкретный прибор - компьютер
function Computer(name, power, operatingSystem) {
  ElectricalAppliance.call(this, name, power);
  this.operatingSystem = operatingSystem;
}

// Наследование прототипа от родительской функции-конструктора
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Методы работы с компьютером
Computer.prototype.start = function() {
  console.log("Запуск компьютера с операционной системой " + this.operatingSystem);
};

Computer.prototype.shutdown = function() {
  console.log("Выключение компьютера");
};

// Создание экземпляров приборов
var deskLamp = new DeskLamp("Настольная лампа", 60, 100);
var computer = new Computer("Компьютер", 500, "Windows 10");

// Включение и выключение приборов
deskLamp.switchOn(); // Настольная лампа включена
deskLamp.switchOff(); // Настольная лампа выключена

computer.switchOn(); // Компьютер включен
computer.switchOff(); // Компьютер выключен

// Расчет суммарной потребляемой мощности включенных приборов
function calculateTotalPower(...appliances) {
  var totalPower = 0;
  for (var i = 0; i < appliances.length; i++) {
    if (appliances[i].pluggedIn) {
      totalPower += appliances[i].power;
    }
  }
  return totalPower;
}

// Вычислениесуммарной потребляемой мощности включенных приборов
console.log("Суммарная потребляемая мощность: " + calculateTotalPower(deskLamp, computer) + " Вт");