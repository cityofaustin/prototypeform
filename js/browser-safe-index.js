'use strict';

$(document).ready(function () {

  var explanationField = function () {
    var init = function init() {
      // Add and removes explanation textarea
      $('.js-add-explanation .js-add-explanation-trigger').on('click', function (e) {
        $(e.target).closest('.js-add-explanation').find('.js-explanation-field').toggleClass('d-none');
      });
    };

    return { init: init };
  }();

  // INFO ABOUT YOURSELF PAGE
  var aboutYourselfPage = function () {
    var bindEventHandlers = function bindEventHandlers() {
      // This event handler toggles the disqualifier alert for age screening question
      $('.js-age-selection input').on('change', function (e) {
        var hideAlert = e.target.value === "Yes";
        $('.js-age-disqualifier-alert').toggleClass('d-none', hideAlert);
        // TODO: Disable form if they are disqualified
      });

      // This event handler toggles the disqualifier alert for reliable transportation
      // screening question
      $('.js-transportation-selection input').on('change', function (e) {
        var hideAlert = e.target.value === "Yes";
        $('.js-transportation-alert').toggleClass('d-none', hideAlert);
        // TODO: Disable form if they are disqualified
      });

      $('.js-adopters-help-selection input').on('change', function (e) {
        var hideAlert = e.target.value === "Yes";
        $('.js-adopters-help-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-medications-selection input').on('change', function (e) {
        var hideAlert = e.target.value === "Yes";
        $('.js-medications-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-humane-selection input').on('change', function (e) {
        var hideAlert = e.target.value === "No";
        $('.js-humane-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-exisiting-animal input').on('change', function (e) {
        var hideFollowup = e.target.value === "No";
        $('.js-exisiting-animal-followup').toggleClass('d-none', hideFollowup);
      });
    };

    return {
      bindEventHandlers: bindEventHandlers
    };
  }();

  // INFO ABOUT YOUR AVAILABILITY PAGE
  var aboutAvailabilityPage = function () {
    var $parent = $('.js-form-availability');
    var bindEventHandlers = function bindEventHandlers() {
      $parent.on('change', 'input', function (e) {
        $parent.find('.js-selection-alert-text').addClass('d-none');
        $(e.currentTarget).siblings('.js-selection-alert-text').removeClass('d-none');
      });
    };

    return {
      bindEventHandlers: bindEventHandlers
    };
  }();

  // INFO ABOUT YOUR HOME PAGE
  var aboutYourHomePage = function () {
    var bindEventHandlers = function bindEventHandlers() {
      $('.js-permision-home-selection input').on('change', function (e) {
        var hideAlert = e.target.value === "Yes";
        $('.js-permission-home-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-indoors-selection input').on('change', function (e) {
        var hideAlert = e.target.value === "Yes";
        $('.js-indoors-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-children input').on('change', function (e) {
        var hideFollowup = e.target.value === "No";
        $('.js-children-followup').toggleClass('d-none', hideFollowup);
      });
    };

    return {
      bindEventHandlers: bindEventHandlers
    };
  }();

  // INFO ABOUT YOUR ANIMALS PAGE
  var aboutAnimalsPage = function () {
    var bindEventHandlers = function bindEventHandlers() {
      $('.js-have-animals-selection input').on('change', function (e) {
        var hideFollowup = e.target.value === 'No';
        $('.js-have-animals-followup').toggleClass('d-none', hideFollowup);
      });

      $('.js-have-dog-selection input').on('change', function (e) {
        var hideFollowup = e.target.value === 'No';
        if (counter.dog < 1) {
          addDogInfoBlock();
        };
        $('#js-new-dog').toggleClass('d-none', hideFollowup);
        $('.js-have-dog-followup').toggleClass('d-none', hideFollowup);
      });

      $('.js-have-cat-selection input').on('change', function (e) {
        var hideFollowup = e.target.value === 'No';
        if (counter.cat < 1) {
          addCatInfoBlock();
        };
        $('#js-cat-dog').toggleClass('d-none', hideFollowup);
        $('.js-have-cat-followup').toggleClass('d-none', hideFollowup);
      });

      $('.js-have-other-selection input').on('change', function (e) {
        var hideFollowup = e.target.value === 'No';
        $('.js-have-other-followup').toggleClass('d-none', hideFollowup);
      });

      $('.js-dog-rabies-selector input').on('change', function (e) {
        var hideAlert = e.target.value === 'Yes';
        $('.js-dog-rabies-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-cat-rabies-selector input').on('change', function (e) {
        var hideAlert = e.target.value === 'Yes';
        $('.js-cat-rabies-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-seperate-animals-selector input').on('change', function (e) {
        var hideAlert = e.target.value === 'Yes';
        $('.js-seperate-animals-alert').toggleClass('d-none', hideAlert);
      });

      // Add dog
      $('.js-add-dog-trigger').on('click', function (e) {
        e.preventDefault();
        addDogInfoBlock();
      });

      // Add cat
      $('.js-add-cat-trigger').on('click', function (e) {
        e.preventDefault();
        addCatInfoBlock();
      });
    };

    var counter = {
      dog: 0,
      cat: 0
    };

    var addDogInfoBlock = function addDogInfoBlock() {
      counter.dog++;
      var templateSource = $('#add-dog-template').html();
      var templateCompiled = Handlebars.compile(templateSource);
      var context = { dogNumber: counter.dog };
      var html = templateCompiled(context);

      $('#js-new-dog').append(html);
      initializeCloseInfoBlock('dog');
    };

    var addCatInfoBlock = function addCatInfoBlock() {
      counter.cat++;
      var templateSource = $('#add-cat-template').html();
      var templateCompiled = Handlebars.compile(templateSource);
      var context = { catNumber: counter.cat };
      var html = templateCompiled(context);

      $('#js-new-cat').append(html);
      initializeCloseInfoBlock('cat');
    };

    var initializeCloseInfoBlock = function initializeCloseInfoBlock(animal) {
      $('.js-close-animal-info').off();
      $('.js-close-animal-info').on('click', function (e) {
        e.preventDefault();
        counter[animal]--;
        $(e.target).closest('.js-animal-info').remove();
      });
    };

    return {
      bindEventHandlers: bindEventHandlers
    };
  }();

  explanationField.init();
  aboutYourselfPage.bindEventHandlers();
  aboutYourHomePage.bindEventHandlers();
  aboutAvailabilityPage.bindEventHandlers();
  aboutAnimalsPage.bindEventHandlers();
});
