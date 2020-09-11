# Dictonary

   ### Devloped Node.js server and vue.js application that allow users to interact with Merriam Webster API.
  
  ---
  
  ### Functionality :
      
      - make HTTP call using Axios and get the meaning of entered word from the API.
      - search multiple words.
      - You can keep track on search history.
      
   ---
   
  ### Files :
      
        - Custom-module:
          - index.js :
            export method for searching and fetching.
            make direct HTTP call to API using Axios.
            
        - server (Node):  
          - server.js :
            creating routes to handle HTTP request from Vue.js frontend.
          - api/routes.js :
            contain routes, that Vue.js frontend will make HTTP requests to
            & 
            utilize Custom Node Module to get data from the API.
            
        - client :
          - app.js :
            Vue instance, contains the logic for communicating with the Node.js server.
          - index.html :
            HTML 5 file that the user interact with and display data to the user by using Vue.js app instance.
          - style.css :
            Vue.js frontend styled using CSS framework and own CSS style.
