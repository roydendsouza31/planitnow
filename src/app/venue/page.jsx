import React from 'react';
import VenueHero from '../components/venuehero';
import WeddingVenue from '../components/weddingvenues';
import BirthdayVenue from '../components/birthdayvenues';
import ReviewsCarousel from '../components/reviews';


export default function VenuePage() {
  return (
    <>
      <VenueHero />
      <WeddingVenue />
      <BirthdayVenue />
      <ReviewsCarousel />
    </>
  );
}