export type EventItem = {
    id: string,
    title: string,
    description: string,
    location: string,
    date: string,
    image: string,
    isFeatured: boolean
}

export async function getAllEvents() {
    const response = await fetch('https://next-blog-304a0-default-rtdb.asia-southeast1.firebasedatabase.app/ling-Firebase/events.json');
    const data = await response.json();

    const events: Array<EventItem> = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: string | number) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    const allEvents = await getAllEvents();

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}