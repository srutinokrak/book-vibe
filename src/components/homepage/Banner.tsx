
import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-emerald-50 px-6 py-10 md:px-12 lg:px-16">
          
          {/* Decorative background */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl"></div>

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            
            {/* Text Content */}
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                📚 Discover Your Next Read
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Books to
                <span className="text-emerald-600"> freshen up </span>
                your bookshelf
              </h1>

              <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                Explore inspiring stories, timeless classics, and exciting new
                reads. Find the perfect book to add to your collection.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="btn btn-success rounded-full px-7 text-white shadow-lg shadow-emerald-200 transition hover:scale-105">
                  View The List →
                </button>

                <button className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                  Explore Books
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-emerald-200/50"></div>

                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={bannerImg}
                    alt="Books on a bookshelf"
                    className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
