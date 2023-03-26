<!DOCTYPE html>
<html lang="tw">
    <head>
        <title>鴻蘴 - EGGER型錄 - 平口系列</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="Description" content="鴻蘴超耐磨地板型錄 鴻蘴型錄 超耐磨地板型錄 EGGER超耐磨地板 EGGER木地板 平口系列">
        <meta name="keywords" content="鴻蘴超耐磨地板 鴻蘴型錄 鴻蘴木地板 EGGER超耐磨地板 EGGER-平口系列">
        <meta property="og:description" content="鴻蘴超耐磨地板型錄 鴻蘴型錄 超耐磨地板型錄 EGGER超耐磨地板 EGGER木地板 平口系列">
        <meta property="og:title" content="鴻蘴 - EGGER型錄 - 平口系列">
        <meta property="og:site_name" content="鴻蘴 - EGGER型錄 - 平口系列">
        <link rel="canonical" href="https://www.hongfeng.com.tw/menu/平口系列">
        <meta property="og:url" content="https://www.hongfeng.com.tw/menu/平口系列">

        <!--========== BOX ICONS ==========-->
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>

        <!--========== CSS ==========-->
        <link rel="stylesheet" href="../css/styles.css">
        
        <!--========== JS ==========-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        
        <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
        <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
        
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-material-ui/material-ui.css">
        <script src="../js/getDemo.js"></script>
    </head>
    <body>
        <!--========== SCROLL TOP ==========-->
        <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bx-chevron-up scrolltop__icon'></i>
        </a>

        <!--========== HEADER ==========-->
        <header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="https://www.hongfeng.com.tw" class="nav__logo"><h2>HONG FENG</h2></a>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="https://www.hongfeng.com.tw/menu" class="nav__link">EGGER 系列總覽</a></li>
                        <li class="nav__item"><a href="https://www.hongfeng.com.tw/assets/img/floor/for_print/2022_11_12_menu_for_custom.pdf" class="nav__link" target="_blank">原廠型錄</a></li>
                        <li class="nav__item"><a href="https://www.hongfeng.com.tw/menu/加強防潮系列" class="nav__link">加強防潮系列</a></li>
                        <li class="nav__item"><a href="https://www.hongfeng.com.tw/menu/四邊導角系列" class="nav__link">四邊導角系列</a></li>
                        <li class="nav__item"><a href="https://www.hongfeng.com.tw/menu/平口系列" class="nav__link active-link">平口系列</a></li>
                        <li class="nav__item"><a href="https://www.hongfeng.com.tw/menu/超寬版系列" class="nav__link">超寬版系列</a></li>
                    </ul>
                </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <!--========== MENU ==========-->
            <?php
                if(strpos($_SERVER['HTTP_USER_AGENT'], "Chrome")){
                    $type = true;
                }else{
                    $type = false;
                }
                $series = (isset($_GET['series']))?$_GET['series']:"";
                echo '<section class="menu section bd-container" id="平口系列" style="min-height:100vh; height:100%; margin-bottom:3em">';
                echo '<span class="section-subtitle" data-aos="zoom-in" data-aos-duration="500">EGGER 超耐磨地板</span>';
                echo '<h1 class="section-title" data-aos="zoom-in" data-aos-duration="700">平口系列</h1>';
                echo '<div class="menu__container bd-grid">';
				$AOS_duration = 700;
				if($type){
					$jpgs = glob("../../assets/img/floor/平口系列/color_card/*.webp");
				}else{
					$jpgs = glob("../../assets/img/floor/平口系列/color_card/*.jpg");
				}
				foreach ($jpgs as $jpg) {
					$layout='<div class="menu__content" data-aos="zoom-out" data-aos-duration="'.$AOS_duration.'">';
					$layout.='<img src="'.$jpg.'" alt="鴻蘴_EGGER-平口系列" class="menu__img">';
					$str_series = explode("/",$jpg);
					$str_serie = explode(".",$str_series[count($str_series)-1]);
					$layout.='<h2 class="menu__name" style="padding-left:15px;">'.$str_serie[0].'</h2>';
					$layout.='<span class="menu__detail" style="padding-left:15px;">1292mm * 193mm * 8mm</span>';
					$layout.='<span class="menu__preci" style="padding:0 0 10px 15px;">平口系列</span>';
					$layout.='<a class="button menu__button" onclick="getPic(\'series=平口系列&color='.$str_serie[0].'\')"><i class="bx">了解更多</i></a>';
					
					$layout.='</div>';
					$AOS_duration += 200;
					echo $layout;
				}
                echo '</div></section>';
            ?>
            <div id="color_Card">
                <div class="big_Pic"></div>
                <div><h2 class="menu_color" id="pic_name" style="padding:1vh 0 20px 2vw;"></h2></div>
                <div class="close" id="close_demo">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <svg viewBox="0 0 36 36" class="circle">
                    <path
                        stroke-dasharray="100, 100"
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    </svg>
                </div>
                <div class="slider-arrows">
                    <a id="prev"></a>
                    <a id="next"></a>
                </div>
            </div>
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
        <script src="../js/main.js"></script>
        <!-- Google tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-429KTVWFNK"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-429KTVWFNK');
        </script>
    </body>
</html>
