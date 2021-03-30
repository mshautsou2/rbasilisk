import { Candidate } from "../types/candidate.interface";

class I0Candidate implements Candidate {

    passParameters(input) {
        return input.split('')
    }
}

/*



GEN_T(a, b) -> 


T(a, b, c) = a b -> c

T(1 2 3)

T(3 4 7)
T(4 3 7)

SWAP(T)
T(a b c)
T(b a c)



2 4 => T(2 4 ?)



000|0X0|000

Q: 100|0X0|000
A: 100|000|000
GOOD
--------------

Q: 000|0X0|000
A: 001|000|000
NORMAL
--------------

Q: 000|0X0|000
A: 001|000|000
NORMAL
--------------



Q: 100|0X0|000
A: 100|000|000
GOOD

(a,0)(a,1)(a,2)|(a,3)(a,4)(a,5)|(a,6)(a,7)(a,8)
(b,0)(b,1)(b,2)|(b,3)(b,4)(b,5)|(b,6)(b,7)(b,8)

(a,0)=1
(b,0)=1
=> GOOD

(a, 2)=1
(b, 2)=1
=>GOOD

COMBINE
(a, x)=1
(b, x)=1
=> GOOD?



a b
?

2 3
0


a b ->
c

a+b ->

8+3|1
11
1+3|2

8+3|1
1+3|2

p(a, b, c)=a+b
p(8, 3, c)

Hello! how are you?
a

a+b
c
d+

*/
