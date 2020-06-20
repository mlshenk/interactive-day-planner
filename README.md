Homework #5 tasked us with using jQuery and moment.js to create an interactive scheduling planner for one business day. With the header starter code, I used moment.js to fetch and display the current date and time at the top of the screen and synced the scheduler with the current actual time. The hourly text boxes in the planner change also change color based on the current time using a 'for' loop. Previous hours show grey, future hours show green, and the current hour is highlighted in red. The text area in each hour's time slot saves the input to local storage when the adjacent blue button is clicked so the browser retains the typed text when the page is reloaded. To do this, I utilized the "click" methods and incorporated the '(this)' selector and JSON.parse to create the desired effects. 


![before-day-begins](2020-06-19-19-32-55.png "Early morning")
![screenshot-1pm](2020-06-19-19-33-40.png "1 pm screenshot)
![screenshot-after-hours](2020-06-19-19-31-56.png "End of Day")
