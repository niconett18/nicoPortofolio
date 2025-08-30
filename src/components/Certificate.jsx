import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Zoom, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div className="relative min-h-screen bg-white">
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900" />
			<div className="container mx-auto px-4 py-16 md:py-24">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 md:mb-16"
				>
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
						My Certificates
					</h1>
					<p className="text-lg md:text-xl text-blue-200/80 mt-4 max-w-3xl mx-auto">
						A collection of my certifications, showcasing my skills in design and
						development.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
					{certificates.map((certificate, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							className="group"
							onClick={() => handleCertificateClick(certificate)}
						>
							<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
								<img
									src={certificate.image}
									alt={certificate.name}
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="p-5 md:p-6">
									<h3 className="text-xl font-semibold text-white">
										{certificate.name}
									</h3>
									<p className="text-blue-200/70 mt-2 text-sm">
										{certificate.category}
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{certificate.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			{selectedCertificate && (
				<CertificateModal
				 certificate={selectedCertificate}
				 open={modalOpen}
				 onClose={handleCloseModal}
				/>
			)}
		</div>
	)
}

export default Certificate
