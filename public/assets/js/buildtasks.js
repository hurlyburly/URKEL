$(function() {
    $(".create-task").on("click", function(event) {
      var id = $(this).data("id");
      var completed = $(this).data("completed");
  
      var completedState= {
        task:$(".input").val().trim(),
        completed: "false"
      };
  
      // Send the PUT request.
      $.ajax("/api/tasks/", {
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
  
    $(".create-task").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTask = {
        task: $(".input").val().trim(),
        completed:"false"
      };
  
      // Send the POST request.
      $.ajax("/api/tasks", {
        type: "PUT",
        data: newTask
      }).then(
        function() {
          console.log("created new task");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  