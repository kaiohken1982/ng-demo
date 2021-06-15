class Rabbit extends Animal {
  constructor(name) {
    super(name)
  }

  heartbeat() {    
    console.log('heartbeat');
    this.energy-=this.getRand(6, 12)
    this.energy = this.energy < 0 ? 0 : this.energy
    if(0 == this.energy) {
      this.dead = true
    }
  }

  getState = () => {
    if(this.energy >= 60) {
      return 'rabbit-normal'
    } else if(this.energy < 60 && this.energy > 0) {
      return 'rabbit-sick'
    } else if(this.energy <= 0) {
      return 'rabbit-dead'
    }
  }
}