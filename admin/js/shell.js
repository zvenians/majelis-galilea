/*
 * =========================================================
 * MAJELIS GALILEA — RESILIENT UI SHELL V7
 * =========================================================
 * Navigation MUST remain usable even when:
 * - Apps Script backend is unavailable,
 * - the large application script hits a runtime error,
 * - data has not finished loading.
 */
window.__MG840_SHELL_READY__ = true;

window.toggleDynamicIsland = function() {
  var island =
    document.getElementById(
      'dynamicIsland'
    );

  if (!island) {
    return;
  }

  var open =
    island.classList.toggle(
      'open'
    );

  document.body.classList.toggle(
    'island-open',
    open
  );

  var toggle =
    document.getElementById(
      'islandToggle'
    );

  if (toggle) {
    toggle.setAttribute(
      'aria-expanded',
      open
        ? 'true'
        : 'false'
    );
  }

  if (
    !open
  ) {
    window.closeDynamicIsland();
  }
};


window.closeDynamicIsland = function() {
  var island =
    document.getElementById(
      'dynamicIsland'
    );

  if (island) {
    island.classList.remove(
      'open'
    );

    /*
     * V8.4.0:
     * normalizeDynamicIslandViewportV821() gives .island-expand
     * an inline max-height while the menu is open. Inline styles
     * override the closed CSS max-height:0, which previously left
     * a large empty dark panel after navigating.
     */
    var expand =
      island.querySelector(
        '.island-expand'
      );

    if (expand) {
      expand.style.removeProperty(
        'max-height'
      );

      expand.scrollTop =
        0;
    }
  }

  document.body.classList.remove(
    'island-open'
  );

  var toggle =
    document.getElementById(
      'islandToggle'
    );

  if (toggle) {
    toggle.setAttribute(
      'aria-expanded',
      'false'
    );
  }
};


window.installPageSignatures = function() {
  var pages =
    document.querySelectorAll(
      '.page'
    );

  pages.forEach(
    function(page) {
      if (
        page.querySelector(
          ':scope > .page-signature'
        )
      ) {
        return;
      }

      var footer =
        document.createElement(
          'footer'
        );

      footer.className =
        'page-signature';

      footer.innerHTML =
        '<span>Copyright</span>' +
        '<span class="signature-mark">' +
          '<img class="signature-logo show" src="/assets/adventist-logo.png" alt="Logo Advent" />' +
        '</span>' +
        '<strong>Kevin Simatupang 2026</strong>';

      page.appendChild(
        footer
      );
    }
  );

  window.syncSignatureLogos();
};


window.syncSignatureLogos = function() {
  var brand =
    document.getElementById(
      'brandLogo'
    );

  var src =
    brand &&
    brand.getAttribute(
      'src'
    )
      ? brand.getAttribute(
          'src'
        )
      : '';

  document
    .querySelectorAll(
      '.signature-logo'
    )
    .forEach(
      function(image) {
        if (src) {
          image.src =
            src;

          image.classList.add(
            'show'
          );
        }

        else {
          image.removeAttribute(
            'src'
          );

          image.classList.remove(
            'show'
          );
        }
      }
    );
};


document.addEventListener(
  'click',
  function(event) {
    var island =
      document.getElementById(
        'dynamicIsland'
      );

    if (
      !island ||
      !island.classList.contains(
        'open'
      )
    ) {
      return;
    }

    if (
      !island.contains(
        event.target
      )
    ) {
      window.closeDynamicIsland();
    }
  }
);


document.addEventListener(
  'keydown',
  function(event) {
    if (
      event.key ===
      'Escape'
    ) {
      window.closeDynamicIsland();
    }
  }
);


window.MG_PAGE_TITLES = {
  dashboard: 'Ringkasan',
  rapat: 'Rapat',
  usulan: 'Usulan rapat',
  keputusan: 'Keputusan rapat',
  tindak_lanjut: 'Tugas',
  program: 'Program Kerja',
  rapbj: 'RAPBJ',
  keuangan: 'Keuangan',
  inventaris: 'Inventaris',
  pengurus: 'Pengurus',
  jemaat: 'Anggota Jemaat',
  dokumen: 'Dokumen',
  surat: 'Surat',
  akses: 'Akun pengurus',
  kalender: 'Kalender',
  arsip: 'Arsip Tahunan',
  aktivitas: 'Aktivitas'
};

window.shellNavigate = function(page) {
  try {
    /*
     * Always collapse immediately before navigating.
     * This keeps the island compact even if the destination page
     * later performs asynchronous work or throws a render error.
     */
    window.closeDynamicIsland();

    /*
     * If full application is alive, let it perform all normal
     * page-specific logic. Otherwise use the shell fallback.
     */
    if (
      typeof window.openPage === 'function' &&
      window.__MG840_FULL_APP_READY__
    ) {
      window.openPage(page);
      return;
    }

    document
      .querySelectorAll('.page')
      .forEach(function(section) {
        section.classList.toggle(
          'active',
          section.id === page
        );
      });

    document
      .querySelectorAll('.nav-item')
      .forEach(function(item) {
        item.classList.toggle(
          'active',
          item.dataset.page === page
        );
      });

    var title =
      document.getElementById(
        'pageTitle'
      );

    if (title) {
      title.textContent =
        window.MG_PAGE_TITLES[page] ||
        'MAJELIS GALILEA';
    }

    window.closeDynamicIsland();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  catch (error) {
    console.error(
      'Shell navigation error:',
      error
    );
  }
};


window.shellSetBootNotice = function(
  state,
  title,
  text
) {
  var notice =
    document.getElementById(
      'bootNotice'
    );

  if (!notice) {
    return;
  }

  notice.classList.remove(
    'ready',
    'error'
  );

  if (state === 'ready') {
    notice.classList.add(
      'ready'
    );
  }

  if (state === 'error') {
    notice.classList.add(
      'error'
    );
  }

  var titleEl =
    document.getElementById(
      'bootNoticeTitle'
    );

  var textEl =
    document.getElementById(
      'bootNoticeText'
    );

  if (titleEl) {
    titleEl.textContent =
      title || '';
  }

  if (textEl) {
    textEl.textContent =
      text || '';
  }

  var retry =
    document.getElementById(
      'bootRetry'
    );

  if (retry) {
    retry.style.display =
      state === 'error'
        ? 'inline-flex'
        : 'none';
  }
};


document.addEventListener(
  'DOMContentLoaded',
  function() {
    /*
     * Loader is decorative only. It can never lock navigation.
     */
    window.setTimeout(
      function() {
        var loader =
          document.getElementById(
            'loader'
          );

        if (loader) {
          loader.classList.add(
            'hide'
          );
        }
      },
      900
    );

    window.installPageSignatures();

    /*
     * If the full app did not initialize after 15 seconds,
     * keep navigation active and show a non-blocking diagnostic.
     */
    window.setTimeout(
      function() {
        if (
          !window.__MG840_FULL_APP_READY__
        ) {
          window.shellSetBootNotice(
            'error',
            'Aplikasi masih disiapkan',
            'Koneksi membutuhkan waktu lebih lama dari biasanya. Coba muat ulang jika halaman tetap belum siap.'
          );
        }
      },
      15000
    );
  }
);
