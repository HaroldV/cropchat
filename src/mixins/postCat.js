const postCat = {
  methods: {
    postCat (catUrl, title) {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': catUrl,
          'comment': title,
          'info': title,
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.go(-1)
      )
    }
  }
}

export default postCat
