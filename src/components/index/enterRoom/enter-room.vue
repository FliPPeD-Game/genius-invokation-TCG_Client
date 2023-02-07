<script setup lang="ts">
</script>

<template>
  <div
    w-50vw h-50vh
    bg-white
    grid="~ cols-1 rows-2"
  >
    <div
      bg="[url(header/mondstadt.jpg)] center cover"
      opacity-60
      flex-center
      hover="opacity-100"
    >
      <button animate-pulse>
        创建房间
      </button>
    </div>
    <div
      bg="[url(header/liyue.jpg)] center cover opacity-60"
      opacity-60
      flex-center
      hover="opacity-100"
    >
      <span>
        <input ipt type="text">
        <button>加入房间</button>
      </span>
    </div>
  </div>
</template>
