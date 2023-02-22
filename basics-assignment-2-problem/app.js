const app = Vue.createApp({
  data() {
    return {
      myName: 'jiwoong',
      user: '',
      confirmedName: '',
    };
  },
  methods: {
    showAlert() {
      alert('hihi');
    },
    setUser(e) {
      this.user = e.target.value;
    },
    confirmInput() {
      this.confirmedName = this.user;
    },
  },
});

app.mount('#assignment');
