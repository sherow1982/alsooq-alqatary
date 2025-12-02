import { Helmet } from "react-helmet";

interface SEOHeadProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: "website" | "product";
    price?: number;
    currency?: string;
    availability?: "InStock" | "OutOfStock";
}

export default function SEOHead({
    title,
    description,
    image = "/hero-banner.jpg",
    url = window.location.href,
    type = "website",
    price,
    currency = "QAR",
    availability = "InStock",
}: SEOHeadProps) {
    const siteName = "السوق القطري";
    const fullTitle = `${title} | ${siteName}`;

    // Product Schema
    const productSchema = type === "product" ? {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": title,
        "description": description,
        "image": image,
        "offers": {
            "@type": "Offer",
            "priceCurrency": currency,
            "price": price,
            "availability": `https://schema.org/${availability}`
        }
    } : null;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Schema.org JSON-LD */}
            {productSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(productSchema)}
                </script>
            )}
        </Helmet>
    );
}
