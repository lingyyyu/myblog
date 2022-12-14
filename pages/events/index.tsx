import EventList from '../../components/events/event-list';
import { Fragment } from 'react';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import { EventItem, getAllEvents } from '../../helpers/api-util';
import Head from 'next/head';

function AllEventsPage(props: { events: Array<EventItem>; }) {
  const router = useRouter();
  const {events} = props
  
  function findEventsHandler(year, month) {
    //这条路径会导航到[...slug]
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60
  };
}

export default AllEventsPage;