---
layout: default
title: About
permalink: /about/
---

<section class="max-w-4xl w-full z-10 text-left">
  <div class="mb-10 flex items-end justify-between gap-4">
    <div>
      <h1 class="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">About me</h1>
    </div>
    <a class="group relative flex shrink-0 items-center gap-3 px-5 py-3 bg-primary text-on-primary font-headline font-bold rounded-md transition-all hover:shadow-[0_0_20px_rgba(0,218,243,0.3)] active:scale-95" href="{{ '/assets/docs/CV_RaulSofia.pdf' | relative_url }}" target="_blank" download>
      <span class="material-symbols-outlined text-[18px]">description</span>
      CV
    </a>
  </div>

  <div class="page-card rounded-2xl p-6 md:p-8 mb-10 space-y-5 text-on-surface-variant text-base md:text-lg leading-relaxed">
    <div class="grid gap-6 sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-start lg:grid-cols-[minmax(0,1fr)_18rem]">
      <p>I grew up in Nelas, a small town in Portugal, and reached the end of high school honestly unsure of what to do. I had a good run in the Biology Olympiads, making it to the international level, so I eventually chose a B.Sc. in Biochemistry.</p>
      <img src="{{ '/assets/static/ibo_closing_szeged_crop_crop.jpeg' | relative_url }}" alt="Raul Sofia at the closing ceremony of the International Biology Olympiad in Szeged" class="mx-auto w-full max-w-xs rounded-xl border border-outline-variant/20 object-cover sm:order-2 sm:max-w-[14rem] lg:max-w-[18rem]" />
    </div>
    <p>A year later, craving a bit more engineering, I enrolled in Informatics Engineering. I figured I already knew how to code, so it would probably be a safe bet.</p>
    <p>It went even better than expected: I completed both degrees, in parallel, at the same time.</p>
    <div class="grid gap-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:items-start">
      <p class="sm:order-2">Around this time, I started researching at LARN, a research group within <a class="inline-link" href="https://www.cisuc.uc.pt/" rel="noopener" target="_blank">CISUC</a>, under <a class="inline-link" href="https://joelarrais.github.io/" rel="noopener" target="_blank">Prof. Joel Arrais</a>. This was where I had my first contact with deep learning and generative drug design. By the time I started my Master's in Data Science, I was already deep into the field, which allowed me to shift my focus and dive into computer vision and 3D geometry to build spatial-aware models for molecular design.</p>
      <img src="{{ '/assets/static/queima_grelo_crop.jpeg' | relative_url }}" alt="Raul Sofia at the Queima do Grelo celebration in Coimbra" class="mx-auto w-full max-w-xs rounded-xl border border-outline-variant/20 object-cover sm:order-1 sm:max-w-[14rem]" />
    </div>
    <p>Outside of work, I'm a big fan of electronics and hardware projects. I can also occasionally be spotted playing basketball.</p>
    <a class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-cyan-300 transition-colors" href="{{ '/assets/docs/CV_RaulSofia.pdf' | relative_url }}" target="_blank">
      See full CV
      <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
    </a>
  </div>

  <div class="page-card rounded-2xl p-6 md:p-8">
    <h2 class="font-headline text-2xl font-bold text-on-surface mb-5">Main technical stack</h2>
    <a class="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-cyan-300 transition-colors" href="https://github.com/RaulSofia" rel="noopener" target="_blank">
      Take a look at my GitHub
      <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
    </a>
    <div class="space-y-5 text-on-surface-variant">
      <div><p class="font-semibold text-on-surface">Machine Learning</p><p>Python, PyTorch, and TensorBoard.</p></div>
      <div><p class="font-semibold text-on-surface">Systems &amp; HPC</p><p>C/C++, CUDA, Triton, and ONNX.</p></div>
      <div><p class="font-semibold text-on-surface">Deployment</p><p>Linux, Docker, and Git.</p></div>
      <div><p class="font-semibold text-on-surface">Domain Tools</p><p>RDKit and PyMOL.</p></div>
    </div>
  </div>
</section>
