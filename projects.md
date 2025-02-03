---
layout: container
title: Projects
---

<h1 class="text-4xl font-extrabold">Projects</h1>

<div class="grid lg:grid-cols-2 gap-4 my-6">
    {% for project in site.projects reversed %}
        <a class="card card-side bg-base-300 shadow-xl" href="{{ project.url }}">
            <div class="flex items-center justify-center m-4">
                {% for file in site.static_files %}
                    {% assign path = 'assets/' | append: project.slug | append: '/icon' %}
                    {% if file.path contains path %}
                        <img class="mask mask-squircle w-64 max-w-32" src="{{ file.path }}" alt="{{ project.title }}" />
                    {% endif %}
                {% endfor %}
            </div>

            <div class="card-body">
                <h2 class="card-title">{{ project.title }}</h2>
                <p class="opacity-50">{{ project.subtitle | default: '' }}</p>
                <div class="card-actions justify-end">
                    {% for tag in project.tags %}
                        <div class="badge badge-primary badge-sm text-xs">
                            {{ tag }}
                        </div>
                    {% endfor %}
                </div>
            </div>
        </a>
    {% endfor %}
</div>