type CertificateCardProps = {
  name: string;
  imageSrc: string;
  imageAlt?: string;
};

const CertificateCard = ({
  name,
  imageSrc,
  imageAlt = "Certificate preview",
}: CertificateCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)]/50">
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          width="640"
          height="400"
          className="aspect-[8/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-5">
        <h3 className="font-['Space_Grotesk'] text-xl font-semibold">{name}</h3>
      </div>
    </article>
  );
};

export default CertificateCard;
