<template lang="pug">
  .no-data-text
    slot
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  @import '../scss/variables/colors';
  @import '../scss/variables/fonts';

  .no-data-text {
    background-color: $wolox-blue;
    border: 1px solid $black;
    border-radius: 5px;
    color: $white;
    display: flex;
    flex-direction: column;
    font-size: $no-data-text-size;
    justify-content: center;
    margin: 150px 50px 450px;
    padding: 20px 15px;
    text-align: center;
  }
</style>
