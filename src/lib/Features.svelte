<script>
    import feature1Icon from '../assets/feature-1.svg';
    import feature2Icon from '../assets/feature-2.svg';
    import feature3Icon from '../assets/feature-3.svg';
    import feature4Icon from '../assets/feature-4.svg';

    const feautures = [
            {
                name: "Smart Recommendations",
                icon: feature1Icon, // Use the imported variable!
                color: "bg-burgundy-300",
                description:
                    "Our intelligence engine learns your palate and suggests wines matched to your taste, budget, and occasion, getting smarter with every interaction.",
            },
            {
                name: "Explore Experiences",
                icon: feature2Icon,
                color: "bg-burgundy-200",
                description:
                    "Browse tastings, tours, and events across Ontario and BC wine regions, with easy calendar and map views.",
            },
            {
                name: "Shop with Confidence",
                icon: feature3Icon,
                color: "bg-burgundy-100",
                description:
                    "Browse tastings, tours, and events across Ontario and BC wine regions, with easy calendar and map views.",
            },
            {
                name: "Favourites & Feedback",
                icon: feature4Icon,
                color: "bg-burgundy-50",
                description:
                    "Save your favourites and rate your recommendations. Your feedback helps us understand your evolving taste and guide every future discovery.",
            },
    ];
</script>

<section class="py-24 bg-linear-46 from-transparent to-hero-gray-bg-400/75 relative z-10">
    <div class=" container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <!-- Left: Feature Copy -->
        <div class="flex flex-col justify-center px-8">
            <h2 class="text-3xl text-burgundy-400 mb-12">Wine Discovery, <br> 
                <span class="font-bold">Reimagined.</span> 
            </h2>
            
            <p class="mb-4 font-medium text-burgundy-300 uppercase">
                FROM PERSONALIZED RECOMMENDATIONS <br> TO UNFORGETTABLE EXPERIENCES            
            </p>

            <p class="text-logo-grey-400">
                <span class="font-bold">WineUWant</span> connects you with exceptional Canadian VQA wines and the moments that make them memorable. We make discovery simple, personal, and deeply rooted in the wineries, regions, and experiences that bring each bottle to life. Whether you’re new to wine or deepening your passion, we’ll help you find exactly what you love, and where to enjoy it.
            </p>
        </div>

        <!-- Right column: Feature Cards -->
         <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each feautures as feature}
                <div class="flex flex-col gap-2 p-6 rounded-3xl {feature.color} transition group duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-102">
                    
                    <div class="w-14 h-14 mb-4 rounded-xl p-1 border border-white/20 transition-all duration-300 group-hover:border group-hover:border-white/50 group-hover:bg-white/10 group-hover:shadow-lg flex items-center justify-center    ">
                        <div class="w-8 h-8 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                            <img src="{feature.icon}" alt="Client avatar" class="w-full h-full object-cover">
                        </div>
                    </div>
                    
            
                    <h3 class=" font-semibold text-white uppercase">{feature.name}</h3>
                    <p class="text-white text-sm font-light">{feature.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>



