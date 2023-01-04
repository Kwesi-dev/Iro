import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="background-gradient w-full text-white relative mt-[80px] h-[120px] md:h-fit md:py-12 sm:px-5 px-24 md:px-12 flex flex-col items-center justify-center md:items-start">
				<div className="md:hidden w-full flex justify-between items-center mb-2 font-medium text-lg">
					<p>&copy; Iro 2022</p>
					<ul className="flex items-center space-x-8">
						<li className="underline cursor-pointer">Code on Github</li>
						<li className="underline cursor-pointer">Powered by Vercel</li>
						<li className="underline cursor-pointer">Give a feedback</li>
					</ul>
					<p>JAMstack</p>
				</div>
				<div className="w-full hidden md:flex mb-2 text-lg md:mb-10">
					<div className="w-full md:flex justify-between items-center sm:text-[15px]">
						<div>
							<p className="underline cursor-pointer">Code on Github</p>
							<p className="underline cursor-pointer items-end">
								Give a feedback
							</p>
						</div>
						<div>
							<p className="cursor-pointer">Powered by</p>
							<div className="cursor-pointer font-semibold flex space-x-1.5">
								<p className="underline">Vercel </p>
								<p>&</p>
								<p className="underline"> Xata</p>
							</div>
						</div>
					</div>
				</div>
				<p className="hidden md:block w-full text-center mb-2">
					&copy; Iro 2022 :{" "}
					<strong className="font-semibold underline">JAMstack</strong>
				</p>
				<p className="w-full text-center text-sm">
					No pixels was harm 💔 in production of this project{" "}
				</p>
			</footer>
			<style jsx>
				{`
					.background-gradient {
						background: linear-gradient(
							90.69deg,
							rgba(129, 149, 254, 0.82) -7.91%,
							rgba(114, 119, 255, 0.815301) 0.9%,
							rgba(132, 56, 255, 0.79) 48.36%,
							rgba(255, 107, 231, 0.82) 122.25%
						);
					}
				`}
			</style>
		</>
	);
};

export default Footer;
