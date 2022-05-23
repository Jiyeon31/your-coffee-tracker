const db = require('./connection');
const { User, Product, Category, User } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();
  await User.deleteMany({});

  const categories = await Category.insertMany([
    { name: 'Light' },
    { name: 'Medium' },
    { name: 'Medium/Dark' },
    { name: 'Dark' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Starbucks Veranda Blend',
      description:
      'Roasting Starbucks Veranda Blend Ground Coffee for a shorter time allows the delicate nuances of soft cocoa and lightly toasted nuts to blossom. Mellow and flavorful, this coffee brews a delightfully gracious cup that’s perfect for welcoming friends.',
      image: 'lightveranda.jpg',
      category: categories[0]._id
    },
    {
      name: 'Peets Luminosa Breakfast Blend',
      description:
        'Formerly known as Colombia Luminosa, we approached this bright blend, our first light roast, as we do all our coffees: carefully select the very best beans, then hand roast them in small batches to achieve their utmost flavor.',
      image: 'lightpeets.jpg',
      category: categories[0]._id
    },
    {
      name: 'Cameron Breakfast Blend',
      category: categories[0]._id,
      description:
        'Say good morning to this perfect blend of Central and South American coffees that are slow roasted to a mild, yet rich flavor.',
      image: 'lightcameron.jpg'
    },
    {
      name: 'Caribou Blend',
      category: categories[1]._id,
      description:
        'A signature blend so good, we put our name on it. Caribou Blend is a smooth, approachable medium roast that evokes cozy coffeehouses and — what else — a perfect cup of coffee.',
      image: 'mediumcaribou.jpg'
    },
    {
      name: 'Seattle\'s Best Level 4 Medium-Dark & Rich Ground Coffee',
      category: categories[1]._id,
      description:
        'From the first sip you know this one is special. A bold and roasty blend of premium beans that brews up a perfectly balanced cup of coffee.',
      image: 'mediumseattle.jpg'
    },
    {
      name: 'Sumatra Mandheling Coffee',
      category: categories[1]._id,
      description:
        'Rare Indonesian coffee that is delightfully smooth with a rich, heavy body, low acidity, exotic flavor with an intense syrupy aftertaste and earthy richness.',
      image: 'mediumvolcano.jpg'
    },
    {
      name: 'Don Pablo Signature Blend',
      category: categories[2]._id,
      description:
        'The slight caramelization of the natural sugars in the bean give this Medium-Dark coffee a touch of roastiness, while it still retains its natural flavor character, giving it a sweet, pleasant aftertaste.',
      image: 'mediumdarkpablo.jpg',
    },
    {
      name: 'Lifeboost Midnight Coffee',
      category: categories[3]._id,
      description:
        'The healthiest Darkest roast coffee possible, delivered to your doorstep. Midnight.',
      image: 'darklifeboost.jpg'
    },
    {
      name: 'Mayorga',
      category: categories[3]._id,
      description:
        'Using our signature latin, slow-roasting process, we are able to achieve a distinctly bold, sweet flavor that has a surprisingly smooth finish.',
      image: 'darkmayorga.jpg'
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
