const db = require('./model/db.js');
const mongodb = require('./model/mongodb.js');
const ObjectId = require('mongodb').ObjectID;


const userCollections = 'users';
const messageCollections = 'messages';
const messageHistoryCollections = 'messageshistories';
const authorCollections = 'authors';
const booksCollections = 'books';
const bookVersionsCollections = 'bookversions';
const requestsCollections = 'requests';
const cartItemsCollections = 'cartitems';
const ordersCollections = 'orders';
const orderItemsCollections = 'orderitems';
const paymentDetailsCollections = 'paymentdetails';
const billingAddressCollections = 'billingaddresses';
const notifCollections = 'notifications';
const fulfillmentCollections = 'fulfillments';

// it will error IF the collection doesn't exist in the first place
// it if errors, just run addtry.js again
// mongodb.dropCollection(userCollections);
// mongodb.dropCollection(messageCollections);
// mongodb.dropCollection(messageHistoryCollections);
// mongodb.dropCollection(authorCollections);
// mongodb.dropCollection(booksCollections);
// mongodb.dropCollection(bookVersionsCollections);
// mongodb.dropCollection(requestsCollections);
// mongodb.dropCollection(cartItemsCollections);
// mongodb.dropCollection(ordersCollections);
// mongodb.dropCollection(orderItemsCollections);
// mongodb.dropCollection(paymentDetailsCollections);
// mongodb.dropCollection(billingAddressCollections);
// mongodb.dropCollection(notifCollections);
// mongodb.dropCollection(fulfillmentCollections);

// end of note



var user = [
    {
        _id : ObjectId(),
        username: "seanxnieva",
        email: "sean@gmail.com",
        password: "$2b$10$DW5ggP/brSWeU1xZzXk2gejAPbF2BGyyFQbkilHbB.6WoEETmCgkm", //"secret"
        firstName: "sean",
        lastName: "nieva",
        userType: "Admin",
        lastLogin: new Date("2020-09-30T10:13:19.873+00:00")
    },
    {
        _id : ObjectId(),
        username: "katemagbitang",
        email: "kate@gmail.com",
        password: "$2b$10$DW5ggP/brSWeU1xZzXk2gejAPbF2BGyyFQbkilHbB.6WoEETmCgkm", // "secret"
        firstName: "Kate",
        lastName: "Magbitang",
        userType: "Admin",
        lastLogin: new Date("2020-09-30T10:13:19.873+00:00")
    }
    ,
    {
        _id : ObjectId(),
        username: "shimeizhang08",
        email: "shimei@gmail.com",
        password: "$2b$10$DW5ggP/brSWeU1xZzXk2gejAPbF2BGyyFQbkilHbB.6WoEETmCgkm", // "secret"
        firstName: "Shimei",
        lastName: "Zhang",
        userType: "Admin",
        lastLogin: new Date("2020-09-30T10:13:19.873+00:00")
    }
    ,
    {
        _id : ObjectId(),
        username: "oninolan",
        email: "onin@gmail.com",
        password: "$2b$10$DW5ggP/brSWeU1xZzXk2gejAPbF2BGyyFQbkilHbB.6WoEETmCgkm", // "secret"
        firstName: "Olan",
        lastName: "Onin",
        userType: "Admin",
        lastLogin: new Date("2020-09-30T10:13:19.873+00:00")
    },
    {
        _id : ObjectId(),
        username: "johnsmith",
        email: "john@gmail.com",
        password: "$2b$10$DW5ggP/brSWeU1xZzXk2gejAPbF2BGyyFQbkilHbB.6WoEETmCgkm", // "secret"
        firstName: "john",
        lastName: "smith",
        userType: "Regular",
        lastLogin: new Date("2020-09-30T10:13:19.873+00:00")
    },
    {
        _id : ObjectId(),
        username: "bobjohnson",
        email: "bob@gmail.com",
        password: "$2b$10$DW5ggP/brSWeU1xZzXk2gejAPbF2BGyyFQbkilHbB.6WoEETmCgkm", // "secret"
        firstName: "bob",
        lastName: "johnson",
        userType: "Regular",
        lastLogin: new Date("2020-09-30T10:13:19.873+00:00")
    },
    {
        _id : ObjectId(),
        username: "willowsmith",
        email: "willow@gmail.com",
        password: "$2b$10$DW5ggP/brSWeU1xZzXk2gejAPbF2BGyyFQbkilHbB.6WoEETmCgkm", // "secret"
        firstName: "willow",
        lastName: "smith",
        userType: "Regular",
        lastLogin: new Date("2020-09-30T10:13:19.873+00:00")
    }
]

mongodb.insertMany(userCollections, user);

var messages = [
    { // [0]
        _id : ObjectId(),
        sender: "willowsmith",
        receiver: "seanxnieva",
        message: "okay si willow smith ito 1",
        date: Date(),
        read: "Read"
    },
    {// [1]
        _id : ObjectId(),
        sender: "seanxnieva",
        receiver: "willowsmith",
        message: "si seanxnieva ito 1",
        date: Date(),
        read: "Read"
    },
    {// [2]
        _id : ObjectId(),
        sender: "willowsmith",
        receiver: "seanxnieva",
        message: "okay si willow smith ito 2",
        date: Date(),
        read: "Read"
    },
    {// [3]
        _id : ObjectId(),
        sender: "willowsmith",
        receiver: "seanxnieva",
        message: "okay si willow smith ito 3",
        date: Date(),
        read: "Read"
    },
    {// [4]
        _id : ObjectId(),
        sender: "johnsmith",
        receiver: "seanxnieva",
        message: "okay si john smith ito 2",
        date: Date(),
        read: "Read"
    },
    {// [5]
        _id : ObjectId(),
        sender: "seanxnieva",
        receiver: "johnsmith",
        message: "Hello, ask ko lang po yung.. jk kaxadskjfga ok test test lorem ipsum",
        date: Date(),
        read: "Read"
    }

]
mongodb.insertMany(messageCollections, messages);

var messageHistory = [
    {
        _id: ObjectId(),
        user1: "seanxnieva",
        user2: "willowsmith",
        messages: [
            messages[0]._id,
            messages[1]._id,
            messages[2]._id,
            messages[3]._id
        ]
    },
    {
        _id: ObjectId(),
        user1: "johnsmith",
        user2: "seanxnieva",
        messages: [
            messages[4]._id,
            messages[5]._id
        ]
        
    }

]

mongodb.insertMany(messageHistoryCollections, messageHistory);


