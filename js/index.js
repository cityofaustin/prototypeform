console.log('hi')

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
})


$('.js-add-explanation .js-add-explanation-trigger').on('click', (e) => {
  $(e.target).closest('.js-add-explanation').find('.js-explanation-field').toggleClass('d-none');
})
