function closestEnemy(charPosition,...enemiesPositions){
    //closest --> enemigo mas cercano hasta ese momento
    let closest = undefined;
    //La distancia minima observada hasta ese momento
    let minDistance = Number.POSITIVE_INFINITY;
    for(let enemy of enemiesPositions){
        let distance = Math.abs( enemy[0] - charPosition[0] ) 
            + Math.abs( enemy[1] - charPosition[1] );
        if(distance < minDistance){
            closest = enemy;
            minDistance = distance;
        }
    }
    return closest;
}

console.log( closestEnemy([0,0], [5,6], [4,8], [-1,4] ) );
// enemiesPosition = [ [5,6], [4,8], [-1,4]  ];
console.log( closestEnemy( [0,0], [4,5], [9,9] ) );
//enemiesPosition = [ [4,5], [9,9] ]
var player = {x:0,y:0};