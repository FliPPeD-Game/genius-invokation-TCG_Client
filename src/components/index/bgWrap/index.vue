<script setup lang="ts">
import bgVideo from '/bg/bg_video.mp4'
import bgPoster from '/bg/bg_poster.jpg'
</script>

<template>
  <div fixed z--1 h-100vh w-full>
    <video

      :src="bgVideo"
      :poster="bgPoster"

      autoplay loop muted h-100vh w-full object-cover
    />
  </div>
</template>
