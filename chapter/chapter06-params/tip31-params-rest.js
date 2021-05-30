// 나머지 매개벼수를 이용 -> 개수를 알 수 없는 다수의 매개변수를 전달하는 방법

function validateCharacterCount(max, items) {
    // 모든 배열의 조건이 참일 경우에만 true 반환
    return items.every(item => item.length < max);
}

/*// try/catch 를 이용한 사용법 예시
try {
// START:typeerror
    validateCharacterCount(10, 'wvoquine');
// TypeError: items.every is not a function
// END:typeerror
} catch (e) {

}*/

console.log(validateCharacterCount(10, ['Hobbs', 'Eagles']));

// validateCharacterCount 은 함수 사용자에게 특정한 컬렉션(배열) 형식을 강제


// arguments -> 전달된 매개변수를 idx(문자) : value 형식의 객체로 전달 -> 객체를 전달 하기 때문에 배열 변환이 필요할 수 있음
function getArguments1() {
    return arguments;
}

console.log('arguments : ', getArguments1('Bloomsday', 'June 16'));

// { '0': 'Bloomsday', '1': 'June 16' }


function validateCharacterCount(max) {
    const items = Array.prototype.slice.call(arguments, 1); // <label id="rest.arguments" />
    console.log(items)
    return items.every(item => item.length < max);
}

console.log(validateCharacterCount(10, 'wvoquie'));
// true

const tags = ['Hobbs', 'Eagles'];
console.log(validateCharacterCount(10, ...tags));
// true


// arguments 객체를 다루는 문법이 난해함 -> 나머지 매개변수 사용

function getArguments2(...args) {
    return args;
}

console.log('rest params : ', getArguments2('Bloomsday', 'June 16'));
console.log('rest params : ', getArguments2(['Bloomsday', 'June 16']));

function validateCharacterCount2(max, ...items) {
    return items.every(item => item.length < max);
}

console.log('\'wvoquie\'', validateCharacterCount2(10, 'wvoquie'));
console.log('[\'wvoquie\']', validateCharacterCount2(10, ...['wvoquie']));

const tags2 = ['Hobbs', 'Eagles'];
console.log('[\'Hobbs\', \'Eagles\']' ,validateCharacterCount2(10, ...tags2));

console.log('\'Hobbs\', \'Eagles\'' ,validateCharacterCount2(10, 'Hobbs', 'Eagles'));


// 나머지 매개변수를 디버깅에서 사용 -> 콜백함수에서 검사 중인 항묵의 순서와 전체 컬렉션을 전달받고 있는 것을 확인 가능
// 밑에서는 map()의 예를 들었으나 다른 method 에서 다른 방법으로는 확인하기 어려운 매개변수를 찾는데 유용하다.
function debug() {
// START:debug
    ['Spirited Away', 'Princess Mononoke'].map((film, ...other) => {
        console.log('film', film)
        console.log('...other', other);
        return film.toLowerCase();
    });
    // [0, ['Spirited Away', 'Princess Mononoke']]
    // [1, ['Spirited Away', 'Princess Mononoke']]
// END:debug
}

console.log(debug())


// 펼침 연산자와 마찬가지로 부수 효과를 제거하면서 일반적인 배열 메서드를 만들 떄 사용
function shift() {
    const queue = ['stop', 'collaborate', 'listen'];
    const [first, ...remaining] = queue;
    first;
    // 'stop'
    remaining;
    // ['collaborate', 'listen'];
    return [first, remaining];
}

console.log('shift', shift())
