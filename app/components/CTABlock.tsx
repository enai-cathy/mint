type CTAProps = {
  heading: string;
  subheading: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

export default function CTABlock({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
}:CTAProps) {
  return (
    <div className="text-center bg-[#f9fafb] py-16 rounded-xl shadow mt-10 px-6">
      <h3 className="text-2xl md:text-3xl font-bold text-[#536c32]">
        {heading}
      </h3>
      <p className="text-gray-600 mt-2">{subheading}</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href={primaryCta.href}
          className="bg-[#b3da67] text-white px-6 py-3 rounded-md font-medium hover:bg-[#a4c95f] transition"
        >
          {primaryCta.label}
        </a>
        <a
          href={secondaryCta.href}
          className="text-[#536c32] font-semibold hover:underline"
        >
          {secondaryCta.label}
        </a>
      </div>
    </div>
  );
}
