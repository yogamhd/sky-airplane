const airplane = document.getElementById('airplane');

function animate() {
    airplane
    .velocity({
        top: '100px',
    },{
        duration: 7000,
    })
}

animate()