// src/data/events23.ts
import type { ClubEvent } from './index';

const events23: ClubEvent[] = [
  {
    type: 'Workshop',
    title: 'events23.gitWorkshopTitle',
    description: 'events23.gitWorkshopDescription',
    image: '/images/events/2023 - 2024/Git & GitHub.jpg',
    imageAlt: 'Participants attentively listening to the presenter during the workshop'
  },
  {
    type: 'Tech Talk',
    title: 'events23.enterpriseTalkTitle',
    description: 'events23.enterpriseTalkDescription',
    image: '/images/events/2023 - 2024/EA.jpeg',
    imageAlt: 'Maryam Al-Dhewalia gesturing towards an Enterprise Architecture diagram during the talk'
  },
  {
    type: 'Workshop',
    title: 'events23.flutterWorkshopTitle',
    description: 'events23.flutterWorkshopDescription',
    image: '/images/events/2023 - 2024/Intro to Flutter.jpeg',
    imageAlt: 'Yazeed AlKhalaf presenting the Flutter workshop with the Flutter mascot on the podium'
  },
  {
    type: 'Bootcamp',
    title: 'events23.gameCampTitle',
    description: 'events23.gameCampDescription',
    image: '/images/events/2023 - 2024/Game Camp.jpeg',
    imageAlt: 'Ghada Baazim explaining game design using in-game imagery as an example'
  }
  // Add more events here if needed
];

export default events23;
