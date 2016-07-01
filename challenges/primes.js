/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/
var testPrime = function test_prime(number) {

  if (number === 1) {
    return false;
  }
  else if(number === 2) {
    return true;
  }
  else {
    for(var i = 2; i < number; i++)
    {
      if (number % i === 0)
      {
        return false;
      }
    }
    return true;
  }
};

function prime(max) {
  for (i=max; i>0; i--) {
  if (testPrime(i) === true) {
    console.log(i);
  }

}
}

// var primeList = [];
// function primeList(num) {
//   var number = num;
//   for (i=num; i>0; i--) {
// function isPrime(number)
// {
//   if (number===1)
//   {
//     return push.primeList(false);
//   }
//   else if(number === 2)
//   {
//     return push.primeList(true);
//   }
//   else
//   {
//     for(var i = 2; i < n; i++)
//     {
//       if(number % i === 0)
//       {
//         return push.primeList(false);
//       }
//     }
//     return push.primeList(true);
//   }
// }
// }
// }
//
//
// // console.log(primeList);
