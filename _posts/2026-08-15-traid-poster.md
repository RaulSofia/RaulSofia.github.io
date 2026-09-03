---
layout: post
title: "Bonder at the ELLIS TRAID 2026 Summer School"
date: 2026-08-29 10:00:00 +0100
categories: [research, events]
excerpt: "I presented a poster on the Bonder model at the ELLIS Summer School on Trustworthy & Responsible AI in Drug Discovery (TRAID) in Saarbrücken."
---

<a class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-cyan-300 transition-colors" href="{{ '/posters/traid2026/' | relative_url }}">
	Jump to poster
	<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>

Last week, I headed to Saarbrücken, Germany for the ELLIS TRAID Summer School. It was a great week packed with talks and workshops on trustworthy AI in drug discovery. As we rely more on AI to find new drugs, figuring out how to make these models interpretable and robust is getting pretty crucial.

Outside the main lectures, I also brought a poster to share some of my own ongoing work. I presented **Bonder**, an E(3)-invariant graph neural network I've been building to reconstruct molecules directly from 3D atomic clouds, predicting bond orders and formal charges. It was a project that branched out from my Master's thesis, as it was noted that RDKit or OpenBabel standard tools for this task often struggled to reconstruct subtle features like aromatic rings, particularly when noise was present, as in any generative scenario. Later, I found out that there were other use cases for it in domains like Molecular Dynamics, so I decided to extract it as a standalone project.

I was happy to hear that other atendees of the Summer School found uses for it in their own fields, and I got some useful feedback on tailoring it.

It is still a work in progress, but you can [check out the poster and related materials here]({{ '/posters/traid2026/' | relative_url }}). More news about the model are coming soon.

<img src="{{ '/assets/static/bonder_poster_traid2026.jpeg' | relative_url }}" alt="Raul Sofia presenting the Bonder poster at TRAID 2026" class="w-full h-auto rounded-xl shadow-md my-8 border border-outline-variant/20">
