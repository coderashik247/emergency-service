const hearts = document.getElementsByClassName("fa-heart");

const countHeartElement = document.getElementById('count-heart');

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', function () {
    let currentCount = Number(countHeartElement.innerText);
    countHeartElement.innerText = currentCount + 1;
  });
}

const callButtons = document.getElementsByClassName('call-btn');

const countCoinElement = document.getElementById('count-coin');

const callHistoryContainer = document.getElementsByClassName('call-history')[0];

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener('click', function () {

    let currentCoin = Number(countCoinElement.innerText);

    if (currentCoin < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।");
      return;
    }

    countCoinElement.innerText = currentCoin - 20;

    let card = callButtons[i].parentNode;
    while (card && !card.classList.contains('card')) {
      card = card.parentNode;
    }

    const serviceName = card.getElementsByTagName('h3')[0].innerText;
    const serviceNumber = card.getElementsByTagName('h2')[0].innerText;

    alert(`📞 Calling ${serviceName} at ${serviceNumber}...`);

    const historyItem = document.createElement('div');
    historyItem.className = "shadow-sm p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-stone-100";

    historyItem.innerHTML = `
      <div>
        <p class="text-lg">${serviceName}</p>
        <p class="text-lg text-[#5c5c5c]">${serviceNumber}</p>
      </div>
      <p class="text-lg">${new Date().toLocaleTimeString()}</p>
    `;

    callHistoryContainer.appendChild(historyItem);
  });
}

const clearBtn = document.getElementById('clear-history');

clearBtn.addEventListener('click', function () {
  const historyItems = callHistoryContainer.getElementsByClassName('shadow-sm');

  for (let i = historyItems.length - 1; i >= 0; i--) {
    historyItems[i].remove();
  }
});

const copyButtons = document.getElementsByClassName('copy-btn'); 
const countCopyElement = document.getElementById('count-copy').querySelector('span'); 

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', function () {

    let currentCount = Number(countCopyElement.innerText);
    countCopyElement.innerText = currentCount + 1;

    let card = copyButtons[i].parentNode;
    while (card && !card.classList.contains('card')) {
      card = card.parentNode;
    }

    const serviceNumber = card.getElementsByTagName('h2')[0].innerText;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`📋 Copied: ${serviceNumber}`);
    }).catch(err => {
      console.error('Failed to copy!', err);
    });
  });
}


