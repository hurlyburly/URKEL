$(function() {
    $(".create-task").on("click", function(event) {
      var id = $(this).data("id");
      var completed = $(this).data("is-incomplete");
  
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
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".is-incomplete").on("click", function(event) {
      var id = $(this).data("id");
      var completed = $(this).data("is-completed");
  
      var completedState= {
        id:id,
        completed: "true"
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
  });
  