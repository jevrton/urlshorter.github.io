function TestarLink() {
    let link = document.getElementsByClassName('input-component')[0].value;

    if (link.length == 0){;
        alert('The input cannot be empty!');
    }

    const audio = new Audio('../sound/waiting.mp3');
    audio.play();
    window.location.href = './waiting.html'
}