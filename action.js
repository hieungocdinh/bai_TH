var btnConfirmInf = document.getElementById('btn-confirm-inf');
var btnConfirmAns = document.getElementById('btn-confirm-ans');
var formInf = document.querySelector('.infomation');
var formSurvey = document.querySelector('.question');
var formResult = document.querySelector('.result');

btnConfirmInf.addEventListener('click', function() {
    formInf.style.display = 'none';
    formSurvey.style.display = 'block';
});

btnConfirmAns.addEventListener('click', function() {
    formSurvey.style.display = 'none';
    formResult.style.display = 'block';
});