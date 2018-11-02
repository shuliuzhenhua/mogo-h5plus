<template>
    <div>
      <van-nav-bar left-arrow title="设置"  @click-left="$close()" />
      <setting-modules/>
      <setting-footer/>
    </div>
</template>

<script>
import SettingModules from '../../../components/system/setting/Modules';
import SettingFooter from '../../../components/system/setting/Footer';
export default {
  components: {
    SettingModules,
    SettingFooter
  }
};
</script>

<style lang="stylus">
  html
    background #f8f8f8
</style>
