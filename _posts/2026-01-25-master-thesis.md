---
layout: post
title: "Master's Thesis Defended!"
date: 2026-01-25 14:00:00 +0100
categories: [research, milestones]
excerpt: "Wrapping up my Master's in Data Science and Engineering with a focus on 3D de novo molecular design."
download_url: "/assets/docs/master_thesis_raul_sofia.pdf"
download_label: "Download my Master's Thesis"
---

A week ago, I officially finished my Master's in Data Science and Engineering by defending my thesis, *Structure-Based De Novo Molecular Design for Drug Discovery*, achieving a final grade of **19 out of 20**.

The main idea behind this research was that the drug-generation problem is usually massively underspecified. To make it tractable, I divided it into two distinct subproblems: generating a structural hypothesis and then converting that hypothesis into a viable drug. My thesis focused strictly on the second part. I chose a pharmacophore as the hypothesis representation. This was a deliberate choice that allowed the model to integrate with existing computational chemistry tools while establishing a foundation for tackling more advanced hypothesis-generation systems.

The specific approach I took was based on convolutional neural network (CNN) diffusion models, which are quite similar to those used for image generation. I wanted to avoid more mainstream GNN-based approaches because they require oversampling the atomic cloud with "fake" atoms, whereas a probability-cloud approach seemed to be a more natural representation for this problem. This, in turn, meant that I had to develop most of the tools for the pipeline from scratch, as the ecosystem is not nearly as mature as the one surrounding GNNs.

This work was essentially the culmination of my time at LARN, bringing together my biochemistry background and spatially aware AI models to overcome the limitations of traditional sequence-based generation.

<img src="{{ '/assets/static/thesis_defense.jpeg' | relative_url }}" alt="Raul Sofia defending his Master's thesis" class="w-full h-auto rounded-xl shadow-md my-8 border border-outline-variant/20">

The defense itself was an opportunity to discuss current bottlenecks in generative chemistry. My thesis was supervised by Dr. Joel Perdiz Arrais and Dr. Maryam Abbasi. The jury consisted of Dr. Nuno Lourenço and Dr. Carlos Lisboa Bento.

If you want to look at the architectural choices or the benchmarking results, you can download the full document using the button above.

<a href="{{ '/assets/docs/master_thesis_raul_sofia.pdf' | relative_url }}" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-cyan-300 transition-colors" target="_blank">
	See master's thesis
	<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>

