// ================== HEART COUNT ==================
// সবগুলো heart নাও
const hearts = document.getElementsByClassName("fa-heart");

// heart counter element
const countHeartElement = document.getElementById('count-heart');

// প্রতিটি heart এ event listener বসাও
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', function () {
    let currentCount = Number(countHeartElement.innerText);
    countHeartElement.innerText = currentCount + 1;
  });
}

// ================== CALL BUTTON ==================
// সবগুলো call button নাও
const callButtons = document.getElementsByClassName('call-btn');

// Coin display element
const countCoinElement = document.getElementById('count-coin');

// Call History container
const callHistoryContainer = document.getElementsByClassName('call-history')[0];

// প্রতিটি call button এর জন্য loop
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener('click', function () {

    // বর্তমান coin count নাও
    let currentCoin = Number(countCoinElement.innerText);

    // coin check
    if (currentCoin < 20) {
      alert("You don't have enough coins to make this call!");
      return;
    }

    // coin deduct
    countCoinElement.innerText = currentCoin - 20;

    // card element খুঁজে বের করা
    let card = callButtons[i].parentNode;
    while (card && !card.classList.contains('card')) {
      card = card.parentNode;
    }

    // Service info নাও
    const serviceName = card.getElementsByTagName('h3')[0].innerText;
    const serviceNumber = card.getElementsByTagName('h2')[0].innerText;

    // Alert দেখাও
    alert(`📞 Calling ${serviceName} at ${serviceNumber}...`);

    // History তে যোগ করো
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

// ================== CLEAR BUTTON ==================
const clearBtn = document.getElementById('clear-history');

clearBtn.addEventListener('click', function () {
  const historyItems = callHistoryContainer.getElementsByClassName('shadow-sm');

  // HTMLCollection live থাকে, তাই reverse loop ব্যবহার করব
  for (let i = historyItems.length - 1; i >= 0; i--) {
    historyItems[i].remove();
  }
});


 // ================== COPY BUTTON ==================
const copyButtons = document.getElementsByClassName('copy-btn'); // সব Copy button
const countCopyElement = document.getElementById('count-copy').querySelector('span'); // count-copy এর span

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', function () {

    // Copy count বাড়াও
    let currentCount = Number(countCopyElement.innerText);
    countCopyElement.innerText = currentCount + 1;

    // card element খুঁজে বের করা
    let card = copyButtons[i].parentNode;
    while (card && !card.classList.contains('card')) {
      card = card.parentNode;
    }

    // service number নাও
    const serviceNumber = card.getElementsByTagName('h2')[0].innerText;

    // Clipboard এ copy করো
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`📋 Copied: ${serviceNumber}`);
    }).catch(err => {
      console.error('Failed to copy!', err);
    });
  });
}


