import React from "react";

/** Shared section wrapper: same width + padding everywhere */
export default function Section({ children, className = "" }) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4">
        {children}
      </div>
    </section>
  );
}
