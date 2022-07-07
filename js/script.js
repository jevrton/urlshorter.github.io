function TestarLink() {
    let link = document.getElementsByClassName('input-component')[0].value;

    if (link.length == 0){;
        alert('The input cannot be empty!');
    }

    window.location.href = './waiting.html'
}