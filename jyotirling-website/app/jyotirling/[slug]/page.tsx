import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JyotirlingaDetailPage from './JyotirlingaDetailPage';
import { getJyotirlingBySlug, getAllJyotirlingaSlugs } from '@/lib/data';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all Jyotirlingas
export async function generateStaticParams() {
  const slugs = getAllJyotirlingaSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const jyotirlinga = getJyotirlingBySlug(params.slug);
  
  if (!jyotirlinga) {
    return {
      title: 'Temple Not Found',
    };
  }

  return {
    title: jyotirlinga.seoTitle,
    description: jyotirlinga.seoDescription,
    keywords: jyotirlinga.keywords,
    openGraph: {
      title: jyotirlinga.seoTitle,
      description: jyotirlinga.seoDescription,
      images: [
        {
          url: jyotirlinga.imageUrl,
          width: 1200,
          height: 630,
          alt: `${jyotirlinga.name} Jyotirlinga Temple`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: jyotirlinga.seoTitle,
      description: jyotirlinga.seoDescription,
      images: [jyotirlinga.imageUrl],
    },
    alternates: {
      canonical: `/jyotirling/${params.slug}`,
    },
  };
}

export default function Page({ params }: PageProps) {
  const jyotirlinga = getJyotirlingBySlug(params.slug);
  
  if (!jyotirlinga) {
    notFound();
  }

  return <JyotirlingaDetailPage jyotirlinga={jyotirlinga} />;
}