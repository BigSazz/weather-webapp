import { SunIcon } from '@heroicons/react/24/solid';

function loading() {
	return (
		<div className='bg-gradient-to-br from-[#000428] to-[#004e92] min-h-screen flex flex-col items-center justify-center text-slate-500'>
			<SunIcon
				className='animate-bounce h-24 w-24 text-yellow-500'
				color='yellow'
			/>
			<h1 className='text-6xl font-bold text-center mb-10 animate-pulse'>
				Loading city weather information
			</h1>
			<h2 className='text-xl font-bold text-center mb-10 animate-pulse'>
				Hold on, we are crunching the numbers & generation an AI summary
				of the Weather!
			</h2>
		</div>
	);
}

export default loading;
