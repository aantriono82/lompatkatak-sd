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
    'icon-kelas-1-2': () => svg(`<circle cx="90" cy="55" r="41" fill="#f4c66e" stroke="#7d4a32" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#5c352a">1–2</text>`),
    'icon-kelas-3-4': () => svg(`<circle cx="90" cy="55" r="41" fill="#d98b50" stroke="#633b2d" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff1bd">3–4</text>`),
    'icon-kelas-5-6': () => svg(`<circle cx="90" cy="55" r="41" fill="#6d9d59" stroke="#244f38" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff4c4">5–6</text>`),
    'icon-A': () => svg(`<circle cx="90" cy="55" r="41" fill="#f4c66e" stroke="#7d4a32" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#5c352a">A</text>`),
    'icon-B': () => svg(`<circle cx="90" cy="55" r="41" fill="#d98b50" stroke="#633b2d" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff1bd">B</text>`),
    'icon-C': () => svg(`<circle cx="90" cy="55" r="41" fill="#6d9d59" stroke="#244f38" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="30" font-weight="800" fill="#fff4c4">C</text>`),
    'icon-subject-matematika': () => svg(`<circle cx="90" cy="55" r="40" fill="#f4c66e" stroke="#7d4a32" stroke-width="4"/><path d="M62 42h56M62 58h56M78 30v50M102 30v50" stroke="#5c352a" stroke-width="5" stroke-linecap="round"/><circle cx="90" cy="55" r="9" fill="#fff4c4"/>`),
    'icon-subject-ipas': () => svg(`<circle cx="90" cy="55" r="40" fill="#79aa68" stroke="#315e3b" stroke-width="4"/><path d="M90 77c-22-15-25-31-14-42 8 8 13 13 14 22 3-16 11-25 22-30 5 18-2 39-22 50Z" fill="#e7f0b8" stroke="#315e3b" stroke-width="3"/>`),
    'icon-subject-bahasa-inggris': () => svg(`<circle cx="90" cy="55" r="40" fill="#6f9dcc" stroke="#315076" stroke-width="4"/><text x="90" y="66" text-anchor="middle" font-size="27" font-weight="800" fill="#fff4c4">ABC</text>`)
  };

  const api = {
    getIllustration(name) {
      return illustrations[name] ? illustrations[name]() : '';
    }
  };

  root.FrogIllustrations = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
