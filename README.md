# :date: Parttime Calendar App 
*This project made for parttime.*
*The goal is more pratical use for planning days which are parttime's work-day.*

## Features:
- [x] Filtred by remote,inoffice and home attribute on calendar
- [x] Day,Week and Month view 
- [x] Filtred by parttime name
- [x] Add/Delete a parttime work-days one time on calendar
- [x] Add a work-day make use off datetime-picker
- [x] List and card view of parttime's attribute
- [x] Add a parttime on create page and create page controlled  wrong input
- [x] All buttons have a title and warning/success/error toastr
- [x] Delete buttons have a modal which is a warning about delete work-day/parttime

## Folder Structure:
```sh
Parttime-Calendar:.
|   .babelrc
|   .eslintrc.js
|   .gitignore
|   .hgignore
|   karma.conf.js
|   output.txt
|   package-lock.json
|   package.json
|   protractor.conf.js
|   README.md
|   webpack.config.js
|   
+---.vscode
|       launch.json
|       
+---dist
|       index.html
|       main-bundle.js
|       vendor-bundle.js
|       
+---img
|       CreateCalendarPage.PNG
|       CreatePage.PNG
|       HomePage.PNG
|       ParttimeCardView.PNG
|       ParttimePage.PNG
|       
+---src
|   |   app.config.js
|   |   app.js
|   |   index.ejs
|   |   
|   +---image
|   |       favicon.ico
|   |       
|   +---module
|   |   +---Home
|   |   |       CreateNewEvent.html
|   |   |       Home.html
|   |   |       HomeController.js
|   |   |       HomeService.js
|   |   |       PartCalendarController.js
|   |   |       
|   |   \---PartTime
|   |           Card.html
|   |           Create.html
|   |           PartTime.html
|   |           PartTimeController.js
|   |           PartTimeService.js
|   |           Table.html
|   |                    
|           
\---tests
    +---e2e
    |       Home-spec.Spec.js
    |       PartTime-spec.Spec.js
    |       
    \---unit
            Homecontroller-spec.Spec.js
            Homeservice-spec.Spec.js
            Parttimecomponent-spec.Spec.js
            
```




## Technologies:
###### Project is created with:
- Bootstrap 3.2.1 
- Jquery 3.3.1
- Angular 1.7.6 
- Angular-animate 1.7.7
- Webpack 4.29.0
- Calendar-ui
- Fullcalendar 3.10.0
- Toastr 2.1.4
- Jasmine 2.9.0
- Karma 2.9.0
- Eslint 5.13.0
- Protractor 5.4.2

## Installation:
###### All install example is npm if you are not use npm  please check.
- Clone the project
```sh
$ git clone https://github.com/AsliUral/PartTime-Calendar.git
```
- Project cloned your local and open directory
```sh
cd PartTime-Calendar
```
- Install dependencies
```sh
npm install
```
- Start webpack
```sh
npm run build
```


## Running the tests:
- Unit Test
```sh
npm run test
```
- E2E Test
```sh
npm run e2e
```

## Screenshot:
- Home Page
![HomePage](./img/HomePage.PNG)
- Add/Delete work-day on calendar
![CreateCalendarPage](./img/CreateCalendarPage.PNG)
- List of the parttime
![ParttimePage](./img/ParttimePage.PNG)
- Card view of parttime
![ParttimeCardView](./img/ParttimeCardView.PNG)
- Create a new parttime
![CreatePage](./img/CreatePage.PNG)
