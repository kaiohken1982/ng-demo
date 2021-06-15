class Animal {
  energy = 100
  maxEnergy = 100
  name
  dead = false

  constructor(name) {
    this.name = name
  }

  isAlive() {
    return this.energy > 0
  }

  getEnergy() {
    return this.energy
  }

  getMaxEnergy() {
    return this.maxEnergy
  }

  getName() {
    return this.name
  }

  getRand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  eat(food) {
    if(!food instanceof Food) {
      console.error('bleah!')
      return
    }

    if(this.dead) {
      console.error('sei morto!')
      return
    }

    this.energy+= food.getEnergy()
    this.energy = this.energy > this.maxEnergy ? this.maxEnergy : this.energy
  }
}