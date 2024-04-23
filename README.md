# Fundamentos de programación
## Inicio
El código es la solución planteada de como resolver el problema.

## AND

|   A  | B    |AND|
| --- | --- |--- |
|1|0|0|
|0|1|0|
|0|0|0|
|1|1|1|

## OR

|A|B|OR|
|-|-|-|
|1|0|1|
|0|1|1|
|1|1|1|
|0|0|0|

## XOR - exclude OR

Hector ó Ana -> Hector y Ana(NO)<br>
Hector y/o Ana -> Hector y Ana(SI)

|A|B|XOR|
|-|-|-|
|1|1|0|
|0|1|1|
|1|0|1|
|0|0|0|

0 FALSE<br>
1 TRUE

SUMA:(acarreo)
1<br>
15<br>
15<br>
---<br>
30


1. Sistema decimal -> 10 simbols -> 0-9<br>
2. Sistema Binario -> 2 simbolos -> 0-1<br>
  
15+15<br>
1.- Convertir en |0|1|<br>
2.- Suma binario

19(10)->01010101010 (2)<br>

19/2 = 9 [1]<br>
9/2 = [1]<br>
4/2 = 2 [0]<br>
2/2 = 1 [0]<br>
1/2 = 0 [1]<br>

19 -> 10011<br>

### en un array<BR>
[1,0,0,1,1] -> JOIN -> 10011

24/2 = 12 [0]<br>
12/2 = 6 [0]<br>
6/2 = 3 [0]<br>
3/2 = 1 [1]<br>
1/2 = 0 [1]<br>

24 -> 11000<br>

### suma
1
19<br>
24<br>
---<br>
43

- Conbinacion de AND y XOR ->Halft Adder<br>
- Primero un and(acarreo) y luego un xor(suma)<br>

10011<br>
11000<br>
-------<br>
desarrollo
<<<<<br>
110011<br>
011000<br>
-------<br>
101011


1 AND 0 = 0 > no hay acarreo
1 XOR 0 = 1 

1 AND 1 = 1 > hay acarreo
1 XOR 1 = 0 

## Simbolos del sistema
cada sistema utiliza sus propios simbolos
- Decimal -> 0,1,2,3,4,5,6,7,8,9
- Binario -> 0,1
- Quinario -> 0,1,2,3,4
- Octal -> 0,1,2,3,4,5,6,7
- Hexadecimal -> 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F


Binario -> Decimal

1 BYTE -> 8 POSICIONES -> 8 BITS

0, 0, 1, 0, 1, 0, 1, 1<br>
--,--,--,--,--,--,--,--  
7, 6, 5, 4, 3, 2, 1, 0

SUMATORIA(2 ^ POSICIÓN * VALOR)<br>
[2 ^ 0 * 1] + [ 2 ^ 1 * 1] + [2 ^ 2 * 0] + [2 ^ 3 * 1] + [2 ^ 4 * 0] + [2 ^ 5 * 1]<br>
1 * 1 + 2 * 1 + 4 * 0 + 8 * 1 + 16 * 0 + 32 * 1  <br>

1+2+0+8+0+32 = 43
