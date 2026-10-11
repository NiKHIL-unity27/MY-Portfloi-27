// ===== Project data =====
const PROJECTS = [
  { id:'cbrn', cat:'xr', badge:'Mixed Reality', title:'CBRN Training Simulation', art:'radar', c:['#00ff88','#8a2be2'],
    short:'Desktop-to-Oculus command pipeline for a Mixed Reality CBRN drill.',
    long:'A Mixed Reality training scenario where an operator on a desktop build issues commands that execute instantly inside the trainee\'s Oculus headset, so instructors can steer the drill live.',
    tags:['Unity','Oculus','MR','Networking','ElevenLabs'],
    features:['Real-time desktop to headset command channel','Instructor can trigger hazards and events mid-drill','AI voice profiles for dynamic narration and characters','Built for repeatable, safe hazard-response training'],
    metrics:[['Live','Operator to headset'],['MR','Passthrough scenario']] },
  { id:'horror', cat:'games', badge:'24-Hour Challenge', title:'24-Hour Horror Game', art:'skull', c:['#ff2d55','#2d1b69'],
    short:'A complete horror game designed, built and shipped in one day.',
    long:'Built from blank project to playable game in 24 hours as a game-jam style challenge, focusing on atmosphere, tension and tight scope.',
    tags:['Unity','C#','Game Jam','Lighting','Audio'],
    features:['Full gameplay loop in 24 hours','Dynamic lighting and sound for tension','Scoped ruthlessly to hit the deadline','Playtested and polished before submission'],
    metrics:[['24h','Concept to playable'],['1','Developer']] },
  { id:'ai', cat:'games', badge:'Gameplay AI', title:'Enemy AI System', art:'nodes', c:['#ff9d00','#8a2be2'],
    short:'Modular enemy AI with perception, state logic and combat behaviour.',
    long:'A reusable enemy AI framework where agents see, hear, chase, attack and recover using a clean state-driven design that can be dropped into any project.',
    tags:['Unity','C#','State Machine','NavMesh'],
    features:['Sight and hearing perception','Patrol, chase, attack and search states','NavMesh pathfinding with obstacle handling','Tunable in the inspector, no code changes'],
    metrics:[['5+','Behaviour states'],['Modular','Drop-in system']] },
  { id:'nhs', cat:'xr', badge:'Healthcare', title:'NHS Project', art:'pulse', c:['#00b4ff','#00ff88'],
    short:'Healthcare-focused interactive experience built in Unity.',
    long:'An interactive healthcare project built with Unity. Edit this card with your own details: your role, what the app does and the result it achieved.',
    tags:['Unity','Healthcare','Interactive'],
    features:['Add your key feature here','Add your role and responsibilities','Add the outcome or impact'],
    metrics:[['Impact','Add a real number'],['Role','Add yours']] },
  { id:'vitals', cat:'hardware', badge:'Wearables + BLE', title:'Wearable Vitals Streaming', art:'pulse', c:['#ff2d55','#00ff88'],
    short:'Live SpO2, BPM and steps from a smartwatch and pulse oximeters.',
    long:'A Wear OS app streams live vitals from a Samsung Galaxy Watch to desktop, and reverse-engineered third-party pulse oximeters stream over BLE to desktop and Oculus.',
    tags:['Wear OS','BLE','Android Studio','Unity'],
    features:['SpO2, heart rate and step count streaming','Reverse-engineered BLE oximeter protocol','Feeds vitals into desktop and VR scenes','Reliable reconnect and parsing'],
    metrics:[['3','Live vitals'],['BLE','Reverse engineered']] },
  { id:'qr', cat:'hardware', badge:'Computer Vision', title:'OpenCV QR Interaction', art:'qr', c:['#00ff88','#00b4ff'],
    short:'Headset camera reads QR codes on a prop to trigger in-VR actions.',
    long:'A multi-QR detection system on a physical prop. Looking at a code through the Oculus camera triggers a real-time action in the headset at that exact point.',
    tags:['OpenCV','Oculus','Unity','Computer Vision'],
    features:['Multi-QR detection in one frame','Tracks which code the user is targeting','Instant in-headset response','Bridges a physical prop and virtual content'],
    metrics:[['Multi','QR in view'],['Real-time','Headset camera']] },
  { id:'nfc', cat:'hardware', badge:'NFC', title:'NFC Object Recognition', art:'wave', c:['#8a2be2','#00ff88'],
    short:'Tap a 3D-printed model on a reader and its full info appears.',
    long:'Each 3D-printed model carries an NFC tag. Scanning it against a reader automatically displays the complete information set for that model.',
    tags:['NFC','Unity','Hardware','3D Printing'],
    features:['Tag to data lookup','Instant info display on scan','Works with 3D-printed physical models','Great for museums and training'],
    metrics:[['Tap','Instant info'],['NFC','Tag + reader']] },
  { id:'drone', cat:'hardware', badge:'Simulator', title:'Drone Simulator', art:'drone', c:['#00b4ff','#8a2be2'],
    short:'Desktop flight sim synced with real drone controller hardware.',
    long:'A hardware-controlled drone simulator giving full desktop flight control over throttle, pitch, yaw and roll, synced with physical drone hardware.',
    tags:['Unity','Hardware','Flight Physics'],
    features:['Full throttle, pitch, yaw and roll','Physical controller sync','Realistic flight handling','Safe pilot practice'],
    metrics:[['4','Control axes'],['HW','Physical sync']] },
  { id:'head', cat:'hardware', badge:'Camera Tracking', title:'Head-Tracking Control', art:'eye', c:['#ff00ff','#00ff88'],
    short:'Lean your head left or right to steer a vehicle in simulation.',
    long:'A camera-based head-tracking feature where lateral head movement directly drives the vehicle in a desktop simulation, with no controller needed.',
    tags:['OpenCV','Camera','Unity','HCI'],
    features:['Webcam head position tracking','Left/right movement mapped to steering','Hands-free interaction','Smoothing to remove jitter'],
    metrics:[['0','Controllers needed'],['Cam','Only input']] },
  { id:'cycle', cat:'hardware', badge:'BLE Fitness', title:'Physical Cycle to Game Sync', art:'road', c:['#00ff88','#ff9d00'],
    short:'Pedal a real cycle to move through games on desktop and mobile.',
    long:'BLE-connected pedal-cycle hardware synchronized with desktop and mobile games, driving in-game cycling movement across several distinct routes.',
    tags:['BLE','Unity','Mobile','Android'],
    features:['Pedal speed drives in-game movement','Desktop and mobile support','Multiple routes','Exergaming for fitness'],
    metrics:[['2','Platforms'],['Multi','Routes']] },
  { id:'fps', cat:'games', badge:'Framework', title:'FPS Framework', art:'shooter', c:['#ff2d55','#ff9d00'],
    short:'First-person controller with guns and melee weapons.',
    long:'A first-person shooter framework with a polished controller, multiple guns and melee weapons, built so new weapons can be added quickly.',
    tags:['Unity','C#','FPS','Weapons'],
    features:['Gun and melee systems','Smooth first-person movement','Easy weapon authoring','Beta tested'],
    metrics:[['Guns + Melee','Weapon types'],['Beta','Stage']] },
  { id:'vehicle', cat:'games', badge:'Tool', title:'5-Minute Vehicle Setup', art:'road', c:['#00b4ff','#00ff88'],
    short:'A tool that turns any car model into a drivable vehicle fast.',
    long:'A rapid vehicle development framework for creating drivable vehicles in under five minutes, plus an arcade car controller with responsive handling.',
    tags:['Unity','Tooling','Vehicles','Editor'],
    features:['One-click wheel and physics setup','Arcade handling presets','Saves hours of manual setup','Alpha, actively improved'],
    metrics:[['5 min','To drivable car'],['Alpha','Stage']] },
  { id:'flutter', cat:'games', badge:'In Development', title:'Unity + Flutter Gaming App', art:'nodes', c:['#00b4ff','#8a2be2'],
    short:'Online gaming app with Unity gameplay inside a Flutter shell.',
    long:'An online gaming app that embeds Unity inside Flutter, combining native-feeling app UI with 3D gameplay. Currently under development.',
    tags:['Unity','Flutter','Mobile','Online'],
    features:['Unity embedded in Flutter','Flutter UI and menus','Online play (in progress)','Cross-platform'],
    metrics:[['2','Frameworks'],['WIP','Stage']] },
  { id:'arcade', cat:'games', badge:'Arcade', title:'Endless Runner, Car Rush & Space Shooter', art:'shooter', c:['#ff00ff','#00ff88'],
    short:'Three classic arcade games with smooth mechanics.',
    long:'A set of polished arcade games: an endless runner, a fast-paced 2D car racer and an old-school space shooter, each built around tight, satisfying mechanics.',
    tags:['Unity','2D','Mobile','Arcade'],
    features:['Endless runner with smooth controls','2D car racing','Retro space shooter','Quick-to-play loops'],
    metrics:[['3','Games'],['2D','Arcade style']] }
];

