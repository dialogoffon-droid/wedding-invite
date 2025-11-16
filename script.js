const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzrU6KazuDtqin3acjvmoUUFGkrBEcICAV0lBuMX67EtLJ8KnixyNlQ62Tf5gv58IYr/exec";

document.getElementById("rsvpForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new URLSearchParams();
  ["guest_name","guest_surname","coming","coming_alone","guests_names","guests_count"]
    .forEach(id => formData.append(id, document.getElementById(id).value.trim()));
  const resEl = document.getElementById("response");
  resEl.innerText = "Отправляем...";
  try {
    const r = await fetch(SCRIPT_URL, { method: "POST", body: formData });
    const data = await r.json();
    if(data.status==="success"){ resEl.innerText="✅ Ответ сохранён! Спасибо!"; document.getElementById("rsvpForm").reset(); }
    else resEl.innerText="⚠ Ошибка: "+(data.message||"неизвестно");
  } catch(err){ console.error(err); resEl.innerText="❌ Ошибка сети."; }
});

// ====================================
// Плавное появление блоков при скролле
// ====================================
const blocks = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add("visible"); observer.unobserve(entry.target);}
  });
}, { threshold: 0.2 });

blocks.forEach(block => observer.observe(block));
const choiceButtons = document.querySelectorAll(".choice-btn");
const comingSelect = document.getElementById("coming");
const pairBlock = document.getElementById("pair-block");

choiceButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Активная кнопка
        choiceButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const value = btn.dataset.value;
        comingSelect.value = value;

        // Появление блока про пару
        if (value === "with") {
            pairBlock.style.display = "block";
        } else {
            pairBlock.style.display = "none";
            document.getElementById("guests_names").value = "";
        }
    });
});
