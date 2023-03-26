<?php
if (isset($_POST['series']) && isset($_POST['color'])) { //series=超寬版系列&color=EPL095布魯克林白橡
    echo '<h1 class="menu_color" style="padding:10px 0 0px 2vw;">'.$_POST['color'].'</h1>';
    
    $jpgs = glob("../../assets/img/floor/".$_POST['series']."/color_card/*.jpg");
    foreach ($jpgs as $jpg) {
        if (strpos($jpg, $_POST['color'])){
            echo '<div id="small_card"> <img id="" src="'.$jpg.'" /></div>';
        }
    }
    echo '<div class="slider-list"><div class="slider-track">';
    $jpgs = glob("../../assets/img/floor/".$_POST['series']."/scene/*.jpg");
    foreach ($jpgs as $jpg) {
        if (strpos($jpg, $_POST['color'])){
            echo '<div class="slide" style="background-image: url('.$jpg.');"></div>';
        }
    }
    
    $jpgs = glob("../../assets/img/floor/".$_POST['series']."/VDS/*.jpg");
    foreach ($jpgs as $jpg) {
        if (strpos($jpg, $_POST['color'])){
            echo '<div class="slide" style="background-image: url('.$jpg.');"></div>';
        }
    }
    echo '</div></div>';
}
?>