## JSX 문법
1. className

<div class="APP"></div> x
<div className="APP"></div> 0

2. 변수 꽃을 땐 중괄호 문법 {변수명}
let post = 'test';   
<h3 id={post}>{post}</h3>   

3. style 넣을 때
 style={{이름:'값', 이름2:'값2'}}

## useState

1. 
let data1 = [1,2,3];   
let data2 = data1;   
console.log(data1 === data2);   
true   
- 메모리에 할당된 주소 값의 복사 한 것이라 true   

2. 
let data1 = [1,2,3];   
let data2 = [...data1];   
console.log(data1 === data2)   
false   
- date2가 data1을 복사하여 메모리에 할당시 주소 값을 새로 생성하여 false   

3. 
let data1 = [1,2,3];   
let data2 = data1;  //복사   
data2[0] = 1000;  //data2 내부 변경   
console.log(data2 === data1)   
true   
- 주소 값이 같아서 true   
