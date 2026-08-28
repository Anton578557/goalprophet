// ===== Конфигурация =====
const CONTACT_EMAIL = 'goalprophet1@outlook.com';

// ===== Данные матчей =====
let matchesData = [];

// ===== Имитация последних покупок =====
const winnersNames = [
    'Lukas M.', 'Jens W.', 'Marco R.', 'Antoine D.', 'Pierre L.', 'Sven K.', 'Oliver H.', 'Luca B.', 'Mateo F.', 'Diego G.',
    'John S.', 'Michael T.', 'David B.', 'Chris P.', 'James L.', 'Ryan K.', 'Kevin M.', 'Eric J.',
    'Carlos S.', 'Luis M.', 'Javier R.', 'Andres P.', 'Felipe L.', 'Thiago S.', 'Rafael C.', 'Bruno A.',
    'Takashi Y.', 'Hiroshi K.', 'Min-Jun P.', 'Ji-Ho L.', 'Rahul S.', 'Arjun P.', 'Wei C.', 'Kenji T.',
    'Kwame A.', 'Chinedu O.', 'Yusuf M.', 'Omar H.', 'Ahmed S.', 'Moussa D.',
    'Jack W.', 'Liam T.', 'Noah B.'
];

let winnersList = [];

// ===== 6 горячих матчей =====
const hotMatches = [
    { icon: '⚽', title: 'Karlsruher SC vs VfL Wolfsburg', league: '2. Bundesliga', time: 'Sat, Aug 29, 14:00' },
    { icon: '⚽', title: 'Liverpool vs Nottingham Forest', league: 'Premier League', time: 'Sat, Aug 29, 14:30' },
    { icon: '⚽', title: 'Juventus vs Parma', league: 'Serie A', time: 'Sat, Aug 29, 21:45' },
    { icon: '⚽', title: 'Gent vs Club Brugge', league: 'Belgian Pro League', time: 'Sun, Aug 30, 14:30' },
    { icon: '⚽', title: 'Nordsjaelland vs Brondby', league: 'Danish Superliga', time: 'Sun, Aug 30, 19:00' },
    { icon: '⚽', title: 'Lillestrom vs Fredrikstad', league: 'Norwegian Eliteserien', time: 'Sun, Aug 30, 20:15' }
];