// ===== Generated artwork =====
function artSVG(p){
  const [a,b]=p.c, id='g'+p.id;
  let shapes='';
  const lines=Array.from({length:12},(_,i)=>`<line x1="0" y1="${i*30}" x2="400" y2="${i*30}" stroke="#fff" stroke-opacity=".05"/>`).join('')+
              Array.from({length:14},(_,i)=>`<line x1="${i*30}" y1="0" x2="${i*30}" y2="320" stroke="#fff" stroke-opacity=".05"/>`).join('');
  switch(p.art){
    case 'radar': shapes=`<g transform="translate(200 165)" fill="none" stroke="${a}"><circle r="40" stroke-opacity=".7"/><circle r="80" stroke-opacity=".45"/><circle r="120" stroke-opacity=".25"/><path d="M0 0 L120 0 A120 120 0 0 0 85 -85Z" fill="${a}" fill-opacity=".25" stroke="none"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/></path><circle cx="50" cy="-40" r="5" fill="#ff2d55"/><circle cx="-60" cy="30" r="5" fill="#ff9d00"/></g>`; break;
    case 'skull': shapes=`<g transform="translate(200 160)"><ellipse rx="70" ry="75" fill="#000" fill-opacity=".45" stroke="${a}" stroke-width="2"/><ellipse cx="-26" cy="-8" rx="15" ry="19" fill="${a}"><animate attributeName="opacity" values="1;.2;1" dur="2.5s" repeatCount="indefinite"/></ellipse><ellipse cx="26" cy="-8" rx="15" ry="19" fill="${a}"><animate attributeName="opacity" values="1;.2;1" dur="2.5s" repeatCount="indefinite"/></ellipse><path d="M-30 40 h60 M-18 34 v18 M0 34 v18 M18 34 v18" stroke="${a}" stroke-width="3"/></g>`; break;
    case 'nodes': shapes=`<g stroke="${a}" stroke-width="2" fill="none"><path d="M200 70 L110 160 M200 70 L290 160 M110 160 L70 250 M110 160 L170 250 M290 160 L230 250 M290 160 L330 250"/></g><g fill="#0a0e27" stroke="${a}" stroke-width="3">${[[200,70],[110,160],[290,160],[70,250],[170,250],[230,250],[330,250]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="14"/>`).join('')}</g><circle cx="200" cy="70" r="7" fill="${b}"><animate attributeName="r" values="7;12;7" dur="2s" repeatCount="indefinite"/></circle>`; break;
    case 'pulse': shapes=`<path d="M0 170 H110 L140 110 L175 235 L210 80 L240 170 H400" fill="none" stroke="${a}" stroke-width="4" stroke-linejoin="round" stroke-dasharray="600" stroke-dashoffset="600"><animate attributeName="stroke-dashoffset" values="600;0;0;-600" keyTimes="0;.5;.8;1" dur="3s" repeatCount="indefinite"/></path><path d="M0 170 H110 L140 110 L175 235 L210 80 L240 170 H400" fill="none" stroke="${a}" stroke-opacity=".2" stroke-width="10"/>`; break;
    case 'qr': shapes=`<g transform="translate(125 70)" fill="${a}">${[[0,0],[100,0],[0,100]].map(([x,y])=>`<rect x="${x}" y="${y}" width="50" height="50" fill="none" stroke="${a}" stroke-width="6"/><rect x="${x+15}" y="${y+15}" width="20" height="20"/>`).join('')}${[[70,70],[90,90],[70,110],[110,70],[120,120],[90,120]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="12"/>`).join('')}</g><rect x="105" y="50" width="190" height="190" fill="none" stroke="${b}" stroke-width="2" stroke-dasharray="14 8"/><line x1="105" y1="60" x2="295" y2="60" stroke="${b}" stroke-width="3"><animate attributeName="y1" values="60;230;60" dur="3s" repeatCount="indefinite"/><animate attributeName="y2" values="60;230;60" dur="3s" repeatCount="indefinite"/></line>`; break;
    case 'wave': shapes=`<g fill="none" stroke="${a}" stroke-width="3">${[30,60,90,120].map((r,i)=>`<circle cx="200" cy="160" r="${r}" stroke-opacity="${.8-i*.18}"><animate attributeName="r" values="${r};${r+18};${r}" dur="${2+i*.4}s" repeatCount="indefinite"/></circle>`).join('')}</g><rect x="170" y="130" width="60" height="60" rx="10" fill="${b}" fill-opacity=".5" stroke="${b}" stroke-width="2"/>`; break;
    case 'drone': shapes=`<g transform="translate(200 165)" stroke="${a}" stroke-width="4" fill="none"><path d="M-70 -50 L70 50 M70 -50 L-70 50"/><rect x="-24" y="-16" width="48" height="32" rx="8" fill="${b}" fill-opacity=".5"/>${[[-70,-50],[70,-50],[-70,50],[70,50]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="30" ry="7" fill="${a}" fill-opacity=".35"><animate attributeName="rx" values="30;10;30" dur=".25s" repeatCount="indefinite"/></ellipse>`).join('')}</g>`; break;
    case 'eye': shapes=`<g transform="translate(200 160)"><path d="M-110 0 Q0 -90 110 0 Q0 90 -110 0Z" fill="none" stroke="${a}" stroke-width="3"/><circle r="38" fill="${b}" fill-opacity=".45" stroke="${b}" stroke-width="3"><animate attributeName="cx" values="-30;30;-30" dur="3s" repeatCount="indefinite"/></circle><circle r="14" fill="#fff"><animate attributeName="cx" values="-30;30;-30" dur="3s" repeatCount="indefinite"/></circle></g>`; break;
    case 'road': shapes=`<path d="M170 320 L195 150 L205 150 L230 320Z" fill="#000" fill-opacity=".5"/><path d="M200 320 V150" stroke="${a}" stroke-width="4" stroke-dasharray="20 18"><animate attributeName="stroke-dashoffset" values="0;-38" dur=".6s" repeatCount="indefinite"/></path><circle cx="200" cy="120" r="55" fill="${b}" fill-opacity=".35"/><rect x="180" y="215" width="40" height="55" rx="10" fill="${a}"/>`; break;
    default: shapes=`<g fill="${a}">${Array.from({length:14},(_,i)=>`<circle cx="${(i*83)%380+10}" cy="${(i*47)%170+10}" r="${1+i%3}"><animate attributeName="cy" values="${(i*47)%170+10};${(i*47)%170+60};${(i*47)%170+10}" dur="${2+i%4}s" repeatCount="indefinite"/></circle>`).join('')}</g><path d="M200 120 L225 230 L200 212 L175 230Z" fill="${a}" stroke="${b}" stroke-width="3"/><rect x="196" y="40" width="8" height="40" fill="${b}"><animate attributeName="y" values="90;20;90" dur=".9s" repeatCount="indefinite"/></rect>`;
  }
  return `<svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a0e27"/><stop offset="1" stop-color="${b}" stop-opacity=".55"/></linearGradient></defs><rect width="400" height="320" fill="url(#${id})"/>${lines}${shapes}</svg>`;
}

