<template>
  <nav class="menu" ref="menu">
    <ul>
      <li class="selected"><a href="#">Home</a></li>
      <li class="selected"><a href="#">About</a></li>
      <li class="selected"><a href="#">Contact</a></li>
      <li v-text="title"></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  ul {
    list-style: none;
    background: rgb(51, 51, 51);
    display: flex;
    align-items: center;
    color: white;
    li {
      padding: 10px;
      cursor: pointer;
      &.selected {
        transition: ease-in-out 220ms;
        a {
          color: white;
          display: block;
          text-decoration: none;
        }
        &:hover {
          background: cadetblue;
          color: white;
          transition: ease-in-out 220ms;
        }
      }
    }
  }
}
</style>
