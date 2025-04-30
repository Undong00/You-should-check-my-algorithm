function solution(a, b) {
    // let result = new Date(2016,5,24)
    let w = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let date = new Date(`2016-${a}-${b}`)
    let day = date.getDay()
    return w[day]
}