// 1번 문제 로그인
function clklogin() { // 로그인 할 수 없는 창의 함수 생성
    var textId = document.getElementById('textId').value;
    console.log('textId.value');
    var textPw = document.getElementById('textPw').value;
    console.log('textPw.value');
    if(textId === '' || textPw === '') {
        alert('로그인을 할 수 없습니다.');
        return; 
    }
}

// 2번 문제 회원가입
function memberjoin() {
    var textId1 = document.getElementById('textId1').value;
    console.log('textId1.value');
    var textPw2 = document.getElementById('textPw2').value;
    console.log('textPw2.value');
    var textPwr = document.getElementById('textPwr').value;
    console.log('textPwr.value');
    if(textId1 === '' || textPw2 === '' || textPwr === '') {
        alert("회원가입을 할 수 없습니다.");
        return;
    }
    if(textPw2 !== textPwr) {
        alert('비밀번호를 확인해주세요.');
        return;
    }
location.href = 'login.html';
}
