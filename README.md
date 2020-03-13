
# Catspotting
## An App for and by Cat Lovers

## Overview

Inspired by the popular Reddit and Facebook communities, Catspotting is an app for cat lovers, by cat lovers! Users can create an account, then sign in and post photos and info about cats they spot in the wild!

[Spot some cats!](https://catspotting-frontend.herokuapp.com)

## Instructions

On the landing page, the user may either create a profile or sign in if they already have one. They will then be taken to the posts page, where they can view all the cat posts! Users can create/edit/delete their own posts from here, or they can look at other users' posts.

## The Making of the App

For our mockups and other planning info, see our [planning repo](https://github.com/javascriptures/catspotting-frontend/blob/master/planning/PROPOSAL.md)


The Catspotting team primarily used a centralized git workflow to build the app. Once it became clear that the back end was its own massive endeavor, we split up, with Jaimie on the back end and Jordan writing the majority of the front end code.

## Browser View 1

<img width="1440" alt="Screen Shot 2020-03-13 at 8 06 08 AM" src="https://user-images.githubusercontent.com/57779829/76636684-b50da180-6506-11ea-9c68-8ec0e81c8c5f.png">

## Browser View 2

<img width="1425" alt="Screen Shot 2020-03-13 at 8 42 45 AM" src="https://user-images.githubusercontent.com/57779829/76636722-c5be1780-6506-11ea-9466-ee8bcf302da6.png">

## Features

**We achieved roughly our bronze level of functionality and design, with features including:**

- Welcome page where users may create an account or sign in if they already have one
- JWT authentication
- Users can post photos of cats they spot, with an image url, and edit/delete only their own posts
- Users can see all cat posts on one page, or see each post on their own individual page
- Responsive design using Material UI
- About page with info about devs, links to github, overview of app

**In the future, we aspire to add the following functionality:**

- Create, edit, and delete functionality for comments
- User profile page displaying that user's activity
- Improve design responsivity
- Add links to cat related resources on About page
- Testing
- More advanced color palette transitions
- Likes for comments and posts
- Bookmark posts
- Google Maps for location integration - user can pin spotted cat's location
- Search posts by location/cat
- Display map with all pins for that cat on post detail page
- Map view showing all posts as pins, can click a pin and will take you to that post
- Groups for users based on location
- Ability to share posts externally


## Technologies used

- React
- React Router for navigation
- React Hooks
- Fetch for API calls
- Material UI, Flexbox for styling

## Contribution Guidelines

- Fork and clone this repo
- Open your terminal and go to the directory you want to store this application and ‘git clone’ it
- Run npm i to install all dependencies
- Run ‘npm run start’ to open the app in browser
- Code away! If you wish to add a new feature to the currently existing application [submit an issue](https://github.com/javascriptures/catspotting-frontend/issues) detailing your changes

## Challenges, Bugs and Fixes

- Originally we were storing tokens in localstorage, but that was not working well for us.  Asha Misra pointed us in the direction of useContext and Jennifer Meade helped us implement that.  Currently tokens are stored in UserContext and persist through the entire app!
- App is not optimized for mobile
- Redirect on signup goes to wrong route - should be /token/obtain/ not api/token/obtain/
- Cannot make/edit/delete comments (hasn't been built yet)
- Comments do not display username (need to fix models in backend or add additional fetches to front)
- Signin button only works on click and not on enter

## Sources

### Deployment
[Shalandy Zhang's Tutorial](https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f)

### Styling
[Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
<br />
[Coolors palette](https://coolors.co/817f82-0b3c49-d1a7a0-e5d4c0-edf0da)
<br />
[LogoMakr](https://logomakr.com/) for all cat icons and illustrations
<br />
[Material UI](https://material-ui.com/) for forms

### Functionality
[useHistory](https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page)
<br />
[Ben Awad's useContext Tutorial](https://www.youtube.com/watch?time_continue=509&v=lhMKvyLRWo0&feature=emb_logo)
<br />
[BookBear](https://github.com/aafmisra/project3-frontend/tree/7c3a0784e2fa12e85be6245cff8120dad4a1d151)

## Acknowledgements

Special thanks to:

- Jennifer Meade for guiding us toward UserContext over local storage, and helping us fix Post creation
- Asha Misra for moral support through the JWT nightmare, and for sending us Jen's JWT/useContext edit of BookBear, which we perused to get a better sense for how useContext works.
