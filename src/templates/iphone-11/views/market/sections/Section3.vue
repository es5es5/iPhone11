<template>
  <div class="section3">
    <ul class="accordion-title_wrap">
      <li class="accordion-title" @click="question.show = !question.show">{{ question.title }}</li>
      <transition-group name="list">
        <ul v-show="question.show" class="accordion-content_wrap" v-for="(item, index) in question.content" :key="`question_${index}`">
          <li class="accordion-subTitle" @click="item.show = !item.show">
            <p>{{ item.title }}</p>
          </li>
          <transition name="list">
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
          content: '돈 많이 벌려고 합니다. 우선 입금하세요.',
          show: false
        }, {
          title: '이거 정말 정품 맞나요?',
          content: '사진은 정품 모델입니다.',
          show: false
        }, {
          title: '누가 만든거에요?',
          content: 'Made by Louis.',
          show: false
        }, {
          title: '전화가 되긴 되나요?',
          content: '당연히 안됩니다.',
          show: false
        }],
        show: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section3 {
  margin: 0 auto;
  max-width: 980px;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
}

// transition
.list-enter-active { transition: all 1.5s; }
.list-leave-active { transition: all .3s; }
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
  transition: all .5s;
}

.accordion-title_wrap:hover { cursor: pointer; }

.accordion-title {
  padding: 2.5rem 2rem 1.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
}

.accordion-content_wrap {
  margin: 1rem 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
}

.accordion-subTitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: .5rem;
}
</style>
