<template>
<header>
  <nav class="container">
    <div class="branding">
      <router-link class="header" :to="{name: 'Home'}">  Fireblog      
      </router-link>
    </div>
    <div class="nav-link" v-show="!mobile">
      <ul>
        <router-link class="link" :to="{name: 'Home'}">Home</router-link>
        <router-link class="link" :to="{name: 'Blogs'}">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" :to="{name: 'Login'}">Login/Register</router-link>
      </ul>
    </div>
  </nav>
  <menuIcon @click="tooglemobileNav" class="menu-icon" v-show="mobile" />
  <transition name="mobile-nav">
    <ul class="mobile-nav" v-show="mobileNav">
      <router-link class="link" :to="{name: 'Home'}">Home</router-link>
      <router-link class="link" :to="{name: 'Blogs'}">Blogs</router-link>
      <router-link class="link" to="#">Create Post</router-link>
      <router-link class="link" :to="{name: 'Login'}">Login/Register</router-link>
    </ul>
  </transition>
</header>
</template>

<script>
  import menuIcon from '../assets/Icons/bars-regular.svg';
  

  export default {
    name: 'navigation',
    components: {
      menuIcon
    },
    data(){
      return {
        mobile: null,
        mobileNav: null,
        windowWidth: null
      }
    },
    created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    methods: {
      checkScreen(){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 750){
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      },
      tooglemobileNav (){
        this.mobileNav = !this.mobileNav;
      }
    }
  }
</script>

<style lang="scss" scoped>
header{
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1);
  z-index: 99;
  .link{
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover{
      color: #1eb;
    }
  }
  nav{
    display: flex;
    padding: 25px 0;
    .branding{
      display: flex;
      align-items: center;      
    }
  }
  .menu-icon{
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav{
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    .link{
      padding: 25px;
    }
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: all 1s ease;
}
.mobile-nav-enter{
  transform: translateX(-250px);
}
.mobile-nav-enter-to{
  transform: translateX(0px);
}
.mobile-nav-leave-to{
  transform: translateX(-250px);
}
</style>