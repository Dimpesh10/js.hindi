console.log(null>0);
console.log(null>=0);
console.log(null<=0);
console.log(null==0);

/*
The reason for this is that an equality check == and comparision >= <= == > < works differently 
comparison convert null to number,treating it as 0
thats why statement 3 and 2 are giving true and 1 is giving false
as == works differently it is giving false(simple) 
*/

/*
so to avoid these conversion mistake we use === instead of == 
triple = means that both lhs and rhs should be equal and there datatype should also be equal

*/
