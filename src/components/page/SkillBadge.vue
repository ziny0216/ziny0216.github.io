<script setup>
  const props = defineProps({
    skills: {
      default: () => [],
      type: Array,
    },
  });
</script>

<template>
  <div class="pj_skill">
    <span
      v-for="(item, idx) in props.skills"
      :key="`stack-${idx}`"
      class="skill_item"
    >
      {{ item }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
  .pj_skill {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    .skill_item {
      border-radius: 4px;
      background: $blue-80;
      color: $white;
      padding: 0 4px;
      font: $text-body12-500;
    }
  }
</style>