var authors = [
    {
        // [0]
        _id: ObjectId(),
        aName: "J.K. Rowling"
    },
    {
        // [1]
        _id: ObjectId(),
        aName: "Elaine F. Weiss"
    },
    {
        // [2]
        _id: ObjectId(),
        aName: "Jay Shetty"
    },
    {
        // [3]
        _id: ObjectId(),
        aName: "Chrissy Teigen"
    },
    {
        // [4]
        _id: ObjectId(),
        aName: "Adeena Sussman"
    },
    {
        // [5]
        _id: ObjectId(),
        aName: "Brit Barron"
    },
    {
        // [6]
        _id: ObjectId(),
        aName: "Rachel Hollis"
    },
    {
        // [7]
        _id: ObjectId(),
        aName: "Kate Davies"
    },
    {
        // [8]
        _id: ObjectId(),
        aName: "Theodore Gray"
    },
    {
        // [9]
        _id: ObjectId(),
        aName: "Alan Finger"
    },
    {
        // [10]
        _id: ObjectId(),
        aName: "Peter Ferko"
    },
    {
        // [11]
        _id: ObjectId(),
        aName: "Shamash Alidina"
    },
    {
        // [12]
        _id: ObjectId(),
        aName: "Colleen Hoover"
    },
    {
        // [13]
        _id: ObjectId(),
        aName: "Guy Jackson"
    },
    {
        // [14]
        _id: ObjectId(),
        aName: "Celia Farrar"
    },
    {
        // [15]
        _id: ObjectId(),
        aName: "Veronica Ruth"
    },
    {
        // [16]
        _id: ObjectId(),
        aName: "Harv T. Eker"
    },
    {
        // [17]
        _id: ObjectId(),
        aName: "June & Lucy"
    },
    {
        // [18]
        _id: ObjectId(),
        aName: "Laureen Liess"
    },
    {
        // [19]
        _id: ObjectId(),
        aName: "Tom Ford"
    },
    {
        // [20]
        _id: ObjectId(),
        aName: "Bridget Foley"
    },
    {
        // [21]
        _id: ObjectId(),
        aName: "Gina Reyna"
    },
    {
        // [22]
        _id: ObjectId(),
        aName: "Sean Howe"
    },
    {
        // [23]
        _id: ObjectId(),
        aName: "Tuttle Publishing"
    },
    {
        // [24]
        _id: ObjectId(),
        aName: "Linda Metcalf PhD LPC-S LMFT-S"
    },
    {
        // [25]
        _id: ObjectId(),
        aName: "Richard Williams"
    },
    {
        // [26]
        _id: ObjectId(),
        aName: "Richard B. Woodward"
    },
    {
        // [27]
        _id: ObjectId(),
        aName: "MatreCraft"
    },
    {
        // [28]
        _id: ObjectId(),
        aName: "Maureen Marzi Wilson"
    },
    {
        // [29]
        _id: ObjectId(),
        aName: "Rochelle Barlow"
    },
    {
        // [30]
        _id: ObjectId(),
        aName: "Moon Travel Guides"
    },
    {
        // [31]
        _id: ObjectId(),
        aName: "ONE"
    },
    {
        // [32]
        _id: ObjectId(),
        aName: "Yusuke Murata"
    },
    {
        // [33]
        _id: ObjectId(),
        aName: "Hampton Sides"
    },
    {
        // [34]
        _id: ObjectId(),
        aName: "George R. Knight"
    },
    {
        // [35]
        _id: ObjectId(),
        aName: "Casey Patch"
    },
    {
        // [36]
        _id: ObjectId(),
        aName: "Robert S. Weinberg"
    },
    {
        // [37]
        _id: ObjectId(),
        aName: "Daniel Gould"
    },
    {
        // [38]
        _id: ObjectId(),
        aName: "Christopher Patridge"
    },
    {
        // [39]
        _id: ObjectId(),
        aName: "Robert M. Sapoisky"
    },
    {
        // [40]
        _id: ObjectId(),
        aName: "Sarah Doll"
    },
    {
        // [41]
        _id: ObjectId(),
        aName: "Katie Middleton"
    }


]
mongodb.insertMany(authorCollections, authors);

