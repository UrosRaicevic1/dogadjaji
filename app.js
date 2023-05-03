const broj1 = document.querySelector('#br1')
const broj2 = document.querySelector('#br2')
const lst = document.querySelector('#lst')
const dugme = document.querySelector('#dugme')


dugme.addEventListener('click', klikDugmeta)

function klikDugmeta(e) {
    let b1 = Number(broj1.value)
    let b2 = Number(broj2.value)
    let ind = lst.selectedIndex
    let rez = 0
    if (ind == 0) {
        rez = b1 + b2
    } 
    else if (ind == 1) {
        rez = b1 - b2
    } 
    else if (ind == 2) {
        rez = b1 * b2
    } 
    else {
        rez = b1/b2
    }
    console.log(e.target)
    alert('Rezultat je ' + rez) 
}




let slike = ['aaa.png', 'bbb.gif', 'ccc.gif', 'ddd.png']
let trenutni = 0

const mojaSlika = document.querySelector('img')

document.addEventListener('keyup', (ev) => {
    if (ev.key == 'ArrowRight'){
        console.log(ev.target)
        trenutni++
        mojaSlika.src = slike[trenutni]
        mojaSlika.setAttribute('src', slike[trenutni])
    }
})


class Poklon {
    constructor(podloga, slika) {
        this.podloga = podloga
        let x = document.createElement('img')
        x.setAttribute('src', slika)
        this.slika = x
        this.podloga.append(x)
        this.klik = this.klik.bind(this)
        this.slika.addEventListener('click', this.klik)
    }

    aa() {
        console.log(this.slika)
    }

    klik () {
        alert("aaaa")
        this.slika.setAttribute('src', "bbb.gif")
        this.slika.removeEventListener('click', this.klik)
    }

}


const podloga = document.querySelector('.oop')
let prvi = new Poklon(podloga, 'aaa.png')
prvi.aa()