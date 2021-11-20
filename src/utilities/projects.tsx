import cocktailProjectImage from '../images/cocktailProjectImage.jpg';
import rockPaperScissorsImage from '../images/rockPaperScissorsProjectImage.jpg';


const projects = {
    cocktailsApp: {
        title: 'Cocktails app',
        description: 'App where You can search for a specific cocktail, and check its recipe.',
        live: 'https://cocktails-app-maciekw129.netlify.app/',
        code: 'https://github.com/maciekw129/cocktails',
        image: cocktailProjectImage,
    },
    rockPaperScissors: {
        title: 'Rock, Paper, Scissors game',
        description: 'This app is the copy od classic rock, paper and scissors game.',
        live: 'https://paper-rock-scissors-maciekw129.netlify.app/',
        code: 'https://github.com/maciekw129/rock_paper_scissors',
        image: rockPaperScissorsImage,
    }
}

export default projects;