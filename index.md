---
layout: default
---

<div class="container-fluid container-sm">
    <div class="row justify-content-center align-items-md-center h-md-100">
        <div class="col-md-8 text-center mb-5 mt-5 mt-md-0">
            <img src="{% link assets/alexandr-musikhin-picture_min.png %}" class="img-fluid avatar">
            <h1>Alexandr Musikhin</h1>
            <p class="subtitle is-4">Part-time Developer</p>
            <p class="subtitle">I make useless projects. I write in HTML, CSS, PHP, a little JS.</p>
            <a class="btn btn-light btn-lg" href="https://medium.com/@tophackr">
                <i class="fas fa-pencil-alt"></i>
                Writing
            </a>
            <a class="btn btn-light btn-lg" href="https://instagram.com/tophackr/">
                <i class="fab fa-instagram"></i>
                Photography
            </a>
            <a class="btn btn-light btn-lg" href="https://github.com/tophackr">
                <i class="fab fa-github"></i>
                Code
            </a>
        </div>
    </div>
</div>

<header id="gitstat" class="bg-light">
    <div class="container py-5 py-md-0">
        <div class="row justify-content-between align-items-center h-md-100">
            <div id="latest-commit" class="col-md-4 text-center">
                <img class="img-fluid" src="assets/hackr.svg" width="128">
                <h3 class="my-4 font-weight-light">Latest Commit</h3>
                <a id="message" class="text-body" href="#"></a>
                <p id="date" class="small text-muted"></p>
                <a class="text-body" href="https://gitstat.tophackr.com/tophackr">More Stat</a>
            </div><!-- /#latest-commit -->
            <div class="col-md-7">
                <h2 class="mb-3">Latest Repositories</h2>
                <div id="latest-repos" class="row"></div>
            </div><!-- /.col -->
        </div>
    </div>
</header>