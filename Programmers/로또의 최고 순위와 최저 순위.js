/*
1. lottos는 길이 6인 정수 배열
2. lottos의 모든 원소는 0 이상 45 이하인 정수
0은 알아볼 수 없는 숫자
0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않음(0말고 중복없음)
lottos의 원소들은 정렬되어 있지 않을 수도

3. win_nums은 길이 6인 정수 배열
4. win_nums의 모든 원소는 1 이상 45 이하인 정수
win_nums에는 같은 숫자가 2개 이상 담겨있지 않음 (중복없음)
win_nums의 원소들은 정렬되어 있지 않을 수도

5. result는 ~등에서 ~등까지 할 수 있는지를 나타냄
*/

function solution(lottos, win_nums) {
    var answer = [];
    let min = 0;
    let max = 0;
    // 로또에서 일치하는 숫자의 갯수를 구함
    let rightNumLen = lottos.filter(x => win_nums.includes(x)).length;
    // 알 수 없는 숫자의 갯수를 구함
    let zeroNumLen = lottos.filter(x => x === 0).length;

    // 일치하는 숫자에 따라 min값을 지정한다.
    if (lottos.length + 1 - rightNumLen >= 6) {
        min = 6;
    } else {
        min = lottos.length + 1 - rightNumLen;
    }

    if (min - zeroNumLen < 1) {
        max = 1;
    } else {
        max = min - zeroNumLen;
    }
    answer.push(max);
    answer.push(min);

    return answer;
}
