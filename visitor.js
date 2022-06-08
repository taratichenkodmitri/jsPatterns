class Marine {
    constructor() {
      this.health = 100;
    }

    accept(visitor) { 
        visitor.visitArmored(this); 
    }
}

class Marauder {
    constructor() {
        this.health = 125;
    }

    accept(visitor) { 
        visitor.visitLight(this); 
    }
}

class TankBullet {
    visitLight(unit) {
        unit.health -= 32;
    }

    visitArmored(unit) {
        unit.health -= 21;
    }
}

let marine = new Marine();
let maraduer = new Marauder();

let units = [marine, maraduer];

units.forEach(unit => {
    unit.accept(new TankBullet());
    console.log(unit.health);
})