---
layout: default
permalink: /
---

<div class="avatar mb-6">
    <div class="ring-primary ring-offset-base-100 w-64 rounded-full ring ring-offset-4">
        <img src="{{ page.image | relative_url }}" alt={{ site.author }}>
    </div>
</div>

<h1 class="text-4xl font-bold">{{ site.author }}</h1>
<p class="text-xl my-4">{{ site.description }}</p>

<div class="grid grid-flow-col gap-4">
    {%- for button in site.data.home-buttons -%}
        <a class="btn btn-primary" href="{{ button.url }}">
            <i class="{{ button.icon }}"></i>
            {{ button.name }}
        </a>
    {%- endfor -%}
</div>
