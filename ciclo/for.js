const heroes= ['Batman','Superman','Thor','Spiderman','Deadpool']

for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    console.log(element);    
}

console.warn('For in')

for (const i in heroes) {
   console.log(heroes[i]);
}

console.warn('For of')
for (const heroe of heroes) {
    console.log(heroe);
}