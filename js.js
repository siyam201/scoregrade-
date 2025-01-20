function gradeScore() {
    let scor = document.getElementById('scoreInput').value;
    let g = ''; 
    let f = '';
    if (scor >= 80 && scor <= 100) {
        g = 'PASSDE: A';
    } else if (scor >= 50 && scor <= 79) {
        g = 'PASSDE: B';
    } else if (scor >= 33 && scor <= 49) {
        g = 'PASSDE: C';
    } else if (scor >= 0 && scor <= 32) {
        f = 'FALL: F';
    } else {
        f = 'Invalid Score';
    }
    document.getElementById('f').innerText = f;
    document.getElementById('result').innerText = g;
}
