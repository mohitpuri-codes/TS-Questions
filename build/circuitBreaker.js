function circuitBreaker(myFn, tries, time) {
  return new Promise((resolve, reject) => {
    tries--;
    if (tries) {
      myFn.resolve("tries", tries);
    }
  });
}
