/**
 * 防止多次跳转
 * */
/* eslint-disable */
let isCalled = false
let timer

export default (callOnceInInterval = (functionTobeCalled, interval = 600) => {
  if (!isCalled) {
    isCalled = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      isCalled = false
    }, interval)
    return functionTobeCalled()
  }
})
