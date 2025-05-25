export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}

export type Category = 'hot' | 'iced' | 'pastry' | 'specialty';

export const categories: { id: Category; name: string }[] = [
  { id: 'hot', name: 'Hot Coffee' },
  { id: 'iced', name: 'Iced Coffee' },
  { id: 'specialty', name: 'Specialty Drinks' },
  { id: 'pastry', name: 'Pastries & Snacks' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich and robust single-shot espresso with perfect crema.',
    price: 3.5,
    image: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'hot',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and silky microfoam.',
    price: 4.75,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'hot',
  },
  {
    id: 'latte',
    name: 'Caffè Latte',
    description: 'Smooth espresso with steamed milk and a light layer of foam.',
    price: 4.95,
    image: 'https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'hot',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Espresso with rich chocolate, steamed milk, and whipped cream.',
    price: 5.25,
    image: 'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'hot',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Slow-steeped for 24 hours, smooth and less acidic than regular iced coffee.',
    price: 4.95,
    image: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'iced',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Our signature espresso over ice with cold milk and a hint of sweetness.',
    price: 5.25,
    image: 'https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'iced',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    description: 'Chilled espresso with chocolate, milk, and whipped cream over ice.',
    price: 5.50,
    image: 'https://images.pexels.com/photos/2728489/pexels-photo-2728489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'iced',
  },
  {
    id: 'frappe',
    name: 'Caramel Frappé',
    description: 'Blended coffee with ice, milk, caramel, topped with whipped cream.',
    price: 5.75,
    image: 'https://images.pexels.com/photos/2656889/pexels-photo-2656889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'iced',
  },
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Vanilla gelato "drowned" with a shot of hot espresso.',
    price: 6.25,
    image: 'https://images.pexels.com/photos/10710182/pexels-photo-10710182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
  },
  {
    id: 'chai-latte',
    name: 'Chai Latte',
    description: 'Spiced black tea with steamed milk and a touch of honey.',
    price: 4.95,
    image: 'https://images.pexels.com/photos/5946351/pexels-photo-5946351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha whisked with steamed milk.',
    price: 5.50,
    image: 'https://images.pexels.com/photos/5946629/pexels-photo-5946629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
  },
  {
    id: 'hot-chocolate',
    name: 'Belgian Hot Chocolate',
    description: 'Real Belgian chocolate melted into steamed milk with whipped cream.',
    price: 5.25,
    image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Flaky, buttery layers in the authentic French tradition.',
    price: 3.95,
    image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pastry',
  },
  {
    id: 'chocolate-croissant',
    name: 'Pain au Chocolat',
    description: 'Buttery croissant filled with rich dark chocolate.',
    price: 4.25,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pastry',
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    description: 'Swirled with cinnamon sugar and topped with cream cheese frosting.',
    price: 4.50,
    image: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pastry',
  },
  {
    id: 'blueberry-muffin',
    name: 'Blueberry Muffin',
    description: 'Bursting with fresh blueberries and topped with turbinado sugar.',
    price: 3.95,
    image: 'https://images.pexels.com/photos/65525/cake-pie-bake-bakery-pies-65525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pastry',
  },
];