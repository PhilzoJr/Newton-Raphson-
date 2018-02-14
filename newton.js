
//Author: Maxxi Phillip Anekwe
//Implementation of Newton & Raphson's kth root formular: Xn+1= (1/k){(k-1)Xn + C/Xn^(k-1)}

// Question: k=3, c=4, Xo=1
let k
let c
let x
let solns = [] //values array

function newton_f(k, c, x) {
    let p = 1 / k
    let y = k - 1
    let b = Math.pow(x, y)
    return p * (y * x + c / b)
}

window.calculate = () => {
    k = document.getElementById('k').value;
    c = document.getElementById('c').value;
    x = document.getElementById('x').value;
    let csl = document.getElementById('console')

    for (var i = 0; i < k; i++) {
        if (solns.length == 0) {
            solns.push(newton_f(k, c, x))
            continue
        }
        solns.push(newton_f(k, c, solns[solns.length - 1]))
    }

    let html = '<b><i>Variables</i></b> : [<b>Xo:</b> ' + x + ', <b>C:</b> ' + c + ', <b>K:</b> ' + k + ']<br/>'
    html += '----------------------<br/>------ Results ------- <br />'
    solns.forEach((i, s) => {
        s++
        html += '<b>X' + s + ':</b> <i>' + i + '</i><br /> '
    })
    csl.innerHTML = ''
    csl.innerHTML = html
    solns = []
    delete k
    delete c
    delete x
}