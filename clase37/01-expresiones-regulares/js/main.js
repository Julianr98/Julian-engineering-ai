// https://regex101.com/
// Elegir ECMAScript en FLAVOR

// Forma declarativa tipo objeto
// const finalTexto = 'la';
// const texto = 'h' + 'o' + finalTexto;
// const pruebaRegExp = new RegExp(texto);
// const pruebaRegExp = new RegExp('abc');
// const pruebaRegExp = new RegExp('abc', 'i');

// Forma declarativa de tipo literal
const pruebaRegExp = /abc/i;

console.log(pruebaRegExp);

console.log(pruebaRegExp.test(''));                 // false
console.log(pruebaRegExp.test(' '));                // false
console.log(pruebaRegExp.test('hola, qué tal?'));   // false
console.log(pruebaRegExp.test('a b c'));            // false

console.log(pruebaRegExp.test('abc'));              // true
console.log(pruebaRegExp.test('ABc'));              // true
console.log(pruebaRegExp.test('abC'));              // true
console.log(pruebaRegExp.test('-abc?'));            // true
console.log(pruebaRegExp.test('aBCdef'));           // true
console.log(pruebaRegExp.test('ZZZ....ABC####zz')); // true

console.log('-------------------');

if (/hola/.test('hola')) {  // true
    console.log('sip');
} else {
    console.log('nop');
}

if (/hola/.test('hOLa')) {  // false
    console.log('sip');
} else {
    console.log('nop');
}

if (/hola/i.test('hOLa')) { // true
    console.log('sip');
} else {
    console.log('nop');
}

if (/hola/i.test('chau')) { // false
    console.log('sip');
} else {
    console.log('nop');
}

console.log('-------------------');
// const texto = 'textooxyzooooo';
// const contieneXYZ = /xyz/i.test(texto) ? 'SÍ' : 'NO';
// console.log(contieneXYZ);

// true
console.log(    /xyz/i.test('xyz')                          ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('holaxyz')                      ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('holaxyzhola')                  ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('XYZXYZhola----.asdf.asdfxyz')  ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('......xyz')                    ? 'SÍ' : 'NO');

// false
console.log(    /xyz/i.test('...')                          ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('x')                            ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('hola')                         ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('zzz')                          ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('......x....y....z')            ? 'SÍ' : 'NO');
console.log(    /xyz/i.test('......x....yz')                ? 'SÍ' : 'NO');


