const airplane = document.getElementById('airplane');
const manJump = document.getElementById('man-jump');
const canvas = document.getElementById('canvas');
const clouds = document.getElementById('clouds');
const totalClouds = 50;

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

        //set position
        cloud.style.left = random(-50, (-window.innerWidth * 2)) + 'px';
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

    for(let i = 1; 1 <= totalClouds; i++){

        let duration = Math.abs(parseInt(document.getElementById('cloud' + i).style.left) / 100) * 2000;

        // console.log(duration)

        if(duration < 10000){
            duration = random(10000, 15000);
        }

        document.getElementById('cloud' + i)
            .velocity({
                left: window.innerWidth + 500,
            }, {
                duration: duration
        })
    }

}

setClouds()
setBackground()
animate()