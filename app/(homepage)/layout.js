import {
  Navbar,
  Header,
  Footer,
  CallToOrder,
  Newsletter,
} from "@/components/common";

export default function HomePageLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <CallToOrder />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
}
