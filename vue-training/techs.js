const techs = {
  en: [
    {
      title: 'Front-End Tools',
      techsList: [
        {
          title: 'ReactJS',
          launch: '2013',
          description: 'React is a declarative, component-based JavaScript library for building user interfaces.',
          logo: '/assets/tech/react_icon.svg'
        },
        {
          title: 'AngularJS',
          launch: '2010',
          description: 'AngularJS (commonly reffered to as AngularJS 1.X) is a JavaScript framework for building SPAs with an MVC architecture.',
          logo: '/assets/tech/angular_icon.svg'
        },
        {
          title: 'VueJS',
          launch: '2014',
          description: 'Vue.js (pronounced /vjuː/, like view) is an open-source JavaScript framework for building user interfaces.',
          logo: '/assets/tech/vue_icon.svg'
        },
        {
          title: 'Elm',
          launch: '2016',
          description: 'Elm is a domain-specific programming language for declaratively creating web browser-based graphical user interfaces.',
          logo: '/assets/tech/elm_icon.svg'
        },
        {
          title: 'Polymer',
          launch: '2015',
          description: 'Polymer is an open-source JavaScript library for building web applications using Web Components.',
          logo: '/assets/tech/polymer_icon.svg'
        }
      ]
    },
    {
      title: 'Back-End Tools',
      techsList: [
        {
          title: 'Ruby on Rails',
          launch: '2015',
          description: 'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby. Rails is an MVC framework, providing default structures for a database, a web service, and web pages.',
          logo: '/assets/tech/rails_icon.png'
        },
        {
          title: 'NodeJS',
          launch: '2009',
          description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Uses an event-driven, non-blocking I/O model taht makes it lightweight and efficient.',
          logo: '/assets/tech/express_icon.svg'
        },
        {
          title: 'ASP.NET Core',
          launch: '2016',
          description: 'ASP.NET Core is the next generation of ASP.NET. It is a modular framework that runs on both the full .NET Framework, on Windows, and the cross-platform .NET Core.',
          logo: '/assets/tech/aspnet_icon.png'
        },
        {
          title: 'Django',
          launch: '2005',
          description: 'Django (/ˈdʒæŋɡoʊ/ JANG-goh)[5] is a free and open-source web framework, written in Python, which follows the model-view-template (MVT) architectural pattern.',
          logo: '/assets/tech/django_icon.svg'
        }
      ]
    }
  ],
  es: [
    {
      title: 'Herramientas Front-End',
      techsList: [
        {
          title: 'ReactJS',
          launch: '2013',
          description: 'React es una biblioteca declarativa de JavaScript basada en componentes para crear interfaces de usuario.',
          logo: '/assets/tech/react_icon.svg'
        },
        {
          title: 'AngularJS',
          launch: '2010',
          description: 'AngularJS (comúnmente denominado AngularJS 1.X) es un marco de JavaScript para construir SPA con una arquitectura MVC.',
          logo: '/assets/tech/angular_icon.svg'
        },
        {
          title: 'VueJS',
          launch: '2014',
          description: 'Vue.js (pronunciado /vjuː/, como \'view\' en inglés) es un marco de JavaScript de código abierto para crear interfaces de usuario.',
          logo: '/assets/tech/vue_icon.svg'
        },
        {
          title: 'Elm',
          launch: '2016',
          description: 'Elm es un lenguaje de programación específico del dominio para la creación declarativa de interfaces gráficas de usuario basadas en navegador web.',
          logo: '/assets/tech/elm_icon.svg'
        },
        {
          title: 'Polymer',
          launch: '2015',
          description: 'Polymer es una biblioteca de código abierto de JavaScript para crear aplicaciones web utilizando componentes web.',
          logo: '/assets/tech/polymer_icon.svg'
        }
      ]
    },
    {
      title: 'Herramientas Back-End',
      techsList: [
        {
          title: 'Ruby on Rails',
          launch: '2015',
          description: 'Ruby on Rails, o Rails, es un marco de aplicación web del lado del servidor escrito en Ruby. Rails es un marco MVC, que proporciona estructuras predeterminadas para una base de datos, un servicio web y páginas web.',
          logo: '/assets/tech/rails_icon.png'
        },
        {
          title: 'NodeJS',
          launch: '2009',
          description: 'Node.js es un tiempo de ejecución de JavaScript creado en el motor de JavaScript V8 de Chrome. Utiliza un modelo de E / S sin bloqueo, controlado por eventos, que lo hace ligero y eficiente.',
          logo: '/assets/tech/express_icon.svg'
        },
        {
          title: 'ASP.NET Core',
          launch: '2016',
          description: 'ASP.NET Core es la próxima generación de ASP.NET. Es un marco modular que se ejecuta tanto en el completo .NET Framework, en Windows, como en el multiplataforma .NET.',
          logo: '/assets/tech/aspnet_icon.png'
        },
        {
          title: 'Django',
          launch: '2005',
          description: 'Django (/ˈdʒæŋɡoʊ/ JANG-goh)[5] es un marco web gratuito y de código abierto, escrito en Python, que sigue el patrón arquitectónico modelo-vista-plantilla (MVT).',
          logo: '/assets/tech/django_icon.svg'
        }
      ]
    }
  ]
}

module.exports = () => ({ techs })
