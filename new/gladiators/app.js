let gladiatorsCount = +prompt();
let gladiators = [];

function generateGladiators (){
    for(let i = 0; i < gladiatorsCount; i++){
        gladiators.push({
            id: i + 1,
            health: Math.round(Math.random() * 20 + 80),
            power: Math.round(Math.random() * 10 + 5),
        })
    }
}

function startFight (){
    let liveGladiators = gladiators;
    while (liveGladiators.length > 1) {
        let randomGladiators = selectRandomGladiators();
        randomGladiators[0].health -= randomGladiators[1].power;
        if(randomGladiators[0].health > 0){
            randomGladiators[1].health -= randomGladiators[0].power;
        }
        liveGladiators = gladiators.filter(item => item.health > 0);
    }
    alert(`Winner ${liveGladiators[0].id}`)
}

function selectRandomGladiators(){
    let randomGladiator1, randomGladiator2;

    do{
        randomGladiator1 = gladiators[Math.round(Math.random() * (gladiators.length - 1))];
        randomGladiator2 = gladiators[Math.round(Math.random() * (gladiators.length - 1))];
    }while (randomGladiator1.id === randomGladiator2.id || randomGladiator1.health <= 0 || randomGladiator2.health <= 0);

    return [randomGladiator1, randomGladiator2]
}

generateGladiators();
startFight();
