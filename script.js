'use strict';

/* =========================================================
   Works data
========================================================= */
const works = [
  {
    id: 'work-01',
    category: '企業公式Instagram運用プロデュース',
    title: 'アスリート向けサプリメント企業（企業公式Instagram運用プロデュース）',
    role: '戦略設計・企画・取材撮影・デザイン・ライティング・投稿・アンバサダー活動',
    summary: '2024年4月から担当。引き継ぎ時は月間インプレッション16,787回・リーチ2,860人だったところから、2年で132万3,488回・14万8,865人まで成長させ、ピーク時は300万回を突破。',
    tags: ['Instagram', '戦略設計', '取材撮影', '動画編集', 'デザイン', 'ライティング', '分析改善', 'アンバサダー施策', 'キャスティング'],
    image: 'img/project01.jpg',
    link: null
  },
  {
    id: 'work-02',
    category: 'SNS出張研修',
    title: '大手リゾートホテル・公益社団法人 日本ホッケー協会（SNS出張研修）',
    role: '講師・教材制作・レクチャー',
    summary: '大手リゾートホテルのスタッフ向け撮影・Instagram運用レッスンに加え、公益社団法人日本ホッケー協会の男女日本代表チーム向けSNS出張研修（2026年4月実施）も担当。「競技力×人間力×発信力」をテーマにしたセルフブランディング講座を展開。',
    tags: ['Instagram', '講座開催', 'グループレッスン'],
    image: 'img/project02.jpg',
    link: { url: 'https://hockey.or.jp/', label: '日本ホッケー協会 公式サイト' }
  },
  {
    id: 'work-03',
    category: '企業公式Instagram運用プロデュース',
    title: '地方温泉地の宿泊施設（企業公式Instagram運用プロデュース）',
    role: '戦略設計・企画・取材撮影・デザイン・ライティング・投稿・ユーザーコミュニケーション・インフルエンサーキャスティング',
    summary: '開業したばかりのアカウントをゼロから構築。丁寧なファンコミュニケーションや地域企業取材を通じ、1年でブランド認知拡大・予約獲得・リピーター醸成を実現。フォロワー1.2万人時点でストーリーズ閲覧最高3,014人を記録。',
    tags: ['Instagram', '戦略設計', '取材撮影', '動画編集', 'デザイン', 'ライティング', '分析改善', 'アンバサダー施策', 'キャスティング', 'プレゼントキャンペーン'],
    image: 'img/project03.jpg',
    link: null
  },
  {
    id: 'work-04',
    category: '企業公式Instagram運用プロデュース',
    title: '伊豆エリアの老舗ホテル（企業公式Instagram運用プロデュース）',
    role: '戦略設計・企画・取材撮影・デザイン・ライティング・投稿・ユーザーコミュニケーション',
    summary: 'アカウントのリブランディングを担当。地域企業との連携・取材を通じ、エリア情報も充実したアカウントへと成長させた。',
    tags: ['Instagram', '戦略設計', '取材撮影', '動画編集', 'デザイン', 'ライティング', '分析改善', 'アンバサダー施策', 'キャスティング', 'プレゼントキャンペーン'],
    image: 'img/project04.jpg',
    link: null
  },
  {
    id: 'work-05',
    category: '撮影・集客レッスン',
    title: '韓国料理教室（撮影・集客レッスン）',
    role: '講師・コンサル',
    summary: 'スマホでの料理撮影のコツとInstagram集客の実践方法を、教室運営者向けにレッスン形式で指導。',
    tags: ['Instagram', '講座開催', 'グループレッスン', 'スマホ撮影レッスン', '料理写真', '料理動画', '動画編集'],
    image: 'img/project05.jpg',
    link: null
  },
  {
    id: 'work-06',
    category: '講座運営',
    title: 'Canva×AI活用講座（講座運営）',
    role: '企画・登壇・教材制作',
    summary: '対面・オンライン計3回、合計10.5時間開催。店舗・教室運営者向けにCanva×生成AIの実践活用法を指導。',
    tags: ['教室集客', '店舗集客', '講座開催', 'グループレッスン', 'Canva', 'AI', 'ChatGPT', 'Claude', 'Gemini', 'Notebook LM'],
    image: 'img/project06.jpg',
    link: null
  }
];

/* =========================================================
   Header: scroll style + mobile nav
========================================================= */
(function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('header-nav');

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const closeNav = () => {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const toggleNav = () => {
    const isOpen = nav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleNav);

  nav.querySelectorAll('.header__nav-link, .header__nav-cta').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
  });
})();

/* =========================================================
   Works: render cards + modal
========================================================= */
(function initWorks() {
  const grid = document.getElementById('works-grid');

  const cardTemplate = (work) => `
    <button type="button" class="work-card js-reveal" data-id="${work.id}">
      <span class="work-card__thumb">
        <img src="${work.image}" alt="${work.title}" loading="lazy">
      </span>
      <span class="work-card__body">
        <span class="work-card__category">${work.category}</span>
        <span class="work-card__title">${work.title}</span>
        <span class="work-card__summary">${work.summary}</span>
        <span class="work-card__tags">
          ${work.tags.map((tag) => `<span class="work-card__tag">${tag}</span>`).join('')}
        </span>
      </span>
    </button>
  `;

  grid.innerHTML = works.map(cardTemplate).join('');

  const modal = document.getElementById('work-modal');
  const dialog = modal.querySelector('.modal__dialog');
  const modalImage = document.getElementById('modal-image');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalRole = document.getElementById('modal-role');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalLink = document.getElementById('modal-link');
  const closeBtn = document.getElementById('modal-close');

  let lastFocused = null;

  const openModal = (work) => {
    modalImage.src = work.image;
    modalImage.alt = work.title;
    modalCategory.textContent = work.category;
    modalTitle.textContent = work.title;
    modalRole.textContent = work.role;
    modalDesc.textContent = work.summary;
    modalTags.innerHTML = work.tags.map((tag) => `<span>${tag}</span>`).join('');

    if (work.link) {
      modalLink.href = work.link.url;
      modalLink.textContent = work.link.label;
      modalLink.hidden = false;
    } else {
      modalLink.hidden = true;
      modalLink.removeAttribute('href');
    }

    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    dialog.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.work-card');
    if (!card) return;
    const work = works.find((w) => w.id === card.dataset.id);
    if (work) openModal(work);
  });

  modal.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();

/* =========================================================
   FAQ accordion
========================================================= */
(function initFaq() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach((item) => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    question.addEventListener('click', () => {
      const isOpen = question.getAttribute('aria-expanded') === 'true';

      items.forEach((other) => {
        const otherQuestion = other.querySelector('.faq__question');
        const otherAnswer = other.querySelector('.faq__answer');
        otherQuestion.setAttribute('aria-expanded', 'false');
        otherAnswer.hidden = true;
      });

      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });
})();

/* =========================================================
   Back to top
========================================================= */
(function initToTop() {
  const btn = document.getElementById('to-top');
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* =========================================================
   Scroll reveal (IntersectionObserver)
========================================================= */
(function initReveal() {
  const targets = document.querySelectorAll('.js-reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();
