import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

const TechBox = () => import('../../components/TechBox')
const TechTitle = () => import('../../components/TechTitle')

import './index.pug'
import './index.scss'

// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  el: '#app',
  components: {
    TechBox,
    TechTitle
  },
  data: {
    techs: [
      {
        id: 1,
        title: 'Front-End Tools',
        techsList: [
          {
            id: 1,
            title: 'ReactJS',
            launch: '2013',
            description: 'React is a declarative, component-based JavaScript library for building user interfaces.',
            logo: '/assets/tech/react_icon.svg'
          },
          {
            id: 2,
            title: 'AngularJS',
            launch: '2010',
            description: 'AngularJS (commonly reffered to as AngularJS 1.X) is a JavaScript framework for building SPAs with an MVC architecture.',
            logo: '/assets/tech/angular_icon.svg'
          },
          {
            id: 3,
            title: 'VueJS',
            launch: '2014',
            description: 'Vue.js (pronounced /vjuː/, like view) is an open-source JavaScript framework for building user interfaces.',
            logo: '/assets/tech/vue_icon.svg'
          },
          {
            id: 4,
            title: 'Elm',
            launch: '2016',
            description: 'Elm is a domain-specific programming language for declaratively creating web browser-based graphical user interfaces.',
            logo: '/assets/tech/elm_icon.svg'
          },
          {
            id: 5,
            title: 'Polymer',
            launch: '2015',
            description: 'Polymer is an open-source JavaScript library for building web applications using Web Components.',
            logo: '/assets/tech/polymer_icon.svg'
          }
        ]
      },
      {
        id: 2,
        title: 'Back-End Tools',
        techsList: [
          {
            id: 1,
            title: 'Ruby on Rails',
            launch: '2015',
            description: 'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby. Rails is an MVC framework, providing default structures for a database, a web service, and web pages.',
            logo: '/assets/tech/rails_icon.png'
          },
          {
            id: 2,
            title: 'NodeJS',
            launch: '2009',
            description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Uses an event-driven, non-blocking I/O model taht makes it lightweight and efficient.",
            logo: '/assets/tech/express_icon.svg'
          },
          {
            id: 3,
            title: 'ASP.NET Core',
            launch: '2016',
            description: 'ASP.NET Core is the next generation of ASP.NET. It is a modular framework that runs on both the full .NET Framework, on Windows, and the cross-platform .NET Core.',
            logo: '/assets/tech/aspnet_icon.png'
          },
          {
            id: 4,
            title: 'Django',
            launch: '2005',
            description: 'Django (/ˈdʒæŋɡoʊ/ JANG-goh)[5] is a free and open-source web framework, written in Python, which follows the model-view-template (MVT) architectural pattern.',
            logo: '/assets/tech/django_icon.svg'
          }
        ]
      }
    ]
  }
})

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
