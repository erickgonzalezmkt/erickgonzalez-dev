'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon, SparklesIcon, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/* ─── Check icon ─── */
function FilledCheck() {
	return (
		<div className="bg-brand text-primary-foreground rounded-full p-0.5">
			<CheckIcon className="size-3" strokeWidth={3} />
		</div>
	);
}

/* ─── Small pricing card ─── */
type PricingCardProps = {
	titleBadge: string;
	priceLabel: string;
	features: string[];
	className?: string;
	highlighted?: boolean;
};

function PricingCard({
	titleBadge,
	priceLabel,
	features,
	className,
	highlighted,
}: PricingCardProps) {
	return (
		<div
			className={cn(
				'relative overflow-hidden rounded-md border backdrop-blur transition-all duration-300',
				highlighted
					? 'border-brand/30 bg-gradient-to-br from-brand/[0.07] to-transparent'
					: 'bg-background border-foreground/10',
				className,
			)}
		>
			<div className="flex items-center gap-3 p-4">
				<Badge variant={highlighted ? 'default' : 'secondary'}>{titleBadge}</Badge>
				<div className="ml-auto">
					<a
						href={`https://wa.me/584120198300?text=${encodeURIComponent(`Hola Erick! Me interesa el plan ${titleBadge}. ¿Podemos agendar una llamada?`)}`}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all',
							highlighted
								? 'bg-brand text-primary-foreground hover:bg-brand/80'
								: 'border border-foreground/10 text-foreground hover:bg-foreground/5'
						)}
					>
						Empezar
						<ArrowRight size={12} />
					</a>
				</div>
			</div>

			<div className="flex items-end gap-2 px-4 py-2">
				<span className="font-mono text-4xl font-semibold tracking-tight text-foreground">
					{priceLabel}
				</span>
			</div>

			<ul className="text-muted-foreground grid gap-3 p-4 text-sm">
				{features.map((f, i) => (
					<li key={i} className="flex items-start gap-3">
						<FilledCheck />
						<span className="leading-relaxed">{f}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

/* ─── Main Bento Pricing ─── */
export function BentoPricing() {
	const waBase = `https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Me interesa tu servicio integral de tecnología y marketing. ¿Podemos agendar una llamada?')}`;

	return (
		<section id="planes" className="relative py-32 px-6">
			<div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50 pointer-events-none" />

			<div className="relative max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4 border-amber-500/30 text-amber-400">
						Planes
					</Badge>
					<h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
						Inversión <span className="text-brand">transparente.</span>
					</h2>
					<p className="mt-4 text-muted-foreground max-w-xl mx-auto">
						Cada plan está diseñado para un objetivo distinto. Eliges el que más se ajusta a tu negocio y escalas cuando quieras.
					</p>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8">
					{/* ── Featured: Full Stack ── */}
					<div
						className={cn(
							'relative w-full overflow-hidden rounded-md border border-brand/30 backdrop-blur',
							'lg:col-span-5',
							'bg-gradient-to-br from-brand/[0.07] to-transparent',
						)}
					>
						<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
							<div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
								<div
									aria-hidden
									className="absolute inset-0 size-full mix-blend-overlay bg-[linear-gradient(to_right,--theme(--color-foreground/.1)_1px,transparent_1px)] bg-[size:24px]"
								/>
							</div>
						</div>

						<div className="flex items-center gap-3 p-4">
							<Badge variant="default">FULL STACK + CRM</Badge>
							<Badge variant="outline" className="hidden lg:flex border-amber-500/30 text-amber-400">
								<SparklesIcon className="me-1 size-3" /> Más completo
							</Badge>
							<div className="ml-auto">
								<a
									href={waBase}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1.5 rounded-lg bg-brand text-primary-foreground px-4 py-2 text-sm font-medium transition-all hover:bg-brand/80"
								>
									Empezar
									<ArrowRight size={14} />
								</a>
							</div>
						</div>

						<div className="flex flex-col p-4 lg:flex-row lg:items-end">
							<div className="pb-4 lg:w-[30%]">
								<span className="font-mono text-5xl font-semibold tracking-tight text-foreground">
									$3,000
								</span>
								<span className="text-muted-foreground text-sm"> – $8,000+</span>
								<p className="text-muted-foreground/60 text-xs mt-1">Proyecto completo</p>
							</div>
							<ul className="text-muted-foreground grid gap-3 text-sm lg:w-[70%] lg:grid-cols-2">
								{[
									'Web premium + SEO total',
									'Cortex Lead Engine integrado',
									'CRM automatizado (n8n + HubSpot)',
									'Chatbot con IA + ManyChat',
									'Pipeline de ventas completo',
									'Soporte y mantenimiento mensual',
								].map((f, i) => (
									<li key={i} className="flex items-start gap-3">
										<FilledCheck />
										<span className="leading-relaxed">{f}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* ── Web Design ── */}
					<PricingCard
						titleBadge="DISEÑO WEB"
						priceLabel="$500 – $4,000"
						features={[
							'Landing pages en Framer o WordPress',
							'Next.js Premium con Awwwards-level',
							'SEO técnico + Core Web Vitals',
							'Hosting + dominio incluido',
							'Integración con CRMs y email',
							'Hasta 10 páginas / secciones',
						]}
						className="lg:col-span-3"
					/>

					{/* ── Automatización ── */}
					<PricingCard
						titleBadge="AUTOMATIZACIÓN"
						priceLabel="$800 – $2,500"
						features={[
							'Chatbots con IA + ManyChat',
							'Embudos multicanal automatizados',
							'Email & SMS sequences',
							'CRM auto-alimentado',
							'Lead scoring + enrichment',
							'Reportes semanales',
						]}
						className="lg:col-span-4"
					/>

					{/* ── E-commerce ── */}
					<PricingCard
						titleBadge="E-COMMERCE"
						priceLabel="$1,200 – $5,000"
						features={[
							'Tienda online completa (Shopify / WooCommerce)',
							'Catálogo + carrito + checkout optimizado',
							'Pasarela de pago local e internacional',
							'Dashboard de pedidos y analytics',
							'Automatización de post-venta',
							'SEO + Schema de producto',
						]}
						className="lg:col-span-4"
					/>

					{/* ── Asesoría & Marketing ── */}
					<PricingCard
						titleBadge="ASESORÍA & MARKETING"
						priceLabel="$400 – $1,500"
						features={[
							'Consultoría personalizada de crecimiento',
							'Embudos de ventas + copywriting',
							'Estrategia de contenido y redes',
							'Automatización de marketing digital',
							'Analytics y dashboards en vivo',
							'Soporte mensual continuo',
						]}
						className="lg:col-span-4"
						highlighted
					/>
				</div>
			</div>
		</section>
	);
}
