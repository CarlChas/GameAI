class Character {
    name: string
    health: number
    attackPower: number
    defense: number

    constructor(name: string, health: number, attackPower: number, defense: number) {
        this.name = name
        this.health = health
        this.attackPower = attackPower
        this.defense = defense
    }

    attack(opponent: Character) {
        const damage = Math.max(0, this.attackPower - opponent.defense)
        opponent.health -= damage
        console.log(`${this.name} attacks ${opponent.name} for ${damage} damage.`)
    }

    isAlive(): boolean {
        return this.health > 0
    }
}

class Player extends Character {
    constructor(name: string, health: number, attackPower: number, defense: number) {
        super(name, health, attackPower, defense)
    }
}

class Enemy extends Character {
    constructor(name: string, health: number, attackPower: number, defense: number) {
        super(name, health, attackPower, defense)
    }
}

function battle(player: Player, enemy: Enemy) {
    let turn = 0

    while (player.isAlive() && enemy.isAlive()) {
        console.log(`--- Turn ${turn + 1} ---`)
        
        if (turn % 2 === 0) {
            player.attack(enemy)
        } else {
            enemy.attack(player)
        }

        turn++
        console.log(`Player Health: ${player.health}, Enemy Health: ${enemy.health}`)
    }

    if (player.isAlive()) {
        console.log("Player wins!")
    } else {
        console.log("Enemy wins!")
    }
}

const player = new Player('Hero', 100, 20, 5)
const enemy = new Enemy('Goblin', 80, 15, 3)

battle(player, enemy)
