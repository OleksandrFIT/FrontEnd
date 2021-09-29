function Robot(message) {
    this.message = message;
}

Robot.prototype.work = function () {
    console.log(this.message);
    return this.message;
};

function CoffeeRobot(message) {
    this.message = message;
}
CoffeeRobot.prototype = Object.create(Robot.prototype);

function RobotDancer(message) {
    this.message = message;
}
RobotDancer.prototype = Object.create(Robot.prototype);

function RobotCooker(message) {
    this.message = message;
}
RobotCooker.prototype = Object.create(Robot.prototype);

let robot = new Robot('Я Robot- я просто працюю');
let cofeeRobot = new CoffeeRobot('Я CoffeRobot– я варю каву');
let robotDancer = new RobotDancer('Я RobotDancer– я просто танцюю');
let robotCoocker = new RobotCooker('Я RobotCoocker– я просто готую');

let array = new Array();

array.push(robot);
array.push(cofeeRobot);
array.push(robotDancer);
array.push(robotCoocker);

for (let i = 0; i < array.length; i++) {
    array[i].work();
}