// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".enter-task").on("click", function(event) {
      var id = $(this).data("id");
      var complete = $(this).data("complete");
  
      var completedState= {
        task:$(".input").val().trim(),
        completed: complete
      };
  
      // Send the PUT request.
      $.ajax("/api/tasks/" + id, {
        type: "PUT",
        data: completedState
      }).then(
        function() {
          console.log("changed task to", completed);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-task").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTask = {
        task: $(".input").val().trim(),
        completed:"false"
      };
  
      // Send the POST request.
      $.ajax("/api/tasks", {
        type: "POST",
        data: newTask
      }).then(
        function() {
          console.log("created new task");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  