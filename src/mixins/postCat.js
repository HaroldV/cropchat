const postCat = {
  methods: {
    postCat (catUrl, title) {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': this.catUrl,
          'title': this.title,
          'created': -1 * new Date().getTime()
        }
      ).then(
        this.$router.go(-1)
      )
    }
  }
}

export default postCat
