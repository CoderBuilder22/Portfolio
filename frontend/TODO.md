# Task: Delete all borders, make full screen, darken background

## Information Gathered
- Borders are present in multiple CSS files: App.css, Home.css, About.css, Projects.css, Contact.css, Navbar.css, Footer.css, ProjectCard.css
- Current background in App.css: linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 50%, #0f0f0f 100%)
- Body has min-height: 100vh, but paddings/margins may prevent full screen
- Pages have various paddings that limit full screen usage

## Plan
- Remove all border-related properties from all CSS files
- Adjust body and main styles for full screen (height: 100vh, remove unnecessary paddings)
- Darken the background gradient to make it more dark

## Dependent Files to be edited
- frontend/src/App.css
- frontend/src/pages/Home.css
- frontend/src/pages/About.css
- frontend/src/pages/Projects.css
- frontend/src/pages/Contact.css
- frontend/src/components/Navbar.css
- frontend/src/components/Footer.css
- frontend/src/components/ProjectCard.css

## Followup steps
- Verify changes by running the app
