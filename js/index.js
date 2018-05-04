$(document).ready(() => {

  var explanationField = (() => {
    var init = () => {
      // Add and removes explanation textarea
      $('.js-add-explanation .js-add-explanation-trigger').on('click', (e) => {
        $(e.target).closest('.js-add-explanation').find('.js-explanation-field').toggleClass('d-none');
      });
    }

    return { init };
  })();

  // INFO ABOUT YOURSELF PAGE
  var aboutYourselfPage = (() => {
    var bindEventHandlers = () => {
      // This event handler toggles the disqualifier alert for age screening question
      $('.js-age-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "Yes";
        $('.js-age-disqualifier-alert').toggleClass('d-none', hideAlert);
        // TODO: Disable form if they are disqualified
      });

      // This event handler toggles the disqualifier alert for reliable transportation
      // screening question
      $('.js-transportation-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "Yes";
        $('.js-transportation-alert').toggleClass('d-none', hideAlert);
        // TODO: Disable form if they are disqualified
      });

      $('.js-adopters-help-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "Yes";
        $('.js-adopters-help-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-medications-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "Yes";
        $('.js-medications-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-humane-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "No";
        $('.js-humane-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-exisiting-animal input').on('change', (e) => {
        var hideFollowup = e.target.value === "No";
        $('.js-exisiting-animal-followup').toggleClass('d-none', hideFollowup);
      });
    }

    return {
      bindEventHandlers
    }
  })();

  // INFO ABOUT YOUR AVAILABILITY PAGE
  var aboutAvailabilityPage = (() => {
    var $parent = $('.js-form-availability');
    var bindEventHandlers = () => {
      $parent.on('change', 'input', (e) => {
        $parent.find('.js-selection-alert-text').addClass('d-none');
        $(e.currentTarget).siblings('.js-selection-alert-text').removeClass('d-none');
      });
    }

    return {
      bindEventHandlers
    }
  })();

  // INFO ABOUT YOUR HOME PAGE
  var aboutYourHomePage = (() => {
    var bindEventHandlers = () => {
      $('.js-permission-home-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "Yes";
        $('.js-permission-home-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-indoors-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "Yes";
        $('.js-indoors-alert').toggleClass('d-none', hideAlert);
      });

      $('.js-children input').on('change', (e) => {
        var hideFollowup = e.target.value === "No";
        $('.js-children-followup').toggleClass('d-none', hideFollowup);
      });
    }

    return {
      bindEventHandlers
    }
  })();

  // INFO ABOUT YOUR ANIMALS PAGE
  var aboutAnimalsPage = (() => {
    var bindEventHandlers = () => {
      $('.js-have-animals-selection input').on('change', (e) => {
        var hideFollowup = e.target.value === 'No';
        $('.js-have-animals-followup').toggleClass('d-none', hideFollowup);
      })

      $('.js-have-dog-selection input').on('change', (e) => {
        var hideFollowup = e.target.value === 'No';
        if (counter.dog < 1) { addDogInfoBlock(); };
        $('#js-new-dog').toggleClass('d-none', hideFollowup);
        $('.js-have-dog-followup').toggleClass('d-none', hideFollowup);
      })

      $('.js-have-cat-selection input').on('change', (e) => {
        var hideFollowup = e.target.value === 'No';
        if (counter.cat < 1) { addCatInfoBlock(); };
        $('#js-cat-dog').toggleClass('d-none', hideFollowup);
        $('.js-have-cat-followup').toggleClass('d-none', hideFollowup);
      })

      $('.js-have-other-selection input').on('change', (e) => {
        var hideFollowup = e.target.value === 'No';
        $('.js-have-other-followup').toggleClass('d-none', hideFollowup);
      })

      $('.js-dog-rabies-selector input').on('change', (e) => {
        var hideAlert = e.target.value === 'Yes';
        $('.js-dog-rabies-alert').toggleClass('d-none', hideAlert);
      })

      $('.js-cat-rabies-selector input').on('change', (e) => {
        var hideAlert = e.target.value === 'Yes';
        $('.js-cat-rabies-alert').toggleClass('d-none', hideAlert);
      })

      $('.js-seperate-animals-selector input').on('change', (e) => {
        var hideAlert = e.target.value === 'Yes';
        $('.js-seperate-animals-alert').toggleClass('d-none', hideAlert);
      })

      // Add dog
      $('.js-add-dog-trigger').on('click', (e) => {
        e.preventDefault();
        addDogInfoBlock();
      });

      // Add cat
      $('.js-add-cat-trigger').on('click', (e) => {
        e.preventDefault();
        addCatInfoBlock();
      });

    };

    var counter = {
      dog: 0,
      cat: 0,
    };

    var addDogInfoBlock = () => {
      counter.dog++
      var templateSource = $('#add-dog-template').html();
      var templateCompiled = Handlebars.compile(templateSource);
      var context = { dogNumber: counter.dog };
      var html = templateCompiled(context);

      $('#js-new-dog').append(html);
      initializeCloseInfoBlock('dog');
    };

    var addCatInfoBlock = () => {
      counter.cat++
      var templateSource = $('#add-cat-template').html();
      var templateCompiled = Handlebars.compile(templateSource);
      var context = { catNumber: counter.cat };
      var html = templateCompiled(context);

      $('#js-new-cat').append(html);
      initializeCloseInfoBlock('cat');
    };

    var initializeCloseInfoBlock = (animal) => {
      $('.js-close-animal-info').off();
      $('.js-close-animal-info').on('click', (e) => {
        e.preventDefault();
        counter[animal]--
        $(e.target).closest('.js-animal-info').remove();
      });
    }

    return {
      bindEventHandlers
    }
  })();

  explanationField.init();
  aboutYourselfPage.bindEventHandlers();
  aboutYourHomePage.bindEventHandlers();
  aboutAvailabilityPage.bindEventHandlers();
  aboutAnimalsPage.bindEventHandlers();
});
