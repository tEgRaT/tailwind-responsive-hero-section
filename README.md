# Tailwind CSS Tutorial

## Add Tailwind CSS

```bash
pnpm init
pnpm install tailwindcss autoprefixer --save-dev
```
Create a css file called *main.css*, then enter the following code:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Creating the configuration file

```bash
npx tailwindcss init
```

Add the following 2 lines to the *tailwind.config.js* file:

```js
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
```

Also the following 2 lines:

```js
  content: [
    './*.js',
    './*.css',
  ],
```

##   Process the css with Tailwind

```bash
npx tailwindcss build main.css -o output.css
```

## Including Tailwind CSS into the HTML template

Create a *index.html* file and add the following code:

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Tutorial</title>
    <link rel="stylesheet" href="./output.css">
</head>

<body>
    
</body>
</html>
```

## Building a responsive hero section using the utility-first classes from Tailwind CSS

```html
<body>
    <header>
        <nav class="flex items-center justify-between p-6 container mx-auto">
            <!-- Logo will come here -->

            <!-- Menu items in the center here -->

            <!-- CTA button will come here -->
        </nav>
    </header>
</body>
```

- <code>container</code> - Sets the *max-width* of an element to match the *min-width* of the current breakpoint (by default *1280px max-width*)

```html
    <main class="mt-12 lg:mt-32">
        <section class="container mx-auto px-6">
            <!-- hero section content goes here -->
            <div class="w-full lg:flex items-center">
                <div class="w-full lg:w-1/2">
                    <!-- hero section description goes here -->
                    <h2 class="text-md lg:text-2xl text-gray-600">Market Intelligence Solutions to</h2>
                    <h1 class="text-5xl lg:text-6xl font-bold text-teal-600 mb-2 lg:mb-6">Win your market</h1>
                    <p class="text-md lg:text-xl font-light text-gray-800 mb-8">
                        Powerfull analytics tools for your business. See the exact keywords for which your competitors
                        rank in organic search and the amount of traffic driven by each of them.
                    </p>
                </div>
                <div class="w-full lg:w-1/2 lg:pl-24">
                    <!-- sign-up form goes here -->
                    <form action="#" class="bg-gray-100 shadow-sm rounded-md p-8">
                        <div class="mb-6">
                            <label for="name" class="mb-3 block text-gray-700">Full name:</label>
                            <input type="text" id="name" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="John Doe" required>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="mb-3 block text-gray-700">Email address:</label>
                            <input type="email" id="email" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="john.doe@company.com" required>
                        </div>
                        <div class="mb-8">
                            <label for="company_size" class="mb-3 block text-gray-700">Company size:</label>    
                            <select id="company_size" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" required>
                                <option value="">Select an option</option>
                                <option value="1">1-10</option>
                                <option value="2">10-50</option>
                                <option value="3">50-100</option>
                                <option value="4">100+</option>
                            </select>
                        </div>
                        <button type="submit" class="py-3 px-12 bg-teal-500 hover:bg-teal-600 mr-5 rounded-md text-white text-lg focus:outline-none w-full">
                            Request Demo
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>
```

- <code>lg:w-1/2</code> - Sets a 50% width for the element, but only for larger devices
- <code>focus:outline-none<code> - Removes the default outline styling of browsers when focusing on the element

## Customize fonts, colors and add extra classes using the configuration file

### Customize fonts

To change the base font, first make the font available in the project. Include the font with in the <code>\<head\></code> tag in the *index.html* file.

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
```

Afterwards, make sure to swap the default values for the font family used by Tailwind CSS in the *tailwind.config.js* file.

```js
theme: {
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            display: ['Nunito', 'sans-serif'],
            body: ['Nunito', 'sans-serif'],
        },
        ...
        extend: {},
}
```

### Extending Tailwind CSS with customize colors

```js
// tailwind.config.js
        ...
        extend: {
            colors: {
                primary: '#EA755E',
                secondary: '#BD675F',
            },
        },
        ...
```

Adding properties within the *extend* key of the main object will not override the current set of classes, but extend them. The previous example of changing the font actually changes the properties of the default classes used by Tailwind.

## Reduce loading time and file size by purging the unused classes from the CSS

```bash
pnpm i postcss-cli @fullhuman/postcss-purgecss --save-dev
touch postcss.config.js
```

Add the following code to the *postcss.config.js* file:

```js
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './*.html',
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g || []),
        }),
    ],
};
```

Add the following script to *package.json*:

```json
    ...
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "watch:css": "postcss ./main.css -o ./output.css"
    },
    ...
```

Then, run the following command in terminal:

```bash
pnpm run watch:css
```
