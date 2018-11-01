<template>
    <div>
      <div class="v-code">
        <input ref="vcode" id="vcode" type="number" maxlength="6" v-model="code" @focus="focused = true" @blur="focused = false"
               :disabled="telDisabled">

        <label for="vcode" class="line" v-for="(item,index) in codeLength" :class="{'animated': focused && cursorIndex === index}"
               v-text="codeArr[index]">
        </label>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    value: {},
  },
  data() {
    return {
      code: '',
      codeLength: 4,
      telDisabled: false,
      focused: false,
    };
  },
  model: {
    prop: 'value',
    event: 'update',
  },
  computed: {
    codeArr() {
      return this.code.split('');
    },
    cursorIndex() {
      return this.code.length;
    },
  },
  watch: {
    value() {
      if (this.value.length <= this.codeLength) {
        // this.code = this.value;
      }
    },
    code(newVal) {
      this.$emit('update', newVal);
      this.code = newVal.replace(/[^\d]/g, '');

      if (newVal.length === this.codeLength) {
        this.$refs.vcode.blur();
        this.$emit('finished', newVal);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}
.heading-2 {
  color: #333333;
}
.v-code {
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
}
.v-code input {
  position: absolute;
  top: -100%;
  left: -666666px;
  opacity: 0;
}
.v-code .line {
  position: relative;
  width: 40px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 28px;
}
.v-code .line::after {
  display: block;
  position: absolute;
  content: '';
  left: 0;
  width: 100%;
  bottom: 0;
  height: 1px;
  background-color: #aaaaaa;
  transform: scaleY(0.5);
  transform-origin: 0 100%;
}
.v-code .line.animated::before {
  display: block;
  position: absolute;
  left: 50%;
  top: 20%;
  width: 1px;
  height: 60%;
  content: '';
  background-color: #333333;
  animation-name: coruscate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
/*.v-code .line.animated::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: #000000;
  }*/
@keyframes coruscate {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
