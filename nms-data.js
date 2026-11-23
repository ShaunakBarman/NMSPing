export const firebaseConfig = {
  apiKey: "AIzaSyBh4pTetUQYmIYoUKxjUA2hvvbCHwXfdgQ",
  authDomain: "nmsping-a2909.firebaseapp.com",
  projectId: "nmsping-a2909",
  storageBucket: "nmsping-a2909.firebasestorage.app",
  messagingSenderId: "321227369348",
  appId: "1:321227369348:web:86e1a1b09b8333ced48bd1",
  databaseURL: "https://nmsping-a2909-default-rtdb.europe-west1.firebasedatabase.app"
};

export const DEFAULT_FLOORS = {
  g: {
    label: "Floor G",
    img: "./floor-g.jpg",
    rooms: [
      { id: "g-0", name: "Greenfield", points: "131,70 133,74 133,241 435,242 435,75" },
      { id: "g-1", name: "Canteen", points: "446,175 446,254 515,254 516,283 496,282 495,339 645,342 644,285 621,285 618,254 677,256 676,176" },
      { id: "g-2", name: "Champion's Club", points: "495,383 628,383 628,343 495,340" },
      { id: "g-3", name: "Clinic", points: "584,467 587,519 647,519 644,469" },
      { id: "g-4", name: "Reception", points: "495,570 493,460 535,461 535,469 582,469 585,519 647,519 647,572" },
      { id: "g-5", name: "Cricket Ground", points: "447,74 447,169 628,169 630,77" },
      { id: "g-6", name: "134", points: "458,296 460,326 493,328 493,294" },
      { id: "g-7", name: "142", points: "424,296 424,328 457,328 455,294" },
      { id: "g-8", name: "145", points: "380,308 400,333 411,328 421,328 421,299 401,299" },
      { id: "g-9", name: "154", points: "346,317 368,346 397,334 377,305" },
      { id: "g-10", name: "162", points: "315,331 337,359 366,346 345,317" },
      { id: "g-11", name: "167", points: "284,343 306,371 335,360 312,331" },
      { id: "g-12", name: "108", points: "645,296 678,296 680,328 646,328" },
      { id: "g-13", name: "98", points: "680,296 681,328 715,328 715,296" },
      { id: "g-14", name: "095", points: "717,300 717,328 729,328 738,333 757,308 740,300" },
      { id: "g-15", name: "86", points: "763,306 741,334 772,348 793,320" },
      { id: "g-16", name: "83", points: "795,319 826,331 806,360 775,348" },
      { id: "g-17", name: "73", points: "827,333 858,345 836,372 806,360" },
      { id: "g-18", name: "111", points: "645,371 646,340 680,340 680,369" },
      { id: "g-19", name: "103", points: "680,339 714,340 717,372 683,371" },
      { id: "g-20", name: "91", points: "734,343 718,371 744,385 764,357" },
      { id: "g-21", name: "76", points: "764,357 798,369 775,397 746,386" },
      { id: "g-22", name: "70", points: "810,375 792,398 826,414 844,389" },
      { id: "g-23", name: "129", points: "461,339 459,369 493,369 493,340" },
      { id: "g-24", name: "139", points: "425,339 425,371 456,369 459,340" },
      { id: "g-25", name: "149", points: "376,357 396,385 424,369 405,343" },
      { id: "g-26", name: "159", points: "347,368 366,397 395,385 373,357" },
      { id: "g-27", name: "172", points: "300,388 315,412 353,398 333,374" },
      { id: "g-28", name: "2", points: "369,461 344,489 378,504 396,474" },
      { id: "g-29", name: "6", points: "398,475 425,486 408,518 381,506" },
      { id: "g-30", name: "10", points: "427,486 427,521 459,519 459,486" },
      { id: "g-31", name: "14", points: "459,486 461,518 491,519 491,487" },
      { id: "g-32", name: "22", points: "646,487 680,487 681,523 648,518" },
      { id: "g-33", name: "26", points: "681,487 715,489 715,519 683,521" },
      { id: "g-34", name: "30", points: "717,487 737,518 764,504 744,475" },
      { id: "g-35", name: "34", points: "746,474 767,504 798,490 775,463" },
      { id: "g-36", name: "23", points: "648,532 681,533 681,562 648,564" },
      { id: "g-37", name: "27", points: "681,531 683,563 717,564 718,531" },
      { id: "g-38", name: "29", points: "718,531 718,560 741,560 763,551 743,526 732,532" },
      { id: "g-39", name: "31", points: "746,526 764,555 797,541 774,513" },
      { id: "g-40", name: "33", points: "777,513 804,500 826,529 798,541" },
      { id: "g-41", name: "35", points: "807,500 835,487 858,516 829,532" },
      { id: "g-42", name: "17", points: "461,530 461,562 493,562 491,529" },
      { id: "g-43", name: "13", points: "425,532 425,564 458,562 458,530" },
      { id: "g-44", name: "9", points: "405,538 405,559 422,559 422,536" },
      { id: "g-45", name: "7", points: "398,526 381,550 402,559 405,530" },
      { id: "g-46", name: "5", points: "369,513 346,542 378,553 395,526" },
      { id: "g-47", name: "3", points: "338,501 316,530 344,541 366,512" },
      { id: "g-48", name: "1", points: "309,486 284,516 312,530 336,500" },
      { id: "g-49", name: "Unknown", points: "370,405 339,416 338,440 370,454 384,450 384,408" },
      { id: "g-50", name: "Stage/Shade", points: "804,419 772,405 763,414 763,443 772,454 804,442" }
    ]
  },
  "1": {
    label: "Floor 1",
    img: "./floor-1.jpg",
    rooms: [
      { id: "1-0", name: "Zayed Hall", points: "329,77 334,173 374,175 374,162 573,166 573,179 619,179 616,84" },
      { id: "1-1", name: "Black Box", points: "443,210 443,248 529,251 529,213" },
      { id: "1-2", name: "170", points: "457,277 463,300 476,300 478,279" },
      { id: "1-3", name: "171", points: "441,277 443,300 460,300 453,277" },
      { id: "1-4", name: "165", points: "495,279 495,300 530,303 530,279" },
      { id: "1-5", name: "167", points: "441,302 441,329 532,331 530,305" },
      { id: "1-6", name: "164", points: "532,280 533,333 579,334 578,280" },
      { id: "1-7", name: "172", points: "392,276 395,329 438,329 438,276" },
      { id: "1-8", name: "161", points: "578,231 578,268 621,268 619,234" },
      { id: "1-9", name: "159", points: "621,233 624,270 664,268 662,234" },
      { id: "1-10", name: "160", points: "581,279 619,282 622,316 579,314" },
      { id: "1-11", name: "158", points: "622,282 623,314 665,316 665,282" },
      { id: "1-12", name: "176", points: "352,227 353,261 395,264 395,228" },
      { id: "1-13", name: "178", points: "309,227 309,259 350,261 349,227" },
      { id: "1-14", name: "175", points: "352,274 353,310 392,308 390,276" },
      { id: "1-15", name: "177", points: "309,273 309,306 350,308 349,274" },
      { id: "1-16", name: "185", points: "215,250 240,280 277,265 254,236" },
      { id: "1-17", name: "184", points: "249,293 274,322 307,308 284,276" },
      { id: "1-18", name: "187", points: "180,265 204,294 240,282 212,251" },
      { id: "1-19", name: "186", points: "212,305 235,337 270,322 246,293" },
      { id: "1-20", name: "189", points: "135,271 165,303 197,288 175,259" },
      { id: "1-21", name: "193", points: "189,333 200,351 220,343 197,313 189,316 200,329" },
      { id: "1-22", name: "192", points: "169,325 177,337 197,328 186,317" },
      { id: "1-23", name: "191", points: "158,328 180,359 198,352 188,336 177,339 168,326" },
      { id: "1-24", name: "168", points: "530,265 442,264 441,250 528,253" },
      { id: "1-25", name: "152", points: "723,248 700,274 740,294 760,264" },
      { id: "1-26", name: "150", points: "761,264 800,282 775,310 740,296" },
      { id: "1-27", name: "142", points: "806,274 844,290 818,328 777,310" },
      { id: "1-28", name: "151", points: "689,287 666,317 703,333 726,305" },
      { id: "1-29", name: "149", points: "729,304 704,334 743,350 769,323" },
      { id: "1-30", name: "143", points: "790,332 783,346 803,355 815,343" },
      { id: "1-31", name: "102", points: "181,395 158,426 198,442 221,413" },
      { id: "1-32", name: "106", points: "238,422 215,447 252,465 274,438" },
      { id: "1-33", name: "108", points: "312,455 293,482 254,465 277,438" },
      { id: "1-34", name: "112", points: "313,455 315,490 356,490 356,456" },
      { id: "1-35", name: "114", points: "358,456 398,458 398,490 358,488" },
      { id: "1-36", name: "113", points: "356,501 356,535 399,538 399,504" },
      { id: "1-37", name: "111", points: "315,501 315,535 355,535 353,501" },
      { id: "1-38", name: "103", points: "208,460 185,489 223,506 244,478" },
      { id: "1-39", name: "105", points: "246,478 281,493 260,523 224,507" },
      { id: "1-40", name: "101", points: "168,445 143,479 180,496 198,467 174,458 178,447" },
      { id: "1-41", name: "Maybe: Meeting Room", points: "178,449 204,460 200,467 177,455" },
      { id: "1-42", name: "119", points: "470,505 470,554 419,553 418,537 430,540 428,504" },
      { id: "1-43", name: "121", points: "513,507 514,555 563,558 565,542 554,544 554,507" },
      { id: "1-44", name: "127", points: "582,509 583,545 626,546 626,512" },
      { id: "1-45", name: "124", points: "580,462 582,496 625,498 625,464" },
      { id: "1-46", name: "129", points: "628,511 671,513 671,547 626,545" },
      { id: "1-47", name: "126", points: "626,463 669,465 669,499 626,499" },
      { id: "1-48", name: "130", points: "669,466 694,497 731,483 708,451" },
      { id: "1-49", name: "132", points: "709,451 747,435 772,469 731,481" },
      { id: "1-50", name: "136", points: "703,508 729,540 767,525 741,494" },
      { id: "1-51", name: "137", points: "743,492 778,479 804,511 767,523" },
      { id: "1-52", name: "139", points: "789,486 810,518 850,503 820,465 809,468 813,477" },
      { id: "1-53", name: "Maybe: Meeting Room", points: "780,478 807,468 809,475 786,484" },
      { id: "1-54", name: "134", points: "763,428 787,461 827,444 804,414" },
      { id: "1-55", name: "Maybe: Library", points: "580,451 445,447 448,475 441,475 439,492 579,497" },
      { id: "1-56", name: "Indecipherable", points: "816,343 826,348 806,377 781,368 792,352 806,357" },
      { id: "1-57", name: "Also indecipherable", points: "783,328 760,357 778,366 789,351 780,348 787,331" }
    ]
  },
  "2": {
    label: "Floor 2",
    img: "./floor-2.jpg",
    rooms: [
      { id: "2-0", name: "283", points: "312,228 312,268 357,267 358,230" },
      { id: "2-1", name: "281", points: "360,230 403,230 403,265 361,267" },
      { id: "2-2", name: "280", points: "358,280 358,316 403,316 401,280" },
      { id: "2-3", name: "282", points: "311,280 312,316 355,316 355,280" },
      { id: "2-4", name: "276", points: "403,280 460,280 461,337 404,337" },
      { id: "2-5", name: "275", points: "463,280 464,337 515,336 515,280" },
      { id: "2-6", name: "262", points: "535,280 533,336 592,336 592,280" },
      { id: "2-7", name: "Lab Teacher's Workstation", points: "516,280 516,336 530,336 532,280" },
      { id: "2-8", name: "290", points: "214,257 239,290 279,273 254,242" },
      { id: "2-9", name: "261", points: "593,231 593,267 638,267 638,230" },
      { id: "2-10", name: "260", points: "593,280 636,280 638,316 595,316" },
      { id: "2-11", name: "259", points: "639,230 681,230 683,265 640,267" },
      { id: "2-12", name: "258", points: "639,280 640,317 683,316 681,280" },
      { id: "2-13", name: "252", points: "741,244 718,271 757,290 780,257" },
      { id: "2-14", name: "292", points: "175,274 200,306 237,290 214,257" },
      { id: "2-15", name: "289", points: "249,302 274,333 310,317 289,285" },
      { id: "2-16", name: "291", points: "211,317 232,349 272,334 246,302" },
      { id: "2-17", name: "251", points: "703,287 681,317 721,333 744,302" },
      { id: "2-18", name: "249", points: "744,302 786,319 763,349 723,334" },
      { id: "2-19", name: "250", points: "781,259 818,276 795,306 758,290" },
      { id: "2-20", name: "243", points: "824,268 866,285 835,325 795,306" },
      { id: "2-21", name: "244", points: "810,329 798,346 820,356 833,340" },
      { id: "2-22", name: "242", points: "835,340 843,345 821,377 798,366 807,354 821,357" },
      { id: "2-23", name: "236", points: "721,455 744,487 786,472 761,438" },
      { id: "2-24", name: "233", points: "715,515 738,546 778,530 755,500" },
      { id: "2-25", name: "234", points: "683,472 706,503 743,489 718,457" },
      { id: "2-26", name: "235", points: "757,497 793,484 815,515 778,529" },
      { id: "2-27", name: "228", points: "593,472 593,507 637,507 635,472" },
      { id: "2-28", name: "222", points: "454,458 454,507 502,507 501,460" },
      { id: "2-29", name: "226", points: "540,458 542,507 591,507 591,458" },
      { id: "2-30", name: "224", points: "504,460 537,458 539,509 504,509" },
      { id: "2-31", name: "214", points: "359,472 359,507 402,507 404,472" },
      { id: "2-32", name: "212", points: "313,474 315,509 356,508 355,472" },
      { id: "2-33", name: "211", points: "312,523 315,560 358,560 359,522" },
      { id: "2-34", name: "213", points: "361,525 404,522 404,557 362,559" },
      { id: "2-35", name: "208", points: "274,456 252,487 289,502 310,473" },
      { id: "2-36", name: "206", points: "234,440 208,470 247,486 272,455" },
      { id: "2-37", name: "205", points: "240,501 217,532 257,549 280,518" },
      { id: "2-38", name: "230", points: "637,470 680,474 681,507 639,506" },
      { id: "2-39", name: "225", points: "591,521 593,556 635,556 637,521" },
      { id: "2-40", name: "227", points: "639,522 680,522 681,557 637,556" },
      { id: "2-41", name: "Secondary Library", points: "430,521 430,557 424,557 424,571 571,571 573,556 591,555 588,521" },
      { id: "2-42", name: "217", points: "418,521 416,536 405,539 407,558 427,553 427,521" },
      { id: "2-43", name: "203", points: "200,484 178,516 215,529 238,500" },
      { id: "2-44", name: "296", points: "152,343 175,375 218,359 192,325" },
      { id: "2-45", name: "294", points: "131,283 160,323 200,306 169,267" },
      { id: "2-46", name: "201", points: "160,470 131,507 169,524 197,483" },
      { id: "2-47", name: "202", points: "175,414 149,446 195,464 218,432" },
      { id: "2-48", name: "237", points: "795,481 823,521 862,504 833,466" },
      { id: "2-49", name: "273", points: "431,201 488,201 488,250 431,251" },
      { id: "2-50", name: "270", points: "510,201 565,201 565,251 508,253" },
      { id: "2-51", name: "272", points: "433,159 499,159 499,202 431,198" },
      { id: "2-52", name: "271", points: "566,158 501,159 502,202 565,199" },
      { id: "2-53", name: "Indecipherable", points: "803,326 780,359 793,366 806,352 797,346 806,328" },
      { id: "2-54", name: "240, 239", points: "781,432 801,464 844,446 821,415" },
      { id: "2-55", name: "268", points: "508,265 565,267 565,253 508,254" },
      { id: "2-56", name: "278?", points: "431,253 435,267 488,265 488,253" }
    ]
  },
  "3": {
    label: "Floor 3",
    img: "./floor-3.jpg",
    rooms: []
  }
};

