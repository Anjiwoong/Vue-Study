const app = Vue.createApp({
  data() {
    return {
      myName: 'jiwoong',
      myAge: 28,
      imgLink:
        'https://ppss.kr/wp-content/uploads/2017/08/MC_SightWords-Some.jpg',
    };
  },
  methods: {
    addAge() {
      return this.myAge + 5;
    },
    randomNumber() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 0;
      } else {
        return 1;
      }
    },
  },
});

app.mount('#assignment');
