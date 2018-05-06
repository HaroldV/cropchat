<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.catUrl" alt="">
        </div>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
        <input type="text" id="username" v-model="title" class="mdl-textfield__input">
        <label for="username" class="mdl-textfield__label">Describeme</label>
      </div>
      <div class="actions">
        <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          POST A CAT
        </a>
      </div>
    </div>
  </form>
</template>

<script>
import parse from 'xml-parser'
import postCat from '../mixins/postCat'

export default {
  mixins: [ postCat ],
  data () {
    return {
      'catUrl': null,
      'title': ''
    }
  },
  mounted () {
    this.$http.get('https://thecatapi.com/api/images/get?format=xml&result_per=1').then(response => {
      const catUrl = this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
      let img = new Image()
      img.onload = () => { this.catUrl = catUrl }
      img.src = catUrl
    })
  },
  methods: {

    postCat () {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': this.catUrl,
          'comment': this.title,
          'info': 'Posted by HaroldV on Tuesday',
          'created_at': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
    }

  }
}
</script>
<style scoped>
  .waiting{
    padding:10px;
    color:#555;
  }
</style>
