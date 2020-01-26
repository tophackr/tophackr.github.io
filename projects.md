---
layout: default
title: Projects
---

<div class="container-fluid container-sm">
    <div class="row">
        <h1 class="col-12 mt-5 mb-4">Projects</h1>
        {% for project in site.projects reversed %}
        <div class="col-md-6 py-2">
            <a class="is-card" href="{{ project.url }}">
                <div class="card">
                    <div class="card-body">
                        {% for file in site.static_files %}
                            {% assign path = 'assets/' | append: project.slug | append: '/thumbnail' %}
                            {% if file.path contains path %}
                                <img class="img-fluid rounded" src="{{ file.path }}">
                            {% endif %}
                        {% endfor %}
                        <h5 class="card-title text-body">
                            <span class="mr-2">{{ project.title }}</span>
                            <span class="badge badge-secondary">{{ project.type }}</span>
                        </h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ project.subtitle | default: '&nbsp;' }}</h6>
                    </div>
                </div>
            </a>
        </div>
        {% endfor %}
    </div>
</div>