---
layout: default
title: Research
permalink: /research/
---

<section class="max-w-4xl w-full z-10 text-left">
  <div class="mb-10 flex items-end justify-between gap-4">
    <h1 class="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">Research</h1>
    <a class="action-link group relative flex shrink-0 items-center gap-3 px-5 py-3 bg-primary text-on-primary font-headline font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(0,218,243,0.3)] active:scale-95" href="https://scholar.google.com/citations?user=ERxgLK4AAAAJ" rel="noopener" target="_blank">
      <span class="material-symbols-outlined text-[18px]">school</span>
      Google Scholar
    </a>
  </div>

  <div class="space-y-10">
    {% assign section_types = "article,thesis,poster,software" | split: "," %}
    {% assign section_labels = "Journal articles,Theses,Conference posters,Software releases" | split: "," %}
    {% for type in section_types %}
    {% assign entries = site.research | where: "type", type | sort: "year" | reverse %}
    {% if entries.size > 0 %}
    {% assign section_index = forloop.index0 %}
    <section>
      <h2 class="mb-5 font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary">{{ section_labels[section_index] }}</h2>
      {% for entry in entries %}
      <article class="page-card{% unless forloop.first %} mt-6{% endunless %} rounded-2xl p-5 md:p-6">
        <p class="text-xs uppercase tracking-[0.18em] text-slate-400">{{ entry.venue }} · {{ entry.year }}</p>
        <h3 class="mt-3 font-headline text-2xl font-bold leading-tight text-on-surface">{{ entry.title }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-on-surface-variant">{{ entry.authors | replace: "R. Sofia", "<strong>R. Sofia</strong>" | replace: "Raul Sofia", "<strong>Raul Sofia</strong>" }}</p>
        {% if entry.link_url %}
        <a class="action-link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-cyan-300 transition-colors" href="{% if entry.external %}{{ entry.link_url }}{% else %}{{ entry.link_url | relative_url }}{% endif %}"{% if entry.external %} rel="noopener" target="_blank"{% endif %}>
          {{ entry.link_label }}
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
        {% endif %}
      </article>
      {% endfor %}
    </section>
    {% endif %}
    {% endfor %}
  </div>
</section>
