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
    alert('Cảm ơn bạn đã tham gia khảo sát! Bài khảo sát của bạn đã được gửi đến chúng tôi! Bạn có thể xem câu trả lời của mình ở dưới đây.');
});
