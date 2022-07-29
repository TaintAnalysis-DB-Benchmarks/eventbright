'use strict';

const { faker } = require('@faker-js/faker')

const genThisTime = 10;

const mode = "basic";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    if (mode === "basic") {
      return queryInterface.bulkInsert('Events', originalEvents, {});
    } else {
      return queryInterface.bulkInsert('Events', generateEvents(genThisTime), {}); 
    }
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

const eventbrightImages = [
  'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2017-05/1280_ariana_grande_concert_getty_610268584.jpg?itok=LF7Q9ftP',
  'https://www.thestar.com/content/dam/thestar/entertainment/music/review/2019/09/07/shawn-mendes-delivers-at-rogers-centre-even-adds-a-bit-of-stadium-rock/shawn_mendes.jpg',
  'https://consequence.net/wp-content/uploads/2022/02/Billie-Eilish-NoLa.jpg?quality=80',
  'https://cdn.vox-cdn.com/thumbor/CMpP4ciMgVubjGvnSCH9ydzejHk=/0x0:4731x3149/1200x800/filters:focal(2062x1018:2818x1774)/cdn.vox-cdn.com/uploads/chorus_image/image/68967772/usa_today_13819349.0.jpg',
  'https://i.pinimg.com/originals/32/b7/ec/32b7eca4b5bbca2ac80d4ac724e56204.jpg',
  'https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/amda89zlqlmvwxv8fo7t',
  'https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg',
  'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1180/cached.offlinehbpl.hbpl.co.uk/news/NST/Fundraising-Cake-sale-2016112103214260.jpg',
  'https://blog.logox.co.uk/wp-content/uploads/2019/01/People-Taking-Groupie-Near-Bridge-Charity-events-px-feature.jpg',
  'https://st1.uvnimg.com/21/f2/85ac353e4238b096bb1e217737e4/thumbnail-presentacion-nbl-22sept-1.jpg',
  'https://images.indianexpress.com/2021/10/LivaMissDiva_PRhandout.jpg',
  'https://static.onecms.io/wp-content/uploads/sites/20/2020/06/24/paris-fashion-week-1.jpg',
  'https://www.rappler.com/tachyon/2021/11/Bonifacio-High-Street-Cinemas.jpg',
  'https://arts.ufl.edu/site/assets/files/17059/pippin_production_shot_magic_to_do_full_company.jpg',
  'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200629130029-cirque-du-soleil-bankrupt.jpg',
  'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320125/a-woman-eating-some-vegetables-as-part-of-her-one-meal-a-day-diet.jpg',
  'https://www.thewrap.com/wp-content/uploads/2021/09/MasterChef-Season-11-finale.jpg',
  'https://cdn.vox-cdn.com/thumbor/muO15tDj1uev6aDq1HY-oRfoO1U=/0x0:1200x800/1200x900/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/64146384/Barley-2.0.0.0.0.0.jpg',
  'https://media.newyorker.com/photos/5f8e0a1d1832422445caec29/master/pass/Cassidy-StateOfTheRace.jpg',
  'https://cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/BKRCRB4H573XZC4CGF4L4X5VAU.jpg',
  'https://paautism.org/wp-content/uploads/2019/08/vectorstock_6261267-e1567189192378-1000x450.jpg',
  'https://assets.sweat.com/shopify_articles/images/010/005/285/original/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801362',
  'https://mendwell.com/wp-content/uploads/2021/01/nutritionist-dietitian-registered-dietitian.jpg',
  'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_36/2144546/170905-working-out-group-ac-512p.jpg',
  'https://www.rei.com/dam/content_team_080317_61569_mountain_biking_beginners_lg.jpg',
  'https://thumbs.dreamstime.com/b/stylish-men-women-dancing-hip-hop-bright-clothes-gradient-background-dance-hall-neon-light-young-crazy-green-youth-194057617.jpg',
  'https://pixeltruss.com/wp-content/uploads/2020/11/502516ac-ebfd-4b32-a4ed-5b20b413e13e.sized-1000x1000-1.jpg',
  'https://www.learnreligions.com/thmb/k7JNAvUxSxR3_r9cE1iZ5lwORP8=/1786x1122/filters:no_upscale():max_bytes(150000):strip_icc()/Praise-and-Worship-58b5c8ba5f9b586046caf1fa.jpg',
  'https://cdn.hillsong.com/wp-content/uploads/2019/04/03004148/HS_Tours14-700x500.jpg',
  'https://www.ccmmagazine.com/wp-content/uploads/2021/02/Maverick-City-750x400.jpg'
]

const eventbrightCategories = [
  'Music',   
  'Sports',  
  'Charity',  
  'Fashion',  
  'Entertainment',
  'Food',     
  'Politics', 
  'Fitness',  
  'Hobbies',  
  'Religion'
]

