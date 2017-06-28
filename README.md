# Small programs and poc modules

## runner and faculty
`node run_faculty.js 5` will return **faculty(5): 120**

`node run_fibonacci.js 5` will return **fibonacci(5): 8**


### Results for recursive method:

$ time node run_fibonacci.js 20
fibonacci(20): 10946

real    0m0.095s
user    0m0.096s
sys     0m0.000s

$ time node run_fibonacci.js 30
fibonacci(30): 1346269

real    0m0.154s
user    0m0.144s
sys     0m0.012s

$ time node run_fibonacci.js 35
fibonacci(35): 14930352

real    0m0.370s
user    0m0.364s
sys     0m0.004s

$ time node run_fibonacci.js 40
fibonacci(40): 165580141

real    0m2.499s
user    0m2.492s
sys     0m0.004s

$ time node run_fibonacci.js 45
fibonacci(45): 1836311903

real    0m26.599s
user    0m26.596s
sys     0m0.000s

$ time node run_fibonacci.js 46
fibonacci(46): 2971215073

real    0m46.861s
user    0m46.856s
sys     0m0.000s

$ time node run_fibonacci.js 47
fibonacci(47): 4807526976

real    1m11.707s
user    1m11.684s
sys     0m0.008s

$ time node run_fibonacci.js 48
fibonacci(48): 7778742049

real    1m56.675s
user    1m56.664s
sys     0m0.000s

time node run_fibonacci.js 49
fibonacci(49): 12586269025

real    3m31.186s
user    3m31.152s
sys     0m0.016s


### Results for loop method
time node run_fibonacci2.js 40
fibonacci2(40): 165580141

real    0m0.119s
user    0m0.108s
sys     0m0.012s

$ time node run_fibonacci2.js 50
fibonacci2(50): 20365011074

real    0m0.110s
user    0m0.096s
sys     0m0.012s

$ time node run_fibonacci2.js 80
fibonacci2(80): 37889062373143900

real    0m0.121s
user    0m0.100s
sys     0m0.020s