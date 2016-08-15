(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    resumeController
  ];

  angular.module('ni.Resume')
    .controller('resumeController', definitions);

  function resumeController($scope) {

    $scope.nichlos = {
      'name': 'Chad Davis',
      'email': 'chad314159@gmail.com',
      'phone': '202.763.9039',
      'linkedin': "https://www.linkedin.com/in/chad-davis-b7794796?trk=hp-identity-name",
      'github': 'http://github.com/chad314159',
      'avatar': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAABiAAAAJGU4ZmJkNzQ1LTRmMGMtNDVlOS1iN2JiLWU2ZWE5NmY1Y2IwZA.jpg',
      'description': 'I am a multi-talented analyst, developer, and data scientist living in Pittsburgh, VA. I currently work for Novetta Solutions.',
      'languages': [{
        'name': 'Python',
        'percent': 0.5
      }, {
        'name': 'Javascript',
        'percent': 0.5
      }, {
        'name': 'Java',
        'percent': 0.25
      }, {
        'name': 'PHP',
        'percent': 0.25
      }, {
        'name': 'R',
        'percent': 0.5
      }, {
        'name': 'C/C++',
        'percent': 0.15
      }],
      'otherSkills': [{
        'name': 'HTML5/CSS3',
        'percent': 0.3
      }, {
        'name': 'Angular.js',
        'percent': 0.3
      }, {
        'name': 'Mobile Web Design',
        'percent': 0.3
      }, {
        'name': 'Bootstrap.js',
        'percent': 0.15
      }, {
        'name': 'JQuery',
        'percent': 0.15
      }, {
        'name': 'Grunt.js',
        'percent': 0.25
      }, {
        'name': 'd3.js',
        'percent': 0.4
      }],
      'frameworks': [{
        'name': 'Django',
        'percent': 0.25
      },{
        'name': 'Node.js',
        'percent': 0.25
      }, {
        'name': 'Bash Scripting',
        'percent': 0.3
      }, {
        'name': 'AWS',
        'percent': 0.5
      }],
      'education': [
      {
          'title': "Expected",
          'time': "05/2017",
          'school': "Carnegie Mellon University",
          'description1': "Masters of Information Systems Management",
          'description2': "Focus in Data Science"
        },{
          'title': "Graduated",
          'time': "12/2012",
          'school': "Penn State University",
          'description1': "Masters of Engineering Systems Engineering",
          'description2': "Focus in Decision Analytics"
        },{
          'title': 'Graduated',
          'time': "05/2010",
          'school': "Juniata College",
          'description1': "Bachelors of Science in Mathematics",
          'description2': "Minor in Economics"
        }
        ],
      'experiences': [
      {
        'place': 'Novetta Solutions',
        'location': 'Springfield, VA',
        'time': '08/2015-present',
        'title': 'Data Engineer',
        'description': "Developing store facing Android applications utilizing Cordova and angular.js."
      },{
        'place': 'Booz Allen Hamilton',
        'location': 'Reston, VA',
        'time': '07/2014-08/2015',
        'title': 'Sr Intelligence Analyst/Data Scientist',
        'description': "Developed analytics tool for conglomerate of sites that have 30 million hits a month."
      },{
        'place': 'SRA International',
        'location': 'Tysons Corner, VA',
        'time': '12/2012- 03/2014',
        'title': 'Operations Research/Systems Analyst',
        'description': 'Developed a large scale web application. '
      }, {
        'place': 'BAE Systems',
        'location': 'Stafford, VA',
        'time': '08/2010-12/2012',
        'title': 'Operations Research Analyst',
        'description': "Worked remotely to transform data from structured .csv files to stylized Excel sheets using Java and Groovy."
      }, {
        'place': 'Juniata College',
        'location': 'Huntingdon, PA',
        'time': '08/2009-12/2009',
        'title': 'Statistical Consultant',
        'description': 'Helped identify and repair network issues.'
      }, {
        'place': 'United States Army',
        'location': 'Schofield Barracks, HI',
        'time': '09/2002-01/2008',
        'title': 'Recon Squad Leader',
        'description': 'Created mobile widgets utilizing HTML5, CSS3, and Javascript in a small startup.'
      }],
      'activities': [{
        'place': '',
        'time': '09/2002-present',
        'title': "Goin' Global Traveler",
        'description': "Countries/locations visited: Japan, Iraq, Afghanistan, Jordan, Ireland, France, Turks and Caicos, New Zealand. "
      }]
    };
  }
})(angular);