export class Home {
  tweets = [];

  constructor() {
    this.tweets = [
      {
        avatar: 'https://pbs.twimg.com/profile_images/615392662233808896/EtxjSSKk_bigger.jpg',
        name: 'TechCrunch',
        handle: '@TechCrunch',
        text: 'Naval Ravikant on China money into Silicon Valley: This trickle could become a tsunami'
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/1332650890/strayfromthepath_flagtee_artworkslide_bigger.jpg',
        name: 'Stray From The Path',
        handle: '@strayfromdapath',
        text: 'This week has been such shit. The only thing that\'s made me happy is the impending STYG/Expire/KL tour and Shinsuke Nakamura entrance at NXT'
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/668902554957316096/IpjBGyjC_bigger.jpg',
        name: 'Chris Sacca',
        handle: '@sacca',
        text: 'I want a sports channel that is only highlights. 100% plays of the day/week/month. No shows. No narrative. Who\'s with me?'
      }
    ];
  }
}
