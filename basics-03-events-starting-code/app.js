const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      // fullName: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      setTimeout(() => {
        this.counter = 0;
      }, 2000);
      if (value > 50) this.counter = 0;
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + 'Woong';
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log('Running');
      if (this.name === '' || this.lastName === '') return '';
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      console.log('Running');
      if (this.name === '') return '';
      return this.name + ' ' + 'An';
    },
  },
});

app.mount('#events');
