<?php
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = '6LddXGchAAAAALjDrWlyp2Av_kO9ufxBAnc7RRF0';
$recaptcha_response = $_POST['recaptcha_response'];

//Make and decode POST request:
$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
$recaptcha = json_decode($recaptcha);
echo $recaptcha->hostname;

//如果驗證成功，就進一步計算使用者分數，官方回饋分數為 0-1，分數愈接近 1 就是正常，低於 0.5 以下就有可能是機器人了
if($recaptcha->success==true){
   if($recaptcha->score >= 0.5) {
       echo 'OK';
   } else {
       echo 'robot?';
   }  
} else {
  echo 'Connection failed   '.$_POST['recaptcha_response'];
}
?>