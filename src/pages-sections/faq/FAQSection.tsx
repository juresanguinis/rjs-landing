"use client";

import { useState, Suspense } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ } from "@/utils/constants/faq.constants";
import Fuse, { FuseResult } from "fuse.js";
import { IFAQs } from "@/types/faq.interface";
import FAQsSkeleton from "@/components/skeleton/FAQsSkeleton";

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");

  // Configure Fuse.js for fuzzy search
  const fuse = new Fuse<IFAQs>(FAQ, {
    keys: [
      { name: "category", weight: 0.3 },
      { name: "questions.question", weight: 0.5 },
      { name: "questions.answer", weight: 0.2 },
    ],
    includeMatches: true,
    threshold: 0.3,
  });

  // Perform fuzzy search
  const results = searchQuery ? fuse.search(searchQuery) : FAQ;

  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>

        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-6"
        />

        {/* Render filtered FAQ with Suspense */}
        <Suspense fallback={<FAQsSkeleton />}>
          {results.length > 0 ? (
            results.map((item, categoryIndex) => {
              const category = searchQuery ? (item as FuseResult<IFAQs>).item : (item as IFAQs);
              return (
                <div key={categoryIndex} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                  <Accordion type="single" collapsible>
                    {category.questions.map((q, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger>{q.question}</AccordionTrigger>
                        <AccordionContent>{q.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })
          ) : (
            <p className="text-center text-js-gray">No results found. Try a different search term.</p>
          )}
        </Suspense>
      </div>
    </section>
  );
}
