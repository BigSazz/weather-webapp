'use Client';

import CityPicker from '@/components/CityPicker';
import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-[#000428] to-[#004e92] p-10 flex flex-col justify-center items-center'>
			<Card className='max-w-4xl mx-auto'>
				<Text className='text-7xl font-semibold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#000428] to-[#004e92]'>
					AI Weather App
				</Text>
				<Subtitle className='text-xs tracking-wider text-center'>
					Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 +
					More!
				</Subtitle>

				<Divider className='my-10' />

				<Card className='bg-gradient-to-br from-[#000428] to-[#004e92]'>
					<CityPicker />
				</Card>
			</Card>
		</div>
	);
}
