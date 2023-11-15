Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#query');

  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  // ... kita akan mengisi uji coba berikutnya ...
});