var books = [
    {
        // [0]
        book_ID: ObjectId(),
        title: "Harry Potter and the Sorcerer's Stone",
        author : [
            authors[0]._id
        ],
        publisher: "Scholastic Inc",
        year : 2003 ,
        category: "Fantasy",
        bookSynopsis: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry."
    },
    {
        // [1]
        book_ID: ObjectId(),
        title: "The Woman's Hour: Our Fight for the Right to Vote",
        author : [
            authors[1]._id
        ],
        publisher: "Random House Books for Young Readers",
        year: 2020 ,
        category: "History",
        bookSynopsis: "American women are so close to winning the right to vote. They've been fighting for more than seventy years and need approval from just one more state. But suffragists face opposition from every side, including the \"Antis\"--women who don't want women to have the right to vote. It's more than a fight over politics; it's a debate over the role of women and girls in society, and whether they should be considered equal to men and boys."
    },
    {
        // [2]
        book_ID: ObjectId(),
        title: "Think Like a Monk",
        author : [
            authors[2]._id
        ],
        publisher: "Simon and Schuster ",
        year : 2020 ,
        category: "Self-Help",
        bookSynopsis: "Jay Shetty, social media superstar and host of the #1 podcast On Purpose, distills the timeless wisdom he learned as a monk into practical steps anyone can take every day to live a less anxious, more meaningful life."
    },
    {
        // [3]
        book_ID: ObjectId(),
        title: "Cravings: Hungry for More",
        author : [
            authors[3]._id,
            authors[4]._id,
        ],
        publisher: "Clarkson Potter",
        year :  2018,
        category: "Cooking",
        bookSynopsis: "Cravings: Hungry for More takes us further into Chrissy’s kitchen…and life. It’s a life of pancakes that remind you of blueberry pie, eating onion dip with your glam squad, banana bread that breaks the internet, and a little something called Pad Thai Carbonara. After two years of parenthood, falling in love with different flavors, and relearning the healing power of comfort food, this book is like Chrissy’s new edible diary: recipes for quick-as-a-snap meals; recipes for lighter, brighter, healthier-ish living; and recipes that, well, are gonna put you to bed, holding your belly. And it will have you hungry for more. "
    },
    {
        // [4]
        book_ID: ObjectId(),
        title: "Worth It: Overcome Your Fears and Embrace the Life You Were Made For",
        author : [
            authors[5]._id,
            authors[6]._id
        ],
        publisher: "Broadleaf Books",
        year : 2020 ,
        category: "Literature",
        bookSynopsis: "Brit Barron grew up in an Evangelical megachurch in the '90s, trying to fit neatly inside the boundaries her church and its narrow view of God had placed around her. She was boxed in by her fears, unable to realize her full potential. All that changed when she met a girl named Sami, fell in love, and chose to leave behind those narrow boundaries in favor of a fuller and more vibrant life."
    },
    {
        // [5]
        book_ID: ObjectId(),
        title: "Beauty and the Beast, Read Along With Me- Princess Tales",
        author : [
            authors[7]._id
        ],
        publisher: "Award Publications Limited",
        year : 2016 ,
        category: "Children's Classic",
        bookSynopsis: "Kind-natured beauty must live with the beast when her dad steals a rose from his garden. But is the beast as ghastly as he first seems? Develop your child's reading skills with this delightful picture storybook. Retold in the 'see and say' rebus format – popular with teachers, parents and children alike – each includes a picture word guide inside the back cover and colour illustrations on every page. Age 4+"
    },
    {
        // [6]
        book_ID: ObjectId(),
        title: "Molecules: The Elements and the Architecture of Everything",
        author : [
            authors[8]._id
        ],
        publisher: "Books for Less International Corp.",
        year : 2014 ,
        category: "Science",
        bookSynopsis: "Everything physical is made up of the elements and the infinite variety of molecules they form when they combine with each other. In Molecules, Theodore Gray takes the next step in the grand story that began with the periodic table in his best-selling book, The Elements: A Visual Exploration of Every Known Atom in the Universe. Here, he explores through fascinating stories and trademark stunning photography the most interesting, essential, useful, and beautiful of the millions of chemical structures that make up every material in the world."
    },
    {
        // [7]
        book_ID: ObjectId(),
        title: "The Genius of Yoga: How Yogic Meditation Can Unlock Your Innate Brilliance",
        author : [
            authors[9]._id,
            authors[10]._id
        ],
        publisher: "Penguin Putnam Inc.",
        year : 2020 ,
        category: "Health",
        bookSynopsis: "Both mindfulness meditation and yoga practice have reached such a level of popularity that they have revolutionized how we think about tending to the health and well-being of ourselves, our families, our patients, students, and co-workers. But meditation done through a yogic framework goes beyond mindfulness. It not only gives you specific tools for improving health and creating emotional balance, but also offers you an experience beyond the sense-focused mind. It allows you to access atman, your unbound intelligence, or what the authors refer to as your innate \"genius.\" Accessing atman allows you to go beyond the limits of mindfulness to reach a deep source of creativity and inspiration within you- and connects you to your true purpose and direction in life."
    },
    {
        // [8]
        book_ID: ObjectId(),
        title: "Mindfulness For Dummies",
        author : [
            authors[11]._id
        ],
        publisher: "John Wiley and Sons",
        year : 2020 ,
        category: "Health",
        bookSynopsis: "The worry won’t stop. You’re feeling stressed out, the day-to-day seems overwhelming, and it seems difficult to do the simplest things. How can you escape this continual negative feedback loop? Mindfulness is the answer. Practiced by millions of people worldwide, mindfulness puts you back in a healthy relationship with yourself by teaching techniques that allow you to maintain a moment-by-moment awareness of your thoughts, feelings, and environment."
    },
    {
        // [9]
        book_ID: ObjectId(),
        title: "Ugly Love: A Novel",
        author : [
            authors[12]._id
        ],
        publisher: "Simon & Schuster, Inc.",
        year : 2014 ,
        category: "Fiction",
        bookSynopsis: "When Tate Collins meets airline pilot Miles Archer, she doesn't think it's love at first sight. They wouldn’t even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction. Once their desires are out in the open, they realize they have the perfect set-up. He doesn’t want love, she doesn’t have time for love, so that just leaves the sex. Their arrangement could be surprisingly seamless, as long as Tate can stick to the only two rules Miles has for her. \n Never ask about the past. Don’t expect a future. They think they can handle it, but realize almost immediately they can’t handle it at all."
    },
    {
        // [10]
        book_ID: ObjectId(),
        title: "Poke: Hawaiian-Inspired Sushi Bowls",
        author : [
            authors[13]._id,
            authors[14]._id
        ],
        publisher: "Grange Books Pic",
        year : 2017 ,
        category: "Cooking",
        bookSynopsis: "If you're bored with sushi and sick of ceviche but still crave the taste of raw fish, prepare to pile in for the latest pescatarian food craze: poké. Hailing from Hawaii, poké - pronounced 'poh-kay' - is a colorful mix of raw cubes of fish (often tuna) with a soy-based dressing, served in a bowl with rice and garnishes. Anything goes when it comes to ingredients, and in Poké you will learn how to create your own bowls of goodness. You simply select your base of choice (rice, salad, slaw), pick your poké (salmon, tuna, tofu), then pimp it up with a zingy or fruity dressing and/or pickle. Easy! The possibilities are endless, but the results are always flavorful. Traditionally made with raw fish, poké can even be adapted for vegetarians using delicious marinated mushrooms or beets, or silken tofu. You'll also find recipes for different toppings, vinegars, dressings, pickles, grains, and even sweet poké varieties."
    },
    {
        // [11]
        book_ID: ObjectId(),
        title: "Insurgent",
        author : [
            authors[15]._id
        ],
        publisher: "Harper Collins Publishers",
        year : 2015 ,
        category: "Fiction",
        bookSynopsis: "One choice can destroy you. Veronica Roth's second #1 New York Times bestseller continues the dystopian thrill ride that began in Divergent. \n A hit with both teen and adult readers, Insurgent is the action-packed, emotional adventure that inspired the major motion picture starring Shailene Woodley, Theo James, Ansel Elgort, and Octavia Spencer. As war surges in the factions of dystopian Chicago all around her, Tris attempts to save those she loves—and herself—while grappling with haunting questions of grief and forgiveness, identity and loyalty, politics and love."
    },
    {
        // [12]
        book_ID: ObjectId(),
        title: "Secrets of the Millionaire Mind",
        author : [
            authors[16]._id
        ],
        publisher: "Harper Collins",
        year : 2017 ,
        category: "Business",
        bookSynopsis: "In his groundbreaking SECRETS OF THE MILLIONAIRE MIND, T. Harv Eker states: \"Give me five minutes, and I can predict your financial future for the rest of your life!\" Eker does this by identifying your \"money and success blueprint.\" We all have a personal money blueprint ingrained in our subconscious minds, and it is this blueprint, more than anything, that will determine our financial lives. You can know everything about marketing, sales, negotiations, stocks, real estate, and the world of finance, but if your money blueprint is not set for a high level of success, you will never have a lot of money -- and if somehow you do, you will most likely lose it! The good news is that now you can actually reset your money blueprint to create natural and automatic success. \n If you are not doing as well financially as you would like, you will have to change your money blueprint. Unfortunately your current money blueprint will tend to stay with you for the rest of your life, unless you identify and revise it, and that's exactly what you will do with the help of this extraordinary book. According to T. Harv Eker, it's simple. If you think like rich people think and do what rich people do, chances are you'll get rich too!"
    },
    {
        // [13]
        book_ID: ObjectId(),
        title: "The Ultimate Guide to Modern Calligraphy & Hand Lettering for Beginners",
        author : [
            authors[17]._id
        ],
        publisher: "June & Lucy",
        year : 2019 ,
        category: "Art",
        bookSynopsis: "Hello there crafty friends of mine! I’m Kristin - mama to the most incredible little human around, graphic designer, hand letterer, and creator of June & Lucy. I love the 4 C’s in my life: cats, coffee, couches, and cooking, and as you can tell from my Instagram captions, I think I am much funnier than I probably am. \nMy goal with this book is to help you avoid the countless months of research, trial and error, and mistakes that I made along the way, by giving you a straight forward, easy to understand explanation of the process behind hand lettering so that you can start your lettering journey with a strong foundation. \nI can’t wait to see what you beautiful people create!"
    },
    {
        // [14]
        book_ID: ObjectId(),
        title: "Down to Earth Laid-Back Interiors For Modern Living",
        author : [
            authors[18]._id
        ],
        publisher: "Harry N. Abrams",
        year : 2019 ,
        category: "Architecture",
        bookSynopsis: "An elevated yet accessible follow-up to Lauren Liess’s Habitat, showcasing her signature easy-living lifestyle . \nDown to Earth picks up right where Lauren Liess’s critically acclaimed Habitat left off. While Habitat walked readers through the decorating process step-by-step, Liess’s latest title takes a step beyond the basics and invites readers to incorporate the main components of her familiar design aesthetic: nature, easy living, and approachability. With evocative photos and substantive design advice, Down to Earth focuses on creating a lifestyle that inspires creativity and functionality. \nThroughout the book, Liess shows readers how to incorporate six guiding principles in six unique homes: a new farmhouse, a classic American historical home, a lakeside contemporary house, a modern villa, a turn- of-the-century American Foursquare, and a cedar and glass house on a bluff. While each home has a different architectural style, fingerprints of Liess’s down-to-earth style are evident throughout. "
    },
    {
        // [15]
        book_ID: ObjectId(),
        title: "Tom Ford",
        author : [
            authors[19]._id,
            authors[20]._id
        ],
        publisher: "Rozzoli",
        year : 2008 ,
        category: "Graphic Design",
        bookSynopsis: "Tom Ford has become one of fashion's great icons. He transformed Gucci from a moribund accessories label into one of the sexiest fashion brands in the world. His designs have increased sales at Gucci tenfold and have helped build the Gucci brand into the luxury goods conglomerate that it is today. Ford brought a hard-edged style synonymous with 21st century glamour to his clothes, and Hollywood sat up and took note. This book is a complete catalogue of Ford's design work for both Gucci and Yves Saint Laurent from 1994 to 2004. It chronicles not only Ford's clothing and accessories designs for both houses, but also explores Ford's grand vision for the complete design of a brand, including architecture, store design, and advertising. Tom Ford features more than 200 photographs by Richard Avedon, Mario Testino, Steven Meisel, Helmut Newton, Herb Ritts, Terry Richardson, Craig McDean, Todd Eberle, and numerous other photographers including many previously unpublished images. Published to coincide with his departure from Gucci, this book has been created with Ford's full cooperation and every page reflects his exceptional taste. It is Ford's testament to a career of singular moments reinventing the boundaries of style and sensuality in clothing."
    },
    {
        // [16]
        book_ID: ObjectId(),
        title: "Makeup Artist Face Charts",
        author : [
            authors[21]._id
        ],
        publisher: "Create Space Independent Publishing Platform",
        year : 2015 ,
        category: "Beauty And Fashion",
        bookSynopsis: "Unleash your inner makeup diva with your very own makeup charts just like the ones pro makeup artists use! Design and customize fabulous looks with colored pencils, markers, crayons, even real makeup! Makeup charts come with convenient note sections so you can keep track of products/colors used."
    },
    {
        // [17]
        book_ID: ObjectId(),
        title: "Marvel Comics: The Untold Story",
        author : [
            authors[22]._id
        ],
        publisher: "Harper Audio",
        year : 2012 ,
        category: "Comics",
        bookSynopsis: "The defining, behind-the-scenes chronicle of one of the most extraordinary, beloved, and dominant pop cultural entities in America’s history - Marvel Comics - and the outsized personalities who made Marvel, including Martin Goodman, Stan Lee, and Jack Kirby. \nFor the first time, Marvel Comics tells the stories of the men who made Marvel: Martin Goodman, the self-made publisher who forayed into comics after a get-rich-quick tip in 1939; Stan Lee, the energetic editor who would shepherd the company through thick and thin for decades; and Jack Kirby, the WW II veteran who would co-create Captain America in 1940 and, 20 years later, developed with Lee the bulk of the company’s marquee characters in a three-year frenzy. "
    },
    {
        // [18]
        book_ID: ObjectId(),
        title: "Origami Extravaganza! Folding Paper, a Book, and a Box",
        author : [
            authors[23]._id
        ],
        publisher: "Tuttle Publishing",
        year : 2000 ,
        category: "Crafts",
        bookSynopsis: "Origami Extravaganza! has something for everyone. Whether you're an origami beginner or an advanced paper crafter, this kit will keep you entertained with its variety of both traditional and modern origami models. It is one of the most comprehensive origami kits available today—meaning that if you're only interested in buying one kit, this should be it. Paper folding models cover a wide range of topics from flowers and animals to elegant containers and celebratory designs. The simple, straightforward instructions make it a fantastic origami-for-kids kit and an easy way to learn origami. After folding a few dozen projects, you will have a substantial base in the art of origami and should be able to create original origami pieces!"
    },
    {
        // [19]
        book_ID: ObjectId(),
        title: "Marriage and Family Therapy, Second Edition: A Practice-Oriented Approach",
        author : [
            authors[24]._id
        ],
        publisher: "Springer Publishing Company",
        year : 2018 ,
        category: "Family And Relationships",
        bookSynopsis: "This text provides students of family therapy with a unique opportunity to understand and compare the inner workings of 14 traditional and non-traditional family therapy models. The book demonstrates, through innovative \"guiding templates,\" how the different therapeutic models are applied in an actual family therapy situation. The second edition features a new chapter on neuroscience, new interviews with master therapists on topics such as LGBT families, EMDR and research, and coverage of ethical issues concerning electronic safety and telephonic therapy. \nOverviews of every model include history, views of change, views of the family, and the role of the therapist. Chapters on every model also provide responses to one, realistic case study with commentary and analysis by master therapists to illustrate how each one addresses the same scenario. Interviews with master therapists illustrate how each mode of therapy actually “works” and how therapists “do it.” Print version of the book includes free, searchable, digital access to the entire contents!"
    },
    {
        // [20]
        book_ID: ObjectId(),
        title: "The Animator's Survival Kit: A Manual of Methods, Principles and Formulas for Classical, Computer, Games, Stop Motion and Internet Animators",
        author : [
            authors[25]._id
        ],
        publisher: "Farrar, Straus and Ciroux",
        year : 2012 ,
        category: "Film And Media",
        bookSynopsis: "The definitive book on animation, from the Academy Award-winning animator behind Who Framed Roger Rabbit? \nAnimation is one of the hottest areas of filmmaking today--and the master animator who bridges the old generation and the new is Richard Williams. During his fifty years in the business, Williams has been one of the true innovators, winning three Academy Awards and serving as the link between Disney's golden age of animation by hand and the new computer animation exemplified by Toy Story.\nPerhaps even more important, though, has been his dedication in passing along his knowledge to a new generation of animators so that they in turn could push the medium in new directions. In this book, based on his sold-out master classes in the United States and across Europe, Williams provides the underlying principles of animation that every animator--from beginner to expert, classic animator to computer animation whiz --needs. Urging his readers to \"invent but be believable,\" he illustrates his points with hundreds of drawings, distilling the secrets of the masters into a working system in order to create a book that will become the standard work on all forms of animation for professionals, students, and fans."
    },
    {
        // [21]
        book_ID: ObjectId(),
        title: "Andy Warhol: Polaroids",
        author : [
            authors[26]._id
        ],
        publisher: "TASHEN",
        year : 2017 ,
        category: "Photography",
        bookSynopsis: "Andy Warhol was a relentless chronicler of life and its encounters. Carrying a Polaroid camera from the late 1950s until his death in 1987, he amassed a huge collection of instant pictures of friends, lovers, patrons, the famous, the obscure, the scenic, the fashionable, and himself. Created in collaboration with the Andy Warhol Foundation, this book features hundreds of these instant photos.\nPortraits of celebrities such as Mick Jagger, Alfred Hitchcock, Jack Nicholson, Yves Saint Laurent, Pelé, Debbie Harry are included alongside images of Warhol’s entourage and high life, landscapes, and still lifes from Cabbage Patch dolls to the iconic soup cans. Often raw and impromptu, the Polaroids document Warhol’s era like Instagram captures our own, offering a unique record of the life, world, and vision behind the Pop Art maestro and modernist giant."
    },
    {
        // [22]
        book_ID: ObjectId(),
        title: "Coloring Book For Adults: Sugar Skulls: Stress Relieving Skull Designs for Adults Relaxation",
        author : [
            authors[27]._id
        ],
        publisher: "New Castle P&P",
        year : 2019 ,
        category: "Hobbies",
        bookSynopsis: "DAY OF THE DEAD, SUGAR SKULLS, HUGE COLLECTION OF BEAUTIFUL DESIGNS\nColoring Book For Adults: Sugar Skulls: Stress Relieving Skull Designs for Adults Relaxation from MantraCraft, this adult coloring book has MORE THAN 50 designs featuring a broad range of  SUGAR SKULLS to provide hours of fun, calm, relaxation and stress relief through creative expression. Designs range in complexity and detail from beginner to expert-level."
    },
    {
        // [23]
        book_ID: ObjectId(),
        title: "The Little Book of Big Feelings: An Illustrated Exploration of Life's Many Emotions",
        author : [
            authors[28]._id
        ],
        publisher: "Adams Media",
        year : 2019 ,
        category: "Illustrated Humor",
        bookSynopsis: "From the author of the popular Introvert Doodles and Kind of Coping, Maureen \"Marzi\" Wilson is tackling all kinds of big feelings with over 175 relatable, supportive, and light-hearted comics in her signature style."
    },
    {
        // [24]
        book_ID: ObjectId(),
        title: "American Sign Language for Beginners: Learn Signing Essentials in 30 Days",
        author : [
            authors[29]._id
        ],
        publisher: "Rockbridge Press",
        year : 2020 ,
        category: "Language",
        bookSynopsis: "There’s an easy way to leap right in to learning American Sign Language (ASL). American Sign Language for Beginners delivers 30 days of lessons that will help you sign with those in your home, community, and classroom. \nFrom letters and numbers to essential vocabulary and grammar basics, this beginner’s guide provides the essentials needed to develop a solid foundation for American Sign Language in the real world. Each daily lesson takes less than 30 minutes to complete and focuses on a single set of vocabulary or ASL grammar. Throughout the course, you’ll find key phrases, helpful memory tips, signing practice activities, and insight into deaf culture. Start your ASL masterclass today."
    },
    {
        // [25]
        book_ID: ObjectId(),
        title: "Wanderlust: A Traveler's Guide to the Globe",
        author : [
            authors[30]._id
        ],
        publisher: "Moon Travel",
        year : 2019 ,
        category: "Travel",
        bookSynopsis: "Get inspired with lists of mythic locations, epic trails, ancient cities, and more that span the four corners. This stunning, hardcover book is packed with full-color photos, charming illustrations, and fascinating overviews of each destination, making it the perfect gift for dreamers and adventurers alike.\nWalk along the Great Wall of China, climb the Atlas Mountains, or trek through Patagonia. Visit stunning national parks from Yellowstone in the US to Tongariro in New Zealand, explore the Gobi Desert, or set sail to the Greek Islands. \nEat your way through the best street food cities in the world, follow wine trails from Spain to Australia, and shop famous markets from the Grand Bazaar to the Marrakech souks. \nFind the best places to stargaze from Chile to France, or witness jaw-dropping phenomena from reversing rivers and blooming deserts to fluorescent blue haze and the Aurora Boreales."
    },
    {
        // [26]
        book_ID: ObjectId(),
        title: "One-Punch Man, Vol. 1",
        author : [
            authors[31]._id,
            authors[32]._id
        ],
        publisher: "VIZ Media LLc",
        year : 2015 ,
        category: "Manga",
        bookSynopsis: "Life gets pretty boring when you can beat the snot out of any villain with just one punch.\nNothing about Saitama passes the eyeball test when it comes to superheroes, from his lifeless expression to his bald head to his unimpressive physique. However, this average-looking guy has a not-so-average problem—he just can’t seem to find an opponent strong enough to take on!\nEvery time a promising villain appears, Saitama beats the snot out of ’em with one punch! Can he finally find an opponent who can go toe-to-toe with him and give his life some meaning? Or is he doomed to a life of superpowered boredom?"
    },
    {
        // [27]
        book_ID: ObjectId(),
        title: "Ghost Soldiers: The Epic Account of World War II's Greatest Rescue Mission",
        author : [
            authors[33]._id
        ],
        publisher: "Anchor",
        year : 2002 ,
        category: "Non-Fiction",
        bookSynopsis: "On January 28, 1945, 121 hand-selected U.S. troops slipped behind enemy lines in the Philippines. Their mission: March thirty rugged miles to rescue 513 POWs languishing in a hellish camp, among them the last survivors of the infamous Bataan Death March. A recent prison massacre by Japanese soldiers elsewhere in the Philippines made the stakes impossibly high and left little time to plan the complex operation.\nIn Ghost Soldiers Hampton Sides vividly re-creates this daring raid, offering a minute-by-minute narration that unfolds alongside intimate portraits of the prisoners and their lives in the camp. Sides shows how the POWs banded together to survive, defying the Japanese authorities even as they endured starvation, tropical diseases, and torture. Harrowing, poignant, and inspiring, Ghost Soldiers is the mesmerizing story of a remarkable mission. It is also a testament to the human spirit, an account of enormous bravery and self-sacrifice amid the most trying conditions."
    },
    {
        // [28]
        book_ID: ObjectId(),
        title: "Philosophy & Education: An Introduction in Christian Perspective 4th Edition",
        author : [
            authors[34]._id
        ],
        publisher: "Andrew University Press",
        year : 2006 ,
        category: "Philosophy",
        bookSynopsis: "Knight's textbook surveys the philosophies and philosophic issues relevant to Christian education. Teachers, students of education, and other readers will find this book a \"helpful guide for analyzing educational purposes and practices in the light of their basic beliefs.\" \nBesides investigating the relationship between philosophy and education and discussing how philosophies have affected contemporary practices in the classroom, Knight offers a Christian approach to philosophy and relates such an approach to educational practices. \nPhilosophy and Education is divided into three sections. Part I deals with basic concepts in philosophy and the relationship between philosophy and education. Part II is a survey of how traditional and modern philosophies have faced the basic philosophic questions and what that has meant for educational practice. Part III discusses the necessity of developing a personal philosophy of education, one possible approach to a Christian philosophy, and some of the ramifications of such a philosophy for educational practice in Christian schools."
    },
    {
        // [29]
        book_ID: ObjectId(),
        title: "Sensory Play for Toddlers and Preschoolers: Easy Projects to Develop Fine Motor Skills, Hand-Eye Coordination, and Early Measurement Concepts",
        author : [
            authors[35]._id
        ],
        publisher: "Skyhorse",
        year : 2020 ,
        category: "Toddler",
        bookSynopsis: "Explore taste-safe small worlds, create colorful pieces of art, and engage all five senses while investigating the great outdoors. Sensory play is a wonderful way to explore the world with your little learners! \nSensory Play for Toddlers and Preschoolers is a practical, hands-on guide for parents and educators who want to inject more play into their children's day! Since this collection features simple sensory play ideas with items you already have in your home, playtime has never been easier. \nInside the book, you’ll find forty easy sensory play tubs and activities with extra bonus ideas for extending the activities even further! Not only will your child be learning and exploring through play, but you’ll also be creating some magical memories of playtime that will last a lifetime!"
    },
    {
        // [30]
        book_ID: ObjectId(),
        title: "Foundations of Sport and Exercise Psychology 7th Edition",
        author : [
            authors[36]._id,
            authors[37]._id
        ],
        publisher: "Human Kinetics, Inc.",
        year : 2018 ,
        category: "Sports",
        bookSynopsis: "The leading textbook in sport and exercise psychology is back in a revised seventh edition, and it again raises the bar with its engaging introduction to the field. Foundations of Sport and Exercise Psychology, Seventh Edition With Web Study Guide, offers both students and new practitioners a comprehensive view of sport and exercise psychology, drawing connections between research and practice and capturing the excitement of the world of sport and exercise. \nInternationally respected authors Robert Weinberg and Daniel Gould continue to gather and incorporate feedback from teachers and students with each edition, building a text that addresses emerging trends and remains relevant and up to date. In-depth learning aids have been refreshed, including chapter objectives and summaries, sidebars, key terms, key points, and discussion questions to help students think more critically about applying the material. "
    },
    {
        // [31]
        book_ID: ObjectId(),
        title: "Introduction to World Religions: Third Edition",
        author : [
            authors[38]._id
        ],
        publisher: "Fortress Press",
        year : 2018 ,
        category: "Religion",
        bookSynopsis: "This leading textbook for world religion is designed to help students in their study and research of the world's religious traditions. Known and valued for its balanced approach and its respected board of consulting editors, this text addresses ways to study religion, provides broad coverage of diverse religions, and offers an arresting layout with rich illustrations. Introductory sections on understanding religion and the religions of antiquity lay the foundation for the study of the numerous religious traditions highlighted in the volume, including indigenous religions, Hinduism, Buddhism, Jainism, Judaism, Christianity, Islam, Sikhism, and Chinese, Korean, and Japanese religions. The user-friendly content is enhanced by charts of religious festivals, historic timelines, updated maps of the world's religions, and a useful glossary. Both historical overviews and modern perspectives for each religion are included. This third edition has several updates, including a new design, a new section on women and religion, and a newly revised section on religions in today's world."
    },
    {
        // [32]
        book_ID: ObjectId(),
        title: "Behave: The Biology of Humans at Our Best and Worst",
        author : [
            authors[39]._id
        ],
        publisher: "Penguin Books",
        year : 2018 ,
        category: "Psychology",
        bookSynopsis: "Sapolsky's storytelling concept is delightful but it also has a powerful intrinsic logic: he starts by looking at the factors that bear on a person's reaction in the precise moment a behavior occurs, and then hops back in time from there, in stages, ultimately ending up at the deep history of our species and its evolutionary legacy. \nThe result is one of the most dazzling tours d'horizon of the science of human behavior ever attempted, a majestic synthesis that harvests cutting-edge research across a range of disciplines to provide a subtle and nuanced perspective on why we ultimately do the things we do...for good and for ill. Sapolsky builds on this understanding to wrestle with some of our deepest and thorniest questions relating to tribalism and xenophobia, hierarchy and competition, morality and free will, and war and peace. Wise, humane, often very funny, Behave is a towering achievement, powerfully humanizing, and downright heroic in its own right."
    },
    {
        // [33]
        book_ID: ObjectId(),
        title: "The Magic Unicorn: Bedtime Stories for Kids",
        author : [
            authors[40]._id
        ],
        publisher: "Kindle",
        year : 2019 ,
        category: "Early Reader",
        bookSynopsis: "Does your child have difficulty falling asleep? Are you looking for a fun, soothing way to bond with your kids? Do you want to calm your child down, improve their vocabulary, and listening skills? If yes, then this little collection of spellbinding stories for kids can help you. \nIn Bedtime Stories for Kids: The Magic Unicorn, you're going to discover a menagerie of interesting stories and memorable characters that are sure to catch the interest of your child, stimulate their imagination and take their budding creativity to new heights, allowing you to spend quality time with your kids that they would cherish for life. \nWritten for toddlers and pre-adolescent children, each unique story has its own special setting and characters and is filled with lessons that will instill and reinforce powerful life lessons in your kids."
    },
    {
        // [35]
        book_ID: ObjectId(),
        title: "Color Theory for the Makeup Artist: Understanding Color and Light for Beauty and Special Effects",
        author : [
            authors[41]._id
        ],
        publisher: "Routledge",
        year : 2018 ,
        category: "Beauty And Fashion",
        bookSynopsis: "Color Theory for the Make-up Artist: Understanding Color and Light for Beauty and Special Effects analyzes and explains traditional color theory for fine artists and applies it to the make-up artist. \nThis book is suitable for both professionals and beginners who wish to train their eye further to understand and recognize distinctions in color. \nIt explains why we see color, how to categorize and identify color, relationships between colors, and it relates these concepts to beauty and special effects make-up. The book teaches the reader how to mix flesh tones by using only primary colors, and explains how these colors in paints and make-up are sourced and created. It also discusses the reason for variations in skin colors and undertones, and how to identify and match these using make-up, while choosing flattering colors for the eyes, lips, and cheeks. Colors found inside the body are explained for special effects make-up, like why we bruise, bleed, or appear sick. Ideas and techniques are also described for painting prosthetics, in addition to using color as inspiration in make-up designs. The book also discusses how lighting affects color on film, television, theater, and photography sets, and how to properly light a workspace for successful applications."
    }
]

