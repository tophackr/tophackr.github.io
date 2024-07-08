---
layout: default
---

<div class="container-fluid container-sm">
    <div class="row justify-content-center align-items-md-center h-100">
        <div class="col-md-8 text-center mb-5 mt-5">
            <img src="{% link assets/alexandr-musikhin-picture_min.png %}" class="img-fluid avatar">
            <h1>{{ site.author.name }}</h1>
            <p class="subtitle is-4">{{ site.author.post }}</p>
            <p class="subtitle">{{ site.author.description }}</p>
            {% for button in site.home.buttons %}
            <a class="btn btn-light btn-lg" href="{{ button.url }}">
                <i class="{{ button.icon }}"></i>
                {{ button.name }}
            </a>
            {% endfor %}
        </div>
    </div>
</div>