// ===== 100 отзывов =====
const testimonialsData = [
    { name: 'Lukas M.', role: 'VIP member', text: 'I’ve been using GoalProphet for 3 months. The predictions are spot-on. The team truly knows football.', rating: 5, date: '2 days ago' },
    { name: 'Jens W.', role: 'VIP member', text: 'The best tipster team I’ve ever used. Clear communication and always profitable.', rating: 5, date: '5 days ago' },
    { name: 'Marco R.', role: 'Member since 2024', text: 'Great results and honest statistics. I’ve already doubled my bankroll.', rating: 4, date: '1 week ago' },
    { name: 'Antoine D.', role: 'Member since February', text: 'Every prediction is well analysed. I feel confident placing bets.', rating: 5, date: '3 days ago' },
    { name: 'Pierre L.', role: 'Member since December', text: 'GoalProphet helped me turn a small bankroll into a serious profit. Thanks!', rating: 5, date: '2 weeks ago' },
    { name: 'Sven K.', role: 'Member since March', text: 'Very professional approach. I recommend to anyone serious about betting.', rating: 5, date: '1 day ago' },
    { name: 'Oliver H.', role: 'Member since January', text: 'Accurate predictions and fast support. Always a pleasure to work with them.', rating: 5, date: '4 days ago' },
    { name: 'Luca B.', role: 'Member since November', text: 'I was skeptical at first, but after a month I was convinced. The win rate is real.', rating: 4, date: '3 weeks ago' },
    { name: 'Mateo F.', role: 'Member since October', text: 'Insider tips that actually make a difference. Best money I’ve spent on betting.', rating: 5, date: '6 days ago' },
    { name: 'Diego G.', role: 'Member since September', text: 'Superb analytics. They even explain why a prediction is good.', rating: 5, date: '1 week ago' },
    { name: 'John S.', role: 'Member since August', text: 'Stable profits every week. The team is dedicated and honest.', rating: 5, date: '2 days ago' },
    { name: 'Michael T.', role: 'Member since July', text: 'I’ve tried many tipsters, but GoalProphet stands out with its transparency.', rating: 4, date: '5 days ago' },
    { name: 'David B.', role: 'Member since June', text: 'Great value for money. Predictions arrive on time and are accurate.', rating: 5, date: '4 days ago' },
    { name: 'Chris P.', role: 'Member since May', text: '100% recommended. The best football analysts I’ve come across.', rating: 5, date: '3 days ago' },
    { name: 'James L.', role: 'Member since April', text: 'Consistent results. My bankroll has grown significantly.', rating: 5, date: '1 week ago' },
    { name: 'Ryan K.', role: 'Member since March', text: 'Impressive knowledge of football. They truly live and breathe the game.', rating: 5, date: '2 days ago' },
    { name: 'Kevin M.', role: 'Member since February', text: 'Swift email responses and reliable predictions. 5 stars.', rating: 5, date: '6 days ago' },
    { name: 'Eric J.', role: 'Member since January', text: 'Started with a small stake and now I’m making real money. Thank you GoalProphet!', rating: 5, date: '1 week ago' },
    { name: 'Carlos S.', role: 'Member since December', text: 'The statistics speak for themselves. Very impressed.', rating: 4, date: '3 weeks ago' },
    { name: 'Luis M.', role: 'Member since November', text: 'Fantastic service. Always in touch and ready to help.', rating: 5, date: '5 days ago' },
    { name: 'Javier R.', role: 'Member since October', text: 'The best decision I made for my betting strategy.', rating: 5, date: '2 days ago' },
    { name: 'Andres P.', role: 'Member since September', text: 'Top-tier predictions. I trust them completely.', rating: 5, date: '1 day ago' },
    { name: 'Felipe L.', role: 'Member since August', text: 'They combine statistics and insider knowledge seamlessly.', rating: 5, date: '4 days ago' },
    { name: 'Thiago S.', role: 'Member since July', text: 'Honest results, no false promises. Truly professional.', rating: 4, date: '2 weeks ago' },
    { name: 'Rafael C.', role: 'Member since June', text: 'Every prediction is backed by solid reasoning. Impressive.', rating: 5, date: '3 days ago' },
    { name: 'Bruno A.', role: 'Member since May', text: 'My winnings have increased by 200% since joining. Great team.', rating: 5, date: '1 week ago' },
    { name: 'Takashi Y.', role: 'Member since April', text: 'Exceptional insight into football matches. Highly recommended.', rating: 5, date: '2 days ago' },
    { name: 'Hiroshi K.', role: 'Member since March', text: 'The most reliable tipster service I’ve used. Thank you!', rating: 5, date: '6 days ago' },
    { name: 'Min-Jun P.', role: 'Member since February', text: 'Great communication and even better predictions.', rating: 5, date: '3 days ago' },
    { name: 'Ji-Ho L.', role: 'Member since January', text: 'A game-changer for my betting career.', rating: 5, date: '1 week ago' },
    { name: 'Rahul S.', role: 'Member since December', text: 'Accurate and timely. The team really knows their stuff.', rating: 4, date: '2 weeks ago' },
    { name: 'Arjun P.', role: 'Member since November', text: 'I recommend GoalProphet to all my friends. Fantastic results.', rating: 5, date: '5 days ago' },
    { name: 'Wei C.', role: 'Member since October', text: 'Professional from start to finish. Very satisfied.', rating: 5, date: '4 days ago' },
    { name: 'Kenji T.', role: 'Member since September', text: 'Their predictions are like gold. Every single one has value.', rating: 5, date: '2 days ago' },
    { name: 'Kwame A.', role: 'Member since August', text: 'A wonderful experience. Keeps improving my betting strategy.', rating: 4, date: '1 day ago' },
    { name: 'Chinedu O.', role: 'Member since July', text: 'I’ve doubled my profits in just two months. Amazing.', rating: 5, date: '3 days ago' },
    { name: 'Yusuf M.', role: 'Member since June', text: 'Very reliable and transparent. You can trust them.', rating: 5, date: '6 days ago' },
    { name: 'Omar H.', role: 'Member since May', text: 'Excellent service, quick email responses, and accurate predictions.', rating: 5, date: '1 week ago' },
    { name: 'Ahmed S.', role: 'Member since April', text: 'Simply the best in the business.', rating: 5, date: '2 days ago' },
    { name: 'Moussa D.', role: 'Member since March', text: 'The team provides in-depth analysis that gives an edge.', rating: 5, date: '4 days ago' },
    { name: 'Jack W.', role: 'Member since February', text: 'I’ve been with them for half a year and never looked back.', rating: 5, date: '1 week ago' },
    { name: 'Liam T.', role: 'Member since January', text: 'Great predictions, honest statistics, and fast support.', rating: 5, date: '5 days ago' },
    { name: 'Noah B.', role: 'Member since December', text: 'Their VIP tips are worth every penny.', rating: 5, date: '2 days ago' },
    { name: 'Lukas M.', role: 'Member since November', text: 'I was hesitant at first, but their results are undeniable.', rating: 4, date: '3 days ago' },
    { name: 'Jens W.', role: 'Member since October', text: 'Excellent. My betting has never been this profitable.', rating: 5, date: '6 days ago' },
    { name: 'Marco R.', role: 'Member since September', text: 'The predictions are spot on. Very happy customer.', rating: 5, date: '1 day ago' },
    { name: 'Antoine D.', role: 'Member since August', text: 'High-quality service that always delivers.', rating: 5, date: '4 days ago' },
    { name: 'Pierre L.', role: 'Member since July', text: 'I recommend GoalProphet to anyone serious about winning.', rating: 5, date: '2 weeks ago' },
    { name: 'Sven K.', role: 'Member since June', text: 'A true professional team. I trust their analysis completely.', rating: 5, date: '3 days ago' },
    { name: 'Oliver H.', role: 'Member since May', text: 'Best football tipping service I’ve used. Period.', rating: 5, date: '1 week ago' },
    { name: 'Luca B.', role: 'Member since April', text: 'Fantastic results. I’ve been consistently winning.', rating: 5, date: '2 days ago' },
    { name: 'Mateo F.', role: 'Member since March', text: 'The team really cares about their clients. Highly recommended.', rating: 5, date: '5 days ago' },
    { name: 'Diego G.', role: 'Member since February', text: 'Reliable and accurate. No hype, just results.', rating: 4, date: '1 week ago' },
    { name: 'John S.', role: 'Member since January', text: 'They provide predictions that are backed by real analysis.', rating: 5, date: '3 days ago' },
    { name: 'Michael T.', role: 'Member since December', text: 'I’ve made a lot of money thanks to GoalProphet.', rating: 5, date: '2 weeks ago' },
    { name: 'David B.', role: 'Member since November', text: 'Always accurate and always on time. Great service.', rating: 5, date: '4 days ago' },
    { name: 'Chris P.', role: 'Member since October', text: 'You get exactly what you pay for. Excellent value.', rating: 5, date: '1 day ago' },
    { name: 'James L.', role: 'Member since September', text: 'The best investment I’ve made in my betting career.', rating: 5, date: '6 days ago' },
    { name: 'Ryan K.', role: 'Member since August', text: 'Professional and transparent. I trust them completely.', rating: 5, date: '2 days ago' },
    { name: 'Kevin M.', role: 'Member since July', text: 'Their predictions are incredibly accurate. Very impressed.', rating: 5, date: '5 days ago' },
    { name: 'Eric J.', role: 'Member since June', text: 'I’ve been with them for 6 months and never been disappointed.', rating: 5, date: '1 week ago' },
    { name: 'Carlos S.', role: 'Member since May', text: 'Great insight into football. Their predictions are gold.', rating: 5, date: '3 days ago' },
    { name: 'Luis M.', role: 'Member since April', text: 'Excellent service. They always deliver exactly what they promise.', rating: 5, date: '4 days ago' },
    { name: 'Javier R.', role: 'Member since March', text: 'Very accurate and honest. I highly recommend them.', rating: 5, date: '2 days ago' },
    { name: 'Andres P.', role: 'Member since February', text: 'I’ve increased my profits significantly with their help.', rating: 5, date: '6 days ago' },
    { name: 'Felipe L.', role: 'Member since January', text: 'A genuinely professional team. I’m very impressed.', rating: 5, date: '1 week ago' },
    { name: 'Thiago S.', role: 'Member since December', text: 'The predictions are always well thought out. Excellent.', rating: 5, date: '2 days ago' },
    { name: 'Rafael C.', role: 'Member since November', text: 'Fantastic service. I recommend them to everyone.', rating: 5, date: '5 days ago' },
    { name: 'Bruno A.', role: 'Member since October', text: 'Very reliable and consistently profitable.', rating: 5, date: '3 days ago' },
    { name: 'Takashi Y.', role: 'Member since September', text: 'The team’s knowledge is unmatched. Truly experts.', rating: 5, date: '1 day ago' },
    { name: 'Hiroshi K.', role: 'Member since August', text: 'I’ve never had such consistent wins before. Great job.', rating: 5, date: '4 days ago' },
    { name: 'Min-Jun P.', role: 'Member since July', text: 'Very professional. You can see the effort they put in.', rating: 5, date: '6 days ago' },
    { name: 'Ji-Ho L.', role: 'Member since June', text: 'The predictions are always accurate. Highly recommended.', rating: 5, date: '2 weeks ago' },
    { name: 'Rahul S.', role: 'Member since May', text: 'Excellent. They really know their stuff.', rating: 5, date: '1 week ago' },
    { name: 'Arjun P.', role: 'Member since April', text: 'I’ve been betting for years and this is the best service I’ve used.', rating: 5, date: '2 days ago' },
    { name: 'Wei C.', role: 'Member since March', text: 'Great predictions and amazing support. 5 stars!', rating: 5, date: '5 days ago' },
    { name: 'Kenji T.', role: 'Member since February', text: 'Reliable and consistent. Very happy.', rating: 5, date: '3 days ago' },
    { name: 'Kwame A.', role: 'Member since January', text: 'They always deliver. The best in the business.', rating: 5, date: '1 day ago' },
    { name: 'Chinedu O.', role: 'Member since December', text: 'Very accurate and professional. I recommend them.', rating: 5, date: '4 days ago' },
    { name: 'Yusuf M.', role: 'Member since November', text: 'The predictions are always spot on. Thanks GoalProphet!', rating: 5, date: '6 days ago' },
    { name: 'Omar H.', role: 'Member since October', text: 'Excellent service. Very reliable and accurate.', rating: 5, date: '2 days ago' },
    { name: 'Ahmed S.', role: 'Member since September', text: 'I’ve been with them for months and always winning.', rating: 5, date: '1 week ago' },
    { name: 'Moussa D.', role: 'Member since August', text: 'Very professional and transparent. Great experience.', rating: 5, date: '5 days ago' },
    { name: 'Jack W.', role: 'Member since July', text: 'Great analysis. I trust their predictions completely.', rating: 5, date: '3 days ago' },
    { name: 'Liam T.', role: 'Member since June', text: 'Excellent. My betting strategy has improved a lot.', rating: 5, date: '2 days ago' },
    { name: 'Noah B.', role: 'Member since May', text: 'The best tipster service I’ve ever used. 5 stars.', rating: 5, date: '1 day ago' },
    { name: 'Lukas M.', role: 'Member since April', text: 'Very accurate and reliable. Highly recommended.', rating: 5, date: '4 days ago' },
    { name: 'Jens W.', role: 'Member since March', text: 'Fantastic results. I’ve been winning consistently.', rating: 5, date: '6 days ago' },
    { name: 'Marco R.', role: 'Member since February', text: 'Great service and even better predictions. Thanks!', rating: 5, date: '2 weeks ago' },
    { name: 'Antoine D.', role: 'Member since January', text: 'They really deliver. I’ve made significant profits.', rating: 5, date: '1 week ago' },
    { name: 'Pierre L.', role: 'Member since December', text: 'I’m very impressed with their accuracy. 5 stars.', rating: 5, date: '2 days ago' },
    { name: 'Sven K.', role: 'Member since November', text: 'Professional and reliable. The best in the industry.', rating: 5, date: '5 days ago' },
    { name: 'Oliver H.', role: 'Member since October', text: 'I’ve made a lot of money with their predictions.', rating: 5, date: '3 days ago' },
    { name: 'Luca B.', role: 'Member since September', text: 'Excellent. Very accurate predictions.', rating: 5, date: '1 day ago' },
    { name: 'Mateo F.', role: 'Member since August', text: 'Fantastic service. I’ve never been disappointed.', rating: 5, date: '4 days ago' },
    { name: 'Diego G.', role: 'Member since July', text: 'Very reliable. They always deliver exactly what they promise.', rating: 5, date: '6 days ago' },
    { name: 'John S.', role: 'Member since June', text: 'Great predictions and excellent support. 5 stars.', rating: 5, date: '2 days ago' },
    { name: 'Michael T.', role: 'Member since May', text: 'The most accurate tipster service I’ve used. Highly recommended.', rating: 5, date: '1 week ago' },
    { name: 'David B.', role: 'Member since April', text: 'I trust them completely. They truly know football.', rating: 5, date: '3 days ago' }
];

