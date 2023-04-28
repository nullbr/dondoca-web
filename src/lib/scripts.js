// Force artificial loading time
export function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
