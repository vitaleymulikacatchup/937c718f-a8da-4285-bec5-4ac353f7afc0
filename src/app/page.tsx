"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BookOpen, Coffee, Cookie, Flame, Globe, Heart, Home, MapPin, Menu, MessageSquare, Settings, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Freshly Roasted Coffee Daily"
          description="Experience the perfect blend of quality and comfort at Brew & Bean. Our artisanal coffee is crafted with passion and served in a cozy atmosphere that feels like home."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Order Online", href: "contact" },
            { text: "View Menu", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Founded in 2015, Brew & Bean has been serving the community with exceptional coffee and warm hospitality. We source our beans directly from sustainable farms and roast them to perfection."
          tag="Since 2015"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Ethically Sourced",
              description: "Direct trade relationships with coffee farmers worldwide",
              icon: Globe
            },
            {
              title: "Fresh Roasted",
              description: "Beans roasted daily in small batches for optimal flavor",
              icon: Flame
            },
            {
              title: "Community Focused",
              description: "Supporting local events and bringing people together",
              icon: Users
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7487360/pexels-photo-7487360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Barista brewing coffee with care"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="What Makes Us Special"
          description="Discover the unique features that set Brew & Bean apart from other coffee shops"
          tag="Our Expertise"
          tagIcon={Star}
          features={[
            {
              title: "Expert Baristas",
              description: "Our skilled baristas are trained in the art of coffee making, ensuring every cup is perfect",
              icon: Award
            },
            {
              title: "Premium Equipment",
              description: "State-of-the-art espresso machines and brewing equipment for consistent quality",
              icon: Settings
            },
            {
              title: "Cozy Atmosphere",
              description: "Comfortable seating, free WiFi, and the perfect ambiance for work or relaxation",
              icon: Home
            },
            {
              title: "Fresh Pastries",
              description: "Daily baked goods and light meals made with local ingredients",
              icon: Cookie
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Menu"
          description="Explore our carefully crafted selection of coffee drinks and fresh pastries"
          tag="Popular Items"
          tagIcon={Menu}
          products={[
            {
              id: "1",
              brand: "Brew & Bean",
              name: "Classic Americano",
              price: "$4.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/4195602/pexels-photo-4195602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic Americano coffee"
            },
            {
              id: "2",
              brand: "Brew & Bean",
              name: "Cappuccino Perfection",
              price: "$5.25",
              rating: 5,
              reviewCount: "3.4k",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with foam art"
            },
            {
              id: "3",
              brand: "Brew & Bean",
              name: "Signature Mocha",
              price: "$5.75",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/798728/pexels-photo-798728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rich chocolate mocha"
            },
            {
              id: "4",
              brand: "Brew & Bean",
              name: "Iced Frappuccino",
              price: "$6.25",
              rating: 4,
              reviewCount: "2.9k",
              imageSrc: "https://images.pexels.com/photos/1004040/pexels-photo-1004040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Iced blended frappuccino"
            },
            {
              id: "5",
              brand: "Brew & Bean",
              name: "Fresh Croissant",
              price: "$3.50",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/32710321/pexels-photo-32710321.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Buttery fresh croissant"
            },
            {
              id: "6",
              brand: "Brew & Bean",
              name: "Blueberry Muffin",
              price: "$4.00",
              rating: 4,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/8426690/pexels-photo-8426690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh blueberry muffin"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from the coffee lovers who make Brew & Bean their daily destination"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/712436/pexels-photo-712436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson smiling with coffee"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Software Developer",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Chen enjoying coffee"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Freelance Writer",
              company: "Independent",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez with laptop and coffee"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Local Restaurant",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/926390/pexels-photo-926390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim in business meeting with coffee"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Teacher",
              company: "Elementary School",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34400300/pexels-photo-34400300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson enjoying morning coffee"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Coffee Lovers"
          description="Join thousands of satisfied customers who choose quality coffee every day"
          tag="Community"
          tagIcon={Users}
          logos={[
            "https://images.pexels.com/photos/31072621/pexels-photo-31072621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31705170/pexels-photo-31705170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/28272104/pexels-photo-28272104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4571356/pexels-photo-4571356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Coffee Culture Blog"
          description="Stay updated with brewing tips, coffee news, and behind-the-scenes stories"
          tag="Latest Posts"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Brewing Tips",
              title: "Perfect Pour-Over Technique",
              excerpt: "Master the art of pour-over coffee with our step-by-step guide to brewing the perfect cup at home",
              imageSrc: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee brewing guide",
              authorName: "James Wilson",
              authorAvatar: "https://images.pexels.com/photos/4816435/pexels-photo-4816435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Seasonal Menu",
              title: "Fall Flavors Have Arrived",
              excerpt: "Discover our new autumn-inspired drinks featuring pumpkin spice, apple cinnamon, and warm spices",
              imageSrc: "https://images.pexels.com/photos/12123464/pexels-photo-12123464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Seasonal coffee drinks",
              authorName: "Maria Santos",
              authorAvatar: "https://images.pexels.com/photos/2422287/pexels-photo-2422287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Coffee Origins",
              title: "Journey to Ethiopian Highlands",
              excerpt: "Follow our recent trip to Ethiopia where we sourced our premium single-origin beans directly from farmers",
              imageSrc: "https://images.pexels.com/photos/33220154/pexels-photo-33220154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ethiopian coffee farm",
              authorName: "James Wilson",
              authorAvatar: "https://images.pexels.com/photos/4816435/pexels-photo-4816435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Come Experience Brew & Bean"
          description="Join our coffee community and stay updated with special offers, new menu items, and exclusive events happening at our cafe."
          tagIcon={MapPin}
          inputPlaceholder="Enter your email"
          buttonText="Join Community"
          termsText="By signing up, you'll receive our newsletter with special offers and coffee updates. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/3352765/pexels-photo-3352765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Brew & Bean coffee shop exterior"
          mediaPosition="left"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Drinks", href: "product" },
                { label: "Pastries", href: "product" },
                { label: "Seasonal Specials", href: "product" },
                { label: "Catering", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Coffee Sources", href: "about" },
                { label: "Sustainability", href: "about" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Events", href: "blog" },
                { label: "Private Parties", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Newsletter", href: "contact" },
                { label: "Blog", href: "blog" },
                { label: "Reviews", href: "testimonial" },
                { label: "Contact Us", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Brew & Bean Coffee Shop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}