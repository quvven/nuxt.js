<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>
<script>
  import PostList from "@/components/post/PostList"
  export default {
    components : {
      PostList,
    },
    data() {
      return {
        // fetchedPosts: []
        // fetchedPosts: [
        //   {
        //     id: 1,
        //     title: "Deneme 1",
        //     subTitle: "Bu bir deneme yazısıdır",
        //     text: "Bu deneme yazısı ilk olacak.",
        //     author: "Ben"
        //   },
        //   {
        //     id: 2,
        //     title: "Deneme 2",
        //     subTitle: "Bu yine bir deneme yazısıdır",
        //     text: "Bu deneme yazısı galiba son olacak.",
        //     author: "Ben"
        //   }
        // ]
      }
    },
    created() {
      // setTimeout(()=>{
      //   this.fetchedPosts = [
      //     {
      //       id: 1,
      //       title: "Deneme 1",
      //       subTitle: "Bu bir deneme yazısıdır",
      //       text: "Bu deneme yazısı ilk olacak.",
      //       author: "Ben"
      //     },
      //     {
      //       id: 2,
      //       title: "Deneme 2",
      //       subTitle: "Bu yine bir deneme yazısıdır",
      //       text: "Bu deneme yazısı galiba son olacak.",
      //       author: "Ben"
      //     }
      //   ]
      // }, 3000);
    },
    asyncData(context, callback) {
      console.log(context);

      setTimeout(()=>{
          callback(null, {
          fetchedPosts = [
            {
              id: 1,
              title: "Deneme 1",
              subTitle: "Bu bir deneme yazısıdır",
              text: "Bu deneme yazısı ilk olacak.",
              author: "Ben"
            },
            {
              id: 2,
              title: "Deneme 2",
              subTitle: "Bu yine bir deneme yazısıdır",
              text: "Bu deneme yazısı galiba son olacak.",
              author: "Ben"
            }
          ]
        });
      }, 3000);
      
    }
  }
</script>
<style scoped></style>
