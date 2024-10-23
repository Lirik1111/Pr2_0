function getRow() {
    let row = prompt("Enter you row", '');
    let a = prompt('Enter letter' , '');
    let count1 = 0;
    let rowl = row.replaceAll(' ' , '').toLowerCase();
    for(let i of rowl) {
        if(i === a) {
            count1++;
        }
    }
        alert(`У вашому рядку  літера  ${a} , використовується стільки разів ${count1}`)
        document.getElementById("FR").innerHTML = `У вашому рядку  літера  ${a} , використовується стільки разів ${count1}`;
}
function getTel1() {
    let Tel= prompt("Enter you Tel", '');
    let st = (Tel.slice(0,3))
    let thr = (Tel.slice(3,6))
    let thr3 = (Tel.slice(6,9))
    let for4 = (Tel.slice(9,13))
        alert(`Ваш номер  ${st} (${thr}) ${thr3}-${for4}`)
        document.getElementById("FR").innerHTML = `Ваш номер  ${st} (${thr}) ${thr3}-${for4}`;
}
function getTel2() {
    let Tel= prompt("Enter you Tel", '');
    let thr = (Tel.slice(1,4))
    let thr3 = (Tel.slice(4,7))
    let tw2 = (Tel.slice(7,9))
    let tw22 = (Tel.slice(9,11))
        alert(`Ваш номер  +38 (${thr}) ${thr3}-${tw2}-${tw22}`)
        document.getElementById("FR").innerHTML = `Ваш номер  ${st} (${thr}) ${thr3}-${for4}`;
}
function getTel3() {
    let Tel= prompt("Enter you Tel", '');
    let thr = (Tel.slice(0,3))
    let thr3 = (Tel.slice(3,6))
    let tw2 = (Tel.slice(6,8))
    let tw22 = (Tel.slice(8,10))
        alert(`Ваш номер  +38 (${thr}) ${thr3}-${tw2}-${tw22}`)
        document.getElementById("FR").innerHTML = `Ваш номер  ${st} (${thr}) ${thr3}-${for4}`;
}
function gettestTel() {
    let Tell = prompt("Номер для перевірки",'')
    const Number = /^(?:\+?80[0-9]{9}|80[0-9]{9}|063[0-9]{7})$/;
    if (Number.test(Tell)){
        alert("Номер вірний ")
    }
    else {
        alert("Номер не вірний")
    }

}

