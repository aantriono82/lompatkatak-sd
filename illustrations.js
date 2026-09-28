/* Ilustrasi SVG ringan untuk soal dan pemilih tingkat kelas. */
(function (root) {
  'use strict';

  const svg = (content, viewBox = '0 0 180 110') =>
    `<svg class="mini-svg" viewBox="${viewBox}" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;

  const common = `
    <defs>
      <linearGradient id="rock" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e2a05a"/><stop offset="1" stop-color="#a94f2d"/></linearGradient>
      <linearGradient id="leaf" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#548c3e"/><stop offset="1" stop-color="#1d5132"/></linearGradient>
    </defs>`;

  const illustrations = {
    'counting-pebbles': () => svg(`${common}
      <path d="M14 92c34-9 73-8 151 0" fill="none" stroke="#3e5936" stroke-width="7" stroke-linecap="round"/>
      <g fill="#c7874d" stroke="#703e2d" stroke-width="2"><circle cx="36" cy="74" r="12"/><circle cx="68" cy="62" r="12"/><circle cx="100" cy="76" r="12"/><circle cx="132" cy="60" r="12"/><circle cx="153" cy="80" r="10"/></g>
      <g fill="#f5c66c"><circle cx="32" cy="70" r="3"/><circle cx="64" cy="58" r="3"/><circle cx="96" cy="72" r="3"/><circle cx="128" cy="56" r="3"/><circle cx="150" cy="76" r="3"/></g>`),
    'number-line': () => svg(`${common}
      <path d="M20 70h140" stroke="#75432d" stroke-width="7" stroke-linecap="round"/>
      <path d="M30 57v26m24-26v26m24-26v26m24-26v26m24-26v26m24-26v26" stroke="#f8dda1" stroke-width="3"/>
      <path d="m54 38 8 9-8 9m48-18 8 9-8 9" fill="none" stroke="#ee8d42" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="54" cy="70" r="8" fill="#4f963e" stroke="#204f32" stroke-width="3"/><circle cx="102" cy="70" r="8" fill="#f2b657" stroke="#8a4a2c" stroke-width="3"/>`),
    'wildflowers': () => svg(`${common}
      <path d="M14 92c25-20 52-8 76-17 28-10 45 6 76 11v24H14Z" fill="#3d723d"/>
      <path d="M45 94V58m33 35V49m43 45V60m32 33V50" stroke="#2c673b" stroke-width="3"/>
      <g fill="#ffe889" stroke="#fff5c9" stroke-width="3"><circle cx="45" cy="55" r="5"/><circle cx="78" cy="46" r="5"/><circle cx="121" cy="57" r="5"/><circle cx="153" cy="47" r="5"/></g>
      <g fill="#de85a2"><circle cx="45" cy="55" r="2"/><circle cx="78" cy="46" r="2"/><circle cx="121" cy="57" r="2"/><circle cx="153" cy="47" r="2"/></g>`),
    'groups': () => svg(`${common}
      <g fill="#f5c768" stroke="#87472d" stroke-width="3"><rect x="18" y="26" width="55" height="55" rx="12"/><rect x="88" y="26" width="55" height="55" rx="12"/></g>
      <g fill="#4f923f" stroke="#245234" stroke-width="2"><circle cx="35" cy="43" r="7"/><circle cx="57" cy="43" r="7"/><circle cx="35" cy="65" r="7"/><circle cx="57" cy="65" r="7"/><circle cx="105" cy="43" r="7"/><circle cx="127" cy="43" r="7"/><circle cx="105" cy="65" r="7"/><circle cx="127" cy="65" r="7"/></g>`),
    'sharing': () => svg(`${common}
      <path d="M90 17v78M32 56h116" stroke="#bd7441" stroke-width="5"/>
      <g fill="#5b9c4d" stroke="#244f32" stroke-width="2"><circle cx="52" cy="37" r="9"/><circle cx="126" cy="37" r="9"/><circle cx="52" cy="78" r="9"/><circle cx="126" cy="78" r="9"/></g>
      <path d="M78 56h24" stroke="#f8dd99" stroke-width="4" stroke-linecap="round"/>`),
    'place-value': () => svg(`${common}
      <path d="M24 86h132" stroke="#70402d" stroke-width="6" stroke-linecap="round"/>
      <g stroke="#74422d" stroke-width="3"><rect x="30" y="45" width="27" height="41" rx="4" fill="#efb35f"/><rect x="67" y="31" width="27" height="55" rx="4" fill="#d98643"/><rect x="104" y="18" width="27" height="68" rx="4" fill="#a95d39"/></g>
      <path d="M39 55h9m-9 10h9m-9 10h9m29-33h9m-9 10h9m-9 10h9m28-22h9m-9 10h9m-9 10h9" stroke="#ffe6a3" stroke-width="3" stroke-linecap="round"/>`),
    'canyon-birds': () => svg(`${common}
      <path d="M0 96 30 53l22 21 30-46 25 34 26-29 47 63Z" fill="url(#rock)" stroke="#703b2d" stroke-width="3"/>
      <path d="M25 33q10-12 20 0q10-12 20 0M92 26q10-12 20 0q10-12 20 0" fill="none" stroke="#294d37" stroke-width="4" stroke-linecap="round"/>
      <circle cx="44" cy="34" r="3" fill="#294d37"/><circle cx="111" cy="27" r="3" fill="#294d37"/>`),
    'canyon-books': () => svg(`${common}
      <path d="M24 88h132" stroke="#70402d" stroke-width="7" stroke-linecap="round"/>
      <g stroke="#70402d" stroke-width="3"><rect x="39" y="35" width="28" height="53" rx="3" fill="#e36d44" transform="rotate(-7 39 35)"/><rect x="68" y="28" width="28" height="60" rx="3" fill="#efbd57" transform="rotate(3 68 28)"/><rect x="98" y="36" width="28" height="52" rx="3" fill="#5d9b5b" transform="rotate(9 98 36)"/></g>
      <path d="M45 46h15m-16 9h15m29-15h16m-17 9h17m13 4h16m-15 9h16" stroke="#fff0b5" stroke-width="3" stroke-linecap="round"/>`),
    'jump-route': () => svg(`${common}
      <path d="M18 86c27-44 50 36 78-15 19-34 33 16 66-30" fill="none" stroke="#f2bf68" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 12"/>
      <g fill="#8d553a" stroke="#55352b" stroke-width="3"><path d="m21 80 20-7 15 12-20 11Z"/><path d="m84 58 20-7 15 12-20 11Z"/><path d="m145 34 20-7 15 12-20 11Z"/></g>
      <circle cx="47" cy="70" r="7" fill="#5da34b" stroke="#245234" stroke-width="3"/>`),
    'canyon-badge': () => svg(`${common}<path d="M8 102 45 32l23 20 22-45 24 46 22-21 36 70Z" fill="url(#rock)"/><circle cx="90" cy="35" r="15" fill="#f6c96c" stroke="#8c4b32" stroke-width="3"/><path d="M83 35h14M90 28v14" stroke="#8c4b32" stroke-width="3"/>`),
    'ipas-senses': () => svg(`${common}<circle cx="55" cy="55" r="22" fill="#79aa68" stroke="#315e3b" stroke-width="4"/><circle cx="125" cy="55" r="22" fill="#f4c66e" stroke="#7d4a32" stroke-width="4"/><circle cx="55" cy="55" r="8" fill="#fff4c4"/><path d="M116 46q18 9 0 18M135 46q18 9 0 18" fill="none" stroke="#fff4c4" stroke-width="4" stroke-linecap="round"/>`),
    'ipas-body': () => svg(`${common}<circle cx="90" cy="25" r="13" fill="#f0b57d" stroke="#713e2e" stroke-width="3"/><path d="M90 39v35m0-27-22 15m22-15 22 15M90 74 73 96m17-22 17 22" fill="none" stroke="#4f8d56" stroke-width="7" stroke-linecap="round"/><circle cx="90" cy="55" r="7" fill="#e7795c"/>`),
    'ipas-living': () => svg(`${common}<path d="M90 92V47" stroke="#315e3b" stroke-width="5"/><path d="M90 61C54 55 39 31 44 19c27 2 43 16 46 42Zm0 9c35-5 49-24 46-36-25 2-41 14-46 36Z" fill="#79aa68" stroke="#315e3b" stroke-width="3"/>`),
    'ipas-plant': () => svg(`${common}<path d="M90 96V49" stroke="#315e3b" stroke-width="6"/><path d="M90 58C54 57 42 37 47 24c25 1 40 13 43 34Zm0 12c32-3 47-20 45-34-24 1-39 11-45 31Z" fill="#79aa68" stroke="#315e3b" stroke-width="3"/><path d="M50 96h80" stroke="#9a5535" stroke-width="9" stroke-linecap="round"/>`),
    'ipas-solids': () => svg(`${common}<rect x="23" y="42" width="48" height="48" rx="7" fill="#e59b57" stroke="#703e2d" stroke-width="3"/><path d="M96 77c0-22 20-29 39-17 20 12 19 28-1 32-19 4-38 0-38-15Z" fill="#79b8d0" stroke="#315e6a" stroke-width="3"/><path d="M83 91q8-25 17-39" stroke="#fff4c4" stroke-width="3" stroke-dasharray="5 5"/>`),
    'ipas-health': () => svg(`${common}<path d="M90 91C61 71 48 58 48 42c0-12 16-18 26-7l16 17 16-17c10-11 26-5 26 7 0 16-13 29-42 49Z" fill="#e7795c" stroke="#713e2e" stroke-width="3"/><path d="M90 31v25m-12-12h24" stroke="#fff4c4" stroke-width="5" stroke-linecap="round"/>`),
    'ipas-sky': () => svg(`${common}<circle cx="52" cy="48" r="21" fill="#f5c768" stroke="#8c5a31" stroke-width="3"/><path d="M119 73c-14-6-17-24-5-34 9-8 22-7 29 2-7 0-12 5-12 12 0 9 6 16 14 18-8 7-17 7-26 2Z" fill="#f5e4a5" stroke="#8c5a31" stroke-width="3"/><path d="M25 91q11-10 22 0q11-10 22 0M112 28q11-10 22 0q11-10 22 0" fill="none" stroke="#fff4c4" stroke-width="4" stroke-linecap="round"/>`),
    'ipas-weather': () => svg(`${common}<path d="M44 75h83c13 0 21-8 21-18s-8-18-19-18c-4-16-26-21-37-8-16-8-34 3-34 19-12 0-20 9-20 17s0 8 6 8Z" fill="#eef1d2" stroke="#547063" stroke-width="3"/><path d="M68 88l-7 15m29-15-7 15m29-15-7 15" stroke="#6fabc0" stroke-width="4" stroke-linecap="round"/>`),
    'ipas-habitat': () => svg(`${common}<path d="M10 83q40-24 80 0t80 0v28H10Z" fill="#5c9f70"/><path d="M10 75q40-20 80 0t80 0" fill="none" stroke="#5c9fc1" stroke-width="15"/><path d="M43 72q20-21 39 0q-20 12-39 0Zm62 0q20-21 39 0q-20 12-39 0Z" fill="#e4a757" stroke="#703e2d" stroke-width="3"/>`),
    'ipas-environment': () => svg(`${common}<path d="M90 95V47" stroke="#315e3b" stroke-width="7"/><circle cx="62" cy="42" r="25" fill="#79aa68" stroke="#315e3b" stroke-width="3"/><circle cx="117" cy="42" r="25" fill="#5d9759" stroke="#315e3b" stroke-width="3"/><path d="M30 96h120" stroke="#9a5535" stroke-width="8" stroke-linecap="round"/>`),
    'ipas-food-chain': () => svg(`${common}<path d="M20 78h28V48h28v30h28V48h28v30h28" fill="none" stroke="#f0c66a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="m149 69 11 9-11 9" fill="none" stroke="#f0c66a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="35" cy="39" r="14" fill="#f3c568" stroke="#8c5a31" stroke-width="3"/>`),
    'ipas-animals': () => svg(`${common}<circle cx="61" cy="56" r="22" fill="#d88a50" stroke="#703e2d" stroke-width="3"/><circle cx="119" cy="56" r="22" fill="#f0c56b" stroke="#703e2d" stroke-width="3"/><path d="M45 40 39 24l15 9m82 7 6-16-15 9" fill="#d88a50" stroke="#703e2d" stroke-width="3"/><circle cx="54" cy="54" r="3"/><circle cx="112" cy="54" r="3"/>`),
    'ipas-force': () => svg(`${common}<path d="M20 78h90" stroke="#70402d" stroke-width="7" stroke-linecap="round"/><path d="m96 57 18 21-18 21" fill="none" stroke="#e7795c" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="55" cy="62" r="15" fill="#f5c768" stroke="#8c5a31" stroke-width="3"/>`),
    'ipas-energy': () => svg(`${common}<circle cx="59" cy="51" r="25" fill="#f5c768" stroke="#8c5a31" stroke-width="3"/><path d="m59 12v-8m-27 20-6-6m6 54-6 6m54-54 6-6m-6 54 6 6" stroke="#f5c768" stroke-width="5" stroke-linecap="round"/><path d="M110 25v62m-19-43h38m-31 25h24m-29 24h36" stroke="#6b9dca" stroke-width="5"/>`),
    'ipas-water-cycle': () => svg(`${common}<path d="M20 78q35-20 70 0t70 0" fill="none" stroke="#6fabc0" stroke-width="12" stroke-linecap="round"/><path d="M62 62C35 48 44 20 67 18m51 45c27-14 18-42-5-45" fill="none" stroke="#f0c66a" stroke-width="5" stroke-linecap="round"/><path d="m57 23 10-5-3 11m53 37-10 5 3-11" fill="none" stroke="#e7795c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`),
    'ipas-map': () => svg(`${common}<path d="M23 25 67 14l46 11 44-11v70l-44 11-46-11-44 11Z" fill="#e7d49a" stroke="#70402d" stroke-width="3"/><path d="M67 14v70m46-59v70" stroke="#b57a4c" stroke-width="3"/><path d="m43 62 29-27 19 13 27-22" fill="none" stroke="#5a9860" stroke-width="5"/>`),
    'ipas-sound': () => svg(`${common}<path d="M28 48h24l24-20v54L52 62H28Z" fill="#f1c569" stroke="#70402d" stroke-width="3"/><path d="M92 39q18 16 0 32m19-42q31 26 0 52" fill="none" stroke="#6a9fca" stroke-width="5" stroke-linecap="round"/>`),
    'ipas-electricity': () => svg(`${common}<path d="M36 75V36h108v39" fill="none" stroke="#70402d" stroke-width="5"/><circle cx="90" cy="47" r="13" fill="#f5c768" stroke="#8c5a31" stroke-width="3"/><path d="M83 47h14m-7-7v14" stroke="#fff4c4" stroke-width="3"/><path d="M36 75q27 20 54 0t54 0" fill="none" stroke="#6b9dca" stroke-width="4"/>`),
    'ipas-magnet': () => svg(`${common}<path d="M46 30v31c0 26 15 37 44 37s44-11 44-37V30" fill="none" stroke="#e7795c" stroke-width="14" stroke-linecap="round"/><path d="M46 30v24m88-24v24" stroke="#eef1d2" stroke-width="14" stroke-linecap="round"/><path d="M67 86h46" stroke="#70402d" stroke-width="5"/>`),
    'ipas-solar-system': () => svg(`${common}<circle cx="90" cy="55" r="18" fill="#f5c768" stroke="#8c5a31" stroke-width="3"/><ellipse cx="90" cy="55" rx="62" ry="28" fill="none" stroke="#e7d49a" stroke-width="3"/><circle cx="147" cy="55" r="7" fill="#6b9dca" stroke="#315e6a" stroke-width="2"/><circle cx="32" cy="20" r="5" fill="#fff4c4"/><circle cx="151" cy="23" r="4" fill="#fff4c4"/>`),
    'english-abc': () => svg(`${common}<rect x="25" y="28" width="130" height="65" rx="12" fill="#6f9dcc" stroke="#315076" stroke-width="4"/><circle cx="55" cy="61" r="18" fill="#f4c66e" stroke="#7d4a32" stroke-width="3"/><circle cx="90" cy="61" r="18" fill="#79aa68" stroke="#315e3b" stroke-width="3"/><circle cx="125" cy="61" r="18" fill="#e7795c" stroke="#713e2e" stroke-width="3"/><text x="55" y="69" text-anchor="middle" font-size="22" font-weight="800" fill="#5c352a">A</text><text x="90" y="69" text-anchor="middle" font-size="22" font-weight="800" fill="#fff4c4">B</text><text x="125" y="69" text-anchor="middle" font-size="22" font-weight="800" fill="#fff4c4">C</text>`),
    'ips-map': () => svg(`${common}<path d="M23 25 67 14l46 11 44-11v70l-44 11-46-11-44 11Z" fill="#e7d49a" stroke="#70402d" stroke-width="3"/><path d="M67 14v70m46-59v70" stroke="#b57a4c" stroke-width="3"/><path d="m43 62 29-27 19 13 27-22" fill="none" stroke="#5a9860" stroke-width="5"/><circle cx="43" cy="62" r="6" fill="#e7795c" stroke="#713e2e" stroke-width="2"/><circle cx="118" cy="26" r="6" fill="#6f9dcc" stroke="#315076" stroke-width="2"/>`),
    'bahasa-indonesia-book': () => svg(`${common}<rect x="31" y="27" width="54" height="63" rx="5" fill="#e7795c" stroke="#713e2e" stroke-width="4" transform="rotate(-7 31 27)"/><rect x="95" y="27" width="54" height="63" rx="5" fill="#6f9dcc" stroke="#315076" stroke-width="4" transform="rotate(7 95 27)"/><path d="M45 44h25m-27 11h24m42-11h25m-23 11h24" stroke="#fff4c4" stroke-width="4" stroke-linecap="round"/><path d="M90 35v59" stroke="#70402d" stroke-width="4"/>`),
    'pai-quran': () => svg(`${common}<path d="M31 29h49c7 0 10 4 10 10v48c-5-5-11-7-18-7H31Z" fill="#79aa68" stroke="#315e3b" stroke-width="4"/><path d="M149 29h-49c-7 0-10 4-10 10v48c5-5 11-7 18-7h41Z" fill="#5d9759" stroke="#315e3b" stroke-width="4"/><path d="M90 39v46M45 48h26m-26 12h25m43-12h26m-26 12h25" stroke="#fff4c4" stroke-width="3" stroke-linecap="round"/><path d="M90 18c9 9 13 20 7 29-8-5-13-13-7-29Z" fill="#f5c768" stroke="#8c5a31" stroke-width="3"/>`),
    'seni-budaya-art': () => svg(`${common}<path d="M30 79q12-36 47-36 53 0 63 32 5 18-13 18H47q-18 0-17-14Z" fill="#f5c768" stroke="#8c5a31" stroke-width="4"/><circle cx="57" cy="57" r="8" fill="#e7795c"/><circle cx="81" cy="49" r="8" fill="#6f9dcc"/><circle cx="106" cy="59" r="8" fill="#79aa68"/><path d="M46 91h88" stroke="#70402d" stroke-width="6" stroke-linecap="round"/><path d="m132 24 16 16-31 31-16 3 3-16Z" fill="#e7795c" stroke="#713e2e" stroke-width="3"/>`),
    'seni-rupa-art': () => svg(`${common}<rect x="29" y="25" width="83" height="66" rx="5" fill="#fff0b5" stroke="#70402d" stroke-width="4"/><circle cx="52" cy="48" r="10" fill="#e7795c"/><path d="M38 80 64 57l15 14 17-20 15 29Z" fill="#79aa68" stroke="#315e3b" stroke-width="3"/><path d="m125 27 17 17-32 32-17 3 4-17Z" fill="#e7795c" stroke="#713e2e" stroke-width="3"/>`),
    'seni-musik-art': () => svg(`${common}<circle cx="67" cy="77" r="15" fill="#6f9dcc" stroke="#315076" stroke-width="3"/><circle cx="122" cy="77" r="15" fill="#e7795c" stroke="#713e2e" stroke-width="3"/><path d="M82 77V28l55-10v59M82 42l55-10" fill="none" stroke="#70402d" stroke-width="6" stroke-linecap="round"/>`),
    'seni-tari-art': () => svg(`${common}<circle cx="90" cy="25" r="11" fill="#f0b57d" stroke="#713e2e" stroke-width="3"/><path d="M90 37v30m0-20-31-14m31 14 29-22M90 67 55 94m35-27 34 27" fill="none" stroke="#e7795c" stroke-width="7" stroke-linecap="round"/><circle cx="52" cy="35" r="8" fill="#f5c768"/><circle cx="123" cy="25" r="8" fill="#79aa68"/>`),
    'seni-teater-art': () => svg(`${common}<path d="M26 25h52v61H26Z" fill="#e7795c" stroke="#713e2e" stroke-width="4"/><path d="M102 25h52v61h-52Z" fill="#6f9dcc" stroke="#315076" stroke-width="4"/><circle cx="52" cy="52" r="16" fill="#fff4c4" stroke="#713e2e" stroke-width="3"/><path d="M46 49h4m5 0h4M46 61q6 6 12 0" stroke="#713e2e" stroke-width="3" stroke-linecap="round"/><circle cx="128" cy="52" r="16" fill="#fff4c4" stroke="#315076" stroke-width="3"/><path d="M122 58q6-6 12 0M122 48h4m5 0h4" stroke="#315076" stroke-width="3" stroke-linecap="round"/>`),
    'pancasila-flag': () => svg(`${common}<path d="M45 18v78" stroke="#70402d" stroke-width="6" stroke-linecap="round"/><path d="M48 22h92v27H48Z" fill="#e7795c" stroke="#713e2e" stroke-width="3"/><path d="M48 49h92v27H48Z" fill="#fff4c4" stroke="#713e2e" stroke-width="3"/><circle cx="90" cy="49" r="10" fill="#f5c768" stroke="#8c5a31" stroke-width="2"/><path d="M84 49h12m-6-6v12" stroke="#8c5a31" stroke-width="2"/>`),
    'pjok-ball': () => svg(`${common}<circle cx="90" cy="55" r="34" fill="#fff4c4" stroke="#315076" stroke-width="4"/><path d="m90 37 13 9-5 15H82l-5-15Z" fill="#315076"/><path d="m77 46-17-8m43 8 17-8m-12 23 11 15m-37-15-11 15" fill="none" stroke="#315076" stroke-width="4" stroke-linecap="round"/>`),
    'icon-kelas-1-2': () => svg(`<circle cx="90" cy="55" r="41" fill="#f4c66e" stroke="#7d4a32" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#5c352a">1–2</text>`),
    'icon-kelas-3-4': () => svg(`<circle cx="90" cy="55" r="41" fill="#d98b50" stroke="#633b2d" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff1bd">3–4</text>`),
    'icon-kelas-5-6': () => svg(`<circle cx="90" cy="55" r="41" fill="#6d9d59" stroke="#244f38" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff4c4">5–6</text>`),
    'icon-A': () => svg(`<circle cx="90" cy="55" r="41" fill="#f4c66e" stroke="#7d4a32" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#5c352a">A</text>`),
    'icon-B': () => svg(`<circle cx="90" cy="55" r="41" fill="#d98b50" stroke="#633b2d" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff1bd">B</text>`),
    'icon-C': () => svg(`<circle cx="90" cy="55" r="41" fill="#6d9d59" stroke="#244f38" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff4c4">C</text>`),
    'icon-subject-matematika': () => svg(`<circle cx="90" cy="55" r="40" fill="#f4c66e" stroke="#7d4a32" stroke-width="4"/><path d="M62 42h56M62 58h56M78 30v50M102 30v50" stroke="#5c352a" stroke-width="5" stroke-linecap="round"/><circle cx="90" cy="55" r="9" fill="#fff4c4"/>`),
    'icon-subject-ipa': () => svg(`<circle cx="90" cy="55" r="40" fill="#79aa68" stroke="#315e3b" stroke-width="4"/><path d="M72 30h36v11l-5 8v22c0 7-5 11-13 11s-13-4-13-11V49l-5-8Z" fill="#fff4c4" stroke="#315e3b" stroke-width="3"/><path d="M76 61q14-8 28 0v10H76Z" fill="#6f9dcc"/>`),
    'icon-subject-ips': () => svg(`<circle cx="90" cy="55" r="40" fill="#e7795c" stroke="#713e2e" stroke-width="4"/><path d="M52 35 88 26l38 9 30-9v52l-30 9-38-9-36 9Z" fill="#fff4c4" stroke="#713e2e" stroke-width="3"/><path d="M88 26v52m38-43v52" stroke="#b57a4c" stroke-width="3"/><circle cx="69" cy="55" r="6" fill="#6f9dcc"/><circle cx="112" cy="40" r="6" fill="#79aa68"/>`),
    'icon-subject-ipas': () => svg(`<circle cx="90" cy="55" r="40" fill="#79aa68" stroke="#315e3b" stroke-width="4"/><path d="M90 77c-22-15-25-31-14-42 8 8 13 13 14 22 3-16 11-25 22-30 5 18-2 39-22 50Z" fill="#e7f0b8" stroke="#315e3b" stroke-width="3"/>`),
    'icon-subject-bahasa-inggris': () => svg(`<circle cx="90" cy="55" r="40" fill="#6f9dcc" stroke="#315076" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="27" font-weight="800" fill="#fff4c4">ABC</text>`),
    'icon-subject-bahasa-indonesia': () => svg(`<circle cx="90" cy="55" r="40" fill="#e7795c" stroke="#713e2e" stroke-width="4"/><path d="M68 37h44v36H68Z" fill="#fff4c4" stroke="#713e2e" stroke-width="3"/><path d="M75 48h30m-30 9h24m-24 9h17" stroke="#713e2e" stroke-width="3" stroke-linecap="round"/>`),
    'icon-subject-pai-budi-pekerti': () => svg(`<circle cx="90" cy="55" r="40" fill="#79aa68" stroke="#315e3b" stroke-width="4"/><path d="M90 30c-12 15-10 30 3 39-2-13 4-23 15-29-1 17-9 28-21 35-16-10-20-26-9-42 5-7 9-7 12-3Z" fill="#fff4c4" stroke="#315e3b" stroke-width="3"/><circle cx="100" cy="42" r="3" fill="#f5c768"/>`),
    'icon-subject-pendidikan-pancasila': () => svg(`<circle cx="90" cy="55" r="40" fill="#e7795c" stroke="#713e2e" stroke-width="4"/><path d="M61 39h58v33H61Z" fill="#fff4c4" stroke="#713e2e" stroke-width="3"/><path d="M90 28v55M68 55h44" stroke="#713e2e" stroke-width="3"/><text x="90" y="63" text-anchor="middle" font-size="17" font-weight="800" fill="#713e2e">P</text>`),
    'icon-subject-pjok': () => svg(`<circle cx="90" cy="55" r="40" fill="#6f9dcc" stroke="#315076" stroke-width="4"/><circle cx="90" cy="55" r="22" fill="#fff4c4" stroke="#315076" stroke-width="3"/><path d="m90 43 8 6-3 10H85l-3-10Z" fill="#315076"/><path d="m82 49-10-6m26 6 10-6m-7 16 8 9m-25-9-8 9" fill="none" stroke="#315076" stroke-width="3" stroke-linecap="round"/>`),
    'icon-subject-seni-budaya': () => svg(`<circle cx="90" cy="55" r="40" fill="#f5c768" stroke="#8c5a31" stroke-width="4"/><path d="M66 72q0-27 24-27t24 27" fill="#e7795c" stroke="#713e2e" stroke-width="3"/><circle cx="80" cy="55" r="4" fill="#fff4c4"/><circle cx="100" cy="55" r="4" fill="#fff4c4"/><path d="M78 66q12 8 24 0" fill="none" stroke="#fff4c4" stroke-width="3" stroke-linecap="round"/><path d="m54 30 13 13m69-13-13 13" stroke="#6f9dcc" stroke-width="5" stroke-linecap="round"/>`)
  };

  const api = {
    getIllustration(name) {
      return illustrations[name] ? illustrations[name]() : '';
    }
  };

  root.FrogIllustrations = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
