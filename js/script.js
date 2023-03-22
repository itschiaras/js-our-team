/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

// creo l'array di oggetti

const team = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: './img/wayne-barnett-founder-ceo.jpg'

    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: './img/angela-caroll-chief-editor.jpg'

    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: './img/walter-gordon-office-manager.jpg'

    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: './img/angela-lopez-social-media-manager.jpg'

    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: './img/scott-estrada-developer.jpg'

    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: './img/barbara-ramos-graphic-designer.jpg'

    },

]

// prendo il div dentro a cui inserirò le card con le info dei membri del team
const row = document.querySelector('.row');

// creo una variabile inizialmente vuota dove andrò in seguito a salvare il mio template

let rowTpl = '';

// ciclo for per inserire ogni valore di ogni membro nel template
for (let i = 0; i < team.length; i++ ) {
    let member = team[i];
    const tpl = `<div class="col">
        <div class="card">
            <img src="${member.image}" alt="" class="">
            <div class="card-body text-center">
                <div>${member.name} ${member.surname}</div>
                <div>${member.role}</div>
            </div>
        </div>
    </div>`

    rowTpl += tpl;
}

//aggiungo il template all'html
row.innerHTML = rowTpl;