mongodb.insertMany(booksCollections, books);


var bookVersions = [
    {
        //[0]
        bookVersion_ID: ObjectId(),
        book_ID: books[0].book_ID,
        priceBought: 360.00,
        sellingPrice: 539.00,
        quality: "New",
        edition: "Library Edition",
        type: "Hardcover",
        quantity: 5,
        bookCover: "../img/Harry Potter and the Sorcerer's Stone.jpg"
    },
    {
        //[1]
        bookVersion_ID: ObjectId(),
        book_ID: books[1].book_ID,
        priceBought: 550.00,
        sellingPrice: 699.99,
        quality: "New",
        edition: "1st Hardcover Edition",
        type: "Hardcover",
        quantity: 12,
        bookCover: "../img/The Womans Hour Our Fight for the Right to Vote.jpg"
    },
    {
        //[2]
        bookVersion_ID: ObjectId(),
        book_ID: books[2].book_ID,
        priceBought: 590.00,
        sellingPrice: 799.00,
        quality: "New",
        edition: "1st Hardcover Edition",
        type: "Hardcover",
        quantity: 3,
        bookCover: "../img/Think Like a Monk.jpg"
    },
    {
        //[3]
        bookVersion_ID: ObjectId(),
        book_ID: books[3].book_ID,
        priceBought: 400.00,
        sellingPrice: 569.00,
        quality: "New",
        edition: "1st Hardcover Edition",
        type: "Hardcover",
        quantity: 10,
        bookCover: "../img/Cravings Hungry for More.jpg"
    },
    {
        //[4]
        bookVersion_ID: ObjectId(),
        book_ID: books[4].book_ID,
        priceBought: 780.00,
        sellingPrice: 929.99,
        quality: "New",
        edition: "1st Hardcover Edition",
        type: "Hardcover",
        quantity: 2,
        bookCover: "../img/Worth It Overcome Your Fears and Embrace the Life You Were Made For.jpg"
    },
    {
        //[5]
        bookVersion_ID: ObjectId(),
        book_ID: books[5].book_ID,
        priceBought: 150.00,
        sellingPrice: 379.99,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 2,
        bookCover: "../img/Beauty And The Beast, Read Along With Me- Princess Tales.jpg"
    },
    {
        //[6]
        bookVersion_ID: ObjectId(),
        book_ID: books[6].book_ID,
        priceBought: 689.50,
        sellingPrice: 779.89,
        quality: "New",
        edition: "1st Edition",
        type: "Hardvocer",
        quantity: 6,
        bookCover: "../img/Molecules The Elements And The Architecture Of Everything.jpg"
    },
    {
        //[7]
        bookVersion_ID: ObjectId(),
        book_ID: books[7].book_ID,
        priceBought: 599.99,
        sellingPrice: 800.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 3,
        bookCover: "../img/The Genius Of Yoga How Yogic Meditation Can Unlock Your Innate Brilliance.jpg"
    },
    {
        //[8]
        bookVersion_ID: ObjectId(),
        book_ID: books[8].book_ID,
        priceBought: 1100.00,
        sellingPrice: 1429.99,
        quality: "New",
        edition: "3rd Edition",
        type: "Softbound",
        quantity: 7,
        bookCover: "../img/Mindfulness For Dummies.jpg"
    },
    {
        //[9]
        bookVersion_ID: ObjectId(),
        book_ID: books[9].book_ID,
        priceBought: 580.00,
        sellingPrice: 749.99,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 3,
        bookCover: "../img/Ugly Love A Novel.jpg"
    },
    {
        //[10]
        bookVersion_ID: ObjectId(),
        book_ID: books[10].book_ID,
        priceBought: 78.50,
        sellingPrice: 199.99,
        quality: "New",
        edition: "1st Edition",
        type: "Hardcover",
        quantity: 8,
        bookCover: "../img/Poke Hawaiian-Inspired Sushi Bowls.jpg"
    },
    {
        //[11]
        bookVersion_ID: ObjectId(),
        book_ID: books[11].book_ID,
        priceBought: 365.50,
        sellingPrice: 550.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 4,
        bookCover: "../img/Insurgent.jpeg"
    },
    {
        //[12]
        bookVersion_ID: ObjectId(),
        book_ID: books[12].book_ID,
        priceBought: 180.00,
        sellingPrice: 360.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 2,
        bookCover: "../img/Secrets Of The Millionaire Mind.jpg"
    },
    {
        //[13]
        bookVersion_ID: ObjectId(),
        book_ID: books[13].book_ID,
        priceBought: 289.50,
        sellingPrice: 349.99,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 3,
        bookCover: "../img/The Ultimate Guide to Modern Calligraphy And Hand Lettering For Beginners.png"
    },
    {
        //[14]
        bookVersion_ID: ObjectId(),
        book_ID: books[14].book_ID,
        priceBought: 1300.00,
        sellingPrice: 1450.00,
        quality: "New",
        edition: "1st Edition",
        type: "Hardcover",
        quantity: 11,
        bookCover: "../img/Down to Earth Laid-Back Interiors For Modern Living.png"
    },
    {
        //[15]
        bookVersion_ID: ObjectId(),
        book_ID: books[15].book_ID,
        priceBought: 5200.00,
        sellingPrice: 5399.99,
        quality: "Old",
        edition: "1st Edition",
        type: "Hardcover",
        quantity: 2,
        bookCover: "../img/Tom Ford.jpg"
    },
    {
        //[16]
        bookVersion_ID: ObjectId(),
        book_ID: books[16].book_ID,
        priceBought: 450.00,
        sellingPrice: 600.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 3,
        bookCover: "../img/Makeup Artist Face Charts.jpg"
    },
    {
        //[17]
        bookVersion_ID: ObjectId(),
        book_ID: books[17].book_ID,
        priceBought: 780.00,
        sellingPrice: 900.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 4,
        bookCover: "../img/Marvel Comics The Untold Story.jpg"
    },
    {
        //[18]
        bookVersion_ID: ObjectId(),
        book_ID: books[18].book_ID,
        priceBought: 190.99,
        sellingPrice: 300.00,
        quality: "New",
        edition: "1st Book and Kit Edition",
        type: "Softbound",
        quantity: 5,
        bookCover: "../img/Origami Extravaganza Folding Paper, A Book, and A Box.jpg"
    },
    {
        //[19]
        bookVersion_ID: ObjectId(),
        book_ID: books[19].book_ID,
        priceBought: 3300.00,
        sellingPrice: 3500.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 2,
        bookCover: "../img/Marriage and Family Therapy, Second Edition A Practice-Oriented Approach.jpg"
    },
    {
        //[20]
        bookVersion_ID: ObjectId(),
        book_ID: books[20].book_ID,
        priceBought: 1200.00,
        sellingPrice: 1349.99,
        quality: "New",
        edition: "4th Edition",
        type: "Softbound",
        quantity: 9,
        bookCover: "../img/The Animator's Survival Kit A Manual Of Methods, Principles And Formulas For Classical, Computer, Games, Stop Motion And Internet Animators.jpg"
    },
    {
        //[21]
        bookVersion_ID: ObjectId(),
        book_ID: books[21].book_ID,
        priceBought: 2250.00,
        sellingPrice: 2750.00,
        quality: "New",
        edition: "Multilingual Edition",
        type: "Hardcover",
        quantity: 3,
        bookCover: "../img/Andy Warhol Polaroids.png"
    },
    {
        //[22]
        bookVersion_ID: ObjectId(),
        book_ID: books[22].book_ID,
        priceBought: 195.00,
        sellingPrice: 300.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 15,
        bookCover: "../img/Coloring Book For Adults Sugar Skulls Stress Relieving Skull Designs For Adults Relaxation.jpg"
    },
    {
        //[23]
        bookVersion_ID: ObjectId(),
        book_ID: books[23].book_ID,
        priceBought: 350.00,
        sellingPrice: 499.99,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 7,
        bookCover: "../img/The Little Book Of Big Feelings An Illustrated Exploration Of Life's Many Emotions.jpg"
    },
    {
        //[24]
        bookVersion_ID: ObjectId(),
        book_ID: books[24].book_ID,
        priceBought: 610.00,
        sellingPrice: 750.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 13,
        bookCover: "../img/American Sign Language For Beginners Learn Signing Essentials In 30 Days.jpg"
    },
    {
        //[25]
        bookVersion_ID: ObjectId(),
        book_ID: books[25].book_ID,
        priceBought: 1325.50,
        sellingPrice: 1500.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 5,
        bookCover: "../img/Wanderlust A Traveler's Guide To The Globe.jpg"
    },
    {
        //[26]
        bookVersion_ID: ObjectId(),
        book_ID: books[26].book_ID,
        priceBought: 129.00,
        sellingPrice: 300.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 10,
        bookCover: "../img/One-Punch Man, Vol 1.jpg"
    },
    {
        //[27]
        bookVersion_ID: ObjectId(),
        book_ID: books[27].book_ID,
        priceBought: 450.00,
        sellingPrice: 569.99,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 4,
        bookCover: "../img/Ghost Soldiers The Epic Account of World War II's Greatest Rescue Mission.jpg"
    },
    {
        //[28]
        bookVersion_ID: ObjectId(),
        book_ID: books[28].book_ID,
        priceBought: 1000.00,
        sellingPrice: 1300.00,
        quality: "New",
        edition: "4th Edition",
        type: "Softbound",
        quantity: 14,
        bookCover: "../img/Philosophy And Education An Introduction in Christian Perspective 4th Edition.jpg"
    },
    {
        //[29]
        bookVersion_ID: ObjectId(),
        book_ID: books[29].book_ID,
        priceBought: 699.99,
        sellingPrice: 850.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 4,
        bookCover: "../img/Sensory Play For Toddlers And Preschoolers Easy Projects To Develop Fine Motor Skills, Hand-Eye Coordination, And Early Measurement Concepts.jpg"
    },
    {
        //[30]
        bookVersion_ID: ObjectId(),
        book_ID: books[30].book_ID,
        priceBought: 6250.00,
        sellingPrice: 6500.00,
        quality: "New",
        edition: "7th Edition",
        type: "Softbound",
        quantity: 8,
        bookCover: "../img/Foundations Of Sport And Exercise Psychology 7th Edition.jpg"
    },
    {
        //[31]
        bookVersion_ID: ObjectId(),
        book_ID: books[31].book_ID,
        priceBought: 3000.00,
        sellingPrice: 3350.00,
        quality: "New",
        edition: "3rd Edition",
        type: "Softbound",
        quantity: 6,
        bookCover: "../img/Introduction To World Religions Third Edition.jpg"
    },
    {
        //[32]
        bookVersion_ID: ObjectId(),
        book_ID: books[32].book_ID,
        priceBought: 400.00,
        sellingPrice: 650.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 4,
        bookCover: "../img/Behave The Biology Of Humans At Our Best And Worst.jpg"
    },
    {
        //[33]
        bookVersion_ID: ObjectId(),
        book_ID: books[33].book_ID,
        priceBought: 120.00,
        sellingPrice: 300.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 3,
        bookCover: "../img/The Magic Unicorn Bedtime Stories For Kids.jpg"
    },
    {
        //[34]
        bookVersion_ID: ObjectId(),
        book_ID: books[34].book_ID,
        priceBought: 5450.00,
        sellingPrice: 6000.00,
        quality: "New",
        edition: "1st Edition",
        type: "Softbound",
        quantity: 4,
        bookCover: "../img/Color Theory for the Makeup Artist.jpg"
    }

]