// ===== Загрузка матчей =====
async function loadMatches() {
    try {
        const response = await fetch('matches.json');
        matchesData = await response.json();
        
        renderMatches();
        setInterval(renderMatches, 1000);
        startWinnersNotifications();
        renderTestimonials();
        renderHotMatches();
        setLastUpdated();
    } catch (error) {
        console.error('Error loading matches.json:', error);
        document.getElementById('hotMatches').innerHTML = '<p style="color:var(--text-muted)">No matches available.</p>';
    }
}

// ===== Рендер всех матчей =====
function renderMatches() {
    const now = new Date();
    const upcoming = matchesData.filter(m => new Date(m.start_time) > now && !m.result);

    const predictionsList = document.getElementById('predictionsList');
    if (upcoming.length > 0) {
        predictionsList.innerHTML = upcoming.map(match => {
            const timer = getTimer(match.start_time);
            return `
                <div class="prediction-row">
                    <div class="prediction-info">
                        <div class="prediction-teams">${match.home_team} vs ${match.away_team}</div>
                        <div class="prediction-time">${formatDate(match.start_time)}</div>
                        <div class="prediction-price">Price: $${match.price} 
                            <span class="prediction-crypto">
                                <span title="Bitcoin">₿</span>
                                <span title="Ethereum">Ξ</span>
                                <span title="Tether">₮</span>
                            </span>
                        </div>
                        ${timer ? `<div class="timer ${timer.urgent ? 'urgent' : ''}">⏰ ${timer.text}</div>` : ''}
                    </div>
                    <a href="mailto:${CONTACT_EMAIL}?subject=Prediction%20Request%20-%20${match.home_team}%20vs%20${match.away_team}&body=Hello%21%20I%20want%20to%20purchase%20a%20prediction%20for%20${match.home_team}%20vs%20${match.away_team}.%20Please%20send%20payment%20details." 
                       class="btn-request-small ${isClosed(match.start_time) ? 'disabled' : ''}" ${isClosed(match.start_time) ? 'disabled' : ''}>
                        ${isClosed(match.start_time) ? 'Closed' : 'Request Prediction'}
                    </a>
                </div>
            `;
        }).join('');
    } else {
        predictionsList.innerHTML = '<p>No upcoming matches at the moment.</p>';
    }
}

