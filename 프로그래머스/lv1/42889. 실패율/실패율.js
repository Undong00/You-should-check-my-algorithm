// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수




// stages 는 1 이상 N + 1 이하의 자연수가 담겨있음.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호
// [2, 1, 2, 6, 2, 4, 3, 3]  => 1 이상 6(N + 1)이하니까 여기서 N 은 5를 의미함
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자 => 5 + 1 = 6 => 6이 마지막까지 클리어한 사람.

// 실패율
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

// N = 5 (전체 스테이지 개수)
// stages = [2, 1, 2, 6(마지막 스테이지까지 클리어한 사용자), 2, 4, 3, 3] (게임 사용자가 멈춰 있는 스테이지 번호) => 1이상 6이하(N:5 + 1)의 자연수
// result =  [3,4,2,1,5]


// N = 4
// stages = [4,4,4,4,4]
// result =  [4,1,2,3]

// 구해야 하는 것: 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 완성.


// stages 요소 중에서 N보다 큰게 있으면 그 큰 요소는 다 깬 사람임.
// N 은 5인데. stages에서 뜬금없이 6이 있어요. 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 즉 저기 있는 6이라는 요소는 마지막까지 클리어 한 사람을 의미함.



// 실패율
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
function solution(N, stages) {
    let calculateBox = []
    for (let i = 1; i < N + 1; i++) {  // N이 1을 가지고 들어간다.
        // 1번 스테이지의 실패율
        let countStay = 0;
        let countAll = 0;  // N 1이 countStay 0이랑 countAll 0 을 가지고 들어감.
        for (let j = 0; j < stages.length; j++) { // [2, 1, 2, 6, 2, 4, 3, 3] 
            if (stages[j] === i) { // 스테이지에 머무르고 있는 인원
                countStay++  /// countStay 0에서 1이 되겠죠?

            }
            if (stages[j] >= i) {
                countAll++ // 스테이지를 맛 본 모든 인원 // 8
            }
        }
        //  countStay / countAll    >>>   1/8
        // [i,  countStay/countAll]  >>> [단계,  그 단계의 실패확률]
        // [[i, countStay / countAll], , , , , ]  >>> [[1, 1/8], [2, 3/7], [3, 2/4], [4, 1/2], [5, 0/1]]
        calculateBox[i - 1] = [i, countStay / countAll]
    }
    // 오름차순이면 a-b  내림차순이면 b-a

    // [1, 2, 3, 4].sort((a, b) => {
    //     b - a   // 리턴이 음수면 앞뒤를 유지해요.   리턴이 양수면 앞뒤를 바꿔요.
    //     if (a < b) return 1
    //     if (a > b) return -1
    //     if (a === b) return 0
    // })


    // [ [1, 1/8],    [2, 3/7],    [3, 2/4],   [4, 1/2],   [5, 0/1]   ]
    // [2, 3/7]   >>>>  [1, 1/8]       
    return calculateBox.sort((a, b) => {                      // Compare(b)    a가 b보다 크면 1을 반환함. 근데 sort 는 1이면 앞뒤를 뒤집음.
        if (a[1] > b[1]) return -1                              // 1.localeCompare(      1/8  <  3/7  >>> a자리보다 b자리가 더 크면 -1을 반환 >>>> -1은 앞뒤를 안뒤집음.
        if (a[1] > b[1]) return -1                              // 1.localeCompare(     3/7 > 1/8     >>> a자리가 b자리보다 더 크면 1을 반환 >>>> 1은 앞뒤를 뒤집음.
        a[1] === b[1] ? a[0].toString().localeCompare(b[0].toString()) : b[1].toString().localeCompare(a[1].toString())
    }).map((ele) => ele[0])
    // console.log([[3, 2/4], [4, 1/2], [2, 3/7],  [1, 1/8] ,[5, 0/1]].map((ele)=> ele[0]))
}

// .toString() 은 분수도 숫자ㅁ잘 바꿔줌

let c = 1/8
console.log(c.toString()) // 0.125


let a = 1;
let b = 2;
console.log(a.toString().localeCompare(b.toString)) // -1