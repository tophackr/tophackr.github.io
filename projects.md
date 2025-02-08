---
layout: container
title: Projects
---

<h1 class="text-4xl font-extrabold">Projects</h1>

<div class="grid lg:grid-cols-2 gap-4 my-6">
    {% assign projects = site.projects | where: 'archive', nil %}
    {% for project in projects reversed %}
        <a class="card card-side bg-base-300 shadow-xl p-4" href="{{ project.url }}">
            <div class="flex items-center justify-center mr-4">
                {% include file-path.html collection=project.collection slug=project.slug %}
                {% for file in site.static_files %}
                    {% if file.path contains filePath %}
                        <img class="mask mask-squircle w-56 max-w-28" src="{{ file.path }}" alt="{{ project.title }}" />
                    {% endif %}
                {% endfor %}
            </div>

            <div class="card-body p-0">
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