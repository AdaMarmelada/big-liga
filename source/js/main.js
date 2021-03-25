import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/init-modals';
import $ from './vendor/jquery1.12.4/script';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

$(document).ready(function () {
  $('.preloader__image').addClass('active');

  // toggle class
  $('body').on('keypress', function (e) {
    if (e.which === 13 && $('.preloader__wrapper').hasClass('active')) {
      $('.preloader__wrapper').toggleClass('active');
    }
  });
  $('body').on('click', '.js-toggle_class', function (e) {
    e.preventDefault();

    let $target = [];
    let targetSelectors = $(e.currentTarget).attr('data-target').split(',');
    let className = $(e.currentTarget).attr('data-class');
    let $ctx = $(e.currentTarget);

    if ($(e.target).attr('data-is_parent') === 'true') {
      targetSelectors.forEach(function (selector) {
        $target.push($(e.currentTarget).parents(selector).first());
      });
    } else {
      targetSelectors.forEach(function (selector) {
        $target.push($(selector));
      });
    }

    $target.forEach(function ($targetItem) {
      if ($targetItem.hasClass(className)) {
        $targetItem.removeClass(className);
        $ctx.removeClass(className);

      } else {
        $targetItem.addClass(className);
        $ctx.addClass(className);
      }
    });
  });
  // end
});