//
// Eventbright
//
// Note: The below code will be copy-pasted into the eventbright seeder. We'll pull Faker in.
const buildEvent = () => {
  return {
      hostId: faker.datatype.number({min:1, max:10}),
      name: faker.random.words(3),
      about: faker.lorem.lines(),
      image: faker.random.arrayElement(eventbrightImages),
      venue: faker.random.words(2),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      category: faker.random.arrayElement(eventbrightCategories),
      date: '2023-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
  }
}

function generateEvents(count) {
  const events = [];
  for (let i = 0; i < count; i++) {
    events.push(buildEvent());
  }
  return events;
}

const originalEvents = [
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
  // CHARITY
  {
    hostId: 3,
    name: 'Environmental Cleaning',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg',
    venue: 'Rock Hills',
    address: '123 SW 456 Ave',
    city: 'Mesa',
    state: 'Arizona',
    country: 'United States',
    category: 'Charity',
    date: '2023-05-21',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 3,
    name: 'Girl Scout Cookies',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1180/cached.offlinehbpl.hbpl.co.uk/news/NST/Fundraising-Cake-sale-2016112103214260.jpg',
    venue: 'Hayes',
    address: '123 SW 456 Ave',
    city: 'Aurora',
    state: 'Colorado',
    country: 'United States',
    category: 'Charity',
    date: '2023-07-18',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 3,
    name: 'Cancer Research',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://blog.logox.co.uk/wp-content/uploads/2019/01/People-Taking-Groupie-Near-Bridge-Charity-events-px-feature.jpg',
    venue: 'Central Falls',
    address: '123 SW 456 Ave',
    city: 'Detroit',
    state: 'Michigan',
    country: 'United States',
    category: 'Charity',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // FASHION
  {
    hostId: 4,
    name: 'Nuestra Belleza Latina',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://st1.uvnimg.com/21/f2/85ac353e4238b096bb1e217737e4/thumbnail-presentacion-nbl-22sept-1.jpg',
    venue: 'Univision',
    address: '123 SW 456 Ave',
    city: 'Akron',
    state: 'Ohio',
    country: 'United States',
    category: 'Fashion',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 4,
    name: 'Miss Universe',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://images.indianexpress.com/2021/10/LivaMissDiva_PRhandout.jpg',
    venue: 'Indian Express',
    address: '123 SW 456 Ave',
    city: 'Reno',
    state: 'Nevada',
    country: 'United States',
    category: 'Fashion',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 4,
    name: 'Fashion Show',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://static.onecms.io/wp-content/uploads/sites/20/2020/06/24/paris-fashion-week-1.jpg',
    venue: 'Clay Cross',
    address: '123 SW 456 Ave',
    city: 'Boston',
    state: 'Massachusetts',
    country: 'United States',
    category: 'Fashion',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // ENTERTAINMENT
  {
    hostId: 5,
    name: 'Movie Night',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://www.rappler.com/tachyon/2021/11/Bonifacio-High-Street-Cinemas.jpg',
    venue: 'AMC Theaters',
    address: '123 SW 456 Ave',
    city: 'Lincoln',
    state: 'Nebraska',
    country: 'United States',
    category: 'Entertainment',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 5,
    name: 'Theatre Show',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://arts.ufl.edu/site/assets/files/17059/pippin_production_shot_magic_to_do_full_company.jpg',
    venue: 'UF College',
    address: '123 SW 456 Ave',
    city: 'Durham',
    state: 'North Carolina',
    country: 'United States',
    category: 'Entertainment',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 5,
    name: 'Cirque Du Solei',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200629130029-cirque-du-soleil-bankrupt.jpg',
    venue: 'Universal Orlando',
    address: '123 SW 456 Ave',
    city: 'Tulsa',
    state: 'Oklahoma',
    country: 'United States',
    category: 'Entertainment',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // FOOD
  {
    hostId: 6,
    name: 'Food Tasting',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320125/a-woman-eating-some-vegetables-as-part-of-her-one-meal-a-day-diet.jpg',
    venue: 'Chipotle',
    address: '123 SW 456 Ave',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    category: 'Food',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 6,
    name: 'Master Chef',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://www.thewrap.com/wp-content/uploads/2021/09/MasterChef-Season-11-finale.jpg',
    venue: 'The Wrap',
    address: '123 SW 456 Ave',
    city: 'Miami',
    state: 'Florida',
    country: 'United States',
    category: 'Food',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 6,
    name: 'Restaurant Opening',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://cdn.vox-cdn.com/thumbor/muO15tDj1uev6aDq1HY-oRfoO1U=/0x0:1200x800/1200x900/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/64146384/Barley-2.0.0.0.0.0.jpg',
    venue: 'Toro Loco',
    address: '123 SW 456 Ave',
    city: 'Brooklyn',
    state: 'New York',
    country: 'United States',
    category: 'Food',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // POLITICS
  {
    hostId: 7,
    name: 'Presidential Campaign',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://media.newyorker.com/photos/5f8e0a1d1832422445caec29/master/pass/Cassidy-StateOfTheRace.jpg',
    venue: 'Highland Park',
    address: '123 SW 456 Ave',
    city: 'Eugene',
    state: 'Oregon',
    country: 'United States',
    category: 'Politics',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 7,
    name: 'Presidential Debate',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/BKRCRB4H573XZC4CGF4L4X5VAU.jpg',
    venue: 'The Boston Globe',
    address: '123 SW 456 Ave',
    city: 'Leominster',
    state: 'Massachussetts',
    country: 'United States',
    category: 'Politics',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 7,
    name: 'Voting Camapgin',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://paautism.org/wp-content/uploads/2019/08/vectorstock_6261267-e1567189192378-1000x450.jpg',
    venue: 'GiveWP',
    address: '123 SW 456 Ave',
    city: 'Zion',
    state: 'Illinois',
    country: 'United States',
    category: 'Politics',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // FITNESS
  {
    hostId: 8,
    name: 'Workout Program',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://assets.sweat.com/shopify_articles/images/010/005/285/original/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801362',
    venue: 'LA Fitness',
    address: '123 SW 456 Ave',
    city: 'Mesa',
    state: 'Arizona',
    country: 'United States',
    category: 'Fitness',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 8,
    name: 'Get Your Nutrition Plan',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://mendwell.com/wp-content/uploads/2021/01/nutritionist-dietitian-registered-dietitian.jpg',
    venue: 'You Fitness',
    address: '123 SW 456 Ave',
    city: 'Aurora',
    state: 'Colorado',
    country: 'United States',
    category: 'Fitness',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 8,
    name: 'Group Workout',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_36/2144546/170905-working-out-group-ac-512p.jpg',
    venue: '24 Hour Fitness',
    address: '123 SW 456 Ave',
    city: 'Detroit',
    state: 'Michigan',
    country: 'United States',
    category: 'Fitness',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // HOBBIES
  {
    hostId: 9,
    name: 'Bike The City',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://www.rei.com/dam/content_team_080317_61569_mountain_biking_beginners_lg.jpg',
    venue: 'El Paso',
    address: '123 SW 456 Ave',
    city: 'Akron',
    state: 'Ohio',
    country: 'United States',
    category: 'Hobbies',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 9,
    name: 'Dance Competition',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://thumbs.dreamstime.com/b/stylish-men-women-dancing-hip-hop-bright-clothes-gradient-background-dance-hall-neon-light-young-crazy-green-youth-194057617.jpg',
    venue: 'Anaheim',
    address: '123 SW 456 Ave',
    city: 'Reno',
    state: 'Nevada',
    country: 'United States',
    category: 'Hobbies',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 9,
    name: 'FIFA Tournament',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://pixeltruss.com/wp-content/uploads/2020/11/502516ac-ebfd-4b32-a4ed-5b20b413e13e.sized-1000x1000-1.jpg',
    venue: 'Buffalo',
    address: '123 SW 456 Ave',
    city: 'Boston',
    state: 'Massachusetts',
    country: 'United States',
    category: 'Hobbies',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // RELIGION
  {
    hostId: 10,
    name: 'Sunday Service',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://www.learnreligions.com/thmb/k7JNAvUxSxR3_r9cE1iZ5lwORP8=/1786x1122/filters:no_upscale():max_bytes(150000):strip_icc()/Praise-and-Worship-58b5c8ba5f9b586046caf1fa.jpg',
    venue: 'JTP Kendall',
    address: '123 SW 456 Ave',
    city: 'Lincoln',
    state: 'Nebraska',
    country: 'United States',
    category: 'Religion',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 10,
    name: 'Hillsong United Concert',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://cdn.hillsong.com/wp-content/uploads/2019/04/03004148/HS_Tours14-700x500.jpg',
    venue: 'Hillsong Church',
    address: '123 SW 456 Ave',
    city: 'Durham',
    state: 'North Carolina',
    country: 'United States',
    category: 'Religion',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hostId: 10,
    name: 'Maverick City Music Concert',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://www.ccmmagazine.com/wp-content/uploads/2021/02/Maverick-City-750x400.jpg',
    venue: 'King Jesus Ministry',
    address: '123 SW 456 Ave',
    city: 'Tulsa',
    state: 'Oklahoma',
    country: 'United States',
    category: 'Religion',
    date: '2023-10-27',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
