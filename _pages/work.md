---
layout: page
title: Work Case Studies
permalink: /work/
---

## Work Case Studies

<div class="snipets-hero">
    <h1>My work</h1>
  </div>
<ul>
  {% for case in site.works %}
    <li>
      <a href="{{ case.url }}">{{ case.title }}</a> - {{ case.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