mongodb.insertMany(bookVersionsCollections, bookVersions);


var requests = [
    { // [0]
        request_ID : ObjectId(),
        username: "johnsmith",
        // bookversion_ID: bookVersions[0].bookVersion_ID,
        book_title: "Rogue One: A Star Wars Story",
        book_author: "Alexander Freed",
        isUrgent: "Yes",
        maxPrice: 1000.00,
        description: "Hard Cover version",
        date_requested: new Date("2020-09-11T10:13:19.873+00:00"),
        status: "Active",
        priority_rating: 0.034,
        quantity: 1,
        override: false,
        //notifications: 
        ignored_notif_count: 0 
    },
    { // [1]
        request_ID : ObjectId(),
        username: "seanxnieva",
        // bookversion_ID: bookVersions[1].bookVersion_ID,
        book_title: "The Art of Moana",
        book_author: "Jessica Julius & Maggie Malone",
        isUrgent:"No",
        maxPrice: 1000.00,
        description: "none",
        date_requested: new Date("2020-09-11T10:13:19.873+00:00"),
        status: "Active",
        priority_rating: 0.034,
        quantity: 2,
        override: false,
        //notifications:
        ignored_notif_count: 0
    },
    { // [2]
        request_ID : ObjectId(),
        username: "willowsmith",
        // bookversion_ID: bookVersions[2].bookVersion_ID,
        book_title: "Gordon Ramsay's Ultimate Cookery Course",
        book_author: "Gordon Ramsay",
        isUrgent:"No",
        maxPrice: 1500.00,
        description: "none",
        date_requested: new Date("2020-08-21T10:13:19.873+00:00"), //
        status: "Active",
        priority_rating: 0.034,
        quantity: 2, 
        override: false,
        //notifications:
        ignored_notif_count: 3 //stbc
    },
    { // [3]
        request_ID : ObjectId(),
        username: "bobjohnson",
        // bookversion_ID: bookVersions[3].bookVersion_ID,
        book_title: "On the Nature and Existence of God",
        book_author: "Richard M. Gale",
        isUrgent:"No",
        maxPrice: 1000.00,
        description: "none",
        date_requested: new Date("2020-09-15T10:13:19.873+00:00"),
        status: "Active",
        priority_rating: 0.034,
        quantity: 1,
        override: false,
        //notifications:
        ignored_notif_count: 0
    },
    { // [4]
        request_ID : ObjectId(),
        username: "willowsmith",
        // bookversion_ID: bookVersions[4].bookVersion_ID,
        book_title: "The Art of Moana",
        book_author: "Janet Campbell",
        isUrgent:"No",
        maxPrice: 1000.00,
        description: "none",
        date_requested: new Date("2020-09-17T10:13:19.873+00:00"),
        status: "Active",
        priority_rating: 0.034,
        quantity: 1,
        override: false,
        //notifications:
        ignored_notif_count: 3
    },
    { // [5]
        request_ID : ObjectId(),
        username: "willowsmith",
        // bookversion_ID: bookVersions[4].bookVersion_ID,
        book_title: "Everyday",
        book_author: "David Levithan",
        isUrgent:"No",
        maxPrice: 1000.00,
        description: "none",
        date_requested: new Date("2020-09-19T10:13:19.873+00:00"),
        status: "Cancelled",
        priority_rating: 0.034,
        quantity: 1,
        override: false,
        //notifications:
        ignored_notif_count: 0
    },
    { // [6]
        request_ID : ObjectId(),
        username: "willowsmith",
        // bookversion_ID: bookVersions[4].bookVersion_ID,
        book_title: "The Lover's Dictionary",
        book_author: "David Levithan",
        isUrgent:"Yes",
        maxPrice: 1000.00,
        description: "none",
        date_requested: new Date("2020-09-22T10:13:19.873+00:00"),
        status: "Cancelled",
        priority_rating: 0.034,
        quantity: 1,
        override: false,
        //notifications:
        ignored_notif_count: 0
    },
    { // [7]
        request_ID : ObjectId(),
        username: "willowsmith",
        // bookversion_ID: bookVersions[4].bookVersion_ID,
        book_title: "Flipped",
        book_author: "Van Dranen",
        isUrgent:"Yes",
        maxPrice: 1000.00,
        description: "none",
        date_requested: new Date(),
        status: "Active",
        priority_rating: 0.034,
        quantity: 1,
        override: false,
        //notifications:
        ignored_notif_count: 0
    }
    
]
mongodb.insertMany(requestsCollections, requests);



