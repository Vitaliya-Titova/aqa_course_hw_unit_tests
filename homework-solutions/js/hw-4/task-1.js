/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000,
  и значение "junior" - если меньше

  */

//var 1
  let salary = 1000;
  let grade;
  
  if (salary >= 1000){
        grade = 'middle'
  } else { 
     grade = 'junior'
    };
    console.log (grade);

//var2 - тернарное ветвление. В лекции это с 1:06
//условие ? выражение_если_true : выражение_если_false
let grade2 = salary >= 1000 ? 'middle': 'junior'
console.log (grade2);

