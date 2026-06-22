/* Lọc danh sách cập nhật phía trình duyệt (tìm kiếm + loại nội dung + module).
   Trang vẫn hiển thị đầy đủ nếu tắt JavaScript — script chỉ ẩn/hiện thẻ. */
(function () {
  'use strict';

  var grid = document.getElementById('grid');
  if (!grid) return;

  var input = document.getElementById('q');
  var typeChips = Array.prototype.slice.call(document.querySelectorAll('#type-chips .chip'));
  var moduleChips = Array.prototype.slice.call(document.querySelectorAll('#module-chips .chip'));
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));
  // Khu vực Ghim/banner ở trang chủ — ẩn khi đang lọc/tìm kiếm.
  var ghimZone = document.getElementById('ghim-zone') || document.getElementById('featured');
  var countLabel = document.getElementById('count-label');
  var clearBtn = document.getElementById('clear-btn');
  var emptyClear = document.getElementById('empty-clear');
  var emptyBox = document.getElementById('empty');

  var total = parseInt(grid.getAttribute('data-total') || '0', 10);
  // Danh sách slug đã "đưa lên trên" (banner + ghim) — ẩn khỏi lưới khi chưa lọc.
  var promotedAttr = grid.getAttribute('data-promoted') || grid.getAttribute('data-featured') || '';
  var promoted = {};
  promotedAttr.split(',').forEach(function (s) {
    s = s.trim();
    if (s) promoted[s] = 1;
  });
  var noun = grid.getAttribute('data-noun') || 'bản cập nhật';

  var state = { q: '', type: 'all', module: 'all' };

  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd');
  }

  function setActive(chips, attr, value) {
    chips.forEach(function (c) {
      var v = c.getAttribute(attr);
      if (v === value) c.classList.add('is-active');
      else c.classList.remove('is-active');
    });
  }

  function apply() {
    var nq = norm(state.q.trim());
    var active = !!(nq || state.type !== 'all' || state.module !== 'all');
    var visible = 0;

    if (ghimZone) ghimZone.style.display = active ? 'none' : '';

    cards.forEach(function (card) {
      var okT = state.type === 'all' || card.getAttribute('data-type') === state.type;
      var okM = state.module === 'all' || card.getAttribute('data-module') === state.module;
      var okQ = !nq || norm(card.getAttribute('data-search')).indexOf(nq) !== -1;
      var match = okT && okM && okQ;
      // Ẩn thẻ đã đưa lên khu vực Ghim/banner khi chưa lọc (tránh hiển thị hai lần).
      var hideAsFeatured = !active && !!promoted[card.getAttribute('data-slug')];
      var show = match && !hideAsFeatured;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (countLabel) {
      countLabel.textContent = active
        ? visible + ' kết quả phù hợp'
        : total + ' ' + noun + ' · sắp xếp theo mới nhất';
    }
    if (clearBtn) clearBtn.hidden = !active;
    if (emptyBox) emptyBox.hidden = !(active && visible === 0);
    if (grid) grid.style.display = active && visible === 0 ? 'none' : '';
  }

  function clearAll() {
    state = { q: '', type: 'all', module: 'all' };
    if (input) input.value = '';
    setActive(typeChips, 'data-value', 'all');
    setActive(moduleChips, 'data-module', 'all');
    apply();
  }

  if (input) {
    input.addEventListener('input', function () {
      state.q = input.value;
      apply();
    });
  }
  typeChips.forEach(function (c) {
    c.addEventListener('click', function () {
      state.type = c.getAttribute('data-value') || 'all';
      setActive(typeChips, 'data-value', state.type);
      apply();
    });
  });
  moduleChips.forEach(function (c) {
    c.addEventListener('click', function () {
      state.module = c.getAttribute('data-module') || 'all';
      setActive(moduleChips, 'data-module', state.module);
      apply();
    });
  });
  if (clearBtn) clearBtn.addEventListener('click', clearAll);
  if (emptyClear) emptyClear.addEventListener('click', clearAll);

  // Cho phép liên kết kèm bộ lọc sẵn: /?type=video&module=Kho%20hàng&q=...
  try {
    var params = new URLSearchParams(window.location.search);
    var qp = params.get('q');
    var tp = params.get('type');
    var mp = params.get('module');
    if (qp) { state.q = qp; if (input) input.value = qp; }
    if (tp && typeChips.some(function (c) { return c.getAttribute('data-value') === tp; })) {
      state.type = tp; setActive(typeChips, 'data-value', tp);
    }
    if (mp && moduleChips.some(function (c) { return c.getAttribute('data-module') === mp; })) {
      state.module = mp; setActive(moduleChips, 'data-module', mp);
    }
  } catch (e) { /* bỏ qua nếu trình duyệt cũ */ }

  apply();
})();
