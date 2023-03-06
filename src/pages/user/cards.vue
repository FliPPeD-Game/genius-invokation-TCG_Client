<script setup lang="ts">
</script>

<template>
  <div p-10>
    <div
      w-full h-full
      flex="~ wrap" content-start
      gap-x-8 gap-y-4
      px-8
    >
      <cards-box
        v-for="(item, index) in USER_CARDS?.configs"
        :key="index"
        :is-default="USER_CARDS.index === index"
        :title="item.title"
        :cards="item.roleCardInfo"
        :self-index="index"
      />
      <div>
        <div
          w-80 h-40
          bg="white/20" shadow-lg
          rounded-xl border="xl"
          transition duration-300 ease-in-out
          hover:shadow-2xl
          flex-center
          c-white
          cursor-pointer
        >
          <div
            i-carbon:add
            text-4xl
          />
        </div>
      </div>
    </div>
  </div>
</template>

