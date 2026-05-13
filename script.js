const courses = [
  { name: "B.Tech / B.E.", desc: "Engineering in CS, Mechanical, Civil, ECE and more.", stream: "science", tag: "Science", duration: "4 years", avg: "₹6–25 LPA" },
  { name: "MBBS", desc: "Become a medical doctor. Requires clearing NEET.", stream: "science", tag: "Science", duration: "5.5 years", avg: "₹8–30 LPA" },
  { name: "B.Sc Physics", desc: "Pure science for research and academia.", stream: "science", tag: "Science", duration: "3 years", avg: "₹3–10 LPA" },
  { name: "B.Arch", desc: "Architecture and spatial design for builders.", stream: "science", tag: "Science", duration: "5 years", avg: "₹5–18 LPA" },
  { name: "B.Sc Nursing", desc: "Patient care and clinical nursing practice.", stream: "science", tag: "Science", duration: "4 years", avg: "₹4–12 LPA" },
  { name: "BCA", desc: "Bachelor in Computer Applications. Entry into IT.", stream: "tech", tag: "Technology", duration: "3 years", avg: "₹4–12 LPA" },
  { name: "B.Sc Data Science", desc: "Data, statistics, and machine learning basics.", stream: "tech", tag: "Technology", duration: "3 years", avg: "₹5–18 LPA" },
  { name: "Cybersecurity", desc: "Ethical hacking and security engineering.", stream: "tech", tag: "Technology", duration: "3–4 years", avg: "₹6–30 LPA" },
  { name: "Animation & VFX", desc: "Film-making, 3D design, and game art.", stream: "tech", tag: "Technology", duration: "3 years", avg: "₹4–15 LPA" },
  { name: "B.Com", desc: "Commerce, accounts, and business fundamentals.", stream: "commerce", tag: "Commerce", duration: "3 years", avg: "₹3–8 LPA" },
  { name: "CA", desc: "Elite finance and taxation certification.", stream: "commerce", tag: "Commerce", duration: "5 years", avg: "₹8–40 LPA" },
  { name: "BBA", desc: "Business and management for future MBAs.", stream: "commerce", tag: "Commerce", duration: "3 years", avg: "₹4–10 LPA" },
  { name: "B.A. Psychology", desc: "Mind, behaviour, counselling and research.", stream: "arts", tag: "Arts", duration: "3 years", avg: "₹3–10 LPA" },
  { name: "B.Design", desc: "UI/UX, product, fashion or graphic design.", stream: "arts", tag: "Arts", duration: "4 years", avg: "₹5–20 LPA" },
  { name: "Journalism", desc: "Media, writing, broadcasting and reporting.", stream: "arts", tag: "Arts", duration: "3 years", avg: "₹3–12 LPA" },
  { name: "LLB / BA LLB", desc: "Law degree. Litigation, corporate, policy.", stream: "arts", tag: "Arts", duration: "3–5 years", avg: "₹5–25 LPA" },
];

const tagClass = { Science: "tag-science", Arts: "tag-arts", Commerce: "tag-commerce", Technology: "tag-tech" };

function renderCourses(filter) {
  const grid = document.getElementById('coursesGrid');
  grid.innerHTML = '';
  courses.filter(c => filter === 'all' || c.stream === filter).forEach(c => {
    grid.innerHTML += `<div class="course-card" onclick="this.classList.toggle('selected')">
      <span class="course-tag ${tagClass[c.tag]}">${c.tag}</span>
      <h3>${c.name}</h3><p>${c.desc}</p>
      <div class="course-meta"><span>⏱ ${c.duration}</span><span>${c.avg}</span></div>
    </div>`;
  });
}

function filterCourses(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCourses(type);
}

renderCourses('all');

