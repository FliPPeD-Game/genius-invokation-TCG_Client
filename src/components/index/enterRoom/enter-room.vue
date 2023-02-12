<script setup lang="ts">
</script>

<template>
  <div
    text="white 2xl"
    bg-black
    overflow-hidden
    rounded-xl
  >
    <div
      class="group"
      relative
      overflow-hidden
    >
      <img
        src="/header/mondstadt.jpg"
        transition duration-300 ease-in-out
        opacity-80
        group-hover="opacity-100 scale-140 z-200"
        vertical-mid
        w-65vw h-20vh
      >
      <div absolute z-200000 top="50%" text-center w-65vw>
        <button>
          创建房间
        </button>
      </div>
    </div>
    <div
      class="group"
      relative
      overflow-hidden
    >
      <img
        src="/header/liyue.jpg"
        transition duration-300 ease-in-out
        overflow-hidden
        opacity-80
        group-hover="opacity-100 scale-140"
        w-65vw h-20vh
        vertical-mid
      >
      <div
        absolute
        z-30000
        top="30%"
        w-65vw
        flex="~ col"
        justify-center
        items-center
      >
        <input ipt type="text" w="50%" placeholder="请输入房间号">
        <button>加入房间</button>
      </div>
    </div>
  </div>
</template>
