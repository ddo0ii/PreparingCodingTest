// 3번 모음, 자음 for of로 추출(for in, for of 비교)

/**
    ## 💫 for...of

    ```yaml
    copy javascriptvar arr = [1, 2, 3];

    for (var item of arr) {
    console.log(item);// 1, 2, 3
    }
    ```

    `for...of` 는 배열을 순환할 때 사용된다.

    배열이 아닌 객체에 사용한다면 어떤 결과가 나올까?

    ```yaml
    copy javascriptvar obj = {
    a: 1,
    b: 2,
    c: 3
    };

    for (var item of obj) {
        console.log(item);
    }
    ```

    > Uncaught TypeError: obj is not iterable
    > 

    반복 불가능하다는 TypeError를 뱉어낸다.

    ## 💫 for...in

    ```yaml
    copy javascriptvar obj = {
    a: 1,
    b: 2,
    c: 3
    };

    for (var item in obj) {
    console.log(item)// a, b, c
    }
    ```

    `for...in` 은 객체를 순환할 때 사용된다.

    객체가 아닌 배열에 사용한다면 어떤 결과가 나올까?

    ```yaml
    copy javascriptvar arr = [1, 2, 3];

    for (var item in arr) {
    console.log(item)// 0, 1, 2
    }
    ```

    JavaScript에선 배열도 `Object` 타입으로 인식하기 때문에 결과가 나오긴 나온다.다만 일치하는 값은 아니고 해당 배열의 index가 출력되는 걸 확인할 수 있었다.
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    
    for(let v of s) {
        if(vowels.includes(v))
            console.log(v);
    }
    for(let v of s){
        if(!vowels.includes(v))
            console.log(v);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}