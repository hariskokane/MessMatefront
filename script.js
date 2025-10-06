// Enhanced MessMate JavaScript with Complete Functionality

// Global variables
let currentUser = null;
let currentCity = null;
let cart = [];
let currentPage = 'home';
let currentView = 'list';
let messMap = null;
let currentFilters = {
    type: 'all',
    cuisine: 'all',
    sort: 'rating'
};


// City data with coordinates for Maharashtra
const cityData = {
    sangli: {
        name: 'Sangli',
        coordinates: [16.8524, 74.5815],
        messes: [
            {
                id: 'sangli_1',
                name: 'Annapurna Bhojanalay',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                rating: 4.5,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Market Yard, Sangli',
                phone: '+91 9876543210',
                hours: '7:00 AM - 10:00 PM',
                featured: true,
                coordinates: [16.8524, 74.5815],
                description: 'Pure Veg, Maharashtrian thali, special Misal',
                reviews: ['Homely taste', 'Affordable and hygienic'],
                dishes: [
                    {
                        id: 'dish_1',
                        name: 'Veg Thali',
                        price: 100,
                        description: 'Complete Maharashtrian thali with rice, chapati, dal, sabji, and sweet',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_2',
                        name: 'Puran Poli',
                        price: 50,
                        description: 'Traditional sweet flatbread stuffed with jaggery and lentils',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_3',
                        name: 'Misal Pav',
                        price: 70,
                        description: 'Spicy sprouts curry served with bread rolls',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'sangli_2',
                name: 'Desi Zaika Mess',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.2,
                cuisine: ['north-indian'],
                type: 'mixed',
                address: 'Vishrambag, Sangli',
                phone: '+91 9876543211',
                hours: '8:00 AM - 11:00 PM',
                featured: false,
                coordinates: [16.8600, 74.5900],
                description: 'North Indian & Veg/Non-Veg specialties',
                reviews: ['Best chicken thali in Sangli'],
                dishes: [
                    {
                        id: 'dish_4',
                        name: 'Chicken Thali',
                        price: 180,
                        description: 'Complete non-veg thali with chicken curry, rice, roti, and dal',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_5',
                        name: 'Paneer Masala',
                        price: 150,
                        description: 'Rich and creamy paneer curry with aromatic spices',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_6',
                        name: 'Dal Tadka',
                        price: 100,
                        description: 'Yellow lentils tempered with cumin and spices',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'sangli_3',
                name: 'Swaad Ghar Mess',
                image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                rating: 4.3,
                cuisine: ['south-indian'],
                type: 'veg',
                address: 'Radhika Road, Sangli',
                phone: '+91 9876543212',
                hours: '6:00 AM - 9:00 PM',
                featured: false,
                coordinates: [16.8400, 74.5700],
                description: 'Authentic South Indian vegetarian food',
                reviews: ['Authentic South taste'],
                dishes: [
                    {
                        id: 'dish_7',
                        name: 'Idli Sambar',
                        price: 60,
                        description: 'Steamed rice cakes served with lentil curry',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'south-indian',
                        available: true
                    },
                    {
                        id: 'dish_8',
                        name: 'Dosa',
                        price: 80,
                        description: 'Crispy rice and lentil crepe served with chutney',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'south-indian',
                        available: true
                    },
                    {
                        id: 'dish_9',
                        name: 'Veg Meals',
                        price: 120,
                        description: 'Traditional South Indian thali with rice and curries',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'south-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'sangli_4',
                name: 'Maharaja Tiffin Center',
                image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                rating: 4.0,
                cuisine: ['maharashtrian', 'north-indian'],
                type: 'mixed',
                address: 'Station Road, Sangli',
                phone: '+91 9876543213',
                hours: '7:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.8650, 74.5850],
                description: 'Mixed cuisine with variety of options',
                reviews: ['Good variety', 'Reasonable prices'],
                dishes: [
                    {
                        id: 'dish_10',
                        name: 'Egg Curry',
                        price: 120,
                        description: 'Boiled eggs cooked in spicy tomato gravy',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_11',
                        name: 'Veg Pulao',
                        price: 90,
                        description: 'Fragrant rice cooked with mixed vegetables',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_12',
                        name: 'Special Veg Thali',
                        price: 140,
                        description: 'Premium vegetarian thali with special dishes',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'sangli_5',
                name: 'Ruchira Home Mess',
                image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                rating: 4.4,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Bhavani Peth, Sangli',
                phone: '+91 9876543214',
                hours: '6:30 AM - 9:30 PM',
                featured: false,
                coordinates: [16.8500, 74.5750],
                description: 'Traditional Maharashtrian home-style cooking',
                reviews: ['Homely food', 'Authentic taste'],
                dishes: [
                    {
                        id: 'dish_13',
                        name: 'Bhakri & Pithla',
                        price: 80,
                        description: 'Traditional millet bread with gram flour curry',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_14',
                        name: 'Zunka Bhakri',
                        price: 70,
                        description: 'Spiced gram flour dish with millet bread',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_15',
                        name: 'Matki Usal',
                        price: 90,
                        description: 'Spicy moth bean curry, a Maharashtrian specialty',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'sangli_6',
                name: 'Annapoorna Tiffins',
                image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                rating: 3.9,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Ganpati Peth, Sangli',
                phone: '+91 9876543215',
                hours: '7:00 AM - 9:00 PM',
                featured: false,
                coordinates: [16.8450, 74.5800],
                description: 'Simple home-style vegetarian food',
                reviews: ['Simple and tasty', 'Budget-friendly'],
                dishes: [
                    {
                        id: 'dish_16',
                        name: 'Chapati-Bhaji',
                        price: 60,
                        description: 'Wheat bread served with seasonal vegetable curry',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_17',
                        name: 'Dal Rice',
                        price: 70,
                        description: 'Simple lentil curry served with steamed rice',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_18',
                        name: 'Poha',
                        price: 40,
                        description: 'Flattened rice cooked with onions and spices',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'sangli_7',
                name: 'Zaika Zaayka Mess',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.1,
                cuisine: ['punjabi', 'maharashtrian'],
                type: 'mixed',
                address: 'Miraj Road, Sangli',
                phone: '+91 9876543216',
                hours: '8:00 AM - 11:00 PM',
                featured: false,
                coordinates: [16.8550, 74.5900],
                description: 'Punjabi & Maharashtrian fusion cuisine',
                reviews: ['Great variety', 'Good taste'],
                dishes: [
                    {
                        id: 'dish_19',
                        name: 'Butter Chicken',
                        price: 220,
                        description: 'Creamy tomato-based chicken curry with butter',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_20',
                        name: 'Rajma Chawal',
                        price: 110,
                        description: 'Kidney bean curry served with steamed rice',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_21',
                        name: 'Veg Kadai',
                        price: 150,
                        description: 'Mixed vegetables cooked in kadai with spices',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    }
                ]
            }
        ]
    },
    miraj: {
        name: 'Miraj',
        coordinates: [16.8270, 74.6500],
        messes: [
            {
                id: 'miraj_1',
                name: "Maa's Tiffin Service",
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.3,
                cuisine: ['north-indian'],
                type: 'mixed',
                address: 'Station Road, Miraj',
                phone: '+91 9876543220',
                hours: '7:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.8270, 74.6500],
                description: 'North Indian Veg/Non-Veg specialties',
                reviews: ['Homely taste', 'Good service'],
                dishes: [
                    {
                        id: 'dish_22',
                        name: 'Chicken Curry',
                        price: 200,
                        description: 'Traditional chicken curry with aromatic spices',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_23',
                        name: 'Paneer Butter Masala',
                        price: 160,
                        description: 'Cottage cheese in rich tomato and butter gravy',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_24',
                        name: 'Roti',
                        price: 10,
                        description: 'Fresh wheat bread made on tawa',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'miraj_2',
                name: 'Homely Zaika Mess',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                rating: 4.6,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Market Yard, Miraj',
                phone: '+91 9876543221',
                hours: '6:00 AM - 9:00 PM',
                featured: true,
                coordinates: [16.8300, 74.6550],
                description: 'Authentic Maharashtrian vegetarian cuisine',
                reviews: ['Excellent taste', 'Very homely'],
                dishes: [
                    {
                        id: 'dish_25',
                        name: 'Thalipeeth',
                        price: 50,
                        description: 'Multi-grain flatbread with spices and vegetables',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_26',
                        name: 'Poha',
                        price: 40,
                        description: 'Flattened rice with onions, curry leaves and spices',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_27',
                        name: 'Veg Thali',
                        price: 120,
                        description: 'Complete Maharashtrian vegetarian meal',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'miraj_3',
                name: 'Biryani House Mess',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.4,
                cuisine: ['north-indian'],
                type: 'non-veg',
                address: 'Old Miraj, Miraj',
                phone: '+91 9876543222',
                hours: '11:00 AM - 11:00 PM',
                featured: false,
                coordinates: [16.8250, 74.6450],
                description: 'Specializes in biryanis and non-veg dishes',
                reviews: ['Best biryani in town', 'Authentic flavors'],
                dishes: [
                    {
                        id: 'dish_28',
                        name: 'Chicken Biryani',
                        price: 220,
                        description: 'Fragrant basmati rice cooked with tender chicken',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_29',
                        name: 'Mutton Biryani',
                        price: 280,
                        description: 'Premium mutton biryani with aromatic spices',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_30',
                        name: 'Egg Biryani',
                        price: 150,
                        description: 'Flavorful rice dish with boiled eggs',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'miraj_4',
                name: 'Healthy Bite Tiffin',
                image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                rating: 4.2,
                cuisine: ['north-indian'],
                type: 'veg',
                address: 'Civil Hospital Road, Miraj',
                phone: '+91 9876543223',
                hours: '7:00 AM - 8:00 PM',
                featured: false,
                coordinates: [16.8320, 74.6480],
                description: 'Health-focused vegetarian meals',
                reviews: ['Healthy options', 'Good for diet'],
                dishes: [
                    {
                        id: 'dish_31',
                        name: 'Sprouts Salad',
                        price: 60,
                        description: 'Fresh mixed sprouts with vegetables and lemon',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_32',
                        name: 'Multigrain Roti',
                        price: 15,
                        description: 'Healthy bread made from multiple grains',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_33',
                        name: 'Light Thali',
                        price: 100,
                        description: 'Healthy and light vegetarian meal',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'miraj_5',
                name: 'Savali Mess',
                image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                rating: 4.0,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Rajwada Chowk, Miraj',
                phone: '+91 9876543224',
                hours: '6:30 AM - 9:30 PM',
                featured: false,
                coordinates: [16.8280, 74.6520],
                description: 'Traditional Maharashtrian home-style cooking',
                reviews: ['Authentic taste', 'Good portions'],
                dishes: [
                    {
                        id: 'dish_34',
                        name: 'Varan Bhat',
                        price: 70,
                        description: 'Simple dal rice, a Maharashtrian comfort food',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_35',
                        name: 'Chapati Bhaji',
                        price: 60,
                        description: 'Wheat bread with seasonal vegetable curry',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_36',
                        name: 'Batata Bhaji',
                        price: 80,
                        description: 'Spiced potato curry, a Maharashtrian favorite',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'miraj_6',
                name: 'Tandoori Zaika Mess',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.3,
                cuisine: ['punjabi'],
                type: 'veg',
                address: 'Shaniwar Peth, Miraj',
                phone: '+91 9876543225',
                hours: '8:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.8290, 74.6470],
                description: 'Punjabi vegetarian specialties',
                reviews: ['Great tandoori items', 'Rich flavors'],
                dishes: [
                    {
                        id: 'dish_37',
                        name: 'Tandoori Roti',
                        price: 20,
                        description: 'Clay oven baked wheat bread',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_38',
                        name: 'Dal Makhani',
                        price: 130,
                        description: 'Creamy black lentils cooked with butter',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_39',
                        name: 'Butter Paneer',
                        price: 170,
                        description: 'Cottage cheese in rich butter gravy',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    }
                ]
            },
            {
                id: 'miraj_7',
                name: 'Nisarg Bhojanalay',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.1,
                cuisine: ['maharashtrian'],
                type: 'mixed',
                address: 'Bus Stand Road, Miraj',
                phone: '+91 9876543226',
                hours: '7:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.8310, 74.6530],
                description: 'Mixed cuisine with fish specialties',
                reviews: ['Good fish curry', 'Variety of options'],
                dishes: [
                    {
                        id: 'dish_40',
                        name: 'Fish Thali',
                        price: 250,
                        description: 'Complete fish meal with rice and curry',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_41',
                        name: 'Egg Curry',
                        price: 130,
                        description: 'Boiled eggs in spicy tomato gravy',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_42',
                        name: 'Veg Thali',
                        price: 110,
                        description: 'Vegetarian thali with seasonal vegetables',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            }
        ]
    },
    ashta: {
        name: 'Ashta',
        coordinates: [16.9470, 74.4090],
        messes: [
            {
                id: 'ashta_1',
                name: 'Ruchira Tiffin',
                image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                rating: 4.2,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Main Road, Ashta',
                phone: '+91 9876543230',
                hours: '6:00 AM - 9:00 PM',
                featured: false,
                coordinates: [16.9470, 74.4090],
                description: 'Traditional Maharashtrian vegetarian tiffin service',
                reviews: ['Homely food', 'Good taste'],
                dishes: [
                    {
                        id: 'dish_43',
                        name: 'Zunka Bhakri',
                        price: 70,
                        description: 'Spiced gram flour curry with millet bread',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_44',
                        name: 'Poha',
                        price: 40,
                        description: 'Flattened rice with onions and spices',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_45',
                        name: 'Misal Pav',
                        price: 60,
                        description: 'Spicy sprouts curry with bread rolls',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'ashta_2',
                name: 'Apna Zaayka',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.1,
                cuisine: ['punjabi'],
                type: 'veg',
                address: 'Market Area, Ashta',
                phone: '+91 9876543231',
                hours: '8:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.9500, 74.4120],
                description: 'Punjabi vegetarian specialties',
                reviews: ['Good Punjabi food', 'Rich taste'],
                dishes: [
                    {
                        id: 'dish_46',
                        name: 'Rajma Chawal',
                        price: 120,
                        description: 'Kidney bean curry with steamed rice',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_47',
                        name: 'Paneer Do Pyaza',
                        price: 160,
                        description: 'Cottage cheese with onions in rich gravy',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_48',
                        name: 'Veg Pulao',
                        price: 90,
                        description: 'Fragrant rice cooked with mixed vegetables',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    }
                ]
            },
            {
                id: 'ashta_3',
                name: 'Sai Mess',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.5,
                cuisine: ['north-indian'],
                type: 'mixed',
                address: 'Station Road, Ashta',
                phone: '+91 9876543232',
                hours: '7:00 AM - 11:00 PM',
                featured: true,
                coordinates: [16.9450, 74.4070],
                description: 'Mixed cuisine with excellent chicken dishes',
                reviews: ['Best chicken in Ashta', 'Good service'],
                dishes: [
                    {
                        id: 'dish_49',
                        name: 'Chicken Masala',
                        price: 200,
                        description: 'Spicy chicken curry with aromatic spices',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_50',
                        name: 'Veg Thali',
                        price: 100,
                        description: 'Complete vegetarian meal with variety',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_51',
                        name: 'Dal Fry',
                        price: 90,
                        description: 'Tempered yellow lentils with spices',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'ashta_4',
                name: 'Healthy Meals',
                image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                rating: 4.0,
                cuisine: ['north-indian'],
                type: 'veg',
                address: 'Hospital Road, Ashta',
                phone: '+91 9876543233',
                hours: '7:00 AM - 8:00 PM',
                featured: false,
                coordinates: [16.9480, 74.4100],
                description: 'Light and healthy vegetarian meals',
                reviews: ['Healthy options', 'Light food'],
                dishes: [
                    {
                        id: 'dish_52',
                        name: 'Veg Salad',
                        price: 50,
                        description: 'Fresh mixed vegetable salad',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_53',
                        name: 'Chapati Dal Sabji',
                        price: 90,
                        description: 'Wheat bread with lentils and vegetables',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_54',
                        name: 'Khichdi',
                        price: 80,
                        description: 'Comfort food made with rice and lentils',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'ashta_5',
                name: 'Krishna Tiffin Center',
                image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                rating: 4.3,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Temple Road, Ashta',
                phone: '+91 9876543234',
                hours: '6:30 AM - 9:30 PM',
                featured: false,
                coordinates: [16.9490, 74.4110],
                description: 'Traditional Maharashtrian vegetarian food',
                reviews: ['Authentic taste', 'Good quality'],
                dishes: [
                    {
                        id: 'dish_55',
                        name: 'Pithla Bhakri',
                        price: 80,
                        description: 'Gram flour curry with millet bread',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_56',
                        name: 'Matki Usal',
                        price: 70,
                        description: 'Spicy moth bean curry',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_57',
                        name: 'Sabudana Khichdi',
                        price: 60,
                        description: 'Tapioca pearls cooked with peanuts',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'ashta_6',
                name: 'Tandoor Zaika',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.2,
                cuisine: ['punjabi'],
                type: 'non-veg',
                address: 'College Road, Ashta',
                phone: '+91 9876543235',
                hours: '8:00 AM - 11:00 PM',
                featured: false,
                coordinates: [16.9460, 74.4080],
                description: 'Punjabi non-vegetarian specialties',
                reviews: ['Great tandoori items', 'Good chicken'],
                dishes: [
                    {
                        id: 'dish_58',
                        name: 'Butter Chicken',
                        price: 230,
                        description: 'Creamy tomato-based chicken curry',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_59',
                        name: 'Tandoori Roti',
                        price: 15,
                        description: 'Clay oven baked wheat bread',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_60',
                        name: 'Dal Fry',
                        price: 100,
                        description: 'Tempered lentils with aromatic spices',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    }
                ]
            },
            {
                id: 'ashta_7',
                name: 'Rasoi Ghar',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.1,
                cuisine: ['north-indian'],
                type: 'mixed',
                address: 'Bus Stand, Ashta',
                phone: '+91 9876543236',
                hours: '7:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.9510, 74.4130],
                description: 'Mixed cuisine with variety of options',
                reviews: ['Good variety', 'Reasonable prices'],
                dishes: [
                    {
                        id: 'dish_61',
                        name: 'Egg Curry',
                        price: 130,
                        description: 'Boiled eggs in spicy tomato gravy',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_62',
                        name: 'Paneer Masala',
                        price: 150,
                        description: 'Cottage cheese in rich spicy gravy',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_63',
                        name: 'Chicken Thali',
                        price: 220,
                        description: 'Complete non-veg meal with chicken curry',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            }
        ]
    },
    islampur: {
        name: 'Islampur',
        coordinates: [16.9570, 74.2740],
        messes: [
            {
                id: 'islampur_1',
                name: 'Annapurna Tiffins',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                rating: 4.2,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Main Market, Islampur',
                phone: '+91 9876543240',
                hours: '6:00 AM - 9:00 PM',
                featured: false,
                coordinates: [16.9570, 74.2740],
                description: 'Traditional Maharashtrian vegetarian tiffin service',
                reviews: ['Homely taste', 'Good portions'],
                dishes: [
                    {
                        id: 'dish_64',
                        name: 'Veg Thali',
                        price: 100,
                        description: 'Complete Maharashtrian vegetarian meal',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_65',
                        name: 'Misal Pav',
                        price: 60,
                        description: 'Spicy sprouts curry with bread rolls',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_66',
                        name: 'Poha',
                        price: 40,
                        description: 'Flattened rice with onions and spices',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'islampur_2',
                name: 'Homely Rasoi',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.3,
                cuisine: ['north-indian'],
                type: 'mixed',
                address: 'Station Road, Islampur',
                phone: '+91 9876543241',
                hours: '7:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.9600, 74.2770],
                description: 'Home-style cooking with veg and non-veg options',
                reviews: ['Homely food', 'Good chicken curry'],
                dishes: [
                    {
                        id: 'dish_67',
                        name: 'Chicken Curry',
                        price: 180,
                        description: 'Traditional chicken curry with spices',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_68',
                        name: 'Egg Masala',
                        price: 120,
                        description: 'Boiled eggs in spicy masala gravy',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_69',
                        name: 'Dal Rice',
                        price: 70,
                        description: 'Simple lentil curry with steamed rice',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'islampur_3',
                name: 'Zaika Rasoi',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.1,
                cuisine: ['punjabi'],
                type: 'veg',
                address: 'College Road, Islampur',
                phone: '+91 9876543242',
                hours: '8:00 AM - 10:00 PM',
                featured: false,
                coordinates: [16.9550, 74.2720],
                description: 'Punjabi vegetarian specialties',
                reviews: ['Rich flavors', 'Good paneer dishes'],
                dishes: [
                    {
                        id: 'dish_70',
                        name: 'Paneer Butter Masala',
                        price: 160,
                        description: 'Cottage cheese in rich tomato and butter gravy',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_71',
                        name: 'Dal Makhani',
                        price: 140,
                        description: 'Creamy black lentils cooked with butter',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_72',
                        name: 'Veg Biryani',
                        price: 120,
                        description: 'Fragrant rice cooked with mixed vegetables',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    }
                ]
            },
            {
                id: 'islampur_4',
                name: 'Swadisht Bhojan',
                image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                rating: 4.0,
                cuisine: ['south-indian'],
                type: 'veg',
                address: 'Market Yard, Islampur',
                phone: '+91 9876543243',
                hours: '6:00 AM - 9:00 PM',
                featured: false,
                coordinates: [16.9580, 74.2750],
                description: 'South Indian vegetarian specialties',
                reviews: ['Good dosa', 'Authentic South taste'],
                dishes: [
                    {
                        id: 'dish_73',
                        name: 'Idli',
                        price: 50,
                        description: 'Steamed rice cakes served with chutney',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'south-indian',
                        available: true
                    },
                    {
                        id: 'dish_74',
                        name: 'Dosa',
                        price: 70,
                        description: 'Crispy rice and lentil crepe',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'south-indian',
                        available: true
                    },
                    {
                        id: 'dish_75',
                        name: 'Upma',
                        price: 60,
                        description: 'Semolina cooked with vegetables and spices',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'south-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'islampur_5',
                name: 'Healthy Rasoi Mess',
                image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                rating: 4.2,
                cuisine: ['north-indian'],
                type: 'veg',
                address: 'Hospital Road, Islampur',
                phone: '+91 9876543244',
                hours: '7:00 AM - 8:00 PM',
                featured: false,
                coordinates: [16.9590, 74.2760],
                description: 'Diet-friendly and healthy vegetarian meals',
                reviews: ['Healthy options', 'Good for diet'],
                dishes: [
                    {
                        id: 'dish_76',
                        name: 'Sprouts Salad',
                        price: 60,
                        description: 'Fresh mixed sprouts with vegetables',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_77',
                        name: 'Brown Rice Thali',
                        price: 120,
                        description: 'Healthy thali with brown rice and vegetables',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_78',
                        name: 'Moong Dal Khichdi',
                        price: 90,
                        description: 'Healthy rice and lentil porridge',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'islampur_6',
                name: 'Krishna Bhojanalay',
                image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                rating: 4.3,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Temple Road, Islampur',
                phone: '+91 9876543245',
                hours: '6:30 AM - 9:30 PM',
                featured: false,
                coordinates: [16.9560, 74.2730],
                description: 'Traditional Maharashtrian home-style cooking',
                reviews: ['Authentic taste', 'Good bhakri'],
                dishes: [
                    {
                        id: 'dish_79',
                        name: 'Bhakri Pithla',
                        price: 80,
                        description: 'Millet bread with gram flour curry',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_80',
                        name: 'Zunka Bhakri',
                        price: 70,
                        description: 'Spiced gram flour dish with millet bread',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_81',
                        name: 'Matki Usal',
                        price: 90,
                        description: 'Spicy moth bean curry',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'islampur_7',
                name: 'Biryani Junction',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.5,
                cuisine: ['north-indian'],
                type: 'mixed',
                address: 'Bus Stand Road, Islampur',
                phone: '+91 9876543246',
                hours: '11:00 AM - 11:00 PM',
                featured: true,
                coordinates: [16.9610, 74.2780],
                description: 'Specializes in biryanis and non-veg dishes',
                reviews: ['Best biryani in Islampur', 'Great taste'],
                dishes: [
                    {
                        id: 'dish_82',
                        name: 'Chicken Biryani',
                        price: 220,
                        description: 'Fragrant basmati rice with tender chicken',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_83',
                        name: 'Mutton Biryani',
                        price: 280,
                        description: 'Premium mutton biryani with aromatic spices',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_84',
                        name: 'Veg Biryani',
                        price: 150,
                        description: 'Fragrant rice cooked with mixed vegetables',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            }
        ]
    },
    kolhapur: {
        name: 'Kolhapur',
        coordinates: [16.7050, 74.2433],
        messes: [
            {
                id: 'kolhapur_1',
                name: 'Tambada-Pandhara Mess',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.7,
                cuisine: ['maharashtrian'],
                type: 'non-veg',
                address: 'Mahadwar Road, Kolhapur',
                phone: '+91 9876543250',
                hours: '8:00 AM - 11:00 PM',
                featured: true,
                coordinates: [16.7050, 74.2433],
                description: 'Famous for authentic Kolhapuri non-veg specialties',
                reviews: ['Best mutton in Kolhapur', 'Authentic Kolhapuri taste'],
                dishes: [
                    {
                        id: 'dish_85',
                        name: 'Mutton Thali',
                        price: 280,
                        description: 'Complete Kolhapuri mutton meal with rassa',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_86',
                        name: 'Chicken Thali',
                        price: 220,
                        description: 'Traditional Kolhapuri chicken thali',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_87',
                        name: 'Pandhara Rassa',
                        price: 100,
                        description: 'White curry, a Kolhapuri specialty',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'kolhapur_2',
                name: 'Maharashtrian Tiffin Center',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                rating: 4.3,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Rankala Lake Road, Kolhapur',
                phone: '+91 9876543251',
                hours: '6:00 AM - 9:00 PM',
                featured: false,
                coordinates: [16.7100, 74.2500],
                description: 'Traditional Maharashtrian vegetarian food',
                reviews: ['Good veg thali', 'Authentic taste'],
                dishes: [
                    {
                        id: 'dish_88',
                        name: 'Veg Thali',
                        price: 120,
                        description: 'Complete Maharashtrian vegetarian meal',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_89',
                        name: 'Misal Pav',
                        price: 80,
                        description: 'Spicy Kolhapuri misal with pav',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_90',
                        name: 'Zunka Bhakri',
                        price: 70,
                        description: 'Traditional gram flour curry with millet bread',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'kolhapur_3',
                name: 'Kolhapuri Zaika',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                rating: 4.5,
                cuisine: ['maharashtrian'],
                type: 'non-veg',
                address: 'Station Road, Kolhapur',
                phone: '+91 9876543252',
                hours: '9:00 AM - 11:00 PM',
                featured: false,
                coordinates: [16.7000, 74.2400],
                description: 'Authentic Kolhapuri non-veg specialties',
                reviews: ['Spicy and delicious', 'Best tambda rassa'],
                dishes: [
                    {
                        id: 'dish_91',
                        name: 'Tambda Rassa',
                        price: 200,
                        description: 'Spicy red curry, signature Kolhapuri dish',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_92',
                        name: 'Egg Curry',
                        price: 130,
                        description: 'Kolhapuri style spicy egg curry',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_93',
                        name: 'Fish Curry',
                        price: 250,
                        description: 'Fresh fish in Kolhapuri spicy gravy',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'kolhapur_4',
                name: 'Pure Veg Rasoi',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                rating: 4.2,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Shivaji University Road, Kolhapur',
                phone: '+91 9876543253',
                hours: '7:00 AM - 9:00 PM',
                featured: false,
                coordinates: [16.7150, 74.2550],
                description: 'Pure vegetarian Maharashtrian cuisine',
                reviews: ['Clean and hygienic', 'Good breakfast'],
                dishes: [
                    {
                        id: 'dish_94',
                        name: 'Poha',
                        price: 40,
                        description: 'Kolhapuri style flattened rice',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_95',
                        name: 'Upma',
                        price: 50,
                        description: 'Semolina cooked with vegetables',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_96',
                        name: 'Veg Thali',
                        price: 110,
                        description: 'Simple vegetarian thali',
                        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            },
            {
                id: 'kolhapur_5',
                name: 'Biryani Adda',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.4,
                cuisine: ['north-indian'],
                type: 'mixed',
                address: 'New Palace Road, Kolhapur',
                phone: '+91 9876543254',
                hours: '11:00 AM - 11:00 PM',
                featured: false,
                coordinates: [16.7080, 74.2480],
                description: 'Specializes in biryanis and North Indian cuisine',
                reviews: ['Excellent biryani', 'Good portions'],
                dishes: [
                    {
                        id: 'dish_97',
                        name: 'Chicken Biryani',
                        price: 240,
                        description: 'Kolhapuri style chicken biryani',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_98',
                        name: 'Mutton Biryani',
                        price: 290,
                        description: 'Premium mutton biryani with Kolhapuri spices',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_99',
                        name: 'Egg Biryani',
                        price: 150,
                        description: 'Flavorful egg biryani',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: false,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'kolhapur_6',
                name: 'Spicy Zaika Mess',
                image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                rating: 4.3,
                cuisine: ['punjabi'],
                type: 'mixed',
                address: 'Tarabai Park, Kolhapur',
                phone: '+91 9876543255',
                hours: '8:00 AM - 11:00 PM',
                featured: false,
                coordinates: [16.7120, 74.2520],
                description: 'Punjabi cuisine with veg and non-veg options',
                reviews: ['Rich flavors', 'Good butter chicken'],
                dishes: [
                    {
                        id: 'dish_100',
                        name: 'Butter Chicken',
                        price: 230,
                        description: 'Creamy tomato-based chicken curry',
                        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
                        veg: false,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_101',
                        name: 'Dal Makhani',
                        price: 130,
                        description: 'Creamy black lentils with butter',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    },
                    {
                        id: 'dish_102',
                        name: 'Paneer Tikka Masala',
                        price: 170,
                        description: 'Grilled cottage cheese in rich gravy',
                        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
                        veg: true,
                        cuisine: 'punjabi',
                        available: true
                    }
                ]
            },
            {
                id: 'kolhapur_7',
                name: 'Healthy Rasoi',
                image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                rating: 4.1,
                cuisine: ['north-indian'],
                type: 'veg',
                address: 'Rajaram Road, Kolhapur',
                phone: '+91 9876543256',
                hours: '7:00 AM - 8:00 PM',
                featured: false,
                coordinates: [16.7030, 74.2410],
                description: 'Light and healthy vegetarian meals',
                reviews: ['Healthy options', 'Good for diet'],
                dishes: [
                    {
                        id: 'dish_103',
                        name: 'Veg Salad',
                        price: 50,
                        description: 'Fresh mixed vegetable salad',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_104',
                        name: 'Chapati Dal Sabji',
                        price: 90,
                        description: 'Wheat bread with lentils and vegetables',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    },
                    {
                        id: 'dish_105',
                        name: 'Khichdi',
                        price: 80,
                        description: 'Healthy rice and lentil porridge',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'north-indian',
                        available: true
                    }
                ]
            },
            {
                id: 'kolhapur_8',
                name: 'Swadisht Home Mess',
                image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                rating: 4.2,
                cuisine: ['maharashtrian'],
                type: 'veg',
                address: 'Laxmipuri, Kolhapur',
                phone: '+91 9876543257',
                hours: '6:30 AM - 9:30 PM',
                featured: false,
                coordinates: [16.7070, 74.2460],
                description: 'Home-style Maharashtrian vegetarian cooking',
                reviews: ['Homely taste', 'Good thalipeeth'],
                dishes: [
                    {
                        id: 'dish_106',
                        name: 'Thalipeeth',
                        price: 60,
                        description: 'Multi-grain flatbread with spices',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_107',
                        name: 'Varan Bhat',
                        price: 70,
                        description: 'Simple dal rice, comfort food',
                        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    },
                    {
                        id: 'dish_108',
                        name: 'Chapati Sabji',
                        price: 80,
                        description: 'Wheat bread with seasonal vegetables',
                        image: 'https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg',
                        veg: true,
                        cuisine: 'maharashtrian',
                        available: true
                    }
                ]
            }
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

document.addEventListener("DOMContentLoaded", () => {
    // Set default city ONLY if none saved/selected
    const savedCity = localStorage.getItem('messmate_city');
    if (!currentCity && !savedCity) {
        selectCity("sangli");
    } else if (savedCity && !currentCity) {
        currentCity = savedCity;
    }
});

function goHome() {
    // Show home page
    showPage('home');

    // Reset view to default (list/map etc. if needed)
    currentPage = 'home';

    // Optionally reapply default city if none selected
    if (!currentCity) {
        selectCity("sangli");
    }

    // Hide any open modals
    const modal = document.getElementById("location-modal");
    modal.classList.remove("active");
}


function initializeApp() {
    // Show loading screen
    showLoadingScreen();
    
    // Load saved data
    loadSavedData();
    ensureCurrentCity();
    
    // Setup event listeners
    setupEventListeners();
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        hideLoadingScreen();
        
        // Show location modal if no city is selected
        if (!currentCity) {
            showLocationModal();
        } else {
            updateCityDisplay();
            // On multi-page, loadFeaturedMesses only if home page exists
            if (document.getElementById('home-page')) {
                loadFeaturedMesses();
            }
        }
        // After initial load, bootstrap current page
        bootstrapPage();
    }, 2000);
}

function ensureCurrentCity() {
    if (!currentCity) {
        const savedCity = localStorage.getItem('messmate_city');
        currentCity = savedCity || 'sangli';
        localStorage.setItem('messmate_city', currentCity);
    }
}

function showLoadingScreen() {
    const el = document.getElementById('loading-screen');
    if (el) el.style.display = 'flex';
}

// Navigate between pages (multi-page version)
function navigateTo(pageId, params = {}) {
    let target = 'index.html';
    switch (pageId) {
        case 'home':
            target = 'index.html';
            break;
        case 'browse':
            target = 'browse.html';
            break;
        case 'mess-profile':
            target = params.messId ? `mess.html?id=${encodeURIComponent(params.messId)}` : 'mess.html';
            break;
        case 'cart':
            target = 'cart.html';
            break;
        case 'orders':
            target = 'orders.html';
            break;
        case 'profile':
            target = 'profile.html';
            break;
        case 'mess-owner-dashboard':
            target = 'owner.html';
            break;
        default:
            target = 'index.html';
    }
    // Prevent redundant reloads
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentSearch = window.location.search || '';
    const targetParts = target.split('?');
    const targetPath = targetParts[0];
    const targetSearch = targetParts[1] ? `?${targetParts[1]}` : '';
    if (currentPath === targetPath && currentSearch === targetSearch) {
        return;
    }
    window.location.href = target;
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

function loadSavedData() {
    // Load user data
    const savedUser = localStorage.getItem('messmate_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
    
    // Load selected city
    const savedCity = localStorage.getItem('messmate_city');
    if (savedCity) {
        currentCity = savedCity;
    }
    
    // Load cart
    const savedCart = localStorage.getItem('messmate_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
    
    // Load theme
    const savedTheme = localStorage.getItem('messmate_theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        updateThemeIcon();
    }

    // Load city data overrides (owner-added/edited dishes)
    loadSavedCityDataOverrides();
}

// Merge saved city data (from localStorage) into in-memory cityData
function loadSavedCityDataOverrides() {
    try {
        const saved = localStorage.getItem('messmate_city_data');
        if (!saved) return;
        const overrides = JSON.parse(saved);
        if (!overrides || typeof overrides !== 'object') return;
        Object.keys(overrides).forEach(cityKey => {
            cityData[cityKey] = overrides[cityKey];
        });
    } catch (err) {
        // ignore malformed storage
    }
}

// Ensure auth UI updates don't crash on pages missing elements
function updateUserInterface() {
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const cartBtn = document.getElementById('cart-btn');

    if (currentUser) {
        if (authButtons) authButtons.classList.add('hidden');
        if (userInfo) userInfo.classList.remove('hidden');
        if (userName) userName.textContent = currentUser.name || currentUser.email || 'User';
        if (cartBtn) cartBtn.classList.remove('hidden');
    } else {
        if (authButtons) authButtons.classList.remove('hidden');
        if (userInfo) userInfo.classList.add('hidden');
    }
}

// Update theme toggle icon safely
function updateThemeIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    const isDark = document.body.classList.contains('dark-theme');
    icon.classList.remove(isDark ? 'fa-moon' : 'fa-sun');
    icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
}

function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    
    // Global search
    const globalSearch = document.getElementById('global-search');
    if (globalSearch) {
        globalSearch.addEventListener('input', handleGlobalSearch);
        globalSearch.addEventListener('focus', showSearchSuggestions);
        globalSearch.addEventListener('blur', hideSearchSuggestions);
    }
    
    // Map toggle
    const mapToggle = document.getElementById('map-toggle');
    if (mapToggle) mapToggle.addEventListener('click', toggleMapView);
    
    // Auth forms
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    const signupForm = document.getElementById('signup-form');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    const userType = document.getElementById('user-type');
    if (userType) userType.addEventListener('change', toggleMessOwnerFields);
    
    // Dish form
    const addDishForm = document.getElementById('add-dish-form');
    if (addDishForm) addDishForm.addEventListener('submit', handleAddDish);
    
    // Review form
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) reviewForm.addEventListener('submit', handleReviewSubmit);
    
    // Star rating
    if (document.querySelector('.star-rating')) {
        setupStarRating();
    }
    
    // Filter controls
    const cuisineFilter = document.getElementById('cuisine-filter');
    if (cuisineFilter) cuisineFilter.addEventListener('change', applyFilters);
    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);
    
    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

function showLocationModal() {
    const modal = document.getElementById('location-modal');
    if (modal) modal.classList.add('active');
}

function selectCity(cityKey) {
    currentCity = cityKey;
    localStorage.setItem('messmate_city', cityKey);
    
    closeModal('location-modal');
    updateCityDisplay();
    if (document.getElementById('home-page')) {
        loadFeaturedMesses();
    }
    if (document.getElementById('browse-page')) {
        loadMesses();
    }
    // If map view is active on browse page, re-initialize map
    if (document.getElementById('map-view') && document.getElementById('map-view').classList.contains('active')) {
        const messes = applyMessFilters(cityData[currentCity]?.messes || []);
        initializeMap(messes);
    }
    
    // Show map toggle button
    const mapToggleBtn = document.getElementById('map-toggle');
    if (mapToggleBtn) mapToggleBtn.classList.remove('hidden');
    
    showNotification('Location updated successfully!', 'success');
}

function updateCityDisplay() {
    if (currentCity && cityData[currentCity]) {
        const currentCityEl = document.getElementById('current-city');
        if (currentCityEl) currentCityEl.textContent = cityData[currentCity].name;
        const browseCityNameEl = document.getElementById('browse-city-name');
        if (browseCityNameEl) browseCityNameEl.textContent = cityData[currentCity].name;
        
        const messCount = cityData[currentCity].messes.length;
        const browseMessCountEl = document.getElementById('browse-mess-count');
        if (browseMessCountEl) browseMessCountEl.textContent = `${messCount} messes available`;
    }
}

function loadFeaturedMesses() {
    if (!currentCity || !cityData[currentCity]) return;
    
    const featuredMesses = cityData[currentCity].messes.filter(mess => mess.featured);
    const featuredContainer = document.getElementById('featured-messes');
    
    featuredContainer.innerHTML = featuredMesses.map(mess => `
        <div class="mess-card featured-mess-card" onclick="showMessProfile('${mess.id}')">
            <div class="featured-badge">Featured</div>
            <img src="${mess.image}" alt="${mess.name}" class="mess-card-image">
            <div class="mess-card-content">
                <div class="mess-card-header">
                    <div>
                        <h3>${mess.name}</h3>
                        <div class="mess-rating">
                            <i class="fas fa-star"></i>
                            <span>${mess.rating}</span>
                        </div>
                    </div>
                </div>
                <div class="mess-info">
                    <span><i class="fas fa-map-marker-alt"></i> ${mess.address}</span>
                    <span><i class="fas fa-clock"></i> ${mess.hours}</span>
                    <span><i class="fas fa-phone"></i> ${mess.phone}</span>
                </div>
                <p>${mess.description}</p>
                <div class="cuisine-tags">
                    ${mess.cuisine.map(c => `<span class="cuisine-tag">${formatCuisine(c)}</span>`).join('')}
                    ${mess.type === 'veg' ? '<span class="veg-badge">Pure Veg</span>' : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function showPage(pageId) {
    // Backwards-compat: redirect to corresponding standalone page
    navigateTo(pageId);
}

// Bootstrap per-page behavior depending on which containers exist
function bootstrapPage() {
    // Browse page
    if (document.getElementById('browse-page')) {
        updateCityDisplay();
        loadMesses();
    }
    // Mess profile page
    if (document.getElementById('mess-profile-page')) {
        const messId = getQueryParam('id');
        if (messId) {
            // Wait a tick to ensure city overrides are loaded
            setTimeout(function(){ renderMessProfile(messId); }, 0);
        } else {
            const container = document.getElementById('mess-profile-content');
            if (container) container.innerHTML = '<p class="text-center">No mess specified.</p>';
        }
    }
    // Cart page
    if (document.getElementById('cart-page')) {
        loadCart();
    }
    // Orders page
    if (document.getElementById('orders-page')) {
        loadOrders();
    }
    // Profile page
    if (document.getElementById('profile-page')) {
        loadProfile();
    }
    // Owner dashboard page
    if (document.getElementById('mess-owner-dashboard')) {
        loadDashboard();
    }
}

function getQueryParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

function loadMesses() {
    if (!currentCity || !cityData[currentCity]) return;
    
    const messes = cityData[currentCity].messes;
    const filteredMesses = applyMessFilters(messes);
    const messesGrid = document.getElementById('messes-grid');
    
    messesGrid.innerHTML = filteredMesses.map(mess => `
        <div class="mess-card" onclick="showMessProfile('${mess.id}')">
            ${mess.featured ? '<div class="featured-badge">Featured</div>' : ''}
            <img src="${mess.image}" alt="${mess.name}" class="mess-card-image">
            <div class="mess-card-content">
                <div class="mess-card-header">
                    <div>
                        <h3>${mess.name}</h3>
                        <div class="mess-rating">
                            <i class="fas fa-star"></i>
                            <span>${mess.rating}</span>
                        </div>
                    </div>
                </div>
                <div class="mess-info">
                    <span><i class="fas fa-map-marker-alt"></i> ${mess.address}</span>
                    <span><i class="fas fa-clock"></i> ${mess.hours}</span>
                    <span><i class="fas fa-phone"></i> ${mess.phone}</span>
                </div>
                <p>${mess.description}</p>
                <div class="cuisine-tags">
                    ${mess.cuisine.map(c => `<span class="cuisine-tag">${formatCuisine(c)}</span>`).join('')}
                    ${mess.type === 'veg' ? '<span class="veg-badge">Pure Veg</span>' : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Initialize map if in map view
    if (currentView === 'map') {
        initializeMap(filteredMesses);
    }
}

function applyMessFilters(messes) {
    let filtered = [...messes];
    
    // Filter by type
    if (currentFilters.type !== 'all') {
        if (currentFilters.type === 'featured') {
            filtered = filtered.filter(mess => mess.featured);
        } else {
            filtered = filtered.filter(mess => mess.type === currentFilters.type || mess.type === 'mixed');
        }
    }
    
    // Filter by cuisine
    if (currentFilters.cuisine !== 'all') {
        filtered = filtered.filter(mess => mess.cuisine.includes(currentFilters.cuisine));
    }
    
    // Sort
    switch (currentFilters.sort) {
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            filtered.sort((a, b) => getAveragePrice(a) - getAveragePrice(b));
            break;
        case 'price-high':
            filtered.sort((a, b) => getAveragePrice(b) - getAveragePrice(a));
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    return filtered;
}

function getAveragePrice(mess) {
    if (!mess.dishes || mess.dishes.length === 0) return 0;
    const total = mess.dishes.reduce((sum, dish) => sum + dish.price, 0);
    return total / mess.dishes.length;
}

function setActiveFilter(type) {
    currentFilters.type = type;
    
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    applyFilters();
}

function applyFilters() {
    currentFilters.cuisine = document.getElementById('cuisine-filter').value;
    currentFilters.sort = document.getElementById('sort-filter').value;
    
    loadMesses();
}

function filterByCuisine(cuisine) {
    currentFilters.cuisine = cuisine;
    document.getElementById('cuisine-filter').value = cuisine;
    showPage('browse');
}

function toggleView(view) {
    currentView = view;
    
    // Update view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(view + '-view-btn').classList.add('active');
    
    // Show/hide views
    document.getElementById('list-view').classList.toggle('active', view === 'list');
    document.getElementById('map-view').classList.toggle('active', view === 'map');
    
    if (view === 'map') {
        setTimeout(() => {
            if (!currentCity || !cityData[currentCity]) return;
            const messes = applyMessFilters(cityData[currentCity].messes);
            initializeMap(messes);
        }, 100);
    }
}

function initializeMap(messes) {
    if (!currentCity || !cityData[currentCity]) return;
    
    const mapContainer = document.getElementById('mess-map');
    
    // Clear existing map
    if (messMap) {
        messMap.remove();
    }
    
    // Initialize new map
    const cityCoords = cityData[currentCity].coordinates;
    messMap = L.map('mess-map').setView(cityCoords, 13);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(messMap);
    
    // Add markers for messes
    messes.forEach(mess => {
        const marker = L.marker(mess.coordinates).addTo(messMap);
        
        const popupContent = `
            <div class="map-popup">
                <h4>${mess.name}</h4>
                <div class="popup-rating">
                    <i class="fas fa-star"></i>
                    <span>${mess.rating}</span>
                </div>
                <p>${mess.description}</p>
                <div class="popup-actions">
                    <button onclick="showMessProfile('${mess.id}')" class="btn btn-primary btn-sm">
                        View Menu
                    </button>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
}

// In multi-page setup, this navigates to mess.html
function showMessProfile(messId) {
    navigateTo('mess-profile', { messId });
}

// Render mess profile into current page container
function renderMessProfile(messId) {
    let mess = findMessById(messId);
    // Fallback: search across all cities and switch context if needed
    if (!mess) {
        const found = findMessByIdAcrossCities(messId);
        if (found) {
            currentCity = found.cityKey;
            localStorage.setItem('messmate_city', currentCity);
            mess = found.mess;
            updateCityDisplay();
        }
    }
    if (!mess) {
        const container = document.getElementById('mess-profile-content');
        if (container) {
            container.innerHTML = '<p class="text-center">This mess could not be found.</p>';
        }
        return;
    }
    const profileContent = document.getElementById('mess-profile-content');
    if (!profileContent) return;
    profileContent.innerHTML = `
        <div class="mess-profile">
            <div class="mess-profile-header">
                <img src="${mess.image}" alt="${mess.name}" class="mess-profile-image">
                <div class="mess-profile-info">
                    <h1>${mess.name}</h1>
                    <div class="mess-rating">
                        <i class="fas fa-star"></i>
                        <span>${mess.rating}</span>
                    </div>
                    <p>${mess.description}</p>
                    <div class="mess-profile-actions">
                        <button onclick="writeReview('${mess.id}')" class="btn btn-outline">
                            <i class="fas fa-star"></i> Write Review
                        </button>
                        <button onclick="callMess('${mess.phone}')" class="btn btn-primary">
                            <i class="fas fa-phone"></i> Call Now
                        </button>
                    </div>
                </div>
            </div>
            <div class="mess-profile-content">
                <div class="mess-details-grid">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Address</strong>
                            <p>${mess.address}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Hours</strong>
                            <p>${mess.hours}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <strong>Phone</strong>
                            <p>${mess.phone}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-utensils"></i>
                        <div>
                            <strong>Cuisine</strong>
                            <p>${mess.cuisine.map(formatCuisine).join(', ')}</p>
                        </div>
                    </div>
                </div>
                <div class="menu-section">
                    <h2><i class="fas fa-utensils"></i> Our Menu</h2>
                    <div class="dishes-grid">
                        ${(Array.isArray(mess.dishes) ? mess.dishes : []).map(dish => `
                            <div class="dish-card ${!dish.available ? 'dish-unavailable' : ''}">
                                ${!dish.available ? '<div class="unavailable-overlay">Currently Unavailable</div>' : ''}
                                <img src="${dish.image}" alt="${dish.name}" class="dish-image">
                                <div class="dish-content">
                                    <div class="dish-header">
                                        <div>
                                            <h4 class="dish-name">${dish.name}</h4>
                                            ${dish.veg ? '<span class="veg-badge">Veg</span>' : '<span class="veg-badge" style="background-color: var(--error-color);">Non-Veg</span>'}
                                        </div>
                                        <span class="dish-price">₹${dish.price}</span>
                                    </div>
                                    <p class="dish-description">${dish.description}</p>
                                    <div class="dish-actions">
                                        ${dish.available ? `
                                            <div class="quantity-controls">
                                                <button class="quantity-btn" onclick="updateQuantity('${dish.id}', -1)">-</button>
                                                <span class="quantity-display" id="qty-${dish.id}">${getCartQuantity(dish.id)}</span>
                                                <button class="quantity-btn" onclick="updateQuantity('${dish.id}', 1)">+</button>
                                            </div>
                                            <button onclick="addToCart('${dish.id}', '${mess.id}')" class="add-to-cart-btn">
                                                <i class="fas fa-plus"></i> Add
                                            </button>
                                        ` : '<span class="text-muted">Not Available</span>'}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${!mess.dishes || mess.dishes.length === 0 ? '<p class="text-center text-muted">No dishes available.</p>' : ''}
                </div>
                <div class="reviews-section">
                    <div class="reviews-header">
                        <h2><i class="fas fa-star"></i> Reviews</h2>
                        <button onclick="writeReview('${mess.id}')" class="btn btn-outline">
                            <i class="fas fa-plus"></i> Write Review
                        </button>
                    </div>
                    <div class="reviews-list">
                        ${mess.reviews.map(review => `
                            <div class="review-card">
                                <div class="review-header">
                                    <span class="review-author">Customer</span>
                                    <span class="review-date">Recent</span>
                                </div>
                                <p>"${review}"</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Search for mess by id across all cities
function findMessByIdAcrossCities(messId) {
    for (const cityKey of Object.keys(cityData)) {
        const city = cityData[cityKey];
        const mess = city.messes.find(m => m.id === messId);
        if (mess) {
            return { cityKey, mess };
        }
    }
    return null;
}

function findMessById(messId) {
    if (!currentCity || !cityData[currentCity]) return null;
    
    return cityData[currentCity].messes.find(mess => mess.id === messId);
}

function findDishById(dishId) {
    if (!currentCity || !cityData[currentCity]) return null;
    
    for (const mess of cityData[currentCity].messes) {
        const dish = mess.dishes.find(d => d.id === dishId);
        if (dish) {
            return { dish, mess };
        }
    }
    return null;
}

function getCartQuantity(dishId) {
    const cartItem = cart.find(item => item.dishId === dishId);
    return cartItem ? cartItem.quantity : 0;
}

function updateQuantity(dishId, change) {
    const currentQty = getCartQuantity(dishId);
    const newQty = Math.max(0, currentQty + change);
    
    if (newQty === 0) {
        removeFromCart(dishId);
    } else {
        const cartItem = cart.find(item => item.dishId === dishId);
        if (cartItem) {
            cartItem.quantity = newQty;
        }
    }
    
    document.getElementById(`qty-${dishId}`).textContent = newQty;
    updateCartDisplay();
    saveCart();
}

function addToCart(dishId, messId) {
    if (!currentUser) {
        showLogin();
        showNotification('Please login to add items to cart', 'warning');
        return;
    }
    
    const result = findDishById(dishId);
    if (!result) return;
    
    const { dish, mess } = result;
    
    // Check if cart has items from different mess
    if (cart.length > 0 && cart[0].messId !== messId) {
        if (!confirm('Your cart contains items from another mess. Do you want to clear the cart and add this item?')) {
            return;
        }
        cart = [];
    }
    
    const existingItem = cart.find(item => item.dishId === dishId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            dishId: dishId,
            messId: messId,
            messName: mess.name,
            dishName: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCart();
    // If user is on cart page, refresh UI immediately
    if (document.getElementById('cart-page')) {
        loadCart();
    }
    showNotification(`${dish.name} added to cart!`, 'success');
    
    // Update quantity display
    document.getElementById(`qty-${dishId}`).textContent = getCartQuantity(dishId);
}

function removeFromCart(dishId) {
    cart = cart.filter(item => item.dishId !== dishId);
    updateCartDisplay();
    saveCart();
    
    // Update quantity display
    const qtyElement = document.getElementById(`qty-${dishId}`);
    if (qtyElement) {
        qtyElement.textContent = '0';
    }
}

function updateCartDisplay() {
    // Ensure count reflects persisted data
    let items = cart;
    try {
        const stored = JSON.parse(localStorage.getItem('messmate_cart') || '[]');
        if (Array.isArray(stored)) items = stored;
    } catch (e) { /* ignore */ }
    const cartCount = items.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    const cartBtn = document.getElementById('cart-btn');
    
    if (cartCount > 0) {
        if (cartCountElement) cartCountElement.textContent = cartCount;
        if (cartBtn) cartBtn.classList.remove('hidden');
    } else {
        if (cartBtn) cartBtn.classList.add('hidden');
    }
}

function saveCart() {
    localStorage.setItem('messmate_cart', JSON.stringify(cart));
}

function showCart() {
    loadCart();
    showPage('cart');
}

function loadCart() {
    const cartContent = document.getElementById('cart-content');
    if (!cartContent) return;
    // Rehydrate cart from localStorage to avoid empty in-memory state after navigation
    try {
        const stored = localStorage.getItem('messmate_cart');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
                cart = parsed;
            }
        }
    } catch (e) { /* ignore */ }
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to get started!</p>
                <button onclick="showPage('browse')" class="btn btn-primary">
                    <i class="fas fa-utensils"></i> Browse Messes
                </button>
            </div>
        `;
        return;
    }
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 30;
    const total = subtotal + deliveryFee;
    
    cartContent.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.dishName}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.dishName}</h4>
                        <p class="cart-item-mess">${item.messName}</p>
                        <span class="cart-item-price">₹${item.price}</span>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity('${item.dishId}', -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity('${item.dishId}', 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.dishId}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('')}
        </div>
        
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${subtotal}</span>
            </div>
            <div class="summary-row">
                <span>Delivery Fee</span>
                <span>₹${deliveryFee}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>₹${total}</span>
            </div>
            <button onclick="proceedToCheckout()" class="btn btn-primary btn-block">
                <i class="fas fa-credit-card"></i> Proceed to Checkout
            </button>
        </div>
    `;
}

function updateCartQuantity(dishId, change) {
    const cartItem = cart.find(item => item.dishId === dishId);
    if (!cartItem) return;
    
    cartItem.quantity = Math.max(1, cartItem.quantity + change);
    
    updateCartDisplay();
    saveCart();
    loadCart();
}

function proceedToCheckout() {
    if (!currentUser) {
        showLogin();
        showNotification('Please login to proceed with checkout', 'warning');
        return;
    }
    
    showCheckoutModal();
}

function showCheckoutModal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 30;
    const total = subtotal + deliveryFee;
    
    const checkoutContent = document.getElementById('checkout-content');
    checkoutContent.innerHTML = `
        <div class="checkout-section">
            <h3><i class="fas fa-truck"></i> Delivery Options</h3>
            <div class="delivery-options">
                <div class="delivery-option selected" data-option="delivery" onclick="selectDeliveryOption('delivery')">
                    <i class="fas fa-truck"></i>
                    <h4>Home Delivery</h4>
                    <p>30-45 mins</p>
                </div>
                <div class="delivery-option" data-option="pickup" onclick="selectDeliveryOption('pickup')">
                    <i class="fas fa-store"></i>
                    <h4>Pickup</h4>
                    <p>15-20 mins</p>
                </div>
            </div>
        </div>
        
        <div class="checkout-section">
            <h3><i class="fas fa-map-marker-alt"></i> Delivery Address</h3>
            <div class="form-group">
                <textarea id="delivery-address" placeholder="Enter your delivery address" required>${currentUser.address || ''}</textarea>
            </div>
        </div>
        
        <div class="checkout-section">
            <h3><i class="fas fa-credit-card"></i> Payment Method</h3>
            <div class="delivery-options">
                <div class="delivery-option selected" data-pay="cod" onclick="selectPayment('cod')">
                    <i class="fas fa-money-bill"></i>
                    <h4>Cash on Delivery</h4>
                    <p>Pay at arrival</p>
                </div>
                <div class="delivery-option" data-pay="card" onclick="selectPayment('card')">
                    <i class="fas fa-credit-card"></i>
                    <h4>Card / UPI</h4>
                    <p>Dummy gateway</p>
                </div>
            </div>
        </div>

        <div class="checkout-section">
            <h3><i class="fas fa-receipt"></i> Order Summary</h3>
            <div class="order-summary">
                ${cart.map(item => `
                    <div class="summary-item">
                        <span>${item.dishName} x ${item.quantity}</span>
                        <span>₹${item.price * item.quantity}</span>
                    </div>
                `).join('')}
                <div class="summary-item">
                    <span>Delivery Fee</span>
                    <span>₹${deliveryFee}</span>
                </div>
                <div class="summary-item">
                    <strong>Total</strong>
                    <strong>₹${total}</strong>
                </div>
            </div>
        </div>
        
        <button onclick="confirmPayment(${total})" class="btn btn-primary btn-block">
            <i class="fas fa-check"></i> Pay & Place Order (₹${total})
        </button>
    `;
    
    document.getElementById('checkout-modal').classList.add('active');
}

function selectDeliveryOption(option) {
    const groups = document.querySelectorAll('.delivery-option');
    groups.forEach(opt => {
        if (opt.dataset.option) opt.classList.remove('selected');
    });
    const target = [...groups].find(el => el.dataset.option === option);
    if (target) target.classList.add('selected');
}

function selectPayment(method) {
    const groups = document.querySelectorAll('.delivery-option');
    groups.forEach(opt => {
        if (opt.dataset.pay) opt.classList.remove('selected');
    });
    const target = [...groups].find(el => el.dataset.pay === method);
    if (target) target.classList.add('selected');
    localStorage.setItem('messmate_payment_method', method);
}

function confirmPayment(amount) {
    const method = localStorage.getItem('messmate_payment_method') || 'cod';
    if (method === 'card') {
        // Dummy payment prompt
        const ok = confirm(`Proceed with dummy payment of ₹${amount}?`);
        if (!ok) return;
    }
    placeOrder();
}

function placeOrder() {
    const deliveryAddress = document.getElementById('delivery-address').value;
    if (!deliveryAddress.trim()) {
        showNotification('Please enter delivery address', 'error');
        return;
    }
    
    const order = {
        id: 'ORD' + Date.now(),
        userId: currentUser.id,
        messId: cart[0].messId,
        messName: cart[0].messName,
        items: [...cart],
        subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        deliveryFee: 30,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 30,
        address: deliveryAddress,
        status: 'pending',
        orderDate: new Date().toISOString(),
        estimatedTime: '30-45 mins'
    };
    
    // Save order
    const orders = JSON.parse(localStorage.getItem('messmate_orders') || '[]');
    orders.push(order);
    localStorage.setItem('messmate_orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    saveCart();
    
    // Close modal
    closeModal('checkout-modal');
    
    // Show success message
    showNotification('Order placed successfully! You will receive updates soon.', 'success');
    
    // Redirect to orders page
    setTimeout(() => {
        showPage('orders');
    }, 2000);
}

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('messmate_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser?.id);
    
    const ordersContent = document.getElementById('orders-content');
    
    if (userOrders.length === 0) {
        ordersContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-receipt"></i>
                <h3>No orders yet</h3>
                <p>Start ordering some delicious food!</p>
                <button onclick="showPage('browse')" class="btn btn-primary">
                    <i class="fas fa-utensils"></i> Browse Messes
                </button>
            </div>
        `;
        return;
    }
    
    ordersContent.innerHTML = userOrders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <span class="order-id">#${order.id}</span>
                    <span class="order-date">${new Date(order.orderDate).toLocaleDateString()}</span>
                </div>
                <span class="order-status status-${order.status}">${order.status}</span>
            </div>
            <div class="order-items">
                <h4>${order.messName}</h4>
                ${order.items.map(item => `
                    <div class="order-item">
                        <div class="item-details">
                            <img src="${item.image}" alt="${item.dishName}" class="item-image">
                            <div class="item-info">
                                <h4>${item.dishName}</h4>
                                <p>Quantity: ${item.quantity}</p>
                            </div>
                        </div>
                        <span class="item-price">₹${item.price * item.quantity}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Total: ₹${order.total}</span>
            </div>
        </div>
    `).join('');
}

function filterOrders(status) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display orders
    const orders = JSON.parse(localStorage.getItem('messmate_orders') || '[]');
    let userOrders = orders.filter(order => order.userId === currentUser?.id);
    
    if (status !== 'all') {
        if (status === 'active') {
            userOrders = userOrders.filter(order => ['pending', 'confirmed', 'preparing', 'ready'].includes(order.status));
        } else {
            userOrders = userOrders.filter(order => order.status === status);
        }
    }
    
    // Update display (reuse loadOrders logic)
    loadOrders();
}

function loadProfile() {
    if (!currentUser) {
        showLogin();
        return;
    }
    
    const profileInfo = document.getElementById('profile-info');
    profileInfo.innerHTML = `
        <h2>${currentUser.name}</h2>
        <p><i class="fas fa-envelope"></i> ${currentUser.email}</p>
        <p><i class="fas fa-phone"></i> ${currentUser.phone}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${currentUser.address}</p>
        ${currentUser.userType === 'mess_owner' ? `
            <p><i class="fas fa-store"></i> ${currentUser.messName}</p>
            <p><i class="fas fa-clock"></i> ${currentUser.operatingHours}</p>
        ` : ''}
    `;
}

function editProfile() {
    // Implementation for profile editing
    showNotification('Profile editing feature coming soon!', 'info');
}

function loadDashboard() {
    if (!currentUser || currentUser.userType !== 'mess_owner') {
        showPage('home');
        return;
    }
    
    // Load dashboard statistics
    const orders = JSON.parse(localStorage.getItem('messmate_orders') || '[]');
    const messOrders = orders.filter(order => order.messName === currentUser.messName);
    
    const totalOrders = messOrders.length;
    const totalRevenue = messOrders.reduce((sum, order) => sum + order.total, 0);
    const totalDishes = getCurrentUserDishes().length;
    const avgRating = 4.2; // Mock rating
    
    document.getElementById('total-orders-stat').textContent = totalOrders;
    document.getElementById('total-revenue-stat').textContent = `₹${totalRevenue}`;
    document.getElementById('total-dishes-stat').textContent = totalDishes;
    document.getElementById('avg-rating-stat').textContent = avgRating.toFixed(1);
    
    // Load owner dishes
    loadOwnerDishes();
    
    // Load owner orders
    loadOwnerOrders();
}

// Create or attach the current owner's mess into current city data and persist
function createOrUpdateOwnerMess(user) {
    if (!currentCity || !cityData[currentCity]) return;
    const city = cityData[currentCity];
    const messName = user.messName || 'My Mess';
    let mess = city.messes.find(m => m.name === messName);
    if (!mess) {
        mess = {
            id: `${currentCity}_owner_${Date.now()}`,
            name: messName,
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
            rating: 4.5,
            cuisine: (user.messCuisines || 'maharashtrian').split(',').map(s => s.trim().toLowerCase()).filter(Boolean),
            type: 'veg',
            address: user.address || `${city.name}, Maharashtra`,
            phone: user.phone || '+91',
            hours: user.operatingHours || '7:00 AM - 10:00 PM',
            featured: false,
            coordinates: city.coordinates,
            description: 'Home-style meals by owner',
            reviews: [],
            dishes: []
        };
        city.messes.push(mess);
    } else {
        mess.address = user.address || mess.address;
        mess.phone = user.phone || mess.phone;
        mess.hours = user.operatingHours || mess.hours;
        mess.cuisine = (user.messCuisines || mess.cuisine.join(',')).split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    }
    localStorage.setItem('messmate_city_data', JSON.stringify(cityData));
}

function getCurrentUserDishes() {
    if (!currentUser || !currentCity || !cityData[currentCity]) return [];
    
    const mess = cityData[currentCity].messes.find(m => m.name === currentUser.messName);
    return mess ? mess.dishes : [];
}

function loadOwnerDishes() {
    const dishes = getCurrentUserDishes();
    const ownerDishes = document.getElementById('owner-dishes');
    
    ownerDishes.innerHTML = dishes.map(dish => `
        <div class="owner-dish-card">
            <img src="${dish.image}" alt="${dish.name}" class="dish-card-image">
            <div class="dish-card-content">
                <div class="dish-card-header">
                    <div>
                        <h4>${dish.name}</h4>
                        <span class="dish-price">₹${dish.price}</span>
                    </div>
                    <div class="dish-card-actions">
                        <button class="action-btn edit-btn" onclick="editDish('${dish.id}')" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn toggle-btn" onclick="toggleDishAvailability('${dish.id}')" title="Toggle Availability">
                            <i class="fas fa-${dish.available ? 'eye-slash' : 'eye'}"></i>
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteDish('${dish.id}')" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <p>${dish.description}</p>
                <div class="dish-tags">
                    ${dish.veg ? '<span class="veg-badge">Veg</span>' : '<span class="veg-badge" style="background-color: var(--error-color);">Non-Veg</span>'}
                    <span class="cuisine-tag">${formatCuisine(dish.cuisine)}</span>
                    ${!dish.available ? '<span class="unavailable-badge">Unavailable</span>' : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function loadOwnerOrders() {
    const orders = JSON.parse(localStorage.getItem('messmate_orders') || '[]');
    const messOrders = orders.filter(order => order.messName === currentUser.messName);
    
    const ownerOrders = document.getElementById('owner-orders');
    
    if (messOrders.length === 0) {
        ownerOrders.innerHTML = '<p class="text-center text-muted">No orders yet</p>';
        return;
    }
    
    ownerOrders.innerHTML = messOrders.slice(0, 5).map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <span class="order-id">#${order.id}</span>
                    <span class="order-date">${new Date(order.orderDate).toLocaleDateString()}</span>
                </div>
                <span class="order-status status-${order.status}">${order.status}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.dishName} x ${item.quantity}</span>
                        <span>₹${item.price * item.quantity}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Total: ₹${order.total}</span>
            </div>
        </div>
    `).join('');
}

function showAddDishModal() {
    document.getElementById('dish-modal-title').innerHTML = '<i class="fas fa-plus"></i> Add New Dish';
    document.getElementById('add-dish-form').reset();
    document.getElementById('edit-dish-id').value = '';
    document.getElementById('add-dish-modal').classList.add('active');
}

function editDish(dishId) {
    const dishes = getCurrentUserDishes();
    const dish = dishes.find(d => d.id === dishId);
    if (!dish) return;
    
    document.getElementById('dish-modal-title').innerHTML = '<i class="fas fa-edit"></i> Edit Dish';
    document.getElementById('edit-dish-id').value = dishId;
    document.getElementById('dish-name').value = dish.name;
    document.getElementById('dish-price').value = dish.price;
    document.getElementById('dish-description').value = dish.description;
    document.getElementById('dish-image').value = dish.image;
    document.getElementById('dish-veg').checked = dish.veg;
    document.getElementById('dish-cuisine').value = dish.cuisine;
    document.getElementById('dish-available').checked = dish.available;
    
    document.getElementById('add-dish-modal').classList.add('active');
}

function handleAddDish(e) {
    e.preventDefault();
    
    if (!currentUser || currentUser.userType !== 'mess_owner') return;
    
    const dishId = document.getElementById('edit-dish-id').value;
    const dishData = {
        id: dishId || 'dish_' + Date.now(),
        name: document.getElementById('dish-name').value,
        price: parseInt(document.getElementById('dish-price').value),
        description: document.getElementById('dish-description').value,
        image: document.getElementById('dish-image').value,
        veg: document.getElementById('dish-veg').checked,
        cuisine: document.getElementById('dish-cuisine').value,
        available: document.getElementById('dish-available').checked
    };
    
    // Find the mess and update dishes
    if (currentCity && cityData[currentCity]) {
        const mess = cityData[currentCity].messes.find(m => m.name === currentUser.messName);
        if (mess) {
            if (dishId) {
                // Edit existing dish
                const dishIndex = mess.dishes.findIndex(d => d.id === dishId);
                if (dishIndex !== -1) {
                    mess.dishes[dishIndex] = dishData;
                }
            } else {
                // Add new dish
                mess.dishes.push(dishData);
            }
            
            // Save to localStorage
            localStorage.setItem('messmate_city_data', JSON.stringify(cityData));
            
            closeModal('add-dish-modal');
            loadOwnerDishes();
            showNotification(dishId ? 'Dish updated successfully!' : 'Dish added successfully!', 'success');
        }
    }
}

function toggleDishAvailability(dishId) {
    if (!currentCity || !cityData[currentCity]) return;
    
    const mess = cityData[currentCity].messes.find(m => m.name === currentUser.messName);
    if (mess) {
        const dish = mess.dishes.find(d => d.id === dishId);
        if (dish) {
            dish.available = !dish.available;
            localStorage.setItem('messmate_city_data', JSON.stringify(cityData));
            loadOwnerDishes();
            showNotification(`Dish ${dish.available ? 'enabled' : 'disabled'} successfully!`, 'success');
        }
    }
}

function deleteDish(dishId) {
    if (!confirm('Are you sure you want to delete this dish?')) return;
    
    if (!currentCity || !cityData[currentCity]) return;
    
    const mess = cityData[currentCity].messes.find(m => m.name === currentUser.messName);
    if (mess) {
        mess.dishes = mess.dishes.filter(d => d.id !== dishId);
        localStorage.setItem('messmate_city_data', JSON.stringify(cityData));
        loadOwnerDishes();
        showNotification('Dish deleted successfully!', 'success');
    }
}

function writeReview(messId) {
    if (!currentUser) {
        showLogin();
        showNotification('Please login to write a review', 'warning');
        return;
    }
    
    document.getElementById('review-mess-id').value = messId;
    document.getElementById('review-modal').classList.add('active');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    
    const messId = document.getElementById('review-mess-id').value;
    const rating = document.getElementById('rating-value').value;
    const comment = document.getElementById('review-comment').value;
    
    if (!rating) {
        showNotification('Please select a rating', 'error');
        return;
    }
    
    // Save review (in a real app, this would go to a database)
    const reviews = JSON.parse(localStorage.getItem('messmate_reviews') || '[]');
    reviews.push({
        messId,
        userId: currentUser.id,
        userName: currentUser.name,
        rating: parseInt(rating),
        comment,
        date: new Date().toISOString()
    });
    localStorage.setItem('messmate_reviews', JSON.stringify(reviews));
    
    closeModal('review-modal');
    showNotification('Review submitted successfully!', 'success');
    
    // Reset form
    document.getElementById('review-form').reset();
    document.getElementById('rating-value').value = '';
    document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
}

function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            document.getElementById('rating-value').value = rating;
            
            stars.forEach((s, index) => {
                s.classList.toggle('active', index < rating);
            });
        });
        
        star.addEventListener('mouseover', function() {
            const rating = this.dataset.rating;
            
            stars.forEach((s, index) => {
                s.style.color = index < rating ? 'var(--accent-color)' : 'var(--border-color)';
            });
        });
    });
    
    document.querySelector('.star-rating').addEventListener('mouseleave', function() {
        const currentRating = document.getElementById('rating-value').value;
        
        stars.forEach((s, index) => {
            s.style.color = index < currentRating ? 'var(--accent-color)' : 'var(--border-color)';
        });
    });
}

function callMess(phone) {
    window.open(`tel:${phone}`);
}

const debouncedGlobalSearch = debounce(function(value){
    const query = (value || '').toLowerCase();
    if (query.length < 2) {
        hideSearchSuggestions();
        return;
    }
    
    const suggestions = [];
    
    if (currentCity && cityData[currentCity]) {
        // Search messes
        cityData[currentCity].messes.forEach(mess => {
            if (mess.name.toLowerCase().includes(query)) {
                suggestions.push({
                    type: 'mess',
                    id: mess.id,
                    name: mess.name,
                    subtitle: mess.description
                });
            }
            
            // Search dishes
            mess.dishes.forEach(dish => {
                if (dish.name.toLowerCase().includes(query)) {
                    suggestions.push({
                        type: 'dish',
                        id: dish.id,
                        messId: mess.id,
                        name: dish.name,
                        subtitle: `${mess.name} - ₹${dish.price}`
                    });
                }
            });
        });
    }
    
    showSearchSuggestions(suggestions.slice(0, 5));
}, 250);

function handleGlobalSearch(e) {
    debouncedGlobalSearch(e.target.value);
}

function showSearchSuggestions(suggestions = []) {
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    if (suggestions.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    suggestionsContainer.innerHTML = suggestions.map(suggestion => `
        <div class="suggestion-item" onclick="selectSuggestion('${suggestion.type}', '${suggestion.id}', '${suggestion.messId || ''}')">
            <div class="suggestion-content">
                <h4>${suggestion.name}</h4>
                <p>${suggestion.subtitle}</p>
            </div>
            <i class="fas fa-${suggestion.type === 'mess' ? 'store' : 'utensils'}"></i>
        </div>
    `).join('');
    
    suggestionsContainer.style.display = 'block';
}

function hideSearchSuggestions() {
    setTimeout(() => {
        document.getElementById('search-suggestions').style.display = 'none';
    }, 200);
}

function selectSuggestion(type, id, messId) {
    if (type === 'mess') {
        showMessProfile(id);
    } else if (type === 'dish') {
        showMessProfile(messId);
    }
    
    document.getElementById('global-search').value = '';
    hideSearchSuggestions();
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    
    body.className = newTheme;
    localStorage.setItem('messmate_theme', newTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('#theme-toggle i');
    const isDark = document.body.classList.contains('dark-theme');
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleMapView() {
    const currentView = document.getElementById('map-view').classList.contains('active') ? 'map' : 'list';
    toggleView(currentView === 'map' ? 'list' : 'map');
}

function showLogin() {
    document.getElementById('login-modal').classList.add('active');
}

function showSignup() {
    document.getElementById('signup-modal').classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('active');
    // Ensure it's fully hidden even if CSS class fails
    modal.style.display = 'none';
}

function toggleMessOwnerFields() {
    const userType = document.getElementById('user-type').value;
    const messOwnerFields = document.getElementById('mess-owner-fields');
    
    if (userType === 'mess_owner') {
        messOwnerFields.classList.remove('hidden');
        // Make mess owner fields required
        document.getElementById('mess-name').required = true;
        document.getElementById('operating-hours').required = true;
        document.getElementById('mess-cuisines').required = true;
    } else {
        messOwnerFields.classList.add('hidden');
        // Remove required attribute
        document.getElementById('mess-name').required = false;
        document.getElementById('operating-hours').required = false;
        document.getElementById('mess-cuisines').required = false;
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation (in a real app, this would be server-side)
    const users = JSON.parse(localStorage.getItem('messmate_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('messmate_user', JSON.stringify(user));
        updateUserInterface();
        closeModal('login-modal');
        showNotification('Login successful!', 'success');
        
        // Redirect after login
        navigateTo(user.userType === 'mess_owner' ? 'mess-owner-dashboard' : 'browse');
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    
    const userData = {
        id: 'user_' + Date.now(),
        userType: document.getElementById('user-type').value,
        name: document.getElementById('signup-name').value,
        email: document.getElementById('signup-email').value,
        password: document.getElementById('signup-password').value,
        phone: document.getElementById('signup-phone').value,
        address: document.getElementById('signup-address').value
    };
    
    // Add mess owner specific fields
    if (userData.userType === 'mess_owner') {
        userData.messName = document.getElementById('mess-name').value;
        userData.operatingHours = document.getElementById('operating-hours').value;
        userData.cuisines = document.getElementById('mess-cuisines').value.split(',').map(c => c.trim());
        // Ensure owner mess is present in city data and persisted
        createOrUpdateOwnerMess(userData);
    }
    
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('messmate_users') || '[]');
    if (users.find(u => u.email === userData.email)) {
        showNotification('Email already exists', 'error');
        return;
    }
    
    // Save user
    users.push(userData);
    localStorage.setItem('messmate_users', JSON.stringify(users));
    
    // Auto login
    currentUser = userData;
    localStorage.setItem('messmate_user', JSON.stringify(userData));
    updateUserInterface();
    closeModal('signup-modal');
    showNotification('Account created successfully!', 'success');
    
    // Redirect after signup
    if (userData.userType === 'mess_owner') {
        navigateTo('mess-owner-dashboard');
    } else {
        navigateTo('browse');
    }
}

function updateUserInterface() {
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const userMenu = document.getElementById('user-menu');
    const cartBtn = document.getElementById('cart-btn');
    
    if (currentUser) {
        if (authButtons) authButtons.classList.add('hidden');
        if (userInfo) userInfo.classList.remove('hidden');
        if (userName) userName.textContent = currentUser.name || currentUser.email || 'User';
        if (userMenu) userMenu.classList.remove('hidden');
        if (currentUser.userType === 'customer') {
            updateCartDisplay();
        }
    } else {
        if (authButtons) authButtons.classList.remove('hidden');
        if (userInfo) userInfo.classList.add('hidden');
        if (userMenu) userMenu.classList.add('hidden');
        if (cartBtn) cartBtn.classList.add('hidden');
    }
}

function logout() {
    currentUser = null;
    cart = [];
    localStorage.removeItem('messmate_user');
    localStorage.removeItem('messmate_cart');
    updateUserInterface();
    updateCartDisplay();
    showPage('home');
    showNotification('Logged out successfully!', 'success');
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            container.removeChild(notification);
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        case 'info': return 'info-circle';
        default: return 'info-circle';
    }
}

function formatCuisine(cuisine) {
    return cuisine.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for new elements
const additionalCSS = `
.suggestion-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.suggestion-item:hover {
    background-color: var(--surface-hover);
}

.suggestion-item:last-child {
    border-bottom: none;
}

.suggestion-content h4 {
    margin-bottom: 0.25rem;
    font-size: 0.95rem;
}

.suggestion-content p {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin: 0;
}

.map-popup {
    text-align: center;
    min-width: 200px;
}

.map-popup h4 {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.popup-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent-color);
    font-weight: 600;
}

.popup-actions {
    margin-top: 1rem;
}

.unavailable-badge {
    background-color: var(--error-color);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
}

.dish-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .search-container {
        display: none;
    }
    
    .nav-left {
        flex-direction: column;
        gap: 1rem;
    }
    
    .location-selector {
        order: 2;
    }
    
    .cities-grid {
        grid-template-columns: 1fr;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 1rem;
    }
    
    .delivery-options {
        flex-direction: column;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
}
`;

// Add the additional CSS to the page
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);