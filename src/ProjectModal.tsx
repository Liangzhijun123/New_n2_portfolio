import React, { useEffect, useState } from "react";

type Project = {
	picture: string;
	project: string;
	year?: string;
	type?: string;
	link?: string;
	short?: string;
	concept?: string;
	tech?: string[];
	screenshots?: string[];
	role?: string;
	duration?: string;
	outcome?: string;
	process?: string[];
	problem?: string;
	userQuotes?: string[];
	solution?: string;
	features?: { title: string; lowfi?: string }[];
	summary?: string;
};

type Props = {
	project: Project;
	onClose: () => void;
};

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	// Use screenshots when available, otherwise fall back to the main picture
	const images = (project.screenshots && project.screenshots.length > 0) ? project.screenshots : [project.picture];
	const dialogRef = React.useRef<HTMLDivElement | null>(null);
	const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);
	const previouslyFocused = React.useRef<Element | null>(null);

	useEffect(() => {
		previouslyFocused.current = document.activeElement;
		setTimeout(() => closeBtnRef.current?.focus(), 0);

		const onKey = (e: KeyboardEvent) => {
			// when lightbox is open, handle its keys first
			if (lightboxOpen) {
				if (e.key === "Escape") {
					setLightboxOpen(false);
					return;
				}
				if (e.key === "ArrowLeft") {
					setLightboxIndex((i) => (i - 1 + images.length) % images.length);
					return;
				}
				if (e.key === "ArrowRight") {
					setLightboxIndex((i) => (i + 1) % images.length);
					return;
				}
			}
			if (e.key === "Escape") onClose();
			if (e.key === "Tab") {
				const dialog = dialogRef.current;
				if (!dialog) return;
				const focusable = dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				if (e.shiftKey) {
					if (document.activeElement === first) {
						e.preventDefault();
						last.focus();
					}
				} else {
					if (document.activeElement === last) {
						e.preventDefault();
						first.focus();
					}
				}
			}
		};

		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			if (previouslyFocused.current instanceof HTMLElement) {
				(previouslyFocused.current as HTMLElement).focus();
			}
		};
	}, [onClose, lightboxOpen, project.screenshots]);

	// reset slide index when project changes
	useEffect(() => {
		setSlideIndex(0);
	}, [project]);

	// keyboard navigation for mobile slideshow
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (window.innerWidth >= 768) return; // only for mobile
			if (!project.screenshots || project.screenshots.length === 0) return;
			if (e.key === "ArrowLeft") {
				setSlideIndex((i) => (i - 1 + project.screenshots!.length) % project.screenshots!.length);
			}
			if (e.key === "ArrowRight") {
				setSlideIndex((i) => (i + 1) % project.screenshots!.length);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [project]);

	// prevent background scroll when lightbox open
	useEffect(() => {
		if (lightboxOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [lightboxOpen]);

	const nextSlide = () => {
		if (!project.screenshots || project.screenshots.length === 0) return;
		setSlideIndex((i) => (i + 1) % project.screenshots!.length);
	};

	const prevSlide = () => {
		if (!project.screenshots || project.screenshots.length === 0) return;
		setSlideIndex((i) => (i - 1 + project.screenshots!.length) % project.screenshots!.length);
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
		>
			<div className="absolute inset-0 bg-black/60 transition-opacity duration-200" />

			<div
				ref={dialogRef}
				className="relative w-full max-w-[calc(100%-48px)] bg-[#06102b] border border-[#485789] rounded-lg p-4 md:p-6 lg:p-8 text-white transform transition-all duration-200 ease-out scale-95 opacity-0 overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
				style={{ animation: "modalEnter 160ms ease-out forwards", maxHeight: 'calc(100vh - 48px)' }}
			>
				<style>{`
					@keyframes modalEnter { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
				`}</style>

				<div className="flex justify-between items-start gap-4">
					<div>
						<h2 className="text-2xl md:text-3xl font-bold font-raleway">{project.project}</h2>
						<p className="text-sm text-gray-300 mt-1 italic">{project.type} • {project.year}</p>
					</div>
					<button
						ref={closeBtnRef}
						aria-label="Close project details"
						onClick={onClose}
						className="ml-2 text-gray-200 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#0F3E68] px-2 py-1"
					>
						✕
					</button>
				</div>

				<div className="mt-6 grid md:grid-cols-2 gap-6">
					{/* Left: main project image */}
					<div>
							<button
								onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
								className="w-full p-0 bg-transparent border-0 block"
								aria-label={`Open ${project.project} hero image`}
							>
								<img
									src={project.picture}
									alt={project.project}
									className="w-full max-h-[50vh] md:max-h-[70vh] lg:max-h-[80vh] object-cover rounded-md shadow cursor-zoom-in"
								/>
							</button>
					</div>

					<div className="space-y-4">
						<p className="text-gray-200">{project.short ?? "Case overview not provided."}</p>

						<section>
							<h3 className="text-xl font-bold">Concept</h3>
							<p className="text-gray-200 mt-2">{project.concept ?? "—"}</p>
						</section>

						<section>
							<h3 className="text-xl font-bold">Tech & Tools</h3>
							<div className="flex flex-wrap gap-2 mt-2">
								{(project.tech ?? []).map((t, i) => (
									<span key={i} className="text-sm bg-[#07182a] px-3 py-1 rounded">{t}</span>
								))}
							</div>
						</section>

						<div className="flex gap-3 flex-wrap">
							<div className="p-3 bg-[#07182a] rounded">
								<div className="text-xs text-gray-400">Role</div>
								<div className="font-bold">{project.role ?? "—"}</div>
							</div>
							<div className="p-3 bg-[#07182a] rounded">
								<div className="text-xs text-gray-400">Duration</div>
								<div className="font-bold">{project.duration ?? "—"}</div>
							</div>
						</div>

						<section>
							<h3 className="text-xl font-bold">Outcome</h3>
							<p className="text-gray-200 mt-2">{project.outcome ?? "—"}</p>
						</section>

						{project.problem && (
							<section>
								<h3 className="text-xl font-bold">Problem</h3>
								<p className="text-gray-200 mt-2">{project.problem}</p>
							</section>
						)}

						{project.userQuotes && project.userQuotes.length > 0 && (
							<section>
								<h3 className="text-xl font-bold">User Quotes</h3>
								<div className="mt-2 space-y-2">
									{project.userQuotes.map((q, i) => (
										<blockquote key={i} className="text-gray-300 italic pl-3 border-l-2 border-[#0F3E68]">{`"${q}"`}</blockquote>
									))}
								</div>
							</section>
						)}

						{project.solution && (
							<section>
								<h3 className="text-xl font-bold">Solution</h3>
								<p className="text-gray-200 mt-2">{project.solution}</p>
							</section>
						)}

						{project.features && project.features.length > 0 && (
							<section>
								<h3 className="text-xl font-bold">Feature Definition & Low-fidelity</h3>
								<div className="mt-2 space-y-2">
									{project.features.map((f, i) => (
										<div key={i} className="bg-[#07182a] p-3 rounded">
											<div className="font-bold">{f.title}</div>
											<div className="text-sm text-gray-300 mt-1">{f.lowfi ?? "—"}</div>
										</div>
									))}
								</div>
							</section>
						)}

						{project.summary && (
							<section>
								<h3 className="text-xl font-bold">Summary</h3>
								<p className="text-gray-200 mt-2">{project.summary}</p>
							</section>
						)}

						<section>
							<h3 className="text-xl font-bold">Process</h3>
							<div className="text-gray-200 mt-2">
								{project.process && project.process.length > 0 ? (
									<ol className="list-decimal list-inside space-y-1">
										{project.process.map((step, i) => (
											<li key={i}>{step}</li>
										))}
									</ol>
								) : (
									<p>Process details not provided.</p>
								)}
							</div>
						</section>

						{project.link && (
							<div className="pt-2">
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
									className="inline-block border border-[#0F3E68] rounded-xl px-4 py-2 text-white hover:bg-[#061726]"
								>
									Open Original
								</a>
							</div>
							)}

							{/* Lightbox overlay (rendered outside the screenshots block to avoid JSX nesting issues) */}
							{lightboxOpen && images.length > 0 && (
								<div
									className="fixed inset-0 z-60 flex items-center justify-center"
									onClick={() => setLightboxOpen(false)}
									role="dialog"
									aria-modal="true"
								>
									<div className="absolute inset-0 bg-black/85" />
									<div className="relative max-w-[90vw] max-h-[90vh] z-70" onClick={(e) => e.stopPropagation()}>
										<button
											aria-label="Close image"
											onClick={() => setLightboxOpen(false)}
											className="absolute right-2 top-2 z-80 text-white text-2xl p-2 rounded focus:outline-none"
										>
											✕
										</button>
										<img
											src={images[lightboxIndex]}
											alt={`${project.project} screenshot ${lightboxIndex + 1}`}
											className="max-w-full max-h-[90vh] object-contain rounded"
											loading="lazy"
										/>
										{/* Prev / Next */}
										{images.length > 1 && (
											<>
												<button
													onClick={() => setLightboxIndex((i) => (i - 1 + images.length) % images.length)}
													aria-label="Previous image"
													className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
												>
													‹
												</button>
												<button
													onClick={() => setLightboxIndex((i) => (i + 1) % images.length)}
													aria-label="Next image"
													className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
												>
													›
												</button>
											</>
										)}
									</div>
								</div>
							)}
					</div>
				</div>
				
				{/* Full-width screenshots row below the two-column area */}
				{project.screenshots && project.screenshots.length > 0 && (
					<div className="mt-6">
						<h4 className="text-lg font-bold mb-2">Screenshots</h4>

						{/* Mobile slideshow */}
						<div className="block md:hidden">
							<div className="relative">
								<div className="w-full h-72 bg-[#041021] rounded overflow-hidden flex items-center justify-center cursor-zoom-in" onClick={() => { setLightboxIndex(slideIndex); setLightboxOpen(true); }}>
									<img
										src={project.screenshots[slideIndex]}
										alt={`${project.project} screenshot ${slideIndex + 1}`}
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>

								<button
									onClick={prevSlide}
									aria-label="Previous screenshot"
									className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
								>
									‹
								</button>

								<button
									onClick={nextSlide}
									aria-label="Next screenshot"
									className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
								>
									›
								</button>

								<div className="flex justify-center gap-2 mt-3">
									{project.screenshots.map((_, i) => (
										<button
											key={i}
											onClick={() => setSlideIndex(i)}
											aria-label={`Go to screenshot ${i + 1}`}
											className={`w-2 h-2 rounded-full ${i === slideIndex ? 'bg-white' : 'bg-gray-500/60'}`}
										/>
									))}
								</div>
							</div>
						</div>

						{/* Desktop grid */}
						<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							{project.screenshots.slice(0, 12).map((s, i) => (
								<button
									key={i}
									onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
									className="p-0 bg-transparent border-0 rounded overflow-hidden"
									aria-label={`Open screenshot ${i + 1} for ${project.project}`}
								>
									<img
										src={s}
										alt={`${project.project} screenshot ${i + 1}`}
										className="w-full h-64 md:h-72 lg:h-[600px] object-cover rounded cursor-zoom-in"
										loading="lazy"
									/>
								</button>
							))}
						</div>
						{project.screenshots.length > 12 && (
							<p className="text-sm text-gray-400 mt-2">Showing first 12 of {project.screenshots.length} screenshots</p>
						)}
					</div>

                    
				)}
			</div>
		</div>
	);
};

export default ProjectModal;


