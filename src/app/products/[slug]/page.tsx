
import { getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Star, LifeBuoy } from 'lucide-react';

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
        <div className="bg-card/30 dark:bg-card/40">
            {/* Product Header */}
            <div className="bg-card/50 dark:bg-card/80 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
                <div className="container mx-auto px-4 py-8">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                             <h1 className="font-headline text-3xl lg:text-4xl font-extrabold text-foreground">{product.title}</h1>
                             <p className="mt-2 text-muted-foreground">{product.description}</p>
                        </div>
                        <div className="flex items-center justify-start md:justify-end gap-4">
                            <div className="text-right">
                                 <p className="text-3xl font-bold text-primary">{product.price}</p>
                                 <p className="text-xs text-muted-foreground">one-time payment</p>
                            </div>
                            <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group">
                                <Link href="#">
                                    Purchase <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                     </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-2">
                        {/* Image */}
                        <Card className="relative group overflow-hidden bg-card/60 dark:bg-card/50 backdrop-blur-sm rounded-xl border border-black/10 dark:border-white/10 mb-12">
                            <Image
                                src={product.image}
                                data-ai-hint={product.hint}
                                alt={product.title}
                                width={1200}
                                height={800}
                                className="w-full rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </Card>

                        {/* Tabs */}
                        <Tabs defaultValue="details" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 bg-background/80">
                                <TabsTrigger value="details">Item Details</TabsTrigger>
                                <TabsTrigger value="features">Features</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews (4)</TabsTrigger>
                            </TabsList>
                            <TabsContent value="details" className="py-6 text-muted-foreground leading-relaxed prose dark:prose-invert max-w-none">
                                <p>{product.longDescription}</p>
                            </TabsContent>
                            <TabsContent value="features" className="py-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {product.features.map(feature => (
                                        <div key={feature.title} className="flex items-start gap-4">
                                            {feature.icon && <feature.icon className="size-7 text-primary mt-1 shrink-0" />}
                                            <div>
                                                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                             <TabsContent value="reviews" className="py-6 space-y-6">
                                {/* Placeholder for reviews */}
                                <Card className="bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10 p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-semibold">Jane Doe</p>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="size-4 text-amber-400 fill-amber-400" />)}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">"Absolutely fantastic product! Saved me so much time."</p>
                                </Card>
                                 <Card className="bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10 p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-semibold">John Smith</p>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="size-4 text-amber-400 fill-amber-400" />)}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">"Easy to integrate and the support was excellent. Highly recommend!"</p>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:sticky lg:top-28 space-y-6">
                        <Card className="bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="font-headline text-xl">Product Stats</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-3 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Sales</span>
                                    <span className="font-semibold text-foreground">1,204</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Reviews</span>
                                    <span className="font-semibold text-foreground flex items-center gap-1">
                                        4 <Star className="size-4 text-amber-400 fill-amber-400" />
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Last Update</span>
                                    <span className="font-semibold text-foreground">2 weeks ago</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Tags</span>
                                    <div className="flex flex-wrap gap-1 justify-end">
                                        {product.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                         <Card className="bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="font-headline text-xl">Support</CardTitle>
                            </CardHeader>
                             <CardContent className="p-0 space-y-3">
                                <p className="text-sm text-muted-foreground">This product comes with 6 months of support from our team.</p>
                                 <Button variant="outline" className="w-full">
                                    <LifeBuoy className="mr-2 size-4" /> Contact Support
                                </Button>
                             </CardContent>
                         </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
