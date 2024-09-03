const CARD_STACK_COUNT = 6;

const GameDataInsights = {
    log(data) {


        const percentage = (amount, total) => {
            let val = amount/total;
            return `${Math.floor(val * 1000)/10}%`;
        }

        console.log('================')
        console.log('GameDataInsights')
        console.log(data)
        console.log('');
        console.log(`Asteroid Card Resource Spread: CARD STACK COUNT ${CARD_STACK_COUNT}`);
        

        let resourceCounts = {};
        let total = 0;
        data.cards.forEach(asteroidCard => {
            asteroidCard.counts.forEach(count => {
                if (resourceCounts[count.id] === undefined) {
                    resourceCounts[count.id] = 0;
                }
                resourceCounts[count.id] += count.count;
                total += count.count;
            });
        });
        data.resources.forEach(resource => {
            console.log(resource.id, resource.name, `${resourceCounts[resource.id]}/${total}`, percentage(resourceCounts[resource.id], total));
        });
        console.log('');
        console.log('Ship Card Resource Spread');
        resourceCounts = {};
        let archetypeCounts = {};
        data.shipCardArchetypes.forEach((shipCardArchetype) => {
            archetypeCounts[shipCardArchetype.id] = 0;
        });
        total = 0;
        data.shipCards.forEach(shipCard => {
            archetypeCounts[shipCard.archetype.id] ++;
            shipCard.costs.forEach(cost => {
                if (resourceCounts[cost.id] === undefined) {
                    resourceCounts[cost.id] = 0;
                }
                resourceCounts[cost.id] += cost.cost;
                total += cost.cost;
            });

        });
        data.resources.forEach(resource => {
            console.log(resource.id, resource.name, `${resourceCounts[resource.id]}/${total}`, percentage(resourceCounts[resource.id], total))
        });

        console.log('');
        console.log('Ship Card Archetype Count');
        data.shipCardArchetypes.forEach((shipCardArchetype) => {
            console.log(shipCardArchetype.count, shipCardArchetype.label, archetypeCounts[shipCardArchetype.id])
        })

        console.log('================')
    }
}

export default GameDataInsights;