const products = [
  {
    id: 1,
    title: 'Custom Carton Boxes',
    desc: 'Create a clean brand presentation with this custom carton box.',
    price: 'Starting at $10.44/unit',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53VGKKzQhBVOzKV3kb-YEC0cB7V_C0_LX4w&s',
  },
  {
    id: 2,
    title: 'Custom Boxes',
    desc: 'A stylish and strong corrugated cardboard box.',
    price: 'Starting at $14.44/unit',
    img: 'https://cdn.ucanpack.com/media/catalog/product/cache/e1ff74ec731945207e192c94d97c8052/a/b/ab_shippingbox_square_23sept.jpg',
  },
  {
    id: 3,
    title: 'Custom Poly Mailers',
    desc: 'Fully custom high quality poly mailers.',
    price: 'Starting at $8.44/unit',
    img: 'https://media.pakfactory.com/catalog/product/cache/c7a30112d165d3b39569235f6bc121aa/e/2/e21-5.jpg',
  },
  {
    id: 4,
    title: 'Custom Tape',
    desc: 'High quality custom tape to seal your shipping boxes.',
    price: 'Starting at $12.44/unit',
    img: 'https://www.datocms-assets.com/61470/1713215603-3dtape.png?auto=format&fill=blur&fit=fill&h=500&q=75&w=500',
  },
  {
    id: 5,
    title: 'Custom Stickers',
    desc: 'Add personality to your package with custom stickers.',
    price: 'Starting at $10.44/unit',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBYFRlT74BR81fG7sYB6alNbI3n4wVZ5X1w&s',
  },
  {
    id: 6,
    title: 'Custom Tissue Paper',
    desc: 'The perfect addition to branding your package.',
    price: 'Starting at $5.44/unit',
    img: 'https://d2ngzhadqk6uhe.cloudfront.net/samedayru/images/products_gallery_images/tissue-paper-rush-print_1731644718074.jpg',
  },
];

const Products = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-2xl font-semibold">Products you can customize</h2>
          <button className="mt-4 md:mt-0 px-5 py-2 rounded-full bg-blue-900 text-white text-sm">
            BROWSE ALL PRODUCTS
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain mb-6"
              />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <p className="text-sm font-medium text-gray-900">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
