import { PromoBar } from "./PromoBar";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBar />
      <Header />
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
