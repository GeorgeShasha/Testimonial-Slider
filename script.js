const testimonials = [
    {
        name: "Cherise B",
        imageUrl: "https://picsum.photos/300/300",
        text: "I have tried several online coding platforms, but George Shasha Code Lab stands out for its comprehensive curriculum and hands-on approach to learning. The progress tracking and feedback system helped me stay motivated and accountable. Trust me, Code Lab is the best investment you can make in your coding journey!"
    },
    {
        name: "Rosetta O",
        imageUrl: "https://picsum.photos/300/300",
        text:  "If you're looking for a coding program that delivers results, look no further than George Shasha Code Lab. The structured approach to learning, combined with the supportive community, makes it a standout choice for anyone looking to upskill in coding. Thank you, Code Lab, for helping me level up my coding skills!"
    },
    {
        name: "Garcia M",
        imageUrl: "https://picsum.photos/300/300",
        text: "Code Lab exceeded my expectations in every way possible. The curriculum is well-organized, the instructors are knowledgeable and approachable, and the platform is user-friendly. I've recommended Code Lab to all my friends interested in learning how to code!"
    },
    {
        name: "Smith J",
        imageUrl: "https://picsum.photos/300/300",
        text: "Code Lab not only taught me how to code but also instilled in me a passion for problem-solving through programming. The engaging lessons and challenging projects pushed me to think creatively and critically. I can't imagine my coding journey without Code Lab!"
    },
    {
        name: "Davis E",
        imageUrl: "https://picsum.photos/300/300",
        text: "I can't thank Code Lab enough for helping me transition into a career in software development. The practical assignments and career guidance sessions gave me the confidence to pursue my dream job. If you're serious about coding, Code Lab is the place to be!"
    },
    {
        name: "Rodriguez S",
        imageUrl: "https://picsum.photos/300/300",
        text:  "Code Lab is worth every penny! The value you get from the comprehensive curriculum, interactive tutorials, and personalized feedback is unmatched. I've seen a significant improvement in my coding skills since I started with Code Lab. Highly recommended for aspiring developers!"
    },
    {
        name: "Martin L",
        imageUrl: "https://picsum.photos/300/300",
        text: "I've tried other online coding platforms, but none compare to the quality of education I received at Code Lab. The instructors are knowledgeable and supportive, creating a conducive learning environment. I feel confident in my coding abilities thanks to Code Lab."

    },
    {
        name: "Wilson F",
        imageUrl: "https://picsum.photos/300/300",
        text: "As a working professional, George Shasha Code Lab provided me with the flexibility to learn coding at my own pace. The well-structured curriculum and practical exercises helped me to apply my newfound skills in real-world projects. Thank you, Code Lab, for empowering me!"
    },
    {
        name: "Williams H",
        imageUrl: "https://picsum.photos/300/300",
        text:  "I was a complete beginner in coding before joining George Shasha Code Lab, and I am amazed at how much I have learned in such a short time. The interactive lessons and supportive community make it easy to grasp complex concepts. Code Lab is a game-changer!"

    },
    {
        name: "Martinez P",
        imageUrl: "https://picsum.photos/200/300",
        text:  "George Shasha Code Lab completely transformed the way I approach coding. The hands-on projects and expert guidance helped me build a strong foundation in programming languages. Highly recommend it to anyone looking to enhance their coding skills!"

    }
]

const photoEl = document.querySelector('img');
const testimonialEl = document.querySelector('.testimonial-text');
const userNameEl = document.querySelector('.testimonial-name');

let idx = 0;
updateTestimonials();

function updateTestimonials(){
    const {name, imageUrl, text}  = testimonials[idx];

    photoEl.src = imageUrl;
    testimonialEl.innerHTML = text;
    userNameEl.innerHTML = name;
    idx++;
    if(idx >= testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonials();
    }, 10000);

}