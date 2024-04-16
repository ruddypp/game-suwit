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
let hasil=''; 
if ( player == komputer){
    hasil = 'HASIL SERI';
} else if(player == 'gunting'){
    if(komputer == 'kertas' ){
        hasil = 'KAMU MENANG!';
    }else{
        hasil = 'KOMPUTER MENANG!'
    }
} else if( player == 'kertas'){
    if( komputer == 'batu'){
        hasil = 'KAMU MENANG!';
    }else{
        hasil = 'KOMPUTER MENANG!';
    }
}else{
    hasil = 'FLIS KAMU PILIH TIGA ITU AJA!!!!!!'
}

alert('KAMU PILIH : ' + player + '\nKOMPUTER PILIH : ' + komputer + '\n HASILNYA ADALAH....' + hasil);

confirm('Lagi ga bray ?');

alert('TENGS DAH MAIN');

