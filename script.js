/* ==========================================================================
   Leap Sports Co — script.js
   Handles: mobile navigation toggle, active nav link, and client-side
   validation for the Enquiry and Contact forms.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.textContent = isOpen ? 'Close' : 'Menu';
    });

    // Close the mobile menu once a link is chosen
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  /* ---------- Generic client-side form validation ---------- */
  var forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var valid = true;
      var fields = form.querySelectorAll('[required]');

      fields.forEach(function (field) {
        var wrapper = field.closest('.field');
        var value = field.value.trim();
        var fieldValid = true;

        if (value === '') {
          fieldValid = false;
        } else if (field.type === 'email') {
          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          fieldValid = emailPattern.test(value);
        } else if (field.type === 'tel' && value !== '') {
          var phonePattern = /^[0-9+\s()-]{7,}$/;
          fieldValid = phonePattern.test(value);
        }

        if (wrapper) {
          wrapper.classList.toggle('invalid', !fieldValid);
        }

        if (!fieldValid) { valid = false; }
      });

      var wrap = form.closest('.form-wrap') || form;
      var status = wrap.querySelector('.form-status');

      if (valid) {
        if (status) {
          var successMessage = form.dataset.successMessage || 'Thanks — we\'ve received your submission.';
          status.textContent = successMessage;
          status.classList.add('show', 'success');
        }
        form.reset();
      } else {
        if (status) {
          status.textContent = 'Please check the highlighted fields and try again.';
          status.classList.add('show');
          status.classList.remove('success');
        }
      }
    });

    // Clear the invalid state as the visitor corrects a field
    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        var wrapper = field.closest('.field');
        if (wrapper) { wrapper.classList.remove('invalid'); }
      });
    });
  });

});
