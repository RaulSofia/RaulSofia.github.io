# Repository Architecture Instructions
- This is a Jekyll static site.
- The `_site/` directory contains compiled build artifacts. NEVER modify files inside `_site/`.
- Always trace HTML, layout, or style changes back to their original source files in `_layouts/`, `_includes/`, `_posts/`, or the root templates (`index.html`, `about.md`).
- When creating, editing, or appending to files, always use the editor's native file system API. Do NOT use Windows PowerShell terminal redirection (>, >>, Out-File, Set-Content, or echo), as this injects a UTF-8 BOM and breaks the build engine.