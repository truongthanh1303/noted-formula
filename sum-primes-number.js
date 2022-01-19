// follow the Sieve of Eratosthenes algorithm (https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

function sumPrimes(num) {
  // initialize primes data
  let primes = Array(num + 1).fill(true);
  // 0 & 1 is not a prime
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.reduce((sum, isPrime, index) => {
    return isPrime ? sum + index : sum
  }, 0);
}

sumPrimes(10);
