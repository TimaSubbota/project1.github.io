var blocks = ["img/apple.png", "img/burger.jpg", "img/cartouka.png", "img/pizza.jpg", "img/cola.png", "img/hotdog.jpg", "img/banan.jpg", "img/gruxa.png", "img/moloko.jpg"]
var pole_blocks = [];
var pole_barrier = [];
var steps = 0;
var levls = 0;
var rows = 1;
var many = [];
var hearts = 5;
var bonus = 0;
pole0_0.src = "IMG/ilons.png"
//загружаем 5 сердец
for (i = 1; i < 6; i++) {
    idImg = document.getElementById('heart' + i);
    idImg.src = "img/heart_empty.png";
}
//генерируем ландшафт
pole_blocks[0] = 1;
pole_blocks[16] = 1;
var indBlock_old = 1;
for (i = 1; i < 16; i++) {
    indBlock = Math.floor(Math.random() * 1)
    while (indBlock == indBlock_old) {
        indBlock = Math.floor(Math.random() * 1)
    }
}
//генерация еды
function eda() {
    i = Math.floor(Math.random() * 9 + 1)
    g = Math.floor(Math.random() * 16 + 1)
    idImg = document.getElementById('pole' + i + '_' + g)
    idImg.src = blocks[Math.floor(Math.random() * 9)]
}
eda();
function ilon_move(event) {

    switch (event.key) {
        case 'ArrowRight':
            idImg = document.getElementById('pole' + levls + '_' + (steps + 1));
            switch (idImg.src) {
                case 'file:///Z:/Lider-2022/igrra/img/burger.jpg':
                    bonus++;
                    idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_full.png';
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/apple.png':
                    idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_empty.png';
                    bonus--;
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/cartounka.png':
                    bonus++;
                    idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_full.png';
                    
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/pizza.jpg':
                    bonus++;
                idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_full.png';
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/cola.ppg':
                    bonus++;
                idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_full.png';
                    
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/hotdog.jpg':
                    bonus++;
                idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_full.png';
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/moloko.jpg':
                    idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_empty.png'
                    bonus--;
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/burger.jpg':
                    bonus++;
                idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_full.png';
                    break;
                case 'file:///Z:/Lider-2022/igrra/img/banan.jpg':
                    idImg=document.getElementById('heart'+ bonus);
                    idImg.src='img/heart_empty.png'
                    bonus--;
                    break;
            }
            if (steps <= 15) {
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "img/spacer.gif";
                steps++;
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "IMG/ilons.png"
            }
            break;

        case 'ArrowUp':
            if (levls > 0) {
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "img/spacer.gif";
                levls--;
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "IMG/ilons.png"
            }
            break;
        case 'ArrowDown':
            if (levls <= 3) {
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "img/spacer.gif";
                levls++;
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "IMG/Ilons.png"
            }
            break;
        case 'ArrowLeft':
            if (steps > 0) {
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "img/spacer.gif";
                steps--;
                idImg = document.getElementById('pole' + levls + '_' + steps);
                idImg.src = "IMG/Ilons.png"
            }
            break;
    }
    
}
Interval = setInterval(eda, 1000)
document.addEventListener('keydown', ilon_move)