var cartItems = [
    {
        // [0]
        CartItems_ID: ObjectId(),
        username: "willowsmith",
        items: [
            {
                bookVersion: bookVersions[0].bookVersion_ID,
                quantity: 1
            },
            {
                bookVersion: bookVersions[1].bookVersion_ID,
                quantity: 2
            },
            {
                bookVersion: bookVersions[2].bookVersion_ID,
                quantity: 2
            }
        ],
        isActive: true
    },
    {
        // [1]
        CartItems_ID: ObjectId(),
        username: "willowsmith",
        items: [
            {
                bookVersion: bookVersions[3].bookVersion_ID,
                quantity: 1
            },
            {
                bookVersion: bookVersions[4].bookVersion_ID,
                quantity: 2
            }
        ],
        isActive: false
    },
    {
        // [2]
        CartItems_ID: ObjectId(),
        username: "willowsmith",
        items: [
            {
                bookVersion: bookVersions[0].bookVersion_ID,
                quantity: 2
            }
        ],
        isActive: false
    },
    {
        // [3]
        CartItems_ID: ObjectId(),
        username: "willowsmith",
        items: [
            {
                bookVersion: bookVersions[1].bookVersion_ID,
                quantity: 2
            }
        ],
        isActive: false
    },
    {
        // [4]
        CartItems_ID: ObjectId(),
        username: "willowsmith",
        items: [
            {
                bookVersion: bookVersions[2].bookVersion_ID,
                quantity: 2
            }
        ],
        isActive: false
    },
    {
        // [5]
        CartItems_ID: ObjectId(),
        username: "willowsmith",
        items: [
            {
                bookVersion: bookVersions[3].bookVersion_ID,
                quantity: 3
            }
        ],
        isActive: false
    }
]

