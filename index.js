// Heart Button Count Function
const heartCount = document.getElementById('heart-count');

let count = 0;

const heartButtonIds = [
    'heart-btn-1',
    'heart-btn-2',
    'heart-btn-3',
    'heart-btn-4',
    'heart-btn-5',
    'heart-btn-6',
    'heart-btn-7',
    'heart-btn-8',
    'heart-btn-9'
]
heartButtonIds.forEach(function(id){
    const btn = document.getElementById(id);
    btn.addEventListener("click", function(){
        if (btn.style.color === 'red'){
            btn.style.color = '';
            count--;
        }else{
            btn.style.color = 'red';
            count++;
        }
        heartCount.textContent = count;
    });
});