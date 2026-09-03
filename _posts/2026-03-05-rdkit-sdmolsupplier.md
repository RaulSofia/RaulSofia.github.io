---
layout: post
title: "RDKit PR accepted (PR #9010)"
date: 2026-03-05 10:00:00 +0100
categories: [open-source, engineering]
excerpt: "My pull request implementing buffered reading for RDKit's SDMolSupplier was officially merged."
---

If you work in computational chemistry, you already know RDKit is the backbone of the field. So it makes me proud that my pull request was merged into the official RDKit repository! 

While working with several massive SDF (Structure-Data File) datasets, I noticed that the I/O performance when parsing molecules was a bottleneck. I decided to dive into the RDKit C++ source code to fix the root issue.

I implemented a buffered reading mechanism for `SDMolSupplier`. It simply replaces the previous method of reading the file line by line, instead loading chunks into a buffer for a much more efficient indexing. I submitted [Pull Request #9010](https://github.com/rdkit/rdkit/pull/9010) and it was officially merged for the 2026.03.1 release.

I'm happy to contribute to a tool I use every day. The buffered indexing is now live, speeding up parsing for anyone handling millions of conformers.

*(And because open-source is always an iterative process: it later turned out the new buffering logic introduced a subtle edge-case bug right at the 64 KiB chunk boundaries, which I eventually had to patch in PR #9255. But hey, overall performance still went up!)*
