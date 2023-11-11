import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  constructor() {}
  public data = ['data 1', 'data 2'];
  public animalTree = of({
    Animal: {
      Vertebrate: {
        Mammal: {
          Primate: ['Human', 'Chimpanzee', 'Gorilla'],
          Carnivore: ['Lion', 'Tiger', 'Bear'],
          Ungulate: ['Horse', 'Cow', 'Sheep'],
        },
        Bird: {
          Passerine: ['Sparrow', 'Robin', 'Crow'],
          Raptor: ['Eagle', 'Hawk', 'Owl'],
          Waterfowl: ['Duck', 'Goose', 'Swan'],
        },
        Reptile: {
          Lizard: ['Gecko', 'Iguana', 'Chameleon'],
          Snake: ['Python', 'Cobra', 'Rattlesnake'],
          Turtle: ['Sea turtle', 'Box turtle', 'Snapping turtle'],
        },
      },
      Invertebrate: {
        Arthropod: {
          Insect: {
            Beetle: ['Ladybug', 'Firefly', 'Stag beetle'],
            Butterfly: ['Monarch', 'Swallowtail', 'Blue morpho'],
            Ant: ['Fire ant', 'Leafcutter ant', 'Army ant'],
          },
          Arachnid: {
            Spider: ['Tarantula', 'Black widow', 'Jumping spider'],
            Scorpion: [
              'Emperor scorpion',
              'Deathstalker scorpion',
              'Fat-tailed scorpion',
            ],
            Tick: ['Deer tick', 'Dog tick', 'Lone star tick'],
          },
          Crustacean: {
            Crab: ['Blue crab', 'King crab', 'Hermit crab'],
            Lobster: ['American lobster', 'Spiny lobster', 'Rock lobster'],
            Shrimp: ['Tiger shrimp', 'Ghost shrimp', 'Mantis shrimp'],
          },
        },
        Mollusk: {
          Gastropod: {
            Snail: ['Garden snail', 'Cone snail', 'Sea snail'],
            Slug: ['Banana slug', 'Leopard slug', 'Sea slug'],
            Nudibranch: ['Spanish dancer', 'Blue dragon', 'Sea bunny'],
          },
          Bivalve: {
            Clam: ['Quahog', 'Razor clam', 'Giant clam'],
            Oyster: ['Pacific oyster', 'Eastern oyster', 'Pearl oyster'],
            Mussel: ['Blue mussel', 'Zebra mussel', 'Freshwater mussel'],
          },
          Cephalopod: {
            Octopus: [
              'Common octopus',
              'Giant Pacific octopus',
              'Mimic octopus',
            ],
            Squid: ['Giant squid', 'Colossal squid', 'Vampire squid'],
            Cuttlefish: [
              'Common cuttlefish',
              'Flamboyant cuttlefish',
              'Chambered nautilus',
            ],
          },
        },
      },
    },
  });
}
