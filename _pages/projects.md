---
layout: page
title: My personal projects
permalink: /projects/
---

<style>
  .snipets-hero {
    margin: 4rem;
    text-align: center;
  }
</style>
<div class="container">
  <div class="snipets-hero">
    <h1>My Notes</h1>
  </div>

  <ul>
    {% for project in site.projects %}
    <li>
      <a href="{{ project.url }}">{{ project.title }}</a>
      <span>{{ project.date | date: "%B %d, %Y" }}</span>
      <span>{{ project.labels }}</span>
    </li>
    {% endfor %}
  </ul>
</div>
