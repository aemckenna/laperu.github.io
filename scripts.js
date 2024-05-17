document.addEventListener('DOMContentLoaded', () => {
    const itinerary = {
        week1: [
            { day: 'Day 1', activity: 'Arrive in Lima, explore Miraflores', image: 'path/to/your/image1.jpg' },
            { day: 'Day 2', activity: 'Visit Huaca Pucllana, Larcomar', image: 'path/to/your/image2.jpg' },
            // More days...
        ],
        // More weeks...
    };

    Object.keys(itinerary).forEach(week => {
        const section = document.getElementById(week);
        itinerary[week].forEach(item => {
            const div = document.createElement('div');
            div.classList.add('day');
            div.innerHTML = `<h3>${item.day}</h3>
                             <p>${item.activity}</p>
                             <img src="${item.image}" alt="${item.activity}">`;
            section.appendChild(div);
        });
    });
});