/*

Expresión:
/a/
a
aaaaaa
abc
hola hola hola
hola
xyzabc



Expresión:
/a/i
a
aaaaaa
abc
Abc
hola hola hola
holA
xyzabc


Expresión:
/ab./i
abc
xabz
1211ab4
ab?
ab-hola
AbCx
aB.


Expresión:
/a.c/i
abc
a-c
A.c
a1C
......a-cxx
a1c
a C


Expresión:
/a...c/i
AXYZC
a@12c
xxxxAqqqc123
a   c


Expresión:
/./
a
aa
abc
hola
a b c
        <-- espacio

Expresión:
/1.2/
1-2
1@2
122
1 2


Expresión:
/1\.2/
1.2
201.23
111.2z


Expresión:
/1\/2/
1/2
bla1/2zzz


Expresión:
/\//
1/2
/
100/4
10////
x/z


Expresión:
/.\/./
1/2
100/4
10////
x/z


Expresión:
/\\/
hola\z
\
a\z


Expresión:
/^hola/i
hola
holaaaa
hOLA1234567
hola   


Expresión:
/hola$/
hola
123hola
...xyzhOLA
xxxxhola


Expresión:
/^hola$/i
hola
holA
HolA


Expresión:
/^hola..$/i
hola12
holA !
HolA@@
hola-#


Expresión:
/hola{4}$/i
xholaAaA
xxxHolAAAA
---holaaaa
.holAAaa


Expresión:
/^hola{4}$/i
holaAaA
HolAAAA
holaaaa
holAAaa


Expresión:
/^(hola){3}$/i
holaHOlahoLa
HOlaholahola
holAHOLAHoLa


Expresión:
/^(hola){2,5}$/i
holaHOla
HOlaholahola
holAHOLAHoLahOlA
holaHOLAhOlAhOlaHola


Expresión:
/^grito!{0,5}$/i
grito
grito!
grito!!
grito!!!
grito!!!!
grito!!!!!


Expresión:
/^grito!{3,5}$/i
grito!!!
grito!!!!
grito!!!!!


Expresión:
/^grito!{3,}$/i
grito!!!
grito!!!!
grito!!!!!
grito!!!!!!!
grito!!!!!!!!!!
grito!!!!!!!!!!!!!!!



Expresión:
/^grito!{0,1}$/i
gRito
gRito!


Expresión:
/^grito!?$/i
gRito
gRito!



Expresión:
/^grito!{0,}$/i
gRito
gRito!
gRito!!!!
gRito!!!!!!!!


Expresión:
/^grito!*$/i
gRito
gRito!
gRito!!!!
gRito!!!!!!!!


Expresión:
/^grito!{1,}$/i
gRito!
gRito!!!!
gRito!!!!!!!!


Expresión:
/^grito!+$/i
gRito!
gRito!!!!
gRito!!!!!!!!


/^grito.{1,}$/i
gRito!
gRito-
gRito.
gRito123
gRitofdssfdsfdfdsfdsfdsfds!
grito               <-- espacio " " al final
gRito*
gRito!!!!
gRito!!!!!!!!


/^grito.{1,}$/i
gRito!
gRito-
gRito.
gRito123
gRitofdssfdsfdfdsfdsfdsfds!
grito               <-- espacio " " al final
gRito*
gRito!!!!
gRito!!!!!!!!


/^grito/i
gRito
gRito!
gRito-
gRito.
gRito123
gRitofdssfdsfdfdsfdsfdsfds!
grito               <-- espacio " " al final
gRito*
gRito!!!!
gRito!!!!!!!!


/[qwerty]/i
aaaqzzz
aaaWzzz
eaaazzz


/^[qwerty]$/i
q
w
e
r
t
y


/^..[qwerty]$/i
--q
--w
 .e
llr
12t
rty


/^[xyz][abc]$/i
xa
xb
xc
ya
yb
yc
za
zb
zc


/^[xyz][abc]{2}$/i
xac
xbc
xcc
yaa
yba
ycc
zaa
zba
zcc


/^([xyz][abc]){2}$/i
xazc
xbya
xcyb
yayc
ybza
yczb
zaxc
zbxa
zcxb


/^([xyz][abc]){2}@hola$/i
xazc@hola
xbya@hola
xcyb@hola
yayc@hola
ybza@hola
yczb@hola
zaxc@hola
zbxa@hola
zcxb@hola


/^([xyz][abc]){2}@Hola..$/i
xazc@hola1-
XBYA@HOLA !
Xcyb@Holazz
xcyb@Holazz
yayc@Hola12
ybza@HOLAAA
YCZB@HOLAAA
zaxc@holax.
zbxa@hola!?
zcxb@hola#_


/^([xyz][abc]){2}@Hola..$/
xazc@Hola1-
xcyb@Holazz
yayc@Hola12



/^[xyzXYZ]a$/
xa
Xa
ya
Ya
za
Za


/^[xyzXYZ]a$/i
xa
Xa
ya
Ya
za
Za


/^[abcd]-!.$/
a-!.
b-!r
c-!R
d-!z
a-! 
b-!4
c-!-
d-!"


/^[a-d]-!.x$/
a-!.x
b-!rx
c-!Rx
d-!zx
a-! x
b-!4x
c-!-x
d-!"x


/^[A-D]-!.x$/
A-!.x
B-!rx
C-!Rx
D-!zx
A-! x
B-!4x
C-!-x
D-!"x


/^[a-dA-D]-!.x$/
a-!.x
b-!rx
C-!Rx
d-!zx
A-! x
b-!4x
C-!-x
d-!"x


/^[a-zA-Z]{2,4}$/
ar
dK
DFd
fRs
aZr
dZK
DdFd
fRRs
fHol
holA


/^[a-zA-Z@]{2,4}$/
ar
@K
D@d
fRs
aZr
@ZK
D@@@
@@Rs
fHol
holA


/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,4}$/
ár
Ko
Ddí
ÉRs
úñÑ
üÜr
ñZK
Hola
Arbo
ÉeIo
holA


/^[a-zA-Z0-9_.-]{4,10}$/
aA4.
_-r2
__A0
01a-
--_1


/^[a-zA-Z0-9_]{4,10}$/
JRomero
jromero
jromero123
j_romero1
lPerez2_2
_A1l2a3n_


/^\w{4,10}$/
JRomero
jromero
jromero123
j_romero1
lPerez2_2
_A1l2a3n_



/^[a-zA-Z0-9_]hola.{3}$/
ahola111
zhola---
1holaxyz
2hola...
Thola.!@
4holaabc
_hola123


/^\whola.{3}$/
ahola111
zhola---
1holaxyz
2hola...
Thola.!@
4holaabc
_hola123


(niega)
/^[^a-zA-Z0-9_]hola.{3}$/
*hola111
 hola---
!holaxyz
.hola...
#hola.!@
-holaabc
"hola123


(niega)
/^\Whola.{3}$/
*hola111
 hola---
!holaxyz
.hola...
#hola.!@
-holaabc
"hola123


/^#[0-9]{3}-\w{2}$/
#123-ds
#456-z2
#777-Z2
#012-__
#000-4_


/^#\d{3}-\w{2}$/
#123-ds
#456-z2
#777-Z2
#012-__
#000-4_


(niega)
/^#[^0-9]{3}-\w{2}$/
#abc-ds
####-z2
#   -Z2
#.z!-__
#"!@-4_


(niega)
/^#\D{3}-\w{2}$/
#abc-ds
####-z2
#   -Z2
#.z!-__
#"!@-4_



/^[xtz]hola@$/
xhola@
thola@
zhola@


/^(x|t|z)hola@$/
xhola@
thola@
zhola@


/^(argentina|colombia|uruguay)hola@$/
argentinahola@
colombiahola@
uruguayhola@



^(argentina|colombia|[a-c]{1,3})hola@$
argentinahola@
colombiahola@
ahola@
bhola@
chola@
abhola@
bbchola@
ccahola@



*/