const questions = [
  { q: "Which subject did you enjoy the most in school?", opts: ["Mathematics & Physics", "Biology & Chemistry", "Accountancy & Economics", "Literature & Social Science"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "What kind of work excites you the most?", opts: ["Building software or machines", "Helping or healing people", "Managing money and businesses", "Creating art, writing, or performing"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "How do you prefer to solve problems?", opts: ["Logical and systematic approach", "Research and experiment", "Data and financial analysis", "Creative and intuitive thinking"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "What is your ideal work environment?", opts: ["Tech company / startup", "Hospital / research lab", "Office / bank / corporate", "Studio / media / outdoors"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "What activity sounds most fun on a weekend?", opts: ["Coding a small project", "Reading about medical breakthroughs", "Analyzing the stock market", "Painting, writing or watching films"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "What's your strongest natural skill?", opts: ["Problem solving & logic", "Memorization & detail", "Communication & leadership", "Creativity & expression"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "How are your mathematics skills?", opts: ["Excellent – I genuinely love it", "Average – manageable", "Good with commerce math", "I prefer to avoid it"], scores: ["tech", "tech", "commerce", "arts"] },
  { q: "What motivates you the most in life?", opts: ["Building innovative products", "Saving lives", "Financial independence", "Making an impact through creativity"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "Which kind of TV shows do you prefer?", opts: ["Tech documentaries / sci-fi", "Medical dramas", "Business / startup shows", "Movies / art / music"], scores: ["tech", "science", "commerce", "arts"] },
  { q: "How do you feel about working with people daily?", opts: ["Prefer working alone on tech", "Love patient interaction", "Enjoy meetings and teamwork", "Love creative collaborations"], scores: ["tech", "science", "commerce", "arts"] },
];

const suggestions = {
  tech:     { title: "Technology & Engineering",    desc: "Your analytical mind and love for problem-solving make you a perfect fit for the tech world!", chips: [{ t: "B.Tech CS/IT", c: "chip-purple" }, { t: "BCA", c: "chip-yellow" }, { t: "B.Sc Data Science", c: "chip-coral" }, { t: "Cybersecurity", c: "chip-purple" }] },
  science:  { title: "Medical & Pure Sciences",     desc: "Your curiosity and attention to detail point toward healthcare and scientific research.", chips: [{ t: "MBBS", c: "chip-yellow" }, { t: "B.Sc Nursing", c: "chip-coral" }, { t: "B.Arch", c: "chip-purple" }, { t: "B.Pharm", c: "chip-yellow" }] },
  commerce: { title: "Commerce & Business",         desc: "Your leadership and financial instincts make business and management your natural domain.", chips: [{ t: "CA", c: "chip-yellow" }, { t: "BBA", c: "chip-purple" }, { t: "B.Com", c: "chip-coral" }, { t: "Economics Hons.", c: "chip-yellow" }] },
  arts:     { title: "Arts, Design & Humanities",  desc: "Your creative soul and expressive nature point toward design, media, or social sciences.", chips: [{ t: "B.Design", c: "chip-coral" }, { t: "Journalism", c: "chip-purple" }, { t: "Psychology", c: "chip-yellow" }, { t: "LLB", c: "chip-coral" }] },
};

let currentQ = 0, answers = [], scores = { tech: 0, science: 0, commerce: 0, arts: 0 };

function renderQuestion() {
  const q = questions[currentQ];
  document.getElementById('qNum').textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById('qText').textContent = q.q;
  document.getElementById('progressFill').style.width = `${(currentQ / questions.length) * 100}%`;
  document.getElementById('qProgressText').textContent = `${currentQ} / ${questions.length} answered`;
  const opts = document.getElementById('qOptions');
  opts.innerHTML = '';
  q.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = o;
    if (answers[currentQ] === i) btn.classList.add('chosen');
    btn.onclick = () => {
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('chosen'));
      btn.classList.add('chosen');
      answers[currentQ] = i;
      document.getElementById('nextBtn').disabled = false;
    };
    opts.appendChild(btn);
  });
  document.getElementById('nextBtn').disabled = answers[currentQ] === undefined;
}

function nextQuestion() {
  if (answers[currentQ] === undefined) return;
  scores[questions[currentQ].scores[answers[currentQ]]]++;
  currentQ++;
  if (currentQ >= questions.length) { showResult(); return; }
  renderQuestion();
}

function showResult() {
  document.getElementById('quizWrapper').style.display = 'none';
  const top = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const s = suggestions[top];
  document.getElementById('resultTitle').textContent = s.title;
  document.getElementById('resultDesc').textContent = s.desc;
  const chips = document.getElementById('resultChips');
  chips.innerHTML = s.chips.map(c => `<span class="chip ${c.c}">${c.t}</span>`).join('');
  document.getElementById('resultBox').style.display = 'block';
}

function restartQuiz() {
  currentQ = 0; answers = []; scores = { tech: 0, science: 0, commerce: 0, arts: 0 };
  document.getElementById('quizWrapper').style.display = 'block';
  document.getElementById('resultBox').style.display = 'none';
  renderQuestion();
}

renderQuestion();

function validateForm() {
  let valid = true;
  const showErr = (id, show) => { document.getElementById(id).style.display = show ? 'block' : 'none'; };
  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const stream  = document.getElementById('stream').value;
  const percent = document.getElementById('percent').value;
  if (!fname)  { showErr('fname-err', true);  valid = false; } else showErr('fname-err', false);
  if (!lname)  { showErr('lname-err', true);  valid = false; } else showErr('lname-err', false);
  if (!email  || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr('email-err', true);  valid = false; } else showErr('email-err', false);
  if (!phone  || !/^\d{10}$/.test(phone))  { showErr('phone-err', true);  valid = false; } else showErr('phone-err', false);
  if (!stream) { showErr('stream-err', true); valid = false; } else showErr('stream-err', false);
  if (!percent || percent < 0 || percent > 100) { showErr('percent-err', true); valid = false; } else showErr('percent-err', false);
  if (valid) { document.getElementById('successMsg').style.display = 'block'; }
}