// ===== Render cards =====
const grid=document.getElementById('pgrid');
grid.innerHTML=PROJECTS.map((p,i)=>`
 <article class="pcard animate-on-scroll" data-cat="${p.cat}" data-i="${i}" tabindex="0" role="button" aria-label="Open ${p.title}">
  <div class="art"><span class="badge">${p.badge}</span>${artSVG(p)}</div>
  <div class="pbody"><h3>${p.title}</h3><p>${p.short}</p>
  <div class="tags">${p.tags.slice(0,4).map(t=>`<span>${t}</span>`).join('')}</div>
  <div class="more">View details &rarr;</div></div></article>`).join('');

// ===== Filters =====
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{
  document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); c.classList.add('active');
  document.querySelectorAll('.pcard').forEach(card=>card.classList.toggle('hide', c.dataset.f!=='all' && card.dataset.cat!==c.dataset.f));
}));

// ===== 3D tilt =====
document.querySelectorAll('.pcard').forEach(card=>{
  card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px)`;});
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

// ===== Modal =====
const modal=document.getElementById('modal'), mbody=document.getElementById('mbody');
let cur=0;
function visible(){return [...document.querySelectorAll('.pcard:not(.hide)')].map(c=>+c.dataset.i);}
function openP(i){
  cur=i; const p=PROJECTS[i];
  mbody.innerHTML=`<div class="mart">${artSVG(p)}</div><div class="mcontent"><span class="badge" style="position:static;display:inline-block;margin-bottom:10px">${p.badge}</span><h2>${p.title}</h2><p class="lead">${p.long}</p>
  <div class="mcols"><div><h4>Key features</h4><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul><div class="tags" style="margin-top:16px">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>
  <div><h4>At a glance</h4><div class="metrics">${p.metrics.map(m=>`<div class="metric"><b>${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div></div></div></div>`;
  modal.classList.add('open'); document.body.style.overflow='hidden';
}
function closeP(){modal.classList.remove('open'); document.body.style.overflow='';}
function step(d){const v=visible(); const n=(v.indexOf(cur)+d+v.length)%v.length; openP(v[n]);}
grid.addEventListener('click',e=>{const c=e.target.closest('.pcard'); if(c) openP(+c.dataset.i);});
grid.addEventListener('keydown',e=>{if(e.key==='Enter'){const c=e.target.closest('.pcard'); if(c) openP(+c.dataset.i);}});
document.getElementById('mclose').onclick=closeP;
document.getElementById('mprev').onclick=()=>step(-1);
document.getElementById('mnext').onclick=()=>step(1);
modal.addEventListener('click',e=>{if(e.target===modal) closeP();});
document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return; if(e.key==='Escape')closeP(); if(e.key==='ArrowRight')step(1); if(e.key==='ArrowLeft')step(-1);});

// ===== Stat counters =====
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isTarget&&!en.isIntersecting)return;const el=en.target,t=+el.dataset.n;let n=0;const iv=setInterval(()=>{n++;el.textContent=n+'+';if(n>=t)clearInterval(iv);},60);io.unobserve(el);}));
document.querySelectorAll('[data-n]').forEach(el=>io.observe(el));

// ===== Hero particles =====
(function(){
  const cv=document.getElementById('particles'); if(!cv)return; const ctx=cv.getContext('2d'); let W,H,pts=[];
  function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;pts=Array.from({length:Math.min(70,W/18)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}));}
  size(); addEventListener('resize',size);
  (function loop(){ctx.clearRect(0,0,W,H);
    pts.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.fillStyle='rgba(0,255,136,.7)';ctx.fillRect(p.x,p.y,2,2);
      for(let j=i+1;j<pts.length;j++){const q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<110){ctx.strokeStyle=`rgba(138,43,226,${.35*(1-d/110)})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}});
    requestAnimationFrame(loop);})();
})();

/* ================= YOUR ORIGINAL CODE ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    function handleScroll() {
        const viewportHeight = window.innerHeight;
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < viewportHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});
