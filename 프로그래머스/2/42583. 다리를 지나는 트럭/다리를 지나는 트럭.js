function solution(bridge_length, weight, truck_weights) {
    let time = 0;  // 시간을 추적
    let bridge = Array(bridge_length).fill(0);  // 다리 위에 있는 트럭들의 배열 (트럭의 무게로 채움)
    let currentWeight = 0;  // 다리 위의 총 무게

    while (truck_weights.length > 0 || currentWeight > 0) {
        time++;  // 1초 경과
        
        // 다리 위에서 트럭이 지나갔으면 그 무게를 빼기
        currentWeight -= bridge.shift();
        
        // 다리 위에 트럭을 올릴 수 있으면 올리기
        if (truck_weights.length > 0 && currentWeight + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();  // 트럭 하나 꺼내기
            bridge.push(truck);  // 다리 위에 트럭 추가
            currentWeight += truck;  // 현재 다리 위의 무게 갱신
        } else {
            bridge.push(0);  // 트럭이 지나가서 빈 공간을 만들어줌
        }
    }

    return time;
}