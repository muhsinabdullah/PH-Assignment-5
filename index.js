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

// Call Buttons Functions
const coinCount = document.getElementById('coin-count');

let coins = 100;

const callHistoryContainer = document.getElementById('call-history');

const callButtonIds = [
    "call-btn-1",
    "call-btn-2",
    "call-btn-3",
    "call-btn-4",
    "call-btn-5",
    "call-btn-6",
    "call-btn-7",
    "call-btn-8",
    "call-btn-9"
]

const services =[
    {name: 'National Emergency Number', number: '999'},
    {name: 'Police Helpline Number', number: '999'},
    {name: 'Fire Service Number', number: '999'},
    {name: 'Ambulance Service', number: '1994-999999'},
    {name: 'Women & Child Helpline', number: '109'},
    {name: 'Anti-Corruption Helpline', number: '106'},
    {name: 'Electricity Helpline', number: '16216'},
    {name: 'Brac Helpline', number: '16445 '},
    {name: 'Bangladesh Railway Helpline ', number: '163'},
];

callButtonIds.forEach(function(id, index){
    const btn = document.getElementById(id);

    btn.addEventListener('click', function(){
        const service = services[index];

        if (coins < 20){
            alert('Not Enough Coins To Make This Call');
            return;
        }
    coins -= 20;
    coinCount.textContent = coins;

    const now = new Date();
    const time = now.toLocaleTimeString();

    const historyItem = document.createElement('div');
    historyItem.style.display = 'flex';
    historyItem.style.justifyContent = 'space-between';
    historyItem.style.borderBottom = '1px solid #ccc';
    historyItem.style.padding = '5px 0'
    
    const left = document.createElement('div');
    left.innerHTML = `
    <strong>${service.name}</strong> <br>
    <strong>${service.number}</strong>
    `
    left.style.marginRight = '27px';
    const right = document.createElement('div');
    right.textContent= time;
    right.style.textAlign = 'right';

    historyItem.appendChild(left);
    historyItem.appendChild(right);

    callHistoryContainer.appendChild(historyItem);
    });
});

// Clear Call History
const clearHistoryBtn = document.getElementById('clear-history-btn');
clearHistoryBtn.addEventListener('click', function(){
    callHistoryContainer.innerHTML = '';
});

// Copy Button Functionality
const copyCountEl = document.getElementById('copy-count');

let copyCount = 0;

function copyNumber(btnId, number){
    const btn = document.getElementById(btnId);
    btn.onclick = function(){
        navigator.clipboard.writeText(number);
        alert("Hotline Number" + number + "copied!")
        copyCount++;
        copyCountEl.textContent = copyCount;
    }
}

copyNumber("copy-btn-1", "999");
copyNumber("copy-btn-2", "999");
copyNumber("copy-btn-3", "999");
copyNumber("copy-btn-4", "1994-999999");
copyNumber("copy-btn-5", "109");
copyNumber("copy-btn-6", "106");
copyNumber("copy-btn-7", "16216");
copyNumber("copy-btn-8", "16445");
copyNumber("copy-btn-9", "163");