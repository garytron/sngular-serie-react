export class Serie {
  private n: number;

  constructor(n: number) {
    this.n = n;
  }

  public getTriangular(): number {
    return ((this.n + 1) * (this.n + 2)) / 2;
  }

  public getFibonacci(): number {
    const fib = [0, 1];
  
    for (let i = 2; i <= this.n; i++) {
      fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[this.n];
  }

  public isPrime(n: number): number {
    if(n <= 1) return 0;
  
    for(let i = 2; i < n; i++) {
      if(n % i === 0) return 0;
    }
    
    return n;
  }

  public getPrime() : number {
    if (this.n < 1) {
      return 0;
    }
  
    let count = 0;
    let num = 1;
  
    while (count < this.n) {
      num++;
      if (this.isPrime(num)) {
        count++;
      }
    }
  
    return num;
  }

  public calculate(): number {
    //This method calculates the serie.
    //Serie equation is following: serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n+1);
    const result: number = (-3 * this.getPrime()) - this.getFibonacci() + (5 * this.getTriangular());

    return result;
  }
}