mongodb.insertMany(cartItemsCollections, cartItems);


var billingadd = [
    {
        //0
        billingAddress_ID: ObjectId(),
        fullname: "Willow Smith",
        contactNum: 09171234567,
        address: "‎2401 Taft Avenue, ‎Malate",
        city: "Manila",
        zip: 1001

    }
]

mongodb.insertMany(billingAddressCollections, billingadd);

var Orders = [
    {
        // [0]
        order_ID: ObjectId(),
        username: "willowsmith",
        status: "Pending",
        billingAddress_ID: billingadd[0].billingAddress_ID,
        order_date: new Date("2020-09-12T10:13:19.873+00:00"),
        confirm_date: null

    },
    {
        // [1]
        order_ID: ObjectId(),
        username: "willowsmith",
        status: "Cancelled",
        billingAddress_ID: billingadd[0].billingAddress_ID,
        order_date: new Date("2020-09-01T10:13:19.873+00:00"),
        confirm_date: null
    },
    {
        // [2]
        order_ID: ObjectId(),
        username: "willowsmith",
        status: "Processing",
        billingAddress_ID: billingadd[0].billingAddress_ID,
        order_date: new Date("2020-09-03T10:13:19.873+00:00"),
        confirm_date: null
    },
    {
        // [3]
        order_ID: ObjectId(),
        username: "willowsmith",
        status: "Confirmed",
        billingAddress_ID: billingadd[0].billingAddress_ID,
        order_date: new Date("2020-09-05T10:13:19.873+00:00"),
        confirm_date: new Date("2020-09-06T10:13:19.873+00:00")
    },
    {
        // [4]
        order_ID: ObjectId(),
        username: "willowsmith",
        status: "Pending",
        billingAddress_ID: billingadd[0].billingAddress_ID,
        order_date: new Date("2020-09-12T10:13:19.873+00:00"),
        confirm_date: null
    }

]
mongodb.insertMany(ordersCollections, Orders);

