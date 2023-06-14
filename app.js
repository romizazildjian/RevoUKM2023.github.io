let passwordSaya = prompt("Masukkan password Anda:")

if (passwordSaya.length >= 8){
    if (passwordSaya.indexOf !== -1){
        alert("Password Created!")
    }else{
        alert("Password invalid!")
    }
}else{
    alert("Password must contain at least 8 character.")
}