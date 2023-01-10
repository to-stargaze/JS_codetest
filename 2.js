//크기가 작은 부분 문자열
function solution(t, p) {
    var answer = 0;
    var len = p.length;
    for(var i = 0;i<t.length-len+1;i++){
        var newt = t.slice(i,i+len)
        if(+newt <= +p) answer++;
    }
    return answer;
}