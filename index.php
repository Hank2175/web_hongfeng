<!DOCTYPE html>
<html lang="tw">
    <head>
        <title>鴻蘴 - EGGER超耐磨地板</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="Description" content="每日休息放鬆的「家」，由鴻蘴帶給你 ，EGGER 超耐磨地板最「自然」·「舒適」的感覺。">
        <meta name="keywords" content="鴻蘴超耐磨地板 鴻蘴 超耐磨地板 EGGER EGGER地板 EGGER超耐磨地板">
        <meta property="og:description" content="每日休息放鬆的「家」，由鴻豐帶給你 ，EGGER 超耐磨地板最「自然」·「舒適」的感覺。">
        <meta property="article:modified_time" content="2022-08-29T09:13:48+00:00">
        <meta property="og:title" content="鴻蘴 - EGGER超耐磨地板">
        <meta property="og:site_name" content="鴻蘴 - EGGER超耐磨地板">
        <meta property="og:url" content="https://www.hongfeng.com.tw">

        <!--========== BOX ICONS ==========-->
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>

        <!--========== CSS ==========-->
        <link rel="stylesheet" href="assets/css/styles.css">
        
        <!--========== JS ==========-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        
        <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
        <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
        
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-material-ui/material-ui.css">
        
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
    </head>
    <body>
        <!--========== SCROLL TOP ==========-->
        <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bx-chevron-up scrolltop__icon'></i>
        </a>

        <!--========== HEADER ==========-->
        <header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="https://www.hongfeng.com.tw/" class="nav__logo"><h2>HONG FENG</h2></a>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">關於鴻蘴</a></li>
                        <li class="nav__item"><a href="#spec" class="nav__link">EGGER地板特色</a></li>
                        <li class="nav__item"><a href="#menu" class="nav__link">型錄簡圖</a></li>
                        <li class="nav__item"><a href="https://www.hongfeng.com.tw/assets/img/floor/for_print/2022_11_12_menu_for_custom.pdf" class="nav__link" target="_blank">原廠型錄</a></li>
                        <li class="nav__item"><a class="nav__link" id="contactus">聯絡我們</a></li>
                    </ul>
                </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <!--========== HOME ==========-->
            <section id="home" class="section" style="padding-top:0; background-color: #CED6D9;">
                <div class="home__container bd-grid slider" id="home_img" style="gap:0rem;">
                    <div id="browser_type" style="display:none;"></div>
                    <div class="slider-list">
                    <?php
                        if(strpos($_SERVER['HTTP_USER_AGENT'], "Chrome")){
                            $type = true;
                        }else{
                            $type = false;
                        }
                        if($type){
                            $jpegs = glob("assets/img/home_img/*.webp");
                        }else{
                            $jpegs = glob("assets/img/home_img/*.png");
                        }
                        echo '<div class="slider-track">';
                        for($x = 0; $x < count($jpegs); $x++){
                            echo '<div class="slide" style="background-image: linear-gradient(180deg, rgba(0,0,0,0.49933476808692223) 0%, rgba(202,202,202,0.24443280730260852) 65%),url('.$jpegs[$x].');"></div>';
                        }
                        echo '</div>';
                    ?>
                    </div>
                    <div class="slider-arrows">
                        <a id="prev"></a>
                        <a id="next"></a>
                    </div>
                    <div class="home_data">
                        <img src="assets/img/logo.png" alt="鴻蘴-LOGO" class="home__img">
                        <h2 class="home__subtitle">空間 <a style="color:#000000">X</a> 美學的最佳選擇 <br> EGGER <a style="color:#000000">超耐磨地板</a></h2>
                        <a href="#" id="home_read_more" class="button">了解更多</a>
                    </div>
                </div>
                
            </section>
            
            <!--========== ABOUT ==========-->
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data" data-aos="fade-right">
                        <span class="about__initial"><h1>關於鴻蘴</h1><br><i>About Hong Feng</i></span>
                        <h2 class="section-title about__initial">The Best Floor</h2>
                        <p class="about__description">鴻蘴 為德國 <a style="color:#d30b2c">EGGER</a> 超耐磨地板經銷商<br>
                            對 <a style="color:#d30b2c">EGGER</a> 認識超過20年<br>
                            深受它的品質，紋理以及花色有所着迷<br><br>
                            我們帶着這份期許 將 <a style="color:#d30b2c">EGGER</a> 所追求的<br><a class="section-subtitle">&emsp;讓人們在家中感到舒適溫暖</a><br>
                            <a style="color:#000000">分享給每一位客戶<br>為你我的生活質感 更進一步</a></p>
                    </div>
                    <?php
                        if($type){
                            echo '<img src="assets/img/forest.webp" alt="鴻蘴-關於" class="about__img">';
                        }else{
                            echo '<img src="assets/img/forest.png" alt="鴻蘴-關於" class="about__img">';
                        }
                    ?>
                    
                </div>
            </section>

            <!--========== spec ==========-->
            <section class="spec section bd-container" id="spec" style="padding-top:4.5em; height:auto;">
                <span class="section-subtitle" data-aos="fade-down"
                                               data-aos-easing="linear"
                                               data-aos-duration="500">SPEC
                                               <h2 class="section-title"><a style="color:#d30b2c">EGGER</a> amazing spec</h2></span>
                <div class="spec__container  bd-grid">
                    <div class="spec__content" data-aos="zoom-out" data-aos-duration="700">
                        <?php
                            if($type){
                                echo '<img class="spec__img" src="assets/img/spec/72H_water_resistant.webp" alt="鴻蘴_EGGER-抗水標章"/>';
                            }else{
                                echo '<img class="spec__img" src="assets/img/spec/72H_water_resistant.png" alt="鴻蘴_EGGER-抗水標章"/>';
                            }
                        ?>
                        <h3 class="spec__title">優秀的防水性能</h3>
                        <p class="spec__description">具有 <a style="color:#384c93">AQUA+</a> 的超耐磨地板<br>適合大多數空間類型<br>蒸汽拖適用</p>
                    </div>

                    <div class="spec__content" data-aos="zoom-out" data-aos-duration="900">
                        <?php
                            if($type){
                                echo '<img class="spec__img" src="assets/img/spec/andrew-coelho.webp" alt="鴻蘴_EGGER-E1標章"/>';
                            }else{
                                echo '<img class="spec__img" src="assets/img/spec/andrew-coelho.png" alt="鴻蘴_EGGER-E1標章"/>';
                            }
                        ?>
                        <h3 class="spec__title">無毒</h3>
                        <p class="spec__description">所有 <a style="color:#d30b2c">EGGER</a> 超耐磨地板<br>甲醛指標<br>皆符合 <a style="color:#384c93">E1</a> 級的規定<br>
                        甚至更加嚴苛的要求<br><br>VOC揮發性有機化合物測試<a style="color:#384c93">A+級</a></p>
                    </div>

                    <div class="spec__content" data-aos="zoom-out" data-aos-duration="1100">
                        <?php
                            if($type){
                                echo '<img class="spec__img" src="assets/img/spec/clic_it.webp" alt="鴻蘴-EGGER專利卡扣"/>';
                            }else{
                                echo '<img class="spec__img" src="assets/img/spec/clic_it.png" alt="鴻蘴-EGGER專利卡扣"/>';
                            }
                        ?>
                        <h3 class="spec__title">專利卡扣</h3>
                        <p class="spec__description"><a style="color:#d30b2c">EGGER</a> 所設計的專利卡扣<br>讓施工人員更易於施作</p>
                    </div>
                    
                    <div class="spec__content" data-aos="zoom-out" data-aos-duration="1300">
                        <?php
                            if($type){
                                echo '<img class="spec__img" src="assets/img/spec/antibacterial.webp" alt="鴻蘴-EGGER抗菌"/>';
                            }else{
                                echo '<img class="spec__img" src="assets/img/spec/antibacterial.png" alt="鴻蘴-EGGER抗菌"/>';
                            }
                        ?>
                        <h3 class="spec__title">遠離細菌</h3>
                        <p class="spec__description">採用美耐皿表面處理<br> <a style="color:#d30b2c">EGGER</a> 的超耐磨地板<br>可以有效抗菌</p>
                    </div>
                </div>
            </section>

            <!--========== MENU ==========-->
            <section class="menu section bd-container" id="menu" style="min-height:100vh; height:100%;padding-top:6em;margin-bottom:3em">
                <span class="section-subtitle" data-aos="zoom-in" data-aos-duration="500">鴻蘴型錄</span>
                <h2 class="section-title" data-aos="zoom-in" data-aos-duration="700">EGGER超耐磨地板系列</h2>
                <div class="menu__container bd-grid">
                    <?php
                        $AOS_duration = 700;
                        $folders = glob("assets/img/floor/*");
                        foreach ($folders as $folder) { //strpos($folder, '小圖示') !== false
                            if (!strpos($folder, '小圖示') && !strpos($folder, 'for_print')) { 
                                $layout='<div class="menu__content" data-aos="zoom-out" data-aos-duration="'.$AOS_duration.'">';
                                if($type){
                                    $jpegs = glob($folder."/color_card/*.webp");
                                }else{
                                    $jpegs = glob($folder."/color_card/*.jpg");
                                }
                                $img_source = $jpegs[rand(0,count($jpegs)-1)];
                                $marginleft = -500;
                                $str_series = explode("/",$folder);
                                $str_name = explode("/",$img_source);
                                $layout.='<a href="https://www.hongfeng.com.tw/menu/'.$str_series[count($str_series)-1].'"><div class="hover_img"><h2 class="menu__preci" style="font-size: 20px;margin-top: 160px;">'.$str_series[count($str_series)-1].'<br>為你推薦：'.explode(".",$str_name[count($str_name)-1])[0].'</h2></div></a>';
                                $layout.='<img src="'.$img_source.'" alt="鴻蘴_EGGER-'.$str_series[count($str_series)-1].'" class="menu__img">';
                                $layout.='<h3 class="menu__name" style="padding-left:15px;">'.$str_series[count($str_series)-1].'</h3>';
                                if($str_series[count($str_series)-1] == "超寬版系列"){
                                    $layout.='<span class="menu__detail" style="padding-left:15px;">1292mm * 327mm * 8mm</span>';
                                }
                                else{
                                    $layout.='<span class="menu__detail" style="padding-left:15px;">1292mm * 193mm * 8mm</span>';
                                }
                                $layout.='<a href="https://www.hongfeng.com.tw/menu/'.$str_series[count($str_series)-1].'" class="button menu__button"><i class="bx">了解更多</i></a>';
                                $layout.='</div>';
                                echo $layout;
                                $AOS_duration += 200;
                            }
                        }
                    ?>
                </div>
            </section>
        </main>

        <!--========== FOOTER ==========-->
        <footer class="footer bd-container">
            <div class="footer__container bd-grid">
                <div class="footer__content" data-aos="fade-left" data-aos-duration="300">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1808.458226536019!2d121.30941350000002!3d24.968956999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x34681ed7f147c887%3A0x92270c9d180f9f6e!2z5aSn5by36YeMIDMzNOahg-WckuW4guWFq-W-t-WNgA!3m2!1d24.968739!2d121.30940749999999!5e0!3m2!1szh-TW!2stw!4v1660703102878!5m2!1szh-TW!2stw" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                <div class="footer__content" data-aos="fade-left" data-aos-duration="900">
                    <h3 class="footer__title">地址</h3>
                    <ul>
                        <li><a class="footer__link" href="https://reurl.cc/O40EXg">
                        桃園市 Taoyuan City<br>
                        八德區 Bade district<br>
                        東勇街522號<br>（560巷進入，備停車場）<br>No. 522, Dongyong St.</a></li>
                    </ul>
                </div>
                
                <div class="footer__content" data-aos="fade-left" data-aos-duration="600">
                    <h3 class="footer__title">資訊</h3>
                    <ul>
                        <li><a href="https://www.hongfeng.com.tw/menu/" class="footer__link">鴻蘴型錄</a></li>
                        <li>電子郵件</li>
                        <li><a class="footer__link" href="mailto:h6796028@ms29.hinet.net">h6796028@ms29.hinet.net</a></li>
                        <li><a class="footer__link" href="mailto:h6796028@gmail.com">h6796028@gmail.com</a></li>
                        <li>聯絡電話</li>
                        <li><a class="footer__link" href="tel:+886937964770">0937964770</a></li>
                        <li><a class="footer__link" href="tel:+88633635085">033635085</a></li>
                    </ul>
                </div>
            </div>
            <br><br>
            <p class="footer__buttom">&#169; 2022 HONG FENG. All right reserved</p>
        </footer>

        <!--========== MAIN JS ==========-->
        <script src="assets/js/main.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-429KTVWFNK"></script>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LRL3L9EVXD"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-LRL3L9EVXD');
        </script>
    </body>
</html>