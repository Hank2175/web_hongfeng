<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require "PHPMailer.php";
require "Exception.php";
require "SMTP.php";
if (isset($_POST['action'])) {
    switch ($_POST['action']){
        case "sendForm":
            try{
                $C_name=$_POST['passName'];
                $C_tel=$_POST['passTel'];
                $C_phone=$_POST['passPhone'];
                $C_email=$_POST['passEmail'];
                $C_message=$_POST['passMsg'];
                $sendsubject = "來自 ".$C_name." 客戶的留言";
                //$body = "姓名: ".$C_name."<br />信箱: ".$C_email."<br />電話: ".$C_tel."<br />手機電話: ".$C_phone."<br />回應內容: ".$C_message;
                date_default_timezone_set('Asia/Taipei');
                $t=time();
                $timeStamp = date("Y-m-d H:i:s",$t);
                $body = '<!DOCTYPE html>
                <html>
                    <head>
                        <style>
                        table{
                          width: 80%;
                          border-collapse: collapse;
                        }
                        table tr{
                          border-bottom: solid 2px white;
                        }
                        table th{
                          position: relative;
                          width: 30%;
                          background-color: #006000;
                          color: white;
                          text-align: center;
                          padding: 10px 0;
                          border-radius: 21px 0 0 21px;
                        }
                        
                        table td{
                          text-align: left;
                          width: 70%;
                          text-align: center;
                          background-color: #eee;
                          padding: 10px 10px;
                          border-radius: 0 21px 21px 0;
                        }
                        
                        .main {
                          margin: 20px auto;
                          item-align: center;
                          width: 80%;
                        }
                        </style>
                    </head>
                <h2>鴻蘴官網表單</h2>
                
                <table>
                  <tr>
                    <th colspan="2" style="border-radius: 21px;">來自 '.$C_name.' 客戶的表單</th>
                  </tr>
                  <tr>
                    <th>信箱</th>
                    <td>'.$C_email.'</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>'.$C_tel.'</td>
                  </tr>
                  <tr>
                    <th>手機</th>
                    <td>'.$C_phone.'</td>
                  </tr>
                  <tr>
                    <th>留言内容</th>
                    <td style="height:200px">'.$C_message.'</td>
                  </tr>
                  <tr>
                    <th>填表時間</th>
                    <td>'.$timeStamp.'</td>
                  </tr>
                </table>
                </body>
                </html>';

                
                $mail = new PHPMailer(true);
                if(!$mail->validateAddress("sendfrom@hongfeng.com.tw")){
                    echo "error";
                }
                $mail->isSMTP();
                $mail->SMTPDebug = 0;
                $mail->SMTPAuth = true; 
                $mail->Host = 'mail.hongfeng.com.tw';
                $mail->Port = 465;  //SSL
                $mail->SMTPAuth = false;
                $mail->SMTPSecure = false;
                #$mail->Port = 587;  //TLS
                $mail->SMTPSecure = 'ssl';
                #$mail->SMTPSecure = 'tls';
    
                $mail->CharSet = "utf-8";                       //郵件編碼
                $mail->Username = "sendfrom@hongfeng.com.tw"; //Gamil帳號
                $mail->Password = "Cheng2175";                 //Gmail密碼 53QI0x9mhb
                $mail->From = "sendfrom@hongfeng.com.tw";        //寄件者信箱
                $mail->FromName = "鴻蘴官網，客戶回饋表單";                  //寄件者姓名
                $mail->Subject = $sendsubject; //郵件標題
                $mail->Body = $body;
                $mail->IsHTML(true);                             //郵件內容為html
                $mail->AddAddress("h6796028@ms29.hinet.net");            //收件者郵件及名稱
                
                $mail->send();
                echo "OK";
            }
            catch (phpmailerException $e) {
                echo $e->errorMessage();  //PHPMailer error messages
            } 
            catch (Exception $e) {
                echo "Error: " . $mail->ErrorInfo;
            }
    }
}
?>