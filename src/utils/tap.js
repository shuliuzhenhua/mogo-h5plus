/**
 * 部分页面与fastclick 冲突所以使用这个
 * @param ele
 * @param callback
 */
export function tap (ele, callback) {
  let start = 0,
    delay = 200, // 时间限制避免长按
    moved = false; // 是否发生滑动
  ele.addEventListener("touchstart", function(e){
    moved = false; // 滑动标识置为false
    start = +new Date(); // 开始计时
  });
  ele.addEventListener("touchmove", function(e){
    moved = true; // 滑动标识置为true
  });
  ele.addEventListener("touchend", function(e){
    if(moved) return; // 滑动则不触发tap
    let cur = +new Date();
    if(cur - start > delay) return; // 长按超时则不触发tap
    callback(e); // 触发tap
  });
}
