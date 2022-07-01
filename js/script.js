const airplane = document.getElementById('airplane');
const manJump = document.getElementById('man-jump');
const canvas = document.getElementById('canvas');
const clouds = document.getElementById('clouds');
const totalClouds = 10;
const total = 20;

//random number between min and max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setClouds(){
    for(let i = 1; 1 <= totalClouds; i++){
        let cloud = document.createElement('div');
        cloud.id = 'cloud' + i;
        cloud.classList.add('cloud' + random(1, 5));
        // cloud.classList.add('cloud' + i);
        clouds.appendChild(cloud);

        cloud.style.left = random(10, window.innerWidth) + 'px';
        cloud.style.left = random(0, window.innerHeight / 2) + 'px';
    }
}

function setBackground() {
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight * 2 + 'px';
    canvas.style.top = -window.innerHeight + 'px';
}

function animate() {
    airplane
    .velocity({
        top: '0px',
        left: '40%',
        transform: ["rotate(10deg)","rotate(0deg)"]
    },{
        duration: 7000,
    })

    .velocity({
        // top: '0px',
        left: '30%',
        transform: ["rotate(0deg)","rotate(10deg)"]
    },{
        duration: 7000,
    })

    .velocity({
        top: '100px',
        left: '-500px',
        transform: ["rotate(-5deg)","rotate(0deg)"]
    },{
        duration: 15000,
    })

    manJump
        .velocity({
            opacity: 1,
        }, {
            delay: 13000,
            duration: 1000
        })

        .velocity({
            top: window.innerHeight + 100,
        }, {
            queue: false,
            delay: 13000,
            duration: 10000
        })

    canvas
        .velocity({
            top: '0',
        }, {
            queue: false,
            duration: 7000,
        })

}

setClouds()
setBackground()
animate()