export function mergeFloorRooms(floorKey, overridesObj = {}) {
  const base = DEFAULT_FLOORS[floorKey]?.rooms || [];
  return base.map((room, idx) => {
    const key = room.id || `${floorKey}-${idx}`;
    const customName = overridesObj?.[key]?.name;
    return {
      ...room,
      id: key,
      originalName: room.name,
      name: customName && String(customName).trim() ? String(customName).trim() : room.name
    };
  });
}

export function injectOpeningAndThemeStyles() {
  if (document.getElementById("nms-opening-style")) return;
  const style = document.createElement("style");
  style.id = "nms-opening-style";
  style.textContent = `
    @keyframes mapUnfold {
      0% {
        opacity: 0;
        transform: scale(0.72) rotateX(28deg);
        clip-path: inset(38% 38% 38% 38% round 24px);
      }
      65% {
        opacity: 1;
        transform: scale(1.02) rotateX(0deg);
        clip-path: inset(0% 0% 0% 0% round 16px);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotateX(0deg);
        clip-path: inset(0% 0% 0% 0% round 16px);
      }
    }
    @keyframes splashFadeOut {
      0% { opacity: 1; }
      100% { opacity: 0; pointer-events: none; visibility: hidden; }
    }
    .nms-splash {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
      animation: splashFadeOut 0.65s ease 1.15s forwards;
    }
    .nms-splash-card {
      text-align: center;
      padding: 28px 36px;
      border-radius: 24px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(52, 211, 153, 0.35);
      box-shadow: 0 25px 70px rgba(16, 185, 129, 0.16);
      animation: mapUnfold 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    .nms-map-sheet {
      animation: mapUnfold 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      transition: transform 0.3s ease, background-color 0.45s ease, border-color 0.45s ease;
    }
    body.nms-theme-transition,
    body.nms-theme-transition * {
      transition: background-color 0.45s ease, color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease !important;
    }
    body.day-mode {
      background-color: #f1f5f9 !important;
      color: #0f172a !important;
    }
    body.day-mode .nms-card {
      background-color: #ffffff !important;
      border-color: #cbd5e1 !important;
      color: #0f172a !important;
    }
    body.day-mode .nms-subcard {
      background-color: #f8fafc !important;
      border-color: #e2e8f0 !important;
      color: #0f172a !important;
    }
    body.day-mode .nms-muted {
      color: #475569 !important;
    }
    body.day-mode .nms-heading {
      color: #0f172a !important;
    }
    body.day-mode .nms-input {
      background-color: #ffffff !important;
      border-color: #cbd5e1 !important;
      color: #0f172a !important;
    }
  `;
  document.head.appendChild(style);
}

