import 'select2';
import 'jquery-validation';

if($('#contact').length > 0 ) {

	$('#contact .input-group .input').focusin(function(){
		let input = $(this);
		let inputParent = $(this).parent();
		inputParent.addClass('input-focused');

		if( (inputParent.hasClass('select-group')) && (!inputParent.hasClass('has-value')) ) {
			inputParent.addClass('show-reasons');
		} else {
			inputParent.removeClass('show-reasons');
		}
	});

	$('#contact .input-group .input').focus(function(){
		let input = $(this);
		let inputParent = $(this).parent();
	  let inputVal = input.val();
	  if(inputVal === "") {
	    inputParent.removeClass('has-value');
	  } else {
	    inputParent.addClass('has-value');
	  }
	});

	$('#contact .input-group .input').focusout(function(){
		let input = $(this);
		let inputParent = $(this).parent();
	  let inputVal = input.val();
	  if(inputVal === "") {
	    inputParent.removeClass('has-value');
	  } else {
	    inputParent.addClass('has-value');
	  }
		input.parent().removeClass('input-focused');
	});

	// $('#contact .input-group .input, #contact .input-group em.field-failed').click(function(){
	// 	let input = $(this);
	// 	let inputParent = $(this).parent();
	// 	if(inputParent.hasClass('field-failed')) {
	// 		inputParent.removeClass('field-failed');
	// 	}
	// });

	$('#contact .reasons span').on('click touchstart', function(){
		let el = $(this);
		let elText = el.text();
		el.parents('.input-group').find('.input').val(elText);
		el.parents('.input-group').addClass('has-value');
		el.parents('.input-group').removeClass('show-reasons');
	});

	$('#contact .select-reason').select2({
	    minimumResultsForSearch: -1,
			placeholder: 'Reason for Contacting',
			dropdownParent: $('.select-group'),
			width: '100%'
	});

	var subjectVal = $('#contact form #_subject').val();
	$('#contact #reason').on('select2:select', function (e) {
		let selected = $('#contact #reason').select2().val();
		let subject = $('#contact form #_subject');
		let subjectValUpdated = subjectVal + " [" + selected + "]";

	  $(this).parent().removeClass('field-failed');

		subject.val(subjectValUpdated);

		$(this).parents('.input-group').addClass('has-value');
		$('.select2-selection__rendered').removeClass('field-failed');
		$('.select2-selection__rendered').removeClass('unselected');
	});

$('#contact form').validate({
	ignore: [],
	errorElement: 'em',
	errorClass: 'field-failed',
	highlight: function(element) {
        $(element).parent().addClass("field-failed");
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("field-failed");
    },
	rules: {
    name: "required",
    _replyto: {
      required: true,
      email: true
    },
		reason: "required",
		message: "required"
  },
	messages: {
    name: "Let me know your name please!",
    _replyto: {
      required: "Please enter your email address so I can reach you!",
      email: "Double check your email address please 😬"
    },
		reason: "It would help to know why your reaching out.",
		message: "You forgot to say something!"
  },
	showErrors: function(errorMap, errorList) {
		let errors = this.numberOfInvalids();

    $(".validation-message-header").addClass('visible')
			.html(
				"Please fix these " + errors + " issues 😊"
			);
    this.defaultShowErrors();
  },
	errorElement : 'li',
  errorLabelContainer: '.validation-messages'
});


$('#contact #sendMessage').on('click touchstart', function() {
	if(!$('#contact form').valid()) {
		$(".validation-message").addClass('visible');
	} else {
		$(".validation-message").removeClass('visible');
	}
});





} // end if #contact
