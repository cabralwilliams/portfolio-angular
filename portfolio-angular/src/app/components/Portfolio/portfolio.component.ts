import { Component } from "@angular/core";

@Component({
    selector: "portfolio",
    templateUrl: "./portfolio.component.html"
})
export class Portfolio {
    projects = [
        {
            imagealt: 'The Missing One landing page',
            projecttitle: 'The Missing One',
            githubrepo: 'https://github.com/cabralwilliams/the-missing-one',
            livelink: 'https://lit-scrubland-68499.herokuapp.com/',
            project_no: 0
        },
        {
            imagealt: 'Tech Ticket System landing page',
            projecttitle: 'Tech Ticket System',
            githubrepo: 'https://github.com/rprice000/tech_ticket_system',
            livelink: 'https://secure-tundra-62908.herokuapp.com/',
            project_no: 1
        },
        {
            imagealt: 'Fictionalized Julius Caesar message board discussion',
            projecttitle: 'What Is On Your Mind?!?',
            githubrepo: 'https://github.com/cabralwilliams/what-is-on-your-mind',
            livelink: 'https://quiet-woodland-72442.herokuapp.com/',
            project_no: 2
        },
        {
            imagealt: 'Progressive web application to track a budget',
            projecttitle: 'Over-Under',
            githubrepo: 'https://github.com/cabralwilliams/over-under',
            livelink: 'https://peaceful-reaches-93634.herokuapp.com/',
            project_no: 3
        },
        {
            imagealt: 'Featured display of an important event in history that occurred today',
            projecttitle: 'Discover History',
            githubrepo: 'https://github.com/cabralwilliams/discover-history',
            livelink: 'https://cabralwilliams.github.io/discover-history/',
            project_no: 4
        },
        {
            imagealt: 'Is it really always sunny in Philadelphia?',
            projecttitle: 'Weather Dashboard',
            githubrepo: 'https://github.com/cabralwilliams/weather-dashboard',
            livelink: 'https://cabralwilliams.github.io/weather-dashboard/',
            project_no: 5
        },
        {
            imagealt: 'Landing page view with links to learn some things math',
            projecttitle: 'Some Things Math',
            githubrepo: 'https://github.com/cabralwilliams/some-things-math',
            livelink: 'https://cabralwilliams.github.io/some-things-math/',
            project_no: 6
        },
        {
            imagealt: 'Page to enter a comment on a post',
            projecttitle: 'Python Social',
            githubrepo: 'https://github.com/cabralwilliams/python-social',
            livelink: 'https://slithering-python-social-7.herokuapp.com/',
            project_no: 7
        },
        {
            imagealt: 'Data from a regression on Wayne Gretzky\'s NHL goals',
            projecttitle: 'Java Data Tracker',
            githubrepo: 'https://github.com/cabralwilliams/java-data-tracker',
            livelink: 'https://java-data-tracker-1.herokuapp.com/',
            project_no: 8
        }
    ];
}