# table-responsive-app & table-responsive-lib
# Build & compile
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Create Table-responsive-lib
````
ng new my-workspace --no-create-application
cd my-workspace
ng generate library table-responsive
ng build table-responsive --configuration development
````
## Publishing your library
````
ng build table-responsive
cd dist/table-responsive
npm publish
````

## Create Application to test the library
````
ng new my-workspace --no-create-application
ng generate application table-responsive-app
````

## Structure results:
````
my-workspace
  ...                (workspace-wide config files)
  projects           (generated applications and libraries)
    my-first-app     --(an explicitly generated application)
      ...            --(application-specific config)
      src            --(source and support files for application)
    my-lib           --(a generated library)
      ...            --(library-specific config)
      src            --(source and support files for library)
````
When you create a library project with `` ng generate library ``, the library project is also added to the projects section.


## Using your own library in applications
````
workspace
 projects
  table-responsive
    ....
    src                   <---- hire are the code for library
  table-responsive-app
  src
    app
      app.module.ts       <----- hire is importet the library
  

````
````
file: app.module.ts

import { TableResponsiveModule } from 'table-responsive';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableResponsiveModule   <-----------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
````

## Build Dev-proj
````
ng build table-responsive --configuration development
````

## TO READ
https://github.com/rothsandro/angular-library-example/tree/main/projects
````
..._angular-workspace2_>npm run start
````
````
..._angular-workspace2_>ng build table-responsive
````


https://www.npmjs.com/package/responsive-table-lib
https://angular.io/guide/creating-libraries

https://github.com/hdjonutz/responsive-table-lib

https://docs.npmjs.com/creating-and-publishing-private-packages

https://www.npmjs.com/settings/dihariga/packages

https://github.com/hdjonutz/responsive-table

https://github.com/hdjonutz/responsive-table-lib/issues
https://github.com/hdjonutz/responsive-table#readme

## generate scroll
https://www.cssportal.com/css-scrollbar-generator/

## kill process 4200 is in use 
````
npx kill-port 4200
````

## Learn theming
https://medium.com/angular-in-depth/build-truly-dynamic-theme-with-css-variables-539516e95837

https://www.telerik.com/blogs/angular-basics-manipulating-css-custom-properties-style-binding

https://sergiocarracedo.es/2020/07/17/sharing-variables-between-scss-and-typescript/
