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
    <article className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface-strong) shadow-sm">
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="p-5">
        <h3 className="font-['Space_Grotesk'] text-xl font-semibold">{name}</h3>
      </div>
    </article>
  );
};

export default CertificateCard;
