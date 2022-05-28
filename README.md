# Calculator

You can visit this project from here: https://zaharicheyrekov.github.io/Calculator/

# About this project 

I'm pretty happy about this project. I really like how it looks and how I made it. The colors are great and they go well together. They are not too boring and also not too shiny. Decided to use css flex-box model for positioning the body and the content in it. 

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(0, 233, 231, 0.2);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
```

The grid layout was used for the buttons section and it went pretty good. 
```css
main.container>section.calculator__content>ul.calculator__buttons {
    display: grid;
    grid-template-areas:
        "li li li li";
    gap: 0.7rem;
    margin: 25px 0;
}
```

I really love it when the user have the ability to choose between light and dark mode of the browser/app. That's why I made a simple theme toggle. Position absolute was the perfect option for positioning the little icon at the top of the browser window.
```css
section.theme {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    cursor: pointer;
}

ul.dark__light__icon>li.sun__icon>i.fa-sun {
    color: rgb(255, 255, 255);
}

body.dark__theme {
    background-color: #282828;
}
```

Media queries are great and you definitely should use them to make the app responsive. They are must when you want to give the best experience to the user.

```css
@media (min-width: 200px) and (max-width:500px) {
    main.container {
        height: 400px;
        width: 250px;
    }

    ul.calculator__buttons>li {
        padding: 10px;
        width: 2.8rem;
        height: 2.8rem;
        line-height: 30px;
    }

    main.container>section.calculator__content>ul.calculator__buttons {
        margin: 20px 0;
    }

    ul.calculator__buttons>li.large__text__button {
        font-size: 14px;
        font-weight: 500;
        line-height: 26px;
        background-color: #130d0e98;
    }

    ul.calculator__buttons>li.small__text__button {
        font-size: 20px;
    }

    ul.calculator__buttons>li.multiply {
        line-height: 45px;
        font-size: 40px;
    }

    ul.calculator__buttons>li.dot {
        line-height: 20px;
        font-size: 35px;
    }

    section.number__field {
        font-size: 23px;
    }

    section.number__field .smaller__field__size {
        font-size: 20px;
    }
}
```

# Light Theme

![calculator-laptop-light-theme](https://user-images.githubusercontent.com/95768526/170833572-2e114c92-e364-410d-8fa5-286f43327498.png)

# Dark Theme

![calculator-laptop-dark-theme](https://user-images.githubusercontent.com/95768526/170833584-cf89113b-1b99-434b-9758-10b2bc06009a.png)

# Phone Responsive Design

## Light Theme

![calculator-phone-light-theme](https://user-images.githubusercontent.com/95768526/170833669-3a8156e0-d212-4152-97be-85fe43932fec.png)

## Dark Theme

![calculator-phone-dark-theme](https://user-images.githubusercontent.com/95768526/170833676-b83cffb5-83ae-4bec-8ead-e956453254fd.png)
