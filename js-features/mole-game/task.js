const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.getElementsByClassName('hole');
let countDead = 0;
let countLost = 0;

for (let hole of holes  ) {
    hole.addEventListener('click', function(){
        if (hole.classList.contains('hole_has-mole')) {
            countDead++;
            dead.textContent = countDead;
        } else {
            countLost++;
            lost.textContent = countLost;
        }
        
        if (countLost == 5 ) {
            countDead = 0;
            countLost = 0;
            dead.textContent = countDead;
            lost.textContent = countLost;
            alert('Вы проиграли!');
        }

        if (countDead == 10) {
            countDead = 0;
            countLost = 0;
            dead.textContent = countDead;
            lost.textContent = countLost;
            alert('Вы победили!');
        }

    }); 

}