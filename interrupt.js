let cc = null
const testFunc = () => {
  const promise = new Promise((resolve, reject) => {
    cc = resolve
    // resolve('222')
  })
  const longTimePromise = new Promise((r) => setTimeout(() => r('longTime'), 3000))
  Promise.race([promise, longTimePromise])
    .then((res) => console.log('racePromise', res))
}
const cancel = () => {
  console.log('cc=>', cc)
  cc && cc()
}
testFunc()
setTimeout(() => {
  // 阻塞promise
  cancel()
}, 1500)

