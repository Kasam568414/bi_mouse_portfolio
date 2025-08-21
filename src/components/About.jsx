import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";

import flagImg from "../assets/Mask group.png";
import dotImg from "../assets/Rectangle 3688.png";
import scissorImg from "../assets/Path.png";

const testimonials = [
  {
    name: "henry_i_peter",
    country: "United States",
    flag: flagImg,
    review:
      "Working with her has been a game-changer for my business. She has handled the creation of our monthly sales report with exceptional organization and efficiency. From consolidating the data to designing dynamic charts, she's made the process smooth and easy to follow. I highly recommend her to anyone looking for a reliable and skilled Excel specialist.",
    rating: 5,
  },
  {
    name: "gabriel_samue",
    country: "United States",
    flag: flagImg,
    review:
      "This was my first collaboration with Sadia, and it was an outstanding experience. She was very professional, understood the requirements and gave great ideas to enhance my existing approach. She was also very timely and made herself available to understand further requirements. She is very knowledgeable in this area and I would definitely recommend working with her.",
    rating: 5,
  },
  {
    name: "ratmd7",
    country: "United States",
    flag: flagImg,
    review:
      "Sadia was fantastic to work with—very professional, patient, and attentive to all my requirements. She took the time to fully understand what I needed before starting and kept me informed throughout the entire process. The dashboard was delivered right on schedule and exceeded my expectations with its clean design and smooth interactivity.",
    rating: 5,
  },
];

const CARD_W = 360;
const CARD_H = 340;
const REVIEW_H = 110;

export default function About() {
  const [openIdx, setOpenIdx] = useState(null);
  const [isOverflowing, setIsOverflowing] = useState(
    Array(testimonials.length).fill(false)
  );
  const textRefs = useRef([]);

  useEffect(() => {
    setIsOverflowing(
      testimonials.map((_, i) => {
        const el = textRefs.current[i];
        return el ? el.scrollHeight > el.clientHeight + 1 : false;
      })
    );
  }, []);

  return (
    <>
    <div id="about">
      <Section id="about" className="bg-white">
        <div className="text-center">
          <div className="mb-2 text-sm font-medium tracking-wider text-gray-600">TESTIMONIAL</div>
          <h2 className="mb-8 text-[32px] md:text-[36px] font-extrabold leading-tight">What they say about us</h2>
        </div>

        <div className="mx-auto flex w-full flex-wrap justify-center gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={t.name}
              className="relative rounded-2xl border border-gray-300 bg-white shadow-sm"
              style={{ width: CARD_W, height: CARD_H, minWidth: CARD_W }}
            >
              <div className="flex h-full flex-col px-6 pb-6 pt-7">
                {scissorImg && (
                  <img src={scissorImg} alt="" className="pointer-events-none absolute left-4 top-4 h-5 w-5 select-none" />
                )}

                <div className="mb-4 flex w-full justify-center">
                  <div className="flex items-center gap-2 rounded-md border border-gray-300 bg-[#f8f8f8] px-5 py-1.5">
                    <span className="text-[17px] font-bold tracking-wide">{t.name}</span>
                    <span className="flex items-center gap-1">
                      {t.flag && <img src={t.flag} alt="Flag" className="mr-1 h-4 w-6 rounded object-cover" />}
                      <span className="text-sm font-semibold text-gray-500">{t.country}</span>
                    </span>
                  </div>
                </div>

                <div className="relative mb-7">
                  <p
                    ref={(el) => (textRefs.current[idx] = el)}
                    className="text-left text-[15px] leading-relaxed text-black overflow-hidden"
                    style={{ maxHeight: REVIEW_H }}
                  >
                    {t.review}
                  </p>

                  {isOverflowing[idx] && (
                    <>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
                      <button
                        onClick={() => setOpenIdx(idx)}
                        className="absolute right-0 -bottom-1 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-700 underline hover:text-gray-900"
                      >
                        Read more …
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-auto flex items-center">
                  <span className="mr-2 text-[21px] font-bold tracking-[1px]" aria-hidden>
                    {"★".repeat(t.rating)}
                  </span>
                  <span className="text-[16px] font-semibold">{t.rating}</span>
                </div>

                {dotImg && (
                  <div className="pointer-events-none absolute bottom-5 right-5 grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <img key={i} src={dotImg} alt="" className="h-[8px] w-[8px] object-contain" />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* modal */}
      {openIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h3 className="text-lg font-semibold">
                {testimonials[openIdx].name} — {testimonials[openIdx].country}
              </h3>
              <button onClick={() => setOpenIdx(null)} className="rounded-md px-2 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-100">✕</button>
            </div>
            <div className="px-6 py-5">
              <p className="whitespace-pre-line text-[15px] leading-relaxed text-gray-900">
                {testimonials[openIdx].review}
              </p>
            </div>
            <div className="flex justify-end border-t px-6 py-3">
              <button onClick={() => setOpenIdx(null)} className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
