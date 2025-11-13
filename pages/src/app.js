// pages/src/app.js - site interactions and preloader
(function(){
  'use strict';

  // Preloader: hide after content is ready
  function hidePreloader(){
    const p = document.getElementById('preloader');
    if(!p) return;
    p.style.opacity = '0';
    setTimeout(()=>{ p.style.display='none'; }, 450);
  }

  document.addEventListener('DOMContentLoaded', function(){
    // simulate a small load time for demo
    setTimeout(hidePreloader, 600);

    // signup form handling
    const form = document.getElementById('signup');
    if(form){
      form.addEventListener('submit', function(ev){
        ev.preventDefault();
        const email = form.querySelector('input[type=email]')?.value || '';
        // basic validation
        if(!email || !email.includes('@')){
          alert('Vul een geldig e-mailadres in.');
          return;
        }
        // simple visual feedback
        const btn = form.querySelector('button');
        const old = btn.innerText;
        btn.disabled = true;
        btn.innerText = 'Ingeschreven ✓';
        setTimeout(()=>{ btn.disabled=false; btn.innerText = old; form.reset(); }, 1600);
        console.log('Inschrijving:', email);
      });
    }

    // Smooth anchor scrolling for modern browsers
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.length>1){
          const el = document.querySelector(href);
          if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
        }
      });
    });

    // lazy load images with data-src
    const imgs = document.querySelectorAll('img[data-src]');
    if('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries, obs)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            const img = entry.target; img.src = img.dataset.src; img.removeAttribute('data-src'); obs.unobserve(img);
          }
        });
      },{rootMargin:'50px'});
      imgs.forEach(i=>io.observe(i));
    } else {
      imgs.forEach(i=>{ i.src = i.dataset.src; i.removeAttribute('data-src'); });
    }
  });

})();
