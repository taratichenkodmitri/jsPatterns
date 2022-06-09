class Marine {
    constructor(_damage, _armor) {
      this.damage = _damage;
      this.armor = _armor;
    }
    
    get damage() { return this._damage }
    set damage(value) { this._damage = value; }
    
    get armor() { return this._armor; }
    set armor(value) { this._armor = value; }
}
  
class MarineWeaponUpgrade extends Marine{
    constructor(marine) {
        super(marine.damage, marine.armor)
    }

    get damage() { return super.damage + 1; }
    set damage(value) { super.damage = value }
    
    get armor() { return super.armor; }
    set armor(value) { super.armor = value}
}

class MarineArmorUpgrade extends Marine{
    constructor(marine) {
        super(marine.damage, marine.armor)
    }

    get damage() { return super.damage; }
    set damage(value) { super.damage = value }

    get armor() { return super.armor + 1; }
    set armor(value) { super.armor = value}
}

let marine = new Marine(10, 1);