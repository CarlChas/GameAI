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

function enemyAttack(player: Player, enemy: Enemy) {
    fetch('/enemy-taunt')
        .then(response => response.json())
        .then(data => {
            console.log(`Enemy says: "${data.taunt}"`)

            const damage = Math.floor(Math.random() * 15) + 5
            player.health -= damage
            console.log(`${enemy.name} attacks ${player.name} for ${damage} damage.`)
        })
        .catch(error => console.error('Error fetching enemy taunt:', error))
}

function battle(player: Player, enemy: Enemy) {
    let turn = 0

    while (player.isAlive() && enemy.isAlive()) {
        console.log(`--- Turn ${turn + 1} ---`)

        if (turn % 2 === 0) {
            player.attack(enemy)
        } else {
            enemyAttack(player, enemy)
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