var OrderItems = [
    {
        // [0]
        OrderItems_ID : ObjectId(),
        order_ID : Orders[0].order_ID,
        CartItems_ID: cartItems[1].CartItems_ID

    },
    {
        // [1]
        OrderItems_ID : ObjectId(),
        order_ID : Orders[1].order_ID,
        CartItems_ID: cartItems[2].CartItems_ID
    },
    {
        // [2]
        OrderItems_ID : ObjectId(),
        order_ID : Orders[2].order_ID,
        CartItems_ID: cartItems[3].CartItems_ID
    },
    {
        // [3]
        OrderItems_ID : ObjectId(),
        order_ID : Orders[3].order_ID,
        CartItems_ID: cartItems[4].CartItems_ID
    },
    {
        // [4]
        OrderItems_ID : ObjectId(),
        order_ID : Orders[4].order_ID,
        CartItems_ID: cartItems[5].CartItems_ID
    }

]
mongodb.insertMany(orderItemsCollections, OrderItems);

var paymentDetails = [
    {
        payment_ID: ObjectId(),
        username: "willowsmith",
        order_ID: Orders[1].order_ID,
        bank_name: "BPI",
        ref_num: 100000009,
        proof_image: "proof_image_1.jpg"
    },
    {
        payment_ID: ObjectId(),
        username: "willowsmith",
        order_ID: Orders[2].order_ID,
        bank_name: "GCash",
        ref_num: 200000002,
        proof_image: "proof_image_1.jpg"
    },
    {
        payment_ID: ObjectId(),
        username: "willowsmith",
        order_ID: Orders[3].order_ID,
        bank_name: "BDO",
        ref_num: 300000003,
        proof_image: "proof_image_1.jpg"
    }
]

mongodb.insertMany(paymentDetailsCollections, paymentDetails);

var notif = [
    {
        // [0] sept 19
        response: "No Answer",
        seen: false,
        notif_ID: ObjectId(),
        type: "Update",
        username: "willowsmith",
        request_ID: requests[2].request_ID,
        date: new Date("2020-09-18T10:13:19.873+00:00")


    }
]

mongodb.insertMany(notifCollections, notif);


var fulfillment = [
    {
        //dummy
    }
]

mongodb.insertMany(fulfillmentCollections, fulfillment);
