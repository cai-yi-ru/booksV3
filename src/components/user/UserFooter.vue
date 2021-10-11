<template>
    <footer>
        <div class="FooterBg">
            <div class="container text-center">
                <div class="d-flex justify-content-center  footermenu">
                    <ul class="nav">
                        <li class="mx-2">
                            <a  href="#">關於閱讀趣</a>
                        </li>|
                        <li class="mx-2">
                            <a  href="#">購物相關</a>
                        </li>|
                        <li class="mx-2">
                            <a href="#">售後服務</a>
                        </li>|
                        <li class="mx-2">
                            <a href="#">客服中心</a>
                        </li>|
                        <li class="mx-2">
                            <a href="#" @click.prevent="$router.push(`/login`)">
                            <i class="bi bi-wrench me-1"></i>管理者
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-2 container text-center">
                    <div class="d-flex justify-content-center footerlink">
                    <ul class="nav">
                        <li class="mx-2">
                            <a><i class="bi bi-facebook"></i></a>
                        </li>
                        <li class="mx-2">
                            <a><i class="bi bi-instagram"></i></a>
                        </li>
                        <li class="mx-2">
                            <a><i class="bi bi-twitter"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="mt-3">
                    <p class="footer-text">Copyright © 2021 Yi-Ru All Rights Reserved.</p>
                    <p class="footer-text">僅個人作品練習，無商業用途</p>
                </div>
                </div>
            </div>
        </div>
    </footer>
</template>


