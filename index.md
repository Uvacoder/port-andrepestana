---
title: Andre Pestana
editLink: true
description: Andre Pestana's website
head:
  - - meta
    - name: description
      content: Andre Pestana's website
  - - meta
    - name: keywords
      content: Sotware Development Javascript blog
lastUpdated: true
layout: home

hero:
  name: Andre Pestana
  text: Software Developer
  tagline: βWhen you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love...β β Marcus Aurelius.
  image:
    src: /avatar.jpeg
    alt: Andre Pestana
  actions:
    - theme: brand
      text: Blog
      link: /sections/blog/index.html
    - theme: alt
      text: View on GitHub
      link: https://github.com/andrepestana/
    - theme: alt
      text: View on Linkedin
      link: https://www.linkedin.com/in/andrepestana/
features:
  - icon: π»
    title: Sotware Development
    details: Full stack developer with experience in Javascript, TypeScript, Vue.js, Node.js, Java, Python, RESTful APIs, Databases and Agile Development.
  - icon: π οΈ
    title: Personal Projects
    details: Some of my personal projects.
  # - icon: π
  #   title: Power of Vue meets Markdown
  #   details: Lorem ipsum...
aside: false
---

<script setup>
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  document.body.classList.add('round')

})
onUnmounted(() => {
  document.body.classList.remove('round')

})
</script>

<style>
.round .VPImage {
  border-radius: 50%;
}

</style>
