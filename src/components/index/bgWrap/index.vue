<script setup lang="ts">
import bgVideo from '/bg/bg_video.mp4'
import bgPoster from '/bg/bg_poster.jpg'
</script>

<template>
  <div fixed w-full h-100vh z--1>
    <video
      w-full h-100vh
      object-cover
      :src="bgVideo"
      :poster="bgPoster"
      autoplay
      muted
      loop
    />
  </div>
</template>
