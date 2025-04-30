function solution(genres, plays) {
    const genrePlayCount = {};
    const genreToSongs = {};

    // 1. 장르별 총 재생 수와 곡 정보 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        // 총 재생 수 누적
        genrePlayCount[genre] = (genrePlayCount[genre] || 0) + play;

        // 각 장르별 노래 정보 저장 (재생 수, 고유 번호)
        if (!genreToSongs[genre]) genreToSongs[genre] = [];
        genreToSongs[genre].push({ play, index: i });
    }

    // 2. 장르를 총 재생 수 기준으로 내림차순 정렬
    const sortedGenres = Object.entries(genrePlayCount)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

    const result = [];

    // 3. 각 장르에서 노래를 재생 수 ↓, 고유 번호 ↑ 순으로 정렬 후 상위 2곡 선택
    for (const genre of sortedGenres) {
        const songs = genreToSongs[genre];

        songs.sort((a, b) => {
            if (b.play !== a.play) return b.play - a.play;
            return a.index - b.index;
        });

        // 상위 2곡까지 수록
        result.push(songs[0].index);
        if (songs.length > 1) {
            result.push(songs[1].index);
        }
    }

    return result;
}
