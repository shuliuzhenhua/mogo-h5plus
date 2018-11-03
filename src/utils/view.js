

/**
 * 打开窗口
 * @param id
 * @param style
 * @param extras
 * @returns {*}
 */
export function open(id, style = {}, extras = {}) {
  // 如果之前创建过就显示
  let wv = plus.webview.getWebviewById(id);
  if (wv) {
    show(id);
    return wv;
  }

  // 拼接 url
  let url = './' + id + '.html';

  let view = plus.webview.create(
    url,
    id,
    {
      top: 0, // 新页面顶部位置
      bottom: 0, // 新页面底部位置
      render: 'always',
      popGesture: 'hide', // 右滑后隐藏
      bounce: 'none',
      bounceBackground: '#efeff4',
      ...style,
    },
    extras
  );

  let w = plus.nativeUI.showWaiting();

  // 监听需要打开的窗口已经载入完毕
  view.addEventListener('loaded', () => {
    view.show('slide-in-right'); // 显示窗口
    w.close();
    w = null;
  });
  return view;
}

/**
 * 显示窗口
 * @param id
 */
export function show(id) {
  plus.webview.show(id, "slide-in-right", 200);
}

/**
 * 返回当前 窗口信息
 * @returns {*}
 */
export function current() {
  return plus.webview.currentWebview();
}

/**
 * 关闭窗口
 * @param id 窗口 的id
 * @param style 关闭样式
 */
export function close(id = null, style = null) {
  if (id === null) {
    let current = plus.webview.currentWebview();
    id = current.id
  }
  plus.webview.close(id, style);
}

/**
 * 隐藏当前窗口
 */
export function hide() {
  let current = plus.webview.currentWebview();
  plus.webview.hide(current.id, 'auto');
}

/**
 * 跨网页传输数据
 * @param id
 * @param data
 */
export function fire(id, data) {
  let view = plus.webview.getWebviewById(id);
  let eventType = 'event';
  view &&
  view.evalJS(`
  document.dispatchEvent(new CustomEvent("${eventType}", {
    detail:${JSON.stringify(data)},
    bubbles: true,
    cancelable: true
  }));`)
}

export function toGoodsDetail(goodsId) {
  open('shop.goods_detail', { popGesture: 'close' }, { goodsId })
}

export function toIndex() {
  let current = plus.webview.currentWebview();
  setTimeout(() => {
    plus.webview.close(current.id);
  }, 300);
  let launch = plus.webview.getLaunchWebview();
  launch.show();
}
