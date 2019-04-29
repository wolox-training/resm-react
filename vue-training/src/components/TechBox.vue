<template lang="pug">
  .tech-box
    img.tech-box-logo(
      :src='tech.logo', 
      :alt='tech.title'
    )
    h3.tech-box-title {{ tech.title }}
    span.tech-box-launch
      | {{ $t('release') }}: {{ tech.launch }}
    p.tech-box-text
      | {{ tech.description }}
</template>
<script>
export default {
  props: {
    tech: {
      type: Object,
      required: true,
      // TODO: How I do validate schema?
      validator: value => value && value.title && value.launch && value.description && value.logo
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../scss/variables/colors';
  @import '../scss/variables/fonts';

  $tech-logo-size: 100px;
  $tech-text-margin: 10px;
  $tech-line-height: 24px;

  .tech-box {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 60px;
    position: relative;
    text-align: center;

    &:first-child {
      border-right: 2px solid $wolox-green; 
      grid-column: 1;
      grid-row: 1 / 3;
      height: 100%;
      justify-content: center;
      justify-self: stretch;
    }
  }

  .tech-box-logo {
    height: $tech-logo-size;
    width: $tech-logo-size;
  }

  .tech-box-title {
    font-size: $box-title-size;
    line-height: $tech-line-height;
  }

  .tech-box-launch {
    color: $black;
    font-size: $box-launch-text-size;
    font-weight: bold;
    line-height: $tech-line-height;
  }

  .tech-box-text {
    font-size: $box-text-size;
    line-height: $tech-line-height;
  }

  .tech-box-title, 
  .text-box-launch, 
  .tech-box-text { 
    color: $black; 
  }

  .tech-box-logo,
  .tech-box-title,
  .tech-box-launch {
    margin-bottom: $tech-text-margin;
  }

  @media only screen and (max-width: 1024px) {
    .tech-box {
      border-bottom: 2px solid $wolox-green; 
      margin: 20px 60px;
    }

    .tech-box:first-child {
      border-right: 0; 
      grid-column: auto;
      grid-row: auto;
      justify-content: center;
    }

    .tech-box:last-child {
      border-bottom: 0;
    }
  }
</style>
