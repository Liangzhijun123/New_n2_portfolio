import React, { useEffect } from "react";

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
};

type Props = {
	project: Project;
	onClose: () => void;
};

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
	const dialogRef = React.useRef<HTMLDivElement | null>(null);
	const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);
	const previouslyFocused = React.useRef<Element | null>(null);

	useEffect(() => {
		previouslyFocused.current = document.activeElement;
		setTimeout(() => closeBtnRef.current?.focus(), 0);

		const onKey = (e: KeyboardEvent) => {
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
	}, [onClose]);

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
					{/* Left: main project image + screenshots */}
					<div>
						{/* Main image - larger on desktop */}
						<button
							onClick={() => { /* keep existing behavior if needed */ }}
							className="w-full p-0 bg-transparent border-0 block"
							aria-label={`Open ${project.project} hero image`}
						>
								<img
									src={project.picture}
									alt={project.project}
									className="w-full max-h-[40vh] md:max-h-[60vh] lg:max-h-[70vh] object-cover rounded-md shadow cursor-zoom-in"
								/>
						</button>

						{/* Screenshots grid: 3x3 on desktop, 1x1 on mobile */}
						{project.screenshots && project.screenshots.length > 0 && (
							<div className="mt-4">
								<h4 className="text-lg font-bold mb-2">Screenshots</h4>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
									{project.screenshots.slice(0, 9).map((s, i) => (
										<a key={i} href={s} target="_blank" rel="noreferrer" className="block rounded overflow-hidden">
											<img
												src={s}
												alt={`${project.project} screenshot ${i + 1}`}
												className="w-full h-28 md:h-32 lg:h-36 object-cover rounded cursor-zoom-in"
											/>
										</a>
									))}
								</div>
								{project.screenshots.length > 9 && (
									<p className="text-sm text-gray-400 mt-2">Showing first 9 of {project.screenshots.length} screenshots</p>
								)}
							</div>
						)}
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;


