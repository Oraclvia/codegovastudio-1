import { getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const product = getProductBySlug(params.slug);
    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }
    return {
        title: `${product.title} - CodeGova`,
        description: product.description,
    };
}

export default function ProductDetailPage({ params }: Props) {
    const product = getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className="relative group p-4 bg-card/50 rounded-xl border border-white/10">
                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>
                    <Image
                        src={product.image}
                        data-ai-hint={product.hint}
                        alt={product.title}
                        width={1200}
                        height={800}
                        className="w-full rounded-lg shadow-2xl relative"
                    />
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                        <h1 className="font-headline text-4xl lg:text-5xl font-extrabold text-foreground">{product.title}</h1>
                        <p className="text-2xl lg:text-3xl font-bold text-primary">{product.price}</p>
                        <p className="text-lg text-muted-foreground">{product.longDescription}</p>
                    </div>
                     <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group">
                        <Link href="#">
                            Purchase Now <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="mt-20 lg:mt-28">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">Discover what makes {product.title} a powerful solution.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {product.features.map(feature => (
                        <Card key={feature.title} className="bg-card/50 border-white/10 p-6">
                            <CardHeader className="p-0 flex flex-row items-center gap-4">
                                {feature.icon && <feature.icon className="size-8 text-primary" />}
                                <CardTitle className="font-headline text-xl m-0">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-4">
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}