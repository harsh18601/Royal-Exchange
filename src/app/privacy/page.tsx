"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { getLegalPageBySlug } from "@/lib/contentful";

export default function PrivacyPage() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    getLegalPageBySlug("privacy").then(setPage);
  }, []);

  return (
    <div className="pt-40 pb-24 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase mb-12">{page?.fields?.title || "Privacy Policy"}</h1>
        <div className="prose prose-invert max-w-none prose-zinc lg:prose-xl">
          {page?.fields?.content ? (
            <div dangerouslySetInnerHTML={{ __html: page.fields.content }} />
          ) : (
            <p className="text-gray-400 italic">Content pending upload from CMS...</p>
          )}
        </div>
      </div>
    </div>
  );
}
