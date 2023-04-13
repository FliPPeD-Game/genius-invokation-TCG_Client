<script setup lang="ts">
</script>

<template>
  <div p-10>
    <div

      flex="~ wrap"

      h-full w-full content-start gap-x-8 gap-y-4 px-8
    >
      <cards-box
        v-for="(item, index) in USER_CARDS?.configs"
        :key="index"
        :is-default="USER_CARDS.index === index"
        :title="item?.title"
        :cards="item.roleCardInfos"
        :self-index="index"
      />
      <div>
        <div

          bg="white/20"
          border="xl"

          h-40 w-80 flex-center cursor-pointer rounded-xl c-white shadow-lg transition duration-300 ease-in-out hover:shadow-2xl
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

