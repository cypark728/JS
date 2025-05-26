/*
하나의 모듈에서 하나의 함수 or 하나의 객체를 내보낼때 
default export 방식을 사용합니다. 
*/

function some() {
    return "hello";
}

class Person {
    name = "홍길동";
    speak() {
        console.log("hello");
    }
}

// export default some; // 불가능! default export 방식은 하나만 내보낼 수 있음
export default Person; 