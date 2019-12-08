<template>
  <div class="section3">
    <ul class="accordion-title_wrap">
      <li class="accordion-title" @click="question.show = !question.show">{{ question.title }}</li>
      <transition-group name="fade">
        <ul v-show="question.show" class="accordion-content_wrap" v-for="(item, index) in question.content" :key="`question_${index}`">
          <li class="accordion-subTitle" @click="item.show = !item.show">
            <p>{{ item.title }}</p>
          </li>
          <transition name="fade">
            <li class="accordion-content" v-show="item.show">
              <p>{{ item.content }}</p>
            </li>
          </transition>
        </ul>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Section3',
  data () {
    return {
      question: {
        title: '자주묻는 질문',
        content: [{
          title: '왜 이렇게 비싸요?',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam.',
          show: false
        }, {
          title: '이거 정말 정품 맞나요?',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam.',
          show: false
        }, {
          title: '누가 만든거에요?',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam.',
          show: false
        }, {
          title: '전화가 되긴 되나요?',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam.',
          show: false
        }],
        show: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.accordion-title_wrap:hover { cursor: pointer; }

.accordion-title {
  padding: 2.5rem 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
}

.accordion-content_wrap {
  margin: 1rem 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
}

.accordion-subTitle {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
