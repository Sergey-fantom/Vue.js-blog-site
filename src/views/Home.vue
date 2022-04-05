<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Больше статей на тему</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account today</h2>
        <router-link class="router-button" to="#">Register for FireBlogs <Arrow class="arrow arrow-light"/></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost';
import BlogCard from '../components/BlogCard.vue';
import Arrow from '../assets/Icons/arrow-right-light.svg';



export default {
  name: "Home",
  components: {
    BlogPost, BlogCard, Arrow
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: "здесь короткий анонос текста в главном экране",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "Заголовк фильтра номер 1",
          blogHTML: "Заголовк статьи блога номер 1",
          blogCoverPhotos: "beautiful-stories",
        },
        {
          title: "Заголовк фильтра номер 2",
          blogHTML: "Заголовк статьи блога номер 2",
          blogCoverPhotos: "designed-for-everyone",
        }
      ],      
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>

<style lang="scss" scoped>
  .blog-card-wrap{
    h3{
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
  .updates{
    .container{
      padding: 10px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: 800px) {
        height: 125px 25px;
        flex-direction: row;
      }
      .router-button{
        display: flex;
        font-size: 14px;
        text-decoration: none;
        @media screen and (min-width: 800px) {
          margin-left: auto;
        }
      }
      h2{
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        @media screen and (min-width: 800px) {
          font-size: 40px;
          text-align: initial;
        }
      }
    }
  }
</style>