// ===== Рендер горячих матчей =====
function renderHotMatches() {
    const container = document.getElementById('hotMatches');
    if (container) {
        container.innerHTML = `
            <h2>⚽ Hot Matches This Weekend</h2>
            <div class="hot-matches-grid">
                ${hotMatches.map(match => `
                    <a href="mailto:${CONTACT_EMAIL}?subject=Prediction%20Request%20-%20${match.title}" class="hot-match-card">
                        <span class="hot-match-icon">${match.icon}</span>
                        <span class="hot-match-title">${match.title}</span>
                        <span class="hot-match-league">${match.league}</span>
                        <span class="hot-match-time">${match.time}</span>
                    </a>
                `).join('')}
            </div>
        `;
    }
}

// ===== Таймер =====
function getTimer(startTime) {
    const now = new Date();
    const matchTime = new Date(startTime);
    const diffMs = matchTime - now;
    
    if (diffMs <= 0) return null;
    
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    if (diffMinutes < 10) return null;
    
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    const text = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const urgent = diffMinutes < 60;
    
    return { text, urgent };
}

function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function isClosed(startTime) {
    const now = new Date();
    const matchTime = new Date(startTime);
    const diffMinutes = (matchTime - now) / (1000 * 60);
    return diffMinutes < 10;
}

