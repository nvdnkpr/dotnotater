##dotnotater

Given a dotnotation and an object it returns the portion of the object specifed by the dotnotation.
It can return a value or an object.  It can even retrieve values from an array given an index.


#Examples
```javascript
 var obj = {'a': 1};
 dotnotater(obj,'a') //1

 var obj = {'a': {'hello' : 'world'}};
 dotnotater(obj,'a')//{'hello' : 'world'}

 var obj = {'a': { 'b' : {'hello' : 'world'}}};
 dotnotater(obj,'a.b')//{'hello' : 'world'}

 var obj = {'a': [1,2,3,4,5]};
 dotnotater(obj,'a')//[1,2,3,4,5]

 var obj = {'a': {'b': {'c' : 3 }}};
 dotnotater(obj,'a.b.c')//3

 var obj = {'a': {'b': {'c' : [1,2,3,4,5] }}};
 dotnotater(obj,'a.b.c[0]')//1

 var obj = {'a': {'b': {'c' : [{ 1 :'a'},{2:'b'}] }}};
 dotnotater(obj,'a.b.c[0].1')//'a'
```
