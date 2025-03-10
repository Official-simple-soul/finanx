import { Carousel } from '@mantine/carousel';
import { Paper, Avatar, Text } from '@mantine/core';

const testimonials = [
    {
        id: 1,
        name: 'Sarah M.',
        quote: 'FinanX has revolutionized my crypto trading. The platform is intuitive, and the support is top-notch!',
        avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    },
    {
        id: 2,
        name: 'David L.',
        quote: 'I was skeptical at first, but FinanX\'s security and transparency have won me over. Highly recommended!',
        avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    },
    {
        id: 3,
        name: 'Emily K.',
        quote: 'The real time charting and diverse coin selection are fantastic. FinanX makes crypto trading accessible.',
        avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    },
    {
        id: 4,
        name: 'John A.',
        quote: 'The customer service is outstanding. They are always ready to help. FinanX is the best platform I have used.',
        avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    },
    {
        id: 5,
        name: 'Jane D.',
        quote: 'The fees are very low, and the transaction speed is amazing. FinanX is very efficient.',
        avatar: 'https://via.placeholder.com/150',
    },
];

function Testimonial() {
    const slides = testimonials.map((testimonial) => (
        <Carousel.Slide key={testimonial.id}>
            <div className="border border-gray-200 p-4 rounded-md">
                <div className='flex items-center mb-5'>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} radius="xl" mr="md" />
                    <div>
                        <Text weight={500}>{testimonial.name}</Text>
                    </div>
                </div>
                <p className='line-clamp-3'>{testimonial.quote}</p>
            </div>
        </Carousel.Slide>
    ));

    return (
        <div className="px-6 md:px-0 w-full md:w-[82%] mx-auto py-6">
            <h1 className='text-2xl font-bold text-center mb-4'>What They Say About Us</h1>
            <div className="hidden md:block">
                <Carousel
                    withIndicators
                    height={200}
                    slideSize="33.333333%"
                    slideGap="md"
                    loop
                    align="start"
                >
                    {slides}
                </Carousel>
            </div>
            <div className="md:hidden">
                <div
                    style={{
                        resize: 'horizontal',
                        overflow: 'hidden',
                        maxWidth: '100%',
                        minWidth: 250,
                        padding: 10,
                    }}
                >
                    <Carousel
                        withIndicators
                        height={200}
                        type="container"
                        slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
                        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
                        loop
                        align="start"
                    >
                        {slides}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Testimonial