
import React from "react";
import { Link } from "react-router";

import Container from "./Container";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white">
      <Container className="py-24 md:py-32">

        <div className="max-w-3xl mx-auto text-center">

          <span className="text-sky-400 font-semibold uppercase tracking-wider">
            Welcome to BookStore
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
            Discover Your
            <span className="block text-sky-400">
              Next Favorite Book
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            Explore a world of knowledge, imagination and inspiration.
            Find your favorite books and start your next reading journey
            with us.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mt-8">

            <Link to="/books">
              <Button className="px-8 py-3">
                Explore Books
              </Button>
            </Link>

            <Link to="/about">
              <Button
                variant="outline"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900"
              >
                Learn More
              </Button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Hero;
