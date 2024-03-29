/*
Úkol:
=====
Tvoříš galerii obrázků. Seznam obrázků máš uložený v poli obrazky[].
Z celé galerie je vidět vždy jen jeden obrázek.
Na stránce jsou tlačítka "Předchozí" a "Další"- při stisknutí tlačítka
zobraz předchozí/následující obrázek (nahraď zdroj "src" obrázku
jménem nového obrázku).

Na stránce je také prvek <div id="pocitadlo", do kterého vždy vypiš,
název a pořadí obrázku, na kterém se nacházíš. Např. "ovce.jpg - 3 / 5".
Mysli na to, že člověk a JavaScript přemýšlí o "prvním" obrázku
každý trochu jinak :)


Bonusový úkol:
==============
Doplň logiku, která zajistí, že po poslední fotce následuje znovu
ta první a před první fotkou je znovu ta poslední. Tzn. galerii lze
procházet v kruhu "dokola".

Tlačítka předchozí/následující nahraď malým náhledem dalšího/
předcházejícího obrázku. Všechny tři obrázky (velký aktuální a malý
předchozí/následující se samozřejmě budou měnit adekvátně tomu, jak procházíš
galerií.


Extra bonus:
============================
Na konec stránky přidej proužek, kde budou malé náhledy všech obrázků
v galerii. Aktuální obrázek bude vždy nějakým způsobem zvýrazněn.

Co musíš udělat:
- doplnit do HTML značku, do které pak JavaScriptem vygeneruješ seznam obrázků
- trochu CSS, aby to nevypadalo úplně příšerně. Pokud CSS neovládáš tak dobře,
netrap se tím - jde nám hlavně o JavaScript. Případně se zeptej na Facebooku
a my ti rádi připravíme CSS na míru tvému řešení úkolu.
- při startu stránky musíš do svého nového HTML prvku vygenerovat seznam
všech obrázků v galerii
- aktuální obrázek zvýraznit - např. přidáním nějaké třídy s červeným rámečkem
nebo něco podobného
- při změně obrázku odstranit zvýraznění z předchozího obrázku a zvýraznit nový
*/
let body = document.querySelector("body");
let sipkaVpravo = document.querySelector("#sipka-vpravo");
let sipkaVlevo = document.querySelector("#sipka-vlevo");
let pocitadlo = document.querySelector("#pocitadlo");
let foto = document.querySelector("#foto");
let nahled = document.querySelector("#nahled");

let obrazky = [
    'kocka.jpg',
    'opice.jpg',
    'ovce.jpg',
    'pes.jpg',
    'sova.jpg',
    'zajic.jpg'
];

let index = 0
foto.src = "obrazky/kocka.jpg"
pocitadlo.innerHTML += `<p> ${obrazky[index]} ${index + 1} / ${obrazky.length} </p>`

nahled.addEventListener("load", zobrazNahled());
function zobrazNahled () { 
    for (let i = 0; i < obrazky.length; i++) {
        let source = "obrazky/" + obrazky[index]
        nahled.innerHTML += `<img id="foto-nahled" src="${source}" alt="${obrazky[index]}" width="100" height="80">`;
        index += 1
    }
}

sipkaVpravo.addEventListener("click", changeFoto1)
function changeFoto1 (){
        index += 1;
            if (index > 5) {
                index = 0
            }
        let source = "obrazky/" + obrazky[index]
        pocitadlo.innerHTML = `<p> ${obrazky[index]} ${index + 1} / ${obrazky.length} </p>`
        
        foto.src = source
    console.log(index)
}

sipkaVlevo.addEventListener("click", changeFoto2)
function changeFoto2 (){
        index -= 1;
            if (index < 0) {
                index = 5
            }
        let source = "obrazky/" + obrazky[index]
        pocitadlo.innerHTML = `<p> ${obrazky[index]} ${index + 1} / ${obrazky.length} </p>`
        foto.src = source
    console.log(index)
}