let ulang = true;
while (ulang){
let mulai = true;

    // player
    let player = prompt('Silahkan Plih antara gunting, kertas, batu.');

    //komputer
    let komputer = Math.round(Math.random() * 10);


    if( komputer < 4){
        komputer = 'gunting';
    }else if ( komputer > 4 && komputer < 6 ){
        komputer = 'kertas';
    } else{
        komputer = 'batu';
    }
console.log(komputer);
    

// kondisi
let hasil = '';
if ( player == komputer){
    hasil = 'Seri';
} else if(player == 'gunting'){
    hasil = ( komputer == 'kertas') ? 'MENANG' : 'KALAH';
}else if( player == 'kertas'){
    hasil = (komputer == 'gunting') ? 'KALAH' : 'MENANG';
}else {
    hasil = 'FLISS KAMU SALAH PILIH'
}

alert('KAMU PILIH : ' + player + '\nKOMPUTER PILIH : ' + komputer + '\n HASILNYA ADALAH....' + hasil);

ulang = confirm('Lagi ga bray ?');

if (ulang == true){
    alert('Lanjut');
}else{
    alert('TENGS DAH MAIN');
}
}
