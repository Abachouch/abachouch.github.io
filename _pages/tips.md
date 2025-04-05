---
layout: page
title: Tips and tricks
permalink: /tips/
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
    {% for post in site.posts %} {% if post.categories contains "snippet" %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%B %d, %Y" }}</span>
      <span>{{ post.labels }}</span>
    </li>
    {% endif %} {% endfor %}
  </ul>
</div>
