(() => {

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

  // Add and removes explanation textarea
  $('.js-add-explanation .js-add-explanation-trigger').on('click', (e) => {
    $(e.target).closest('.js-add-explanation').find('.js-explanation-field').toggleClass('d-none');
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

})();
