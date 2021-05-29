module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Sarthak Kumar Maharana',
    // Main Site Title
    title: `Sarthak Maharana | Grad @ USC`,
    // Description that goes under your name in main bio
    description: `MS in EE @ USC ! Signal and Image Processing`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/sarthaxxxxx`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sarthak-kumar-maharana-1ab04015b/`,
    //Optional: Add resume section
    resume:
      'https://drive.google.com/file/d/1h8FdHloFiau9PMmyb6ydAbBTY0PLxLrq/view?usp=sharing',
    // Content of the About Me section
    about: `Hello! I'm Sarthak, an incoming grad student at the University of Southern California, with my major being Electrical Engineering and concentration, Signal and Image Processing. I also hold a BTech in Electrical and Electronics Engineering from IIIT-Bhubaneswar, India. Academically oriented as I can be, I'm honing my skills as a young researcher in the fields of my choice.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    publications: [
      {
        name: 'IEEE ICASSP 2021',
        description:
          'Sarthak Kumar Maharana, Aravind Illa, Renuka Mannem, Yamini Belur, Preetie Shetty, Veeramani Preethish Kumar, Seena Vengalil, Kiran Polavarapu, Nalini Atchayaram, and Prasanta Kumar Ghosh, "Acoustic-to-articulatory inversion of dysarthric speech by using cross-corpus acoustic-articulatory data," in IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2021, pp. 6458-6462.',
        link:
          'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9413625',
      },
      {
        name: 'IEEE ICSSIT 2019',
        description:
          'Jayanta  kumar  Sahu, Sudhakar  Sahu, JP  Patra, Sarthak  Kumar Maharana, and Bhagabat Panda, “Harmonics analysis of a  PV  integrated  hysteresis  current  control  inverter connected with grid and without grid,” in 2019  International Conference on Smart Systems and Inventive Technology (ICSSIT). IEEE, 2019, pp. 1154–1157.',
        link:
          'https://ieeexplore.ieee.org/abstract/document/8987864?casa_token=7_WE9PSHEQgAAAAA:u33qxm_R4UBdQKvzrGI_5SLFlHQdSpnc0btOco8uOqqpVlh2rGPIebLYVGy3imfKoAhCdOqD3tOo',
      },
      {
        name: 'IJRTER',
        description:
          'Sarthak Kumar Maharana, Debani Prasad Mishra, and Antesh, ”Cloudiness Expulsion of a Solitary Image using Dim Channel Earlier,”Inter-national Journal of Recent Trends in Engineering and Research, vol. 5, no. 11, pp. 30-38, 2019.',
        link:
          'https://www.ijrter.com/papers/volume-5/issue-11/cloudiness-expulsion-of-a-solitary-image-using-dim-channel-earlier.pdf',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'National University of Singapore',
        description: 'Part-time research assistant, July 2020 - Present',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Indian Institute of Science, Bangalore',
        description:
          'Student researcher / Bachelors thesis, December 2019 - September 2020',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Indian Institute of Technology, Kharagpur',
        description: 'Summer research intern, May 2019 - July 2019',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'National Institute of Technology, Surathkal',
        description: 'Research assistant, December 2018 - March 2019',
      },
      {
        name: 'LRDE, DRDO, Bangalore',
        description: 'Summer intern, May 2018 - July 2018',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description: 'Python, MATLAB, Shell Scripting, JAVA, C',
      },
      {
        name: 'Libraries',
        description: 'PyTorch, Keras, TensorFlow, OpenCV, scikit-learn',
      },
      {
        name: 'Others',
        description: 'Git, LaTeX',
      },
      {
        name: 'OS',
        description: 'Unix, Windows',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
