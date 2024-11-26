<template>
  <div id="app">
    <signatureH5
      @confirm-event="confirmEvent"
      @cancel-event="cancelEvent"
    ></signatureH5>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    confirmEvent() {
      console.log("确认签名", arguments);
    },
    cancelEvent() {
      console.log("取消签名", arguments);
    },
  },
};
</script>
