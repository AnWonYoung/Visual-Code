// 첫번째
function clklogin() {
    var textId = document.getElementById('ID');
    console.log('ID.value');
    var pwId = document.getElementById('PW');
    console.log('PW.value');
    if(ID.value === '' || PW.value === '') {
        alert('로그인을 할 수 없습니다.');
        return;
    }
}
// 두번째
function join() {
    var pwElem1 = document.getElementById('pw1');
    console.log('pwElem1.value');
    var pwElem2 = document.getElementById('pw2');
    console.log('pwElem2.value');
    var idElem = ducument.getElementById('Id');
    console.log('idElem.value');

    if(pwElem1.value !== pwElem1.value) {
        alert('비밀번호를 확인해 주세요.')
        return;
    }

    if(pwElem2.value === '') {
        alert('')
    }
    if(idElem.value === '' || pwElem1.value === '' || pwElem2.value === '') {
        alert('회원가입을 할 수 없습니다.');
        return;
    }
location.href = 'login.html';


function goToBack() {
            history.back();
        }
}