// ===== Имитация уведомлений о покупках =====
function startWinnersNotifications() {
    updateWinnersList();
    setInterval(updateWinnersList, 8000);
}

function updateWinnersList() {
    const randomName = winnersNames[Math.floor(Math.random() * winnersNames.length)];
    
    const now = new Date();
    const upcomingMatches = matchesData.filter(m => new Date(m.start_time) > now && !m.result);
    
    let matchText = 'Upcoming match';
    if (upcomingMatches.length > 0) {
        const randomMatch = upcomingMatches[Math.floor(Math.random() * upcomingMatches.length)];
        matchText = `${randomMatch.home_team} vs ${randomMatch.away_team}`;
    }
    
    const newWinner = { name: randomName, match: matchText };
    
    winnersList.unshift(newWinner);
    if (winnersList.length > 8) winnersList.pop();
    
    const winnersContainer = document.getElementById('winnersList');
    if (winnersContainer) {
        winnersContainer.innerHTML = winnersList.map(winner => `
            <div class="winner-item">
                <span class="winner-name">🔥 ${winner.name}</span>
                <span class="winner-match">${winner.match}</span>
            </div>
        `).join('');
    }
}

// ===== Рендер отзывов =====
function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (container) {
        container.innerHTML = testimonialsData.map(t => {
            const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
            return `
                <div class="testimonial-card">
                    <div class="rating">${stars}</div>
                    <p class="testimonial-text">“${t.text}”</p>
                    <div class="testimonial-author">
                        <div class="avatar">${t.name.charAt(0)}</div>
                        <div>
                            <div class="author-name">${t.name}</div>
                            <div class="author-role">${t.role} · ${t.date}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ===== Обновление даты в футере =====
function setLastUpdated() {
    const el = document.getElementById('lastUpdated');
    if (el) {
        el.textContent = new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
}

// ===== Навигация по вкладкам =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav a[data-tab]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(link.dataset.tab);
        });
    });

    document.querySelectorAll('[data-tab-link]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(el.dataset.tabLink);
        });
    });

    loadMatches();
});

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${tabId}`);
    if (activeTab) activeTab.classList.add('active');

    document.querySelectorAll('.nav a[data-tab]').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.tab === tabId) link.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