export function mountNmsOpeningSplash() {
  injectOpeningAndThemeStyles();
  if (document.getElementById("nms-splash-screen")) return;
  const splash = document.createElement("div");
  splash.id = "nms-splash-screen";
  splash.className = "nms-splash";
  splash.innerHTML = `
    <div class="nms-splash-card">
      <div class="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 mb-2">Unfolding Campus Map</div>
      <div class="text-4xl font-extrabold tracking-tight text-white">NMSPing</div>
      <div class="mt-4 mx-auto w-44 h-24 rounded-xl border border-dashed border-emerald-400/60 bg-slate-900/80 grid grid-cols-3 grid-rows-2 gap-1 p-2">
        <span class="rounded bg-emerald-500/25"></span>
        <span class="rounded bg-blue-500/25"></span>
        <span class="rounded bg-amber-500/25"></span>
        <span class="rounded bg-blue-500/25"></span>
        <span class="rounded bg-emerald-500/25"></span>
        <span class="rounded bg-slate-700/60"></span>
      </div>
    </div>
  `;
  document.body.prepend(splash);
  setTimeout(() => splash.remove(), 1900);
}

export function initDayNightToggle(buttonId) {
  injectOpeningAndThemeStyles();
  document.body.classList.add("nms-theme-transition");
  const saved = localStorage.getItem("nms_theme") || "night";

  function applyTheme(mode) {
    localStorage.setItem("nms_theme", mode);
    if (mode === "day") {
      document.body.classList.add("day-mode");
    } else {
      document.body.classList.remove("day-mode");
    }
    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.textContent = mode === "day" ? "☀️ Day Mode" : "🌙 Night Mode";
    }
  }

  applyTheme(saved);

  const btn = document.getElementById(buttonId);
  if (btn) {
    btn.addEventListener("click", () => {
      const next = (localStorage.getItem("nms_theme") || "night") === "night" ? "day" : "night";
      applyTheme(next);
    });
  }
}
