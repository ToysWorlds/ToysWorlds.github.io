import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    { name: "LEGO", description: "Build your imagination" },
    { name: "Barbie", description: "Dream big with Barbie" },
    { name: "Hot Wheels", description: "Race into action" },
    { name: "Marvel", description: "Superhero adventures await" },
    { name: "Disney", description: "Where magic lives" },
    { name: "Hasbro", description: "Bringing families together" },
    { name: "Mattel", description: "Play with purpose" },
    { name: "Transformers", description: "Robots in disguise" },
    { name: "Star Wars", description: "The Force is strong" },
    { name: "Pokemon", description: "Gotta catch 'em all" },
    { name: "Fisher-Price", description: "Learning through play" },
    { name: "Nerf", description: "It's Nerf or nothing" },
  ];

  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black mb-2">Shop by Brand</h1>
          <p className="text-muted-foreground">Explore toys from your favorite brands</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to="/categories"
              className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all group"
            >
              <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Brands;
