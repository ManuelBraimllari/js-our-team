const arrTeam = [
    {
        image: `img/wayne-barnett-founder-ceo.jpg`,
        name: 'Wayne',
        lastName: 'Barnett',
        occupation: 'Founder & CEO',
    },
    {
        image: `img/angela-caroll-chief-editor.jpg`,
        name: 'Angela',
        lastName: 'Caroll',
        occupation: 'Chief Editor',
    },
    {
        image: `img/walter-gordon-office-manager.jpg`,
        name: 'Walter',
        lastName: 'Gordon',
        occupation: 'Office Manager',
    },
    {
        image: `img/angela-lopez-social-media-manager.jpg`,
        name: 'Angela',
        lastName: 'Lopez',
        occupation: 'Social Media Manager',
    },
    {
        image: `img/scott-estrada-developer.jpg`,
        name: 'Scott',
        lastName: 'Estrada',
        occupation: 'Developer',
    },
    {
        image: `img/barbara-ramos-graphic-designer.jpg`,
        name: 'Barbara',
        lastName: 'Ramos',
        occupation: 'Graphic Designer',
    },
]

const boxCards = document.querySelector('#cardsContainer');

for (let key in arrTeam) {
    const eleCard = document.createElement('div');
    eleCard.classList.add('col-4', 'd-flex', 'img-fluid', 'g-3');
    const eleCardContent = document.createElement('div');
    eleCardContent.classList.add('img-fluid', 'd-flex', 'flex-column');
    boxCards.append(eleCard);
    eleCard.append(eleCardContent);
    eleCardContent.innerHTML = (`${arrTeam[key].image} ${arrTeam[key].name} ${arrTeam[key].lastName} ${arrTeam[key].occupation}`);
}

console.table(arrTeam);