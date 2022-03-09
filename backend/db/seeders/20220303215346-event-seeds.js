'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Events', [
      // MUSIC
      {
        hostId: 1,
        name: 'Ariana Grande Concert',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2017-05/1280_ariana_grande_concert_getty_610268584.jpg?itok=LF7Q9ftP',
        venue: 'FTX Arena',
        address: '290 Arnold Street',
        city: 'Miami',
        state: 'Florida',
        country: 'United States',
        category: 'Music',
        date: '2022-08-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        name: 'Shawn Mendes Concert',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://www.thestar.com/content/dam/thestar/entertainment/music/review/2019/09/07/shawn-mendes-delivers-at-rogers-centre-even-adds-a-bit-of-stadium-rock/shawn_mendes.jpg',
        venue: 'Adrienne Center',
        address: '9874 West High Point Street',
        city: 'Brooklyn',
        state: 'New York',
        country: 'United States',
        category: 'Music',
        date: '2022-06-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        name: 'Billie Eilish Concert',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://consequence.net/wp-content/uploads/2022/02/Billie-Eilish-NoLa.jpg?quality=80',
        venue: 'Fillmore Beach',
        address: '367 West Illinois Dr.',
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
        category: 'Music',
        date: '2022-07-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        name: 'Charlie Puth Concert',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://www.billboard.com/wp-content/uploads/media/Charlie-Puth-performs-during-the-Illuminate-World-Tour-2017-billboard-1548.jpg?w=1024',
        venue: 'FTX Arena',
        address: '290 Arnold Street',
        city: 'Miami',
        state: 'Florida',
        country: 'United States',
        category: 'Music',
        date: '2021-07-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // SPORTS
      {
        hostId: 2,
        name: 'Soccer Tournament',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://cdn.vox-cdn.com/thumbor/CMpP4ciMgVubjGvnSCH9ydzejHk=/0x0:4731x3149/1200x800/filters:focal(2062x1018:2818x1774)/cdn.vox-cdn.com/uploads/chorus_image/image/68967772/usa_today_13819349.0.jpg',
        venue: 'Madison Square Garden',
        address: '77 Bridgeton Ave.',
        city: 'Eugene',
        state: 'Oregon',
        country: 'United States',
        category: 'Sports',
        date: '2022-04-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 2,
        name: 'Volleyball Tournament',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.pinimg.com/originals/32/b7/ec/32b7eca4b5bbca2ac80d4ac724e56204.jpg',
        venue: 'LA Memorial Coliseum',
        address: '7034 Blue Spring Street',
        city: 'Leominster',
        state: 'Massachussetts',
        country: 'United States',
        category: 'Sports',
        date: '2022-05-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 2,
        name: 'Table Tennis Tournament',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/amda89zlqlmvwxv8fo7t',
        venue: 'Wembley Stadium',
        address: '7 Glendale Ave.',
        city: 'Zion',
        state: 'Illinois',
        country: 'United States',
        category: 'Sports',
        date: '2022-06-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Events', null, {});
  }
};
