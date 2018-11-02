// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const timeStart = Date.now();
  let delayedTime = 0;
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      delayedTime = Date.now() - timeStart;
      if (delayedTime >= (time - 100) && delayedTime <= (time + 100)) {
        clearInterval(interval);
        resolve(delayedTime);
      }
    }, 100);
  });
}

export function asyncDelay() {

}
