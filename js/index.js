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
    var bindEventHandlers = () => {
      $('.js-left-alone-selection').on('change', (e) => {
        $('.js-left-alone-alert').removeClass('d-none');

        var alertText = $(e.target).siblings('.js-selection-alert-text').text();
        $('.js-left-alone-alert').text(alertText);
      });
    }

    return {
      bindEventHandlers
    }
  })();

  // INFO ABOUT YOUR HOME PAGE
  var aboutYourselfPage = (() => {
    var bindEventHandlers = () => {
      $('.js-own-home-selection input').on('change', (e) => {
        var hideAlert = e.target.value === "Yes";
        $('.js-own-home-alert').toggleClass('d-none', hideAlert);
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
        if (dogCounter < 1) { addDogInfoBlock(); };
        $('#js-new-dog').toggleClass('d-none', hideFollowup);
        $('.js-have-dog-followup').toggleClass('d-none', hideFollowup);
      })

      $('.js-have-cat-selection input').on('change', (e) => {
        var hideFollowup = e.target.value === 'No';
        if (catCounter < 1) { addCatInfoBlock(); };
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
      var dogCounter = 0;
      $('.js-add-dog-trigger').on('click', (e) => {
        e.preventDefault();
        addDogInfoBlock();
      })

      function addDogInfoBlock () {
        dogCounter++
        var templateSource = $('#add-dog-template').html();
        var templateCompiled = Handlebars.compile(templateSource);
        var context = { dogNumber: dogCounter };
        var html = templateCompiled(context);

        $('#js-new-dog').append(html);
      }

      // Add cat
      var catCounter = 0;
      $('.js-add-cat-trigger').on('click', (e) => {
        e.preventDefault();
        addCatInfoBlock();
      })

      function addCatInfoBlock () {
        catCounter++
        var templateSource = $('#add-cat-template').html();
        var templateCompiled = Handlebars.compile(templateSource);
        var context = { catNumber: catCounter };
        var html = templateCompiled(context);

        $('#js-new-cat').append(html);
      }
    }

    return {
      bindEventHandlers
    }
  })();

  explanationField.init();
  aboutYourselfPage.bindEventHandlers();
  aboutAvailabilityPage.bindEventHandlers();
  aboutAnimalsPage.bindEventHandlers();
});
