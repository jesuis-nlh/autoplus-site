import type { GarageConfig, SourceRef } from '../types';

/*
 * Auto Plus Villeurbanne : proposition de site réalisée par STARTAP.
 * Nom, adresse, téléphone et horaires relevés sur la fiche Google Maps du garage (11/11/2026).
 * Les textes, les prestations et les modalités d'accueil reprennent le site de démonstration :
 * ils restent à faire valider par le garage avant toute mise en ligne (voir `launch`).
 */

const maps: SourceRef = {
  label: 'Fiche Google Maps « AUTO PLUS VILLEURBANNE »',
  url: 'https://maps.app.goo.gl/6vQL7KtDYEvj64rWA',
  checkedAt: '2026-11-11',
};

export const garageAutoPlus: GarageConfig = {
  id: 'auto-plus-villeurbanne',
  brand: {
    name: 'Auto Plus Villeurbanne',
    shortName: 'Auto Plus',
    wordmark: { primary: 'AUTO PLUS', secondary: 'Garage · Villeurbanne' },
    colors: { accent: '#FF3131', accentInk: '#0E0F11' },
  },
  copy: {
    heroEyebrow: 'Garage automobile · Villeurbanne',
    heroTitle: ['La précision mécanique.', 'La tranquillité d’esprit.'],
    heroLead:
      'Entretien, freinage, pneus, diagnostic : votre centre auto de quartier prend en charge votre véhicule, du lundi au samedi, au 22 rue Marcel Dutartre à Villeurbanne.',
    garageTitle: 'Un atelier de quartier, des explications claires.',
    garageIntro:
      'Auto Plus Villeurbanne vous accueille au 22 rue Marcel Dutartre, du lundi au samedi : un accueil simple, des prestations lisibles et une prise de rendez-vous rapide.',
    garageBody: [
      'Tout commence par l’écoute : ce que vous avez remarqué, depuis quand, dans quelles conditions. Ces détails orientent le contrôle du véhicule et évitent les interventions inutiles.',
      'Avant d’intervenir, l’atelier vous explique ce qui doit être fait et pourquoi. Au moment de la restitution, vous savez précisément ce qui a été réalisé sur votre voiture.',
    ],
    finalTitle: 'Besoin d’un entretien ou d’un diagnostic ? Parlons de votre véhicule.',
    finalLead: 'Décrivez votre besoin en deux minutes, ou appelez directement l’atelier : on vous indique la marche à suivre et le créneau le plus adapté.',
  },
  contact: {
    phoneDisplay: '06 03 89 66 77',
    phoneE164: '+33603896677',
  },
  address: {
    street: '22 rue Marcel Dutartre',
    postalCode: '69100',
    city: 'Villeurbanne',
    region: 'Auvergne-Rhône-Alpes',
    country: 'FR',
    // Plus Code QVHG+RX Villeurbanne (centre de la cellule)
    geo: { lat: 45.77956, lng: 4.87744 },
    mapsUrl: 'https://maps.app.goo.gl/6vQL7KtDYEvj64rWA',
    source: maps,
  },
  hours: {
    // Google Maps affiche « 08:01 » le lundi, sans doute une faute de saisie : 08:00 retenu.
    mon: [{ open: '08:00', close: '18:00' }],
    tue: [{ open: '08:00', close: '18:00' }],
    wed: [{ open: '08:00', close: '18:00' }],
    thu: [{ open: '08:00', close: '18:00' }],
    fri: [{ open: '08:00', close: '18:00' }],
    sat: [{ open: '08:00', close: '18:00' }],
    sun: [],
  },
  hoursSource: maps,
  access: {},
  areaServed: ['Villeurbanne', 'Lyon'],
  booking: {
    walkIn: true,
    slots: ['Matin (8 h – 12 h)', 'Après-midi (12 h – 18 h)', 'Indifférent'],
  },
  // Aucun avis repris pour l'instant : la section « Avis clients » est masquée.
  testimonials: [],
  services: [
    { id: 'entretien' },
    { id: 'diagnostic' },
    { id: 'freinage' },
    { id: 'pneumatiques' },
    { id: 'suspension' },
    { id: 'climatisation' },
    { id: 'batterie' },
    { id: 'embrayage' },
    { id: 'distribution' },
    { id: 'echappement' },
  ],
  trust: [
    {
      value: '6 j/7',
      label: 'Ouverture',
      detail: 'Du lundi au samedi de 8 h à 18 h.',
      source: maps,
    },
    {
      value: 'Sans RDV',
      label: 'Accueil',
      detail: 'Le garage vous reçoit avec ou sans rendez-vous.',
    },
    {
      value: '10',
      label: 'Prestations',
      detail: 'De l’entretien courant à la distribution, présentées une à une.',
    },
    {
      value: 'Devis',
      label: 'Avant intervention',
      detail: 'Vous validez le devis avant toute intervention sur le véhicule.',
    },
  ],
  process: [
    {
      title: 'Votre demande',
      text: 'Choisissez la prestation et le créneau qui vous arrange, en ligne ou par téléphone.',
      validated: true,
    },
    {
      title: 'Confirmation',
      text: 'L’atelier vous recontacte pour confirmer le rendez-vous et préciser votre besoin.',
      validated: true,
    },
    {
      title: 'Contrôle & devis',
      text: 'Votre véhicule est examiné ; vous validez le devis avant toute intervention.',
      validated: true,
    },
    {
      title: 'Restitution',
      text: 'On vous explique les travaux réalisés et on vous remet une facture détaillée.',
      validated: true,
    },
  ],
  faq: [
    {
      q: 'Faut-il prendre rendez-vous ?',
      a: 'Le garage accueille avec ou sans rendez-vous. Réserver un créneau reste le meilleur moyen d’être pris en charge à l’heure qui vous convient.',
    },
    {
      q: 'Le formulaire en ligne confirme-t-il mon rendez-vous ?',
      a: 'Non. Il transmet votre demande à l’atelier, qui vous recontacte pour confirmer le créneau. Pour une demande urgente, le plus rapide reste d’appeler le garage.',
    },
    {
      q: 'Ma voiture est sous garantie constructeur : puis-je la faire entretenir ici ?',
      a: 'Oui. La réglementation européenne (règlement UE n° 461/2010) vous permet de faire entretenir votre véhicule chez le réparateur de votre choix sans perdre la garantie constructeur, dès lors que l’entretien suit le programme du constructeur avec des pièces de qualité équivalente.',
    },
    {
      q: 'Un voyant vient de s’allumer, que faire ?',
      a: 'Un voyant rouge impose de vous arrêter dès que possible, en sécurité. Un voyant orange signale une anomalie à faire contrôler rapidement. Le diagnostic électronique permet de lire les codes défaut enregistrés par le calculateur et d’orienter la réparation.',
    },
    {
      q: 'Puis-je obtenir un devis avant l’intervention ?',
      a: 'Oui. Faites votre demande en ligne ou par téléphone ; selon la prestation, l’atelier peut avoir besoin d’examiner le véhicule pour établir un devis précis.',
    },
  ],
  seo: {
    title: 'Auto Plus Villeurbanne · Garage automobile à Villeurbanne',
    description:
      'Auto Plus Villeurbanne, garage automobile au 22 rue Marcel Dutartre (69100) : entretien, freinage, pneus, diagnostic. Ouvert du lundi au samedi, demande de rendez-vous en ligne.',
    keywords: ['site garage automobile', 'site centre auto', 'garage Villeurbanne', 'Auto Plus Villeurbanne'],
  },
  legal: {
    publisherName: 'Auto Plus Villeurbanne',
  },
  launch: {
    // À confirmer avec le garage : prestations, textes (accueil sans RDV, devis…), accès, logo.
    servicesConfirmed: false,
    copyApproved: false,
    accessConfirmed: false,
    brandAssetsApproved: false,
  },
  media: {
    heroVideo: { mp4: '/media/hero-loop.mp4', webm: '/media/hero-loop.webm', poster: '/media/hero-poster.jpg' },
    heroStill: {
      src: '/media/brake-assembly.png',
      alt: 'Disque de frein percé et étrier rouge, rendu 3D',
      width: 2400,
      height: 1800,
    },
    secondary: {
      src: '/media/wheel.png',
      alt: 'Roue complète avec jante, disque et étrier visibles, rendu 3D',
      width: 2400,
      height: 1800,
    },
    workshopPhotos: [],
    illustrativeNotice: 'Proposition de site réalisée par STARTAP pour Auto Plus Villeurbanne. Visuels en rendu 3D.',
  },
};
