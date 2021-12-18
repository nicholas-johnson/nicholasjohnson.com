# Asynchronous Programming

Assume you have a form like this one:

    <div class="status"></div>
    <form action="#" class="feedback">
      <textarea name="feedback"></textarea>
      <button>Send Feedback</button>
    </form>

The following code will trigger an "saveFeedback" event every 2 seconds. We're going to write methods which listen out for this event.

    $(function() {
      var form = $('form.feedback');
      var triggerAutosave = function() {
        form.trigger('saveFeedback');
      }
      setInterval(triggerAutosave, 2000);
    });


## Listen for the event

Write two methods, one of which writes the word "Saved" to the status bar, the other one composes an ajax post request which sends the data to the server via AJAX. The server won't do anything with the data yet.

## Trigger the event on submit

Now write another handler that listens for the form.submit event. When this event occurs trigger 'saveFeedback' event and prevent the default action using form.preventDefault();

## Optional extension

Have the handler that listens for the form.submit event also trigger a "closeFeedback" event. Write 2 handlers which listen for this event. One should turn off the autosave, and one should close the form.

## Further optional extension

Have the form hidden on page load. Add a link to open the form. When you click it it triggers an "openFeedback" event. Write two more handlers which listen for the "openFeedback" event. One should turn on the autosave, and the other should open the form.