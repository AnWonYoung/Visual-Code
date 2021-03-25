// 첫 번째 문제 로그인
function clklogin() {
    // console.log('Id값: ' + textId.value);    가능하지만 불안정함
    var textId = document.getElementById('textId').value;
    console.log('textId.value');
    var textPw = document.getElementById('textPw').value;
    console.log('textPw.value');

    if(textId === '' || textPw === '') {
        alert('로그인을 할 수 없습니다.')
        return;
    }
    location.href = 'main.html'
}  

// 두 번째 문제 가입
function memberjoin() {
    var textId1 = document.getElementById('textId1').value;
    console.log('textId1.value');
    var textPw1 = document.getElementById('textPw1').value;
    console.log('textPw1.value');
    var textPwr = document.getElementById('textPwr').value;
    console.log('textPwr.value');
    if(textId1 === '' || textPw1 === '' || textPwr === '') {
        alert("회원가입을 할 수 없습니다.");
        return;
    }
    // location.href = ''

    if(textPw1 !== textPwr) {
        alert('비밀번호를 확인해주세요.');
        return;
    }
    location.href = 'main.html' // 로그인으로 가야 정답
}