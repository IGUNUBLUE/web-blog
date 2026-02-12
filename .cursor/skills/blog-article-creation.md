# Blog Article Creation — Lenin AGC Portfolio

> Use this skill when creating new blog articles for the Astro portfolio blog.

## Project Context

- **Framework**: Astro 5 with Tailwind CSS v4, `@tailwindcss/typography`, and shadcn/ui
- **Content**: Markdown files (`.md`) in `src/content/blog/`
- **Schema**: Defined in `src/content.config.ts` with Zod validation
- **Images**: Static assets in `public/images/blog/`
- **Styling**: LiveKit-inspired design system with dark/light mode support
- **Font**: JetBrains Mono (monospace developer font)

---

## File Location

All blog posts go in:

```
src/content/blog/<slug>.md
```

Where `<slug>` is the URL-friendly filename (kebab-case, no spaces, no special characters).

**Example:** `my-new-article-about-docker.md` → `/blog/my-new-article-about-docker`

---

## Frontmatter Schema (Required)

Every article MUST have this frontmatter block:

```yaml
---
title: "Your Article Title Here"
description: "A concise 1-2 sentence summary of the article for SEO and card previews."
author: Lenin AGC
date: 2026-02-12 10:00:00
cover: /images/blog/article_cover.webp
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
prev:
  text: "Previous Article Title"
  link: "/blog/previous-article-slug"
next: false
---
```

### Field Details

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | **Yes** | Article title. Displayed as h1 in the article header. Do NOT repeat as `# Title` in body. |
| `description` | `string` | Recommended | 1-2 sentence summary. Shown on blog cards, article header, and used for `<meta description>`. |
| `author` | `string` | No (defaults to `Lenin AGC`) | Author name. |
| `date` | `datetime` | **Yes** | Publication date. Format: `YYYY-MM-DD HH:MM:SS`. Articles are sorted newest first. |
| `cover` | `string` | Recommended | Path to cover image in `public/`. Displayed as hero image in article header. |
| `categories` | `string[]` | Recommended | Array of categories. Displayed as cyan pill badges above the title. |
| `tags` | `string[]` | Recommended | Array of tags. Displayed at the bottom of the article. Used on cards as `#tag`. |
| `prev` | `object \| false` | Optional | Previous article link. Set `false` for the oldest article. |
| `next` | `object \| false` | Optional | Next article link. Set `false` for the newest article. |

> **Note**: `prev` and `next` are legacy fields. The article page now auto-detects chronological neighbors. These fields are optional and kept for backward compatibility.

---

## Content Guidelines

### DO NOT include in the markdown body:

1. **Do NOT repeat the title as `# Title`** — The title is rendered from frontmatter automatically with styled typography.
2. **Do NOT include the cover image in the body** — The cover is rendered from the `cover` frontmatter field with styled frame.
3. **Do NOT use `$ ` prefix in code blocks** — Use clean commands without shell prompts.

### DO include:

1. **Start directly with content** — First paragraph acts as a lead paragraph with slightly larger text.
2. **Use `## Headings` for sections** — h2 gets a bottom border separator; h3 gets cyan color accent.
3. **Use fenced code blocks with language** — Always specify the language: ` ```bash `, ` ```javascript `, ` ```typescript `, etc.
4. **Use descriptive alt text for images** — Instead of `![image 1]`, use `![Terminal showing makepkg output]`.
5. **Use bold for emphasis** — `**key terms**` and `_italic_` for definitions/quotes.
6. **Use numbered lists for steps** — Bold the step name: `1. **Step name:** Description...`

### Image Guidelines

- Save images in `public/images/blog/` as `.webp` format (preferred) or `.png`.
- Reference them with absolute paths: `![Alt text](/images/blog/filename.webp)`
- Use descriptive, unique filenames: `docker-compose-terminal.webp` not `img1.webp`
- Recommended naming: `<article-slug>-<description>.webp`
- Images are automatically styled with rounded corners, borders, shadows, and hover zoom.

---

## Markdown Styling Reference

The article prose uses a custom LiveKit-themed typography system. Here's how elements render:

| Element | Dark Mode | Light Mode |
|---------|-----------|------------|
| `## h2` | White text, bottom border | Dark text, subtle border |
| `### h3` | Cyan accent color | Darker cyan |
| Links | Cyan with underline on hover | Darker cyan |
| `inline code` | Cyan on glass background | Cyan on light glass |
| Code blocks | Dark background with glass border | Light gray background |
| Blockquotes | Cyan left border, glass background | Same with light glass |
| Images | Rounded, bordered, shadow + hover zoom | Same style |
| List markers | Cyan bullets/numbers | Darker cyan |

---

## Article Template

```markdown
---
title: "How to Set Up Docker on Arch Linux"
description: "Step-by-step guide to installing and configuring Docker on Arch Linux, including user permissions and first container."
author: Lenin AGC
date: 2026-02-12 10:00:00
cover: /images/blog/docker-arch-cover.webp
categories: [GNU/Linux, DevOps]
tags: [docker, archlinux, containers, Tutorial]
prev:
  text: "Previous Article"
  link: "/blog/previous-article"
next: false
---

Today we'll walk through setting up Docker on Arch Linux. If you're coming from Ubuntu or Fedora, you'll find the process surprisingly straightforward thanks to the AUR.

## Prerequisites

Before we begin, make sure you have:

- A working Arch Linux installation
- Access to a terminal with `sudo` privileges
- An active internet connection

## Installing Docker

The easiest way to install Docker on Arch is through `pacman`:

\`\`\`bash
sudo pacman -S docker docker-compose
\`\`\`

## Configuring Permissions

To run Docker without `sudo`, add your user to the **docker** group:

\`\`\`bash
sudo usermod -aG docker $USER
\`\`\`

> **Important:** You need to log out and back in for group changes to take effect.

## Running Your First Container

Let's verify the installation:

\`\`\`bash
docker run hello-world
\`\`\`

![Docker hello-world output](/images/blog/docker-arch-hello-world.webp)

## Conclusion

Docker on Arch Linux is a first-class experience. The packages are always up-to-date, and the AUR fills any gaps.

Happy containerizing!
```

---

## Checklist for New Articles

Before publishing, verify:

- [ ] Frontmatter has `title`, `date`, `description`, `cover`, `categories`, `tags`
- [ ] No duplicate `# Title` in the body
- [ ] No cover image repeated in the body
- [ ] All images saved in `public/images/blog/` with descriptive names
- [ ] All image references use absolute paths (`/images/blog/...`)
- [ ] All code blocks specify a language
- [ ] All images have descriptive alt text
- [ ] The article builds without errors: `pnpm astro build`
- [ ] Article appears in correct chronological order on `/blog`
