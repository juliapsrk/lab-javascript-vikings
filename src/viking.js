// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(Damage) {
    this.health -= Damage;
    if (this.health > 0) {
      return `${this.name} has received ${Damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(Damage) {
    this.health -= Damage;
    if (this.health > 0) {
      return `A Saxon has received ${Damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let damage = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.pop(this.saxonArmy[0]);
    }
    return damage;
  }

  saxonAttack() {
    let damage = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.pop(this.vikingArmy[0]);
    }
